/**
 * Asceama Healthcare System - Main JavaScript
 * Modern, Responsive Healthcare Management Application
 */

'use strict';

// Global Application Object
const AsceamaApp = {
    // Application State
    state: {
        currentUser: null,
        currentPage: 'dashboard',
        sidebarCollapsed: false,
        isMobile: false,
        notifications: [],
        darkMode: false,
        isRTL: true
    },

    // DOM Elements Cache
    elements: {
        loader: null,
        app: null,
        authContainer: null,
        dashboardContainer: null,
        sidebar: null,
        mainContent: null,
        pageContent: null
    },

    // Configuration
    config: {
        apiUrl: 'https://api.asceama.com',
        version: '1.0.0',
        debug: true,
        animationDuration: 300
    },

    // Initialize Application
    init() {
        console.log('🏥 Asceama Healthcare System v' + this.config.version);
        
        // Cache DOM elements
        this.cacheElements();
        
        // Check device type
        this.checkDevice();
        
        // Initialize app state
        this.initializeState();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Initialize themes
        this.initializeTheme();
        
        // Show loader and start app
        this.showLoader();
        
        // Simulate loading and show app
        setTimeout(() => {
            this.hideLoader();
            this.showApp();
        }, 2000);
    },

    // Cache DOM Elements
    cacheElements() {
        this.elements = {
            loader: document.getElementById('loader'),
            app: document.getElementById('app'),
            authContainer: document.getElementById('auth-container'),
            dashboardContainer: document.getElementById('dashboard-container'),
            sidebar: document.getElementById('sidebar'),
            mainContent: document.getElementById('main-content'),
            pageContent: document.getElementById('page-content'),
            sidebarToggle: document.querySelector('.sidebar-toggle'),
            mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
            notificationBtn: document.querySelector('.notification-btn'),
            notificationsDropdown: document.getElementById('notifications-dropdown'),
            profileBtn: document.querySelector('.profile-btn'),
            profileDropdown: document.getElementById('profile-dropdown')
        };
    },

    // Check Device Type
    checkDevice() {
        this.state.isMobile = window.innerWidth <= 768;
        
        // Update on resize
        window.addEventListener('resize', () => {
            this.state.isMobile = window.innerWidth <= 768;
            this.updateLayout();
        });
    },

    // Initialize Application State
    initializeState() {
        // Check for saved user session
        const savedUser = localStorage.getItem('asceama_user');
        if (savedUser) {
            this.state.currentUser = JSON.parse(savedUser);
        }

        // Check theme preference
        const savedTheme = localStorage.getItem('asceama_theme');
        if (savedTheme) {
            this.state.darkMode = savedTheme === 'dark';
        }

        // Check sidebar state
        const sidebarState = localStorage.getItem('asceama_sidebar');
        if (sidebarState) {
            this.state.sidebarCollapsed = sidebarState === 'collapsed';
        }
    },

    // Setup Event Listeners
    setupEventListeners() {
        // Sidebar toggle
        if (this.elements.sidebarToggle) {
            this.elements.sidebarToggle.addEventListener('click', () => {
                this.toggleSidebar();
            });
        }

        // Mobile menu toggle
        if (this.elements.mobileMenuToggle) {
            this.elements.mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileSidebar();
            });
        }

        // Notifications
        if (this.elements.notificationBtn) {
            this.elements.notificationBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleNotifications();
            });
        }

        // Profile menu
        if (this.elements.profileBtn) {
            this.elements.profileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleProfileMenu();
            });
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            this.closeAllDropdowns();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });

        // Window events
        window.addEventListener('beforeunload', () => {
            this.saveState();
        });
    },

    // Initialize Theme
    initializeTheme() {
        if (this.state.darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    },

    // Show Loader
    showLoader() {
        if (this.elements.loader) {
            this.elements.loader.style.display = 'flex';
        }
    },

    // Hide Loader
    hideLoader() {
        if (this.elements.loader) {
            this.elements.loader.style.opacity = '0';
            setTimeout(() => {
                this.elements.loader.style.display = 'none';
            }, 300);
        }
    },

    // Show Application
    showApp() {
        if (this.elements.app) {
            this.elements.app.style.display = 'block';
            
            // Check if user is authenticated
            if (this.state.currentUser) {
                this.showDashboard();
            } else {
                this.showAuth();
            }
        }
    },

    // Show Authentication
    showAuth() {
        if (this.elements.authContainer) {
            this.elements.authContainer.style.display = 'block';
        }
        if (this.elements.dashboardContainer) {
            this.elements.dashboardContainer.style.display = 'none';
        }
    },

    // Show Dashboard
    showDashboard() {
        if (this.elements.dashboardContainer) {
            this.elements.dashboardContainer.style.display = 'flex';
        }
        if (this.elements.authContainer) {
            this.elements.authContainer.style.display = 'none';
        }

        // Initialize dashboard
        this.initializeDashboard();
    },

    // Initialize Dashboard
    initializeDashboard() {
        // Apply saved sidebar state
        if (this.state.sidebarCollapsed && !this.state.isMobile) {
            this.elements.sidebar?.classList.add('collapsed');
        }

        // Load initial dashboard content
        this.loadPage('dashboard');
    },

    // Toggle Sidebar
    toggleSidebar() {
        if (this.state.isMobile) {
            this.toggleMobileSidebar();
            return;
        }

        this.state.sidebarCollapsed = !this.state.sidebarCollapsed;
        
        if (this.state.sidebarCollapsed) {
            this.elements.sidebar?.classList.add('collapsed');
        } else {
            this.elements.sidebar?.classList.remove('collapsed');
        }

        // Save state
        localStorage.setItem('asceama_sidebar', this.state.sidebarCollapsed ? 'collapsed' : 'expanded');
    },

    // Toggle Mobile Sidebar
    toggleMobileSidebar() {
        const sidebar = this.elements.sidebar;
        const overlay = document.querySelector('.sidebar-overlay');
        
        if (sidebar?.classList.contains('open')) {
            sidebar.classList.remove('open');
            overlay?.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            sidebar?.classList.add('open');
            overlay?.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Create overlay if it doesn't exist
            if (!overlay) {
                this.createSidebarOverlay();
            }
        }
    },

    // Create Sidebar Overlay for Mobile
    createSidebarOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay active';
        overlay.addEventListener('click', () => {
            this.toggleMobileSidebar();
        });
        document.body.appendChild(overlay);
    },

    // Toggle Notifications
    toggleNotifications() {
        const dropdown = this.elements.notificationsDropdown;
        const isActive = dropdown?.classList.contains('active');
        
        this.closeAllDropdowns();
        
        if (!isActive) {
            dropdown?.classList.add('active');
            this.loadNotifications();
        }
    },

    // Toggle Profile Menu
    toggleProfileMenu() {
        const dropdown = this.elements.profileDropdown;
        const button = this.elements.profileBtn;
        const isActive = dropdown?.classList.contains('active');
        
        this.closeAllDropdowns();
        
        if (!isActive) {
            dropdown?.classList.add('active');
            button?.classList.add('active');
        }
    },

    // Close All Dropdowns
    closeAllDropdowns() {
        // Close notifications
        this.elements.notificationsDropdown?.classList.remove('active');
        
        // Close profile menu
        this.elements.profileDropdown?.classList.remove('active');
        this.elements.profileBtn?.classList.remove('active');
    },

    // Handle Keyboard Shortcuts
    handleKeyboardShortcuts(e) {
        // Ctrl+B or Cmd+B - Toggle sidebar
        if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
            e.preventDefault();
            this.toggleSidebar();
        }

        // Escape - Close dropdowns/modals
        if (e.key === 'Escape') {
            this.closeAllDropdowns();
            if (this.state.isMobile) {
                const sidebar = this.elements.sidebar;
                if (sidebar?.classList.contains('open')) {
                    this.toggleMobileSidebar();
                }
            }
        }

        // Ctrl+/ - Show shortcuts help
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
            e.preventDefault();
            this.showKeyboardShortcuts();
        }
    },

    // Update Layout
    updateLayout() {
        if (this.state.isMobile) {
            this.elements.sidebar?.classList.remove('collapsed');
            this.elements.sidebar?.classList.remove('open');
        }
    },

    // Navigate to Page
    navigateTo(page) {
        // Update active menu item
        this.updateActiveMenuItem(page);
        
        // Load page content
        this.loadPage(page);
        
        // Close mobile sidebar
        if (this.state.isMobile) {
            this.toggleMobileSidebar();
        }
    },

    // Update Active Menu Item
    updateActiveMenuItem(page) {
        // Remove active class from all menu items
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to current item
        const currentItem = document.querySelector(`[onclick="navigateTo('${page}')"]`)?.closest('.menu-item');
        currentItem?.classList.add('active');

        // Update page title
        const pageTitles = {
            dashboard: 'لوحة التحكم الرئيسية',
            appointments: 'إدارة المواعيد',
            'medical-records': 'السجلات الطبية',
            medications: 'إدارة الأدوية',
            'health-search': 'البحث الطبي',
            'family-management': 'إدارة الأسرة',
            nutrition: 'إدارة التغذية',
            payments: 'إدارة المدفوعات',
            emergency: 'الطوارئ',
            reports: 'التقارير والإحصائيات',
            settings: 'الإعدادات'
        };

        const pageTitle = document.querySelector('.page-title');
        if (pageTitle && pageTitles[page]) {
            pageTitle.textContent = pageTitles[page];
        }
    },

    // Load Page Content
    loadPage(page) {
        this.state.currentPage = page;
        const pageContent = this.elements.pageContent;
        
        if (!pageContent) return;

        // Show loading state
        pageContent.innerHTML = this.getLoadingHTML();

        // Simulate API call and load content
        setTimeout(() => {
            const content = this.getPageContent(page);
            pageContent.innerHTML = content;
            
            // Initialize page-specific functionality
            this.initializePage(page);
        }, 500);
    },

    // Get Page Content
    getPageContent(page) {
        const content = {
            dashboard: this.getDashboardContent(),
            appointments: this.getAppointmentsContent(),
            'medical-records': this.getMedicalRecordsContent(),
            medications: this.getMedicationsContent(),
            'health-search': this.getHealthSearchContent(),
            'family-management': this.getFamilyManagementContent(),
            nutrition: this.getNutritionContent(),
            payments: this.getPaymentsContent(),
            emergency: this.getEmergencyContent(),
            reports: this.getReportsContent(),
            settings: this.getSettingsContent()
        };

        return content[page] || this.get404Content();
    },

    // Get Loading HTML
    getLoadingHTML() {
        return `
            <div class="loading-container" style="display: flex; align-items: center; justify-content: center; height: 200px;">
                <div class="loading-spinner" style="width: 40px; height: 40px; border: 4px solid var(--border-light); border-top: 4px solid var(--primary-color); border-radius: 50%; animation: spin 1s linear infinite;"></div>
            </div>
        `;
    },

    // Get Dashboard Content
    getDashboardContent() {
        return `
            <div class="dashboard-overview animate-fadeInUp">
                <div class="welcome-section">
                    <h2>مرحباً بك، ${this.state.currentUser?.name || 'أحمد محمد'}</h2>
                    <p>نظرة سريعة على حالتك الصحية وأنشطتك اليوم</p>
                </div>
                
                <div class="stats-grid grid grid-cols-4 gap-6 mb-8">
                    <div class="stat-card card">
                        <div class="card-content">
                            <div class="stat-icon">
                                <i class="fas fa-calendar-check"></i>
                            </div>
                            <div class="stat-info">
                                <h3>3</h3>
                                <p>مواعيد هذا الشهر</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="stat-card card">
                        <div class="card-content">
                            <div class="stat-icon">
                                <i class="fas fa-pills"></i>
                            </div>
                            <div class="stat-info">
                                <h3>5</h3>
                                <p>أدوية نشطة</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="stat-card card">
                        <div class="card-content">
                            <div class="stat-icon">
                                <i class="fas fa-file-medical"></i>
                            </div>
                            <div class="stat-info">
                                <h3>12</h3>
                                <p>تقرير طبي</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="stat-card card">
                        <div class="card-content">
                            <div class="stat-icon">
                                <i class="fas fa-heartbeat"></i>
                            </div>
                            <div class="stat-info">
                                <h3>جيد</h3>
                                <p>الحالة الصحية</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-6">
                    <div class="upcoming-appointments card">
                        <div class="card-header">
                            <h3>المواعيد القادمة</h3>
                            <a href="#" onclick="navigateTo('appointments')" class="btn btn-outline btn-sm">عرض الكل</a>
                        </div>
                        <div class="card-content">
                            <div class="appointment-item">
                                <div class="appointment-date">
                                    <span class="day">15</span>
                                    <span class="month">ديسمبر</span>
                                </div>
                                <div class="appointment-info">
                                    <h4>د. أحمد النجار</h4>
                                    <p>طبيب القلب</p>
                                    <span class="time">10:30 صباحاً</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="health-tips card">
                        <div class="card-header">
                            <h3>نصائح صحية</h3>
                        </div>
                        <div class="card-content">
                            <div class="tip-item">
                                <i class="fas fa-lightbulb"></i>
                                <p>اشرب على الأقل 8 أكواب من الماء يومياً للحفاظ على ترطيب جسمك</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // Other page content methods would go here...
    getAppointmentsContent() {
        return '<div class="appointments-page animate-fadeInUp"><h2>إدارة المواعيد</h2><p>صفحة إدارة المواعيد الطبية</p></div>';
    },

    getMedicalRecordsContent() {
        return '<div class="medical-records-page animate-fadeInUp"><h2>السجلات الطبية</h2><p>صفحة السجلات الطبية</p></div>';
    },

    getMedicationsContent() {
        return '<div class="medications-page animate-fadeInUp"><h2>إدارة الأدوية</h2><p>صفحة إدارة الأدوية والتذكيرات</p></div>';
    },

    getHealthSearchContent() {
        return '<div class="health-search-page animate-fadeInUp"><h2>البحث الطبي</h2><p>محرك البحث الطبي المتقدم</p></div>';
    },

    getFamilyManagementContent() {
        return '<div class="family-management-page animate-fadeInUp"><h2>إدارة الأسرة</h2><p>صفحة إدارة الحسابات العائلية</p></div>';
    },

    getNutritionContent() {
        return '<div class="nutrition-page animate-fadeInUp"><h2>إدارة التغذية</h2><p>صفحة التغذية والنظام الغذائي</p></div>';
    },

    getPaymentsContent() {
        return '<div class="payments-page animate-fadeInUp"><h2>إدارة المدفوعات</h2><p>صفحة المدفوعات والفواتير</p></div>';
    },

    getEmergencyContent() {
        return '<div class="emergency-page animate-fadeInUp"><h2>الطوارئ</h2><p>صفحة إدارة الطوارئ والتنبيهات</p></div>';
    },

    getReportsContent() {
        return '<div class="reports-page animate-fadeInUp"><h2>التقارير والإحصائيات</h2><p>صفحة التقارير الطبية والإحصائيات</p></div>';
    },

    getSettingsContent() {
        return '<div class="settings-page animate-fadeInUp"><h2>الإعدادات</h2><p>صفحة إعدادات التطبيق والحساب</p></div>';
    },

    get404Content() {
        return '<div class="error-page animate-fadeInUp"><h2>الصفحة غير موجودة</h2><p>عذراً، الصفحة المطلوبة غير موجودة</p></div>';
    },

    // Initialize Page-Specific Functionality
    initializePage(page) {
        // Add page-specific initialization here
        console.log(`Initializing page: ${page}`);
    },

    // Load Notifications
    loadNotifications() {
        // Simulate loading notifications
        this.state.notifications = [
            {
                id: 1,
                type: 'medication',
                title: 'تذكير بالدواء',
                message: 'حان وقت أخذ دواء الضغط',
                time: 'منذ 5 دقائق',
                read: false
            },
            {
                id: 2,
                type: 'appointment',
                title: 'موعد قادم',
                message: 'موعدك مع د. أحمد النجار غداً',
                time: 'منذ ساعة',
                read: false
            }
        ];
    },

    // Show Keyboard Shortcuts
    showKeyboardShortcuts() {
        // Implementation for showing keyboard shortcuts modal
        console.log('Showing keyboard shortcuts');
    },

    // Save Application State
    saveState() {
        localStorage.setItem('asceama_sidebar', this.state.sidebarCollapsed ? 'collapsed' : 'expanded');
        localStorage.setItem('asceama_theme', this.state.darkMode ? 'dark' : 'light');
        if (this.state.currentUser) {
            localStorage.setItem('asceama_user', JSON.stringify(this.state.currentUser));
        }
    },

    // Logout User
    logout() {
        this.state.currentUser = null;
        localStorage.removeItem('asceama_user');
        this.showAuth();
    }
};

// Global Functions for onclick handlers
window.toggleSidebar = () => AsceamaApp.toggleSidebar();
window.toggleNotifications = () => AsceamaApp.toggleNotifications();
window.toggleProfileMenu = () => AsceamaApp.toggleProfileMenu();
window.navigateTo = (page) => AsceamaApp.navigateTo(page);
window.logout = () => AsceamaApp.logout();

// Initialize Application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    AsceamaApp.init();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AsceamaApp;
}