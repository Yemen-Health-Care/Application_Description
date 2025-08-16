/**
 * Asceama Healthcare System - Components JavaScript
 * Reusable UI Components and Utility Functions
 */

'use strict';

// Components Module
const AsceamaComponents = {
    // Initialize Components
    init() {
        this.initializeTooltips();
        this.initializeDropdowns();
        this.initializeModals();
        this.initializeTabs();
        this.initializeAccordions();
        this.initializeProgressBars();
        console.log('🧩 Components initialized');
    },

    // Initialize Tooltips
    initializeTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        tooltipElements.forEach(element => {
            this.createTooltip(element);
        });
    },

    // Create Tooltip
    createTooltip(element) {
        let tooltip;

        element.addEventListener('mouseenter', () => {
            const text = element.getAttribute('data-tooltip');
            const position = element.getAttribute('data-tooltip-position') || 'top';

            tooltip = document.createElement('div');
            tooltip.className = `tooltip tooltip-${position}`;
            tooltip.textContent = text;
            document.body.appendChild(tooltip);

            const rect = element.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();

            let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
            let top;

            switch (position) {
                case 'bottom':
                    top = rect.bottom + 8;
                    break;
                case 'left':
                    top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
                    left = rect.left - tooltipRect.width - 8;
                    break;
                case 'right':
                    top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
                    left = rect.right + 8;
                    break;
                default: // top
                    top = rect.top - tooltipRect.height - 8;
            }

            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
            tooltip.classList.add('show');
        });

        element.addEventListener('mouseleave', () => {
            if (tooltip) {
                tooltip.remove();
                tooltip = null;
            }
        });
    },

    // Initialize Dropdowns
    initializeDropdowns() {
        const dropdownToggles = document.querySelectorAll('[data-dropdown-toggle]');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                const targetId = toggle.getAttribute('data-dropdown-toggle');
                this.toggleDropdown(targetId);
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            this.closeAllDropdowns();
        });
    },

    // Toggle Dropdown
    toggleDropdown(targetId) {
        const dropdown = document.getElementById(targetId);
        if (dropdown) {
            const isActive = dropdown.classList.contains('active');
            this.closeAllDropdowns();
            if (!isActive) {
                dropdown.classList.add('active');
            }
        }
    },

    // Close All Dropdowns
    closeAllDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown, .notifications-dropdown, .profile-dropdown, .action-menu-dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    },

    // Initialize Modals
    initializeModals() {
        const modalTriggers = document.querySelectorAll('[data-modal-toggle]');
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const targetId = trigger.getAttribute('data-modal-toggle');
                this.toggleModal(targetId);
            });
        });

        // Close modal when clicking on overlay
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.closeModal(e.target.id);
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    },

    // Toggle Modal
    toggleModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            const isActive = modal.classList.contains('active');
            if (isActive) {
                this.closeModal(modalId);
            } else {
                this.openModal(modalId);
            }
        }
    },

    // Open Modal
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Focus management
            const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (firstFocusable) {
                firstFocusable.focus();
            }
        }
    },

    // Close Modal
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    // Close All Modals
    closeAllModals() {
        const modals = document.querySelectorAll('.modal-overlay.active');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    },

    // Initialize Tabs
    initializeTabs() {
        const tabButtons = document.querySelectorAll('[data-tab-target]');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-tab-target');
                const tabGroup = button.closest('[data-tab-group]');
                this.switchTab(tabGroup, targetId);
            });
        });
    },

    // Switch Tab
    switchTab(tabGroup, targetId) {
        if (!tabGroup) return;

        // Remove active class from all buttons and panels in this group
        const buttons = tabGroup.querySelectorAll('[data-tab-target]');
        const panels = tabGroup.querySelectorAll('[data-tab-panel]');

        buttons.forEach(btn => btn.classList.remove('active'));
        panels.forEach(panel => panel.classList.remove('active'));

        // Add active class to clicked button and target panel
        const activeButton = tabGroup.querySelector(`[data-tab-target="${targetId}"]`);
        const activePanel = tabGroup.querySelector(`[data-tab-panel="${targetId}"]`);

        if (activeButton) activeButton.classList.add('active');
        if (activePanel) activePanel.classList.add('active');
    },

    // Initialize Accordions
    initializeAccordions() {
        const accordionHeaders = document.querySelectorAll('[data-accordion-toggle]');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const targetId = header.getAttribute('data-accordion-toggle');
                this.toggleAccordion(targetId);
            });
        });
    },

    // Toggle Accordion
    toggleAccordion(targetId) {
        const content = document.getElementById(targetId);
        const header = document.querySelector(`[data-accordion-toggle="${targetId}"]`);
        
        if (content && header) {
            const isOpen = content.classList.contains('active');
            
            if (isOpen) {
                content.classList.remove('active');
                header.classList.remove('active');
                content.style.maxHeight = null;
            } else {
                content.classList.add('active');
                header.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        }
    },

    // Initialize Progress Bars
    initializeProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            this.animateProgressBar(bar);
        });
    },

    // Animate Progress Bar
    animateProgressBar(progressBar) {
        const fill = progressBar.querySelector('.progress-fill');
        const percentage = progressBar.getAttribute('data-percentage') || 0;
        
        if (fill) {
            // Animate from 0 to target percentage
            let current = 0;
            const increment = percentage / 50; // 50 steps for smooth animation
            
            const animate = () => {
                if (current < percentage) {
                    current += increment;
                    fill.style.width = `${Math.min(current, percentage)}%`;
                    requestAnimationFrame(animate);
                }
            };
            
            // Start animation when element is in viewport
            if (this.isInViewport(progressBar)) {
                animate();
            } else {
                // Wait for element to come into view
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            animate();
                            observer.unobserve(entry.target);
                        }
                    });
                });
                observer.observe(progressBar);
            }
        }
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Toast Notifications
    showToast(message, type = 'info', duration = 5000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const iconMap = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        toast.innerHTML = `
            <div class="toast-content">
                <i class="${iconMap[type] || iconMap.info}"></i>
                <span class="toast-message">${message}</span>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Add styles if not already present
        if (!document.querySelector('#toast-styles')) {
            const style = document.createElement('style');
            style.id = 'toast-styles';
            style.textContent = `
                .toast {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    min-width: 300px;
                    max-width: 500px;
                    background: white;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-lg);
                    z-index: 10000;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                    border-left: 4px solid var(--primary-color);
                }
                
                .toast.toast-success { border-left-color: var(--success); }
                .toast.toast-error { border-left-color: var(--error); }
                .toast.toast-warning { border-left-color: var(--warning); }
                .toast.toast-info { border-left-color: var(--info); }
                
                .toast.show { transform: translateX(0); }
                
                .toast-content {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-3);
                    padding: var(--spacing-4);
                }
                
                .toast-content i:first-child {
                    font-size: var(--font-size-lg);
                }
                
                .toast.toast-success i:first-child { color: var(--success); }
                .toast.toast-error i:first-child { color: var(--error); }
                .toast.toast-warning i:first-child { color: var(--warning); }
                .toast.toast-info i:first-child { color: var(--info); }
                
                .toast-message {
                    flex: 1;
                    color: var(--text-primary);
                    font-weight: var(--font-weight-medium);
                }
                
                .toast-close {
                    background: none;
                    border: none;
                    color: var(--text-tertiary);
                    cursor: pointer;
                    padding: var(--spacing-1);
                    border-radius: var(--radius-sm);
                    transition: all var(--transition-fast);
                }
                
                .toast-close:hover {
                    background: var(--gray-100);
                    color: var(--text-primary);
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Auto remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
        
        return toast;
    },

    // Loading Overlay
    showLoading(container = document.body, message = 'جاري التحميل...') {
        const loadingId = 'loading-' + Date.now();
        const loading = document.createElement('div');
        loading.id = loadingId;
        loading.className = 'loading-overlay';
        loading.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <p class="loading-message">${message}</p>
            </div>
        `;
        
        // Add styles if not already present
        if (!document.querySelector('#loading-styles')) {
            const style = document.createElement('style');
            style.id = 'loading-styles';
            style.textContent = `
                .loading-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    backdrop-filter: blur(2px);
                }
                
                .loading-content {
                    text-align: center;
                    color: var(--text-primary);
                }
                
                .loading-message {
                    margin-top: var(--spacing-4);
                    font-weight: var(--font-weight-medium);
                    color: var(--text-secondary);
                }
            `;
            document.head.appendChild(style);
        }
        
        if (container !== document.body) {
            container.style.position = 'relative';
        }
        
        container.appendChild(loading);
        return loadingId;
    },

    // Hide Loading
    hideLoading(loadingId) {
        const loading = document.getElementById(loadingId);
        if (loading) {
            loading.remove();
        }
    },

    // Confirmation Dialog
    showConfirm(message, title = 'تأكيد', options = {}) {
        return new Promise((resolve) => {
            const modal = document.createElement('div');
            modal.className = 'modal-overlay active';
            modal.innerHTML = `
                <div class="modal">
                    <div class="modal-header">
                        <h3 class="modal-title">${title}</h3>
                    </div>
                    <div class="modal-body">
                        <p>${message}</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-outline confirm-cancel">
                            ${options.cancelText || 'إلغاء'}
                        </button>
                        <button class="btn btn-primary confirm-ok">
                            ${options.confirmText || 'تأكيد'}
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            const cancelBtn = modal.querySelector('.confirm-cancel');
            const okBtn = modal.querySelector('.confirm-ok');
            
            const cleanup = () => {
                modal.remove();
                document.body.style.overflow = '';
            };
            
            cancelBtn.addEventListener('click', () => {
                cleanup();
                resolve(false);
            });
            
            okBtn.addEventListener('click', () => {
                cleanup();
                resolve(true);
            });
            
            // Focus on OK button
            okBtn.focus();
        });
    },

    // Form Validation
    validateForm(form) {
        const errors = [];
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            const value = input.value.trim();
            const isRequired = input.hasAttribute('required');
            const type = input.type;
            
            // Clear previous errors
            this.clearFieldError(input);
            
            // Required validation
            if (isRequired && !value) {
                const fieldName = input.getAttribute('data-field-name') || input.name || 'هذا الحقل';
                errors.push({ field: input, message: `${fieldName} مطلوب` });
            }
            
            // Type-specific validation
            if (value) {
                switch (type) {
                    case 'email':
                        if (!this.isValidEmail(value)) {
                            errors.push({ field: input, message: 'البريد الإلكتروني غير صحيح' });
                        }
                        break;
                    case 'tel':
                        if (!this.isValidPhone(value)) {
                            errors.push({ field: input, message: 'رقم الهاتف غير صحيح' });
                        }
                        break;
                    case 'number':
                        const min = input.getAttribute('min');
                        const max = input.getAttribute('max');
                        const numValue = parseFloat(value);
                        
                        if (min && numValue < parseFloat(min)) {
                            errors.push({ field: input, message: `القيمة يجب أن تكون ${min} أو أكثر` });
                        }
                        if (max && numValue > parseFloat(max)) {
                            errors.push({ field: input, message: `القيمة يجب أن تكون ${max} أو أقل` });
                        }
                        break;
                }
            }
            
            // Custom validation patterns
            const pattern = input.getAttribute('pattern');
            if (pattern && value && !new RegExp(pattern).test(value)) {
                const patternMessage = input.getAttribute('data-pattern-message') || 'تنسيق غير صحيح';
                errors.push({ field: input, message: patternMessage });
            }
        });
        
        // Display errors
        errors.forEach(error => {
            this.showFieldError(error.field, error.message);
        });
        
        return errors.length === 0;
    },

    // Show Field Error
    showFieldError(field, message) {
        const formGroup = field.closest('.form-group');
        if (formGroup) {
            formGroup.classList.add('error');
            
            // Remove existing error
            const existingError = formGroup.querySelector('.form-error');
            if (existingError) {
                existingError.remove();
            }
            
            // Add new error
            const errorElement = document.createElement('div');
            errorElement.className = 'form-error';
            errorElement.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
            formGroup.appendChild(errorElement);
        }
    },

    // Clear Field Error
    clearFieldError(field) {
        const formGroup = field.closest('.form-group');
        if (formGroup) {
            formGroup.classList.remove('error');
            const errorElement = formGroup.querySelector('.form-error');
            if (errorElement) {
                errorElement.remove();
            }
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

    // Format Numbers
    formatNumber(number, locale = 'ar-SA') {
        return new Intl.NumberFormat(locale).format(number);
    },

    // Format Currency
    formatCurrency(amount, currency = 'SAR', locale = 'ar-SA') {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        }).format(amount);
    },

    // Format Date
    formatDate(date, options = {}, locale = 'ar-SA') {
        const defaultOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        
        return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(new Date(date));
    },

    // Copy to Clipboard
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showToast('تم النسخ بنجاح', 'success', 2000);
            return true;
        } catch (err) {
            console.error('Failed to copy: ', err);
            this.showToast('فشل في النسخ', 'error', 2000);
            return false;
        }
    },

    // Debounce Function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle Function
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Auto-initialize components
document.addEventListener('DOMContentLoaded', () => {
    AsceamaComponents.init();
});

// Global access
window.AsceamaComponents = AsceamaComponents;

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AsceamaComponents;
}