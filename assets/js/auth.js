/**
 * Asceama Healthcare System - Authentication JavaScript
 * Handles login, registration, password recovery, and form validation
 */

'use strict';

// Authentication Module
const AsceamaAuth = {
    // Configuration
    config: {
        apiUrl: 'https://api.asceama.com/auth',
        passwordMinLength: 8,
        maxLoginAttempts: 5,
        lockoutDuration: 15 * 60 * 1000, // 15 minutes
        otpExpiryTime: 5 * 60 * 1000 // 5 minutes
    },

    // State
    state: {
        currentForm: 'login',
        loginAttempts: 0,
        isLocked: false,
        otpSent: false,
        otpExpiry: null
    },

    // Initialize Authentication
    init() {
        this.setupEventListeners();
        this.loadSavedState();
        this.checkLockoutStatus();
    },

    // Setup Event Listeners
    setupEventListeners() {
        // Login form
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Password toggle buttons
        document.querySelectorAll('.password-toggle').forEach(button => {
            button.addEventListener('click', (e) => this.togglePassword(e.target));
        });

        // Social login buttons
        document.querySelectorAll('.btn-social').forEach(button => {
            button.addEventListener('click', (e) => this.handleSocialLogin(e));
        });

        // Form switching
        this.setupFormSwitching();
    },

    // Setup Form Switching
    setupFormSwitching() {
        // Global functions for onclick handlers
        window.showPage = (pageId) => this.showPage(pageId);
        window.togglePassword = (fieldId) => this.togglePasswordField(fieldId);
    },

    // Load Saved State
    loadSavedState() {
        const savedAttempts = localStorage.getItem('asceama_login_attempts');
        if (savedAttempts) {
            this.state.loginAttempts = parseInt(savedAttempts);
        }

        const lockoutTime = localStorage.getItem('asceama_lockout_time');
        if (lockoutTime) {
            const lockoutExpiry = parseInt(lockoutTime);
            if (Date.now() < lockoutExpiry) {
                this.state.isLocked = true;
                this.showLockoutMessage(lockoutExpiry);
            } else {
                // Clear expired lockout
                localStorage.removeItem('asceama_lockout_time');
                localStorage.removeItem('asceama_login_attempts');
                this.state.loginAttempts = 0;
            }
        }
    },

    // Check Lockout Status
    checkLockoutStatus() {
        if (this.state.isLocked) {
            this.disableLoginForm();
        }
    },

    // Handle Login
    async handleLogin(e) {
        e.preventDefault();

        if (this.state.isLocked) {
            this.showError('الحساب مقفل مؤقتاً. يرجى المحاولة لاحقاً.');
            return;
        }

        const form = e.target;
        const formData = new FormData(form);
        const credentials = {
            email: formData.get('email'),
            password: formData.get('password'),
            remember: formData.get('remember') === 'on'
        };

        // Validate form
        if (!this.validateLoginForm(credentials)) {
            return;
        }

        // Show loading state
        this.setFormLoading(form, true);

        try {
            // Simulate API call
            const result = await this.authenticateUser(credentials);
            
            if (result.success) {
                this.handleLoginSuccess(result.user, credentials.remember);
            } else {
                this.handleLoginError(result.error);
            }
        } catch (error) {
            this.handleLoginError('حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.');
        } finally {
            this.setFormLoading(form, false);
        }
    },

    // Validate Login Form
    validateLoginForm(credentials) {
        let isValid = true;

        // Clear previous errors
        this.clearFormErrors();

        // Email validation
        if (!credentials.email) {
            this.showFieldError('email', 'البريد الإلكتروني مطلوب');
            isValid = false;
        } else if (!this.isValidEmail(credentials.email) && !this.isValidPhone(credentials.email)) {
            this.showFieldError('email', 'البريد الإلكتروني أو رقم الهاتف غير صحيح');
            isValid = false;
        }

        // Password validation
        if (!credentials.password) {
            this.showFieldError('password', 'كلمة المرور مطلوبة');
            isValid = false;
        } else if (credentials.password.length < this.config.passwordMinLength) {
            this.showFieldError('password', `كلمة المرور يجب أن تكون ${this.config.passwordMinLength} أحرف على الأقل`);
            isValid = false;
        }

        return isValid;
    },

    // Authenticate User (Simulated)
    async authenticateUser(credentials) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // For demo purposes, accept specific credentials
        if (credentials.email === 'admin@asceama.com' && credentials.password === 'password123') {
            return {
                success: true,
                user: {
                    id: 1,
                    name: 'أحمد محمد',
                    email: 'admin@asceama.com',
                    role: 'patient',
                    avatar: 'assets/images/default-avatar.png'
                }
            };
        } else {
            // Simulate failed login
            return {
                success: false,
                error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
            };
        }
    },

    // Handle Login Success
    handleLoginSuccess(user, remember) {
        // Reset login attempts
        this.state.loginAttempts = 0;
        localStorage.removeItem('asceama_login_attempts');
        localStorage.removeItem('asceama_lockout_time');

        // Save user session
        if (remember) {
            localStorage.setItem('asceama_user', JSON.stringify(user));
        } else {
            sessionStorage.setItem('asceama_user', JSON.stringify(user));
        }

        // Update global app state
        if (window.AsceamaApp) {
            window.AsceamaApp.state.currentUser = user;
            window.AsceamaApp.showDashboard();
        }

        // Show success message
        this.showSuccess('تم تسجيل الدخول بنجاح');
    },

    // Handle Login Error
    handleLoginError(error) {
        this.state.loginAttempts++;
        localStorage.setItem('asceama_login_attempts', this.state.loginAttempts.toString());

        if (this.state.loginAttempts >= this.config.maxLoginAttempts) {
            this.lockAccount();
        } else {
            const remainingAttempts = this.config.maxLoginAttempts - this.state.loginAttempts;
            this.showError(`${error}. المحاولات المتبقية: ${remainingAttempts}`);
        }
    },

    // Lock Account
    lockAccount() {
        this.state.isLocked = true;
        const lockoutExpiry = Date.now() + this.config.lockoutDuration;
        localStorage.setItem('asceama_lockout_time', lockoutExpiry.toString());
        
        this.disableLoginForm();
        this.showLockoutMessage(lockoutExpiry);
    },

    // Disable Login Form
    disableLoginForm() {
        const form = document.getElementById('login-form');
        if (form) {
            const inputs = form.querySelectorAll('input, button');
            inputs.forEach(input => {
                input.disabled = true;
            });
        }
    },

    // Show Lockout Message
    showLockoutMessage(expiry) {
        const remainingTime = Math.ceil((expiry - Date.now()) / 60000);
        this.showError(`تم قفل الحساب مؤقتاً لمدة ${remainingTime} دقيقة بسبب المحاولات الخاطئة المتكررة.`);
        
        // Set timer to re-enable form
        setTimeout(() => {
            this.unlockAccount();
        }, expiry - Date.now());
    },

    // Unlock Account
    unlockAccount() {
        this.state.isLocked = false;
        this.state.loginAttempts = 0;
        localStorage.removeItem('asceama_lockout_time');
        localStorage.removeItem('asceama_login_attempts');

        const form = document.getElementById('login-form');
        if (form) {
            const inputs = form.querySelectorAll('input, button');
            inputs.forEach(input => {
                input.disabled = false;
            });
        }

        this.showSuccess('تم إلغاء قفل الحساب. يمكنك المحاولة مرة أخرى.');
    },

    // Toggle Password Visibility
    togglePasswordField(fieldId) {
        const field = document.getElementById(fieldId);
        const toggleBtn = field?.parentElement.querySelector('.password-toggle');
        
        if (field && toggleBtn) {
            const isPassword = field.type === 'password';
            field.type = isPassword ? 'text' : 'password';
            
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                icon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
            }
        }
    },

    // Handle Social Login
    handleSocialLogin(e) {
        e.preventDefault();
        const provider = e.currentTarget.classList.contains('btn-google') ? 'google' : 'apple';
        
        // Show loading state
        this.setButtonLoading(e.currentTarget, true);
        
        // Simulate social login
        setTimeout(() => {
            this.setButtonLoading(e.currentTarget, false);
            this.showError(`تسجيل الدخول عبر ${provider === 'google' ? 'Google' : 'Apple'} غير متاح حالياً`);
        }, 1000);
    },

    // Show Page
    showPage(pageId) {
        // Hide all auth pages
        document.querySelectorAll('.auth-page').forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            this.state.currentForm = pageId.replace('-page', '');
        }
    },

    // Form Loading State
    setFormLoading(form, isLoading) {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            this.setButtonLoading(submitBtn, isLoading);
        }
    },

    // Button Loading State
    setButtonLoading(button, isLoading) {
        if (isLoading) {
            button.classList.add('loading');
            button.disabled = true;
        } else {
            button.classList.remove('loading');
            button.disabled = false;
        }
    },

    // Validation Helpers
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    },

    // Error Handling
    showFieldError(fieldName, message) {
        const field = document.getElementById(fieldName);
        const formGroup = field?.closest('.form-group');
        
        if (formGroup) {
            formGroup.classList.add('error');
            
            // Remove existing error message
            const existingError = formGroup.querySelector('.form-message');
            if (existingError) {
                existingError.remove();
            }
            
            // Add new error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'form-message error';
            errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
            formGroup.appendChild(errorDiv);
        }
    },

    showError(message) {
        this.showMessage(message, 'error');
    },

    showSuccess(message) {
        this.showMessage(message, 'success');
    },

    showMessage(message, type) {
        // Create or update notification
        const notification = this.createNotification(message, type);
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    },

    createNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 20px;
            background: ${type === 'success' ? 'var(--success)' : 'var(--error)'};
            color: white;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 8px;
        `;
        
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            ${message}
        `;
        
        // Add show class styles
        const style = document.createElement('style');
        style.textContent = `
            .notification.show {
                transform: translateX(0) !important;
            }
        `;
        document.head.appendChild(style);
        
        return notification;
    },

    clearFormErrors() {
        document.querySelectorAll('.form-group.error').forEach(group => {
            group.classList.remove('error');
            const errorMsg = group.querySelector('.form-message.error');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    }
};

// Initialize authentication when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    AsceamaAuth.init();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AsceamaAuth;
}