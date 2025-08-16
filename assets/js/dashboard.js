/**
 * Asceama Healthcare System - Dashboard JavaScript
 * Dashboard-specific functionality and widgets
 */

'use strict';

// Dashboard Module
const AsceamaDashboard = {
    // Configuration
    config: {
        refreshInterval: 30000, // 30 seconds
        chartColors: {
            primary: '#185560',
            secondary: '#c83830',
            success: '#10b981',
            warning: '#f59e0b',
            info: '#3b82f6'
        }
    },

    // State
    state: {
        refreshTimer: null,
        widgets: {},
        charts: {}
    },

    // Initialize Dashboard
    init() {
        this.setupDashboard();
        this.initializeWidgets();
        this.startAutoRefresh();
        console.log('📊 Dashboard initialized');
    },

    // Setup Dashboard
    setupDashboard() {
        // Add dashboard-specific event listeners
        this.setupStatCards();
        this.setupQuickActions();
        this.setupHealthTips();
    },

    // Setup Stat Cards
    setupStatCards() {
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const cardType = this.getStatCardType(card);
                this.handleStatCardClick(cardType);
            });

            // Add hover effects
            card.addEventListener('mouseenter', () => {
                this.animateStatCard(card, 'in');
            });

            card.addEventListener('mouseleave', () => {
                this.animateStatCard(card, 'out');
            });
        });
    },

    // Get Stat Card Type
    getStatCardType(card) {
        const icon = card.querySelector('.stat-icon i');
        if (icon) {
            if (icon.classList.contains('fa-calendar-check')) return 'appointments';
            if (icon.classList.contains('fa-pills')) return 'medications';
            if (icon.classList.contains('fa-file-medical')) return 'records';
            if (icon.classList.contains('fa-heartbeat')) return 'health-status';
        }
        return 'unknown';
    },

    // Handle Stat Card Click
    handleStatCardClick(type) {
        const routes = {
            'appointments': 'appointments',
            'medications': 'medications',
            'records': 'medical-records',
            'health-status': 'reports'
        };

        if (routes[type] && window.AsceamaApp) {
            window.AsceamaApp.navigateTo(routes[type]);
        }
    },

    // Animate Stat Card
    animateStatCard(card, direction) {
        const icon = card.querySelector('.stat-icon');
        if (icon) {
            if (direction === 'in') {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            } else {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        }
    },

    // Setup Quick Actions
    setupQuickActions() {
        // Quick appointment booking
        const quickAppointmentBtn = document.querySelector('.quick-appointment');
        if (quickAppointmentBtn) {
            quickAppointmentBtn.addEventListener('click', () => {
                this.showQuickAppointmentModal();
            });
        }

        // Quick medication reminder
        const quickMedicationBtn = document.querySelector('.quick-medication');
        if (quickMedicationBtn) {
            quickMedicationBtn.addEventListener('click', () => {
                this.showQuickMedicationModal();
            });
        }

        // Emergency contact
        const emergencyBtn = document.querySelector('.emergency-contact');
        if (emergencyBtn) {
            emergencyBtn.addEventListener('click', () => {
                this.handleEmergencyContact();
            });
        }
    },

    // Setup Health Tips
    setupHealthTips() {
        this.loadHealthTips();
        
        // Rotate tips every 10 seconds
        setInterval(() => {
            this.rotateHealthTip();
        }, 10000);
    },

    // Load Health Tips
    loadHealthTips() {
        const tips = [
            {
                icon: 'fas fa-tint',
                text: 'اشرب على الأقل 8 أكواب من الماء يومياً للحفاظ على ترطيب جسمك'
            },
            {
                icon: 'fas fa-walking',
                text: 'امشِ لمدة 30 دقيقة يومياً لتحسين صحة القلب والدورة الدموية'
            },
            {
                icon: 'fas fa-bed',
                text: 'احصل على 7-9 ساعات من النوم الجيد كل ليلة لصحة أفضل'
            },
            {
                icon: 'fas fa-apple-alt',
                text: 'تناول 5 حصص من الفواكه والخضروات يومياً لتقوية المناعة'
            },
            {
                icon: 'fas fa-meditation',
                text: 'مارس تمارين التنفس والاسترخاء لتقليل التوتر والقلق'
            }
        ];

        this.state.healthTips = tips;
        this.state.currentTipIndex = 0;
        this.displayHealthTip(0);
    },

    // Display Health Tip
    displayHealthTip(index) {
        const tipContainer = document.querySelector('.tip-item');
        if (tipContainer && this.state.healthTips) {
            const tip = this.state.healthTips[index];
            tipContainer.innerHTML = `
                <i class="${tip.icon}"></i>
                <p>${tip.text}</p>
            `;
        }
    },

    // Rotate Health Tip
    rotateHealthTip() {
        if (this.state.healthTips) {
            this.state.currentTipIndex = (this.state.currentTipIndex + 1) % this.state.healthTips.length;
            
            const tipContainer = document.querySelector('.tip-item');
            if (tipContainer) {
                tipContainer.style.opacity = '0';
                setTimeout(() => {
                    this.displayHealthTip(this.state.currentTipIndex);
                    tipContainer.style.opacity = '1';
                }, 300);
            }
        }
    },

    // Initialize Widgets
    initializeWidgets() {
        this.initializeAppointmentWidget();
        this.initializeHealthMetricsWidget();
        this.initializeMedicationWidget();
        this.initializeActivityWidget();
    },

    // Initialize Appointment Widget
    initializeAppointmentWidget() {
        const widget = document.querySelector('.upcoming-appointments');
        if (widget) {
            this.loadUpcomingAppointments();
        }
    },

    // Load Upcoming Appointments
    loadUpcomingAppointments() {
        // Simulate API call
        setTimeout(() => {
            const appointments = [
                {
                    id: 1,
                    doctor: 'د. أحمد النجار',
                    specialty: 'طبيب القلب',
                    date: '2024-12-15',
                    time: '10:30',
                    type: 'فحص دوري'
                },
                {
                    id: 2,
                    doctor: 'د. فاطمة السيد',
                    specialty: 'طبيبة الأسنان',
                    date: '2024-12-18',
                    time: '14:00',
                    type: 'تنظيف'
                }
            ];

            this.displayAppointments(appointments);
        }, 500);
    },

    // Display Appointments
    displayAppointments(appointments) {
        const container = document.querySelector('.upcoming-appointments .card-content');
        if (container && appointments.length > 0) {
            const appointmentHTML = appointments.map(apt => {
                const date = new Date(apt.date);
                const day = date.getDate();
                const month = date.toLocaleDateString('ar-SA', { month: 'long' });
                
                return `
                    <div class="appointment-item" onclick="AsceamaDashboard.viewAppointment(${apt.id})">
                        <div class="appointment-date">
                            <span class="day">${day}</span>
                            <span class="month">${month}</span>
                        </div>
                        <div class="appointment-info">
                            <h4>${apt.doctor}</h4>
                            <p>${apt.specialty}</p>
                            <span class="time">${apt.time}</span>
                        </div>
                    </div>
                `;
            }).join('');

            container.innerHTML = appointmentHTML;
        }
    },

    // View Appointment
    viewAppointment(id) {
        console.log('Viewing appointment:', id);
        // Navigate to appointment details or show modal
        if (window.AsceamaApp) {
            window.AsceamaApp.navigateTo('appointments');
        }
    },

    // Initialize Health Metrics Widget
    initializeHealthMetricsWidget() {
        this.loadHealthMetrics();
    },

    // Load Health Metrics
    loadHealthMetrics() {
        // Simulate loading health data
        const metrics = {
            heartRate: 72,
            bloodPressure: '120/80',
            weight: 75.5,
            steps: 8542,
            calories: 2150
        };

        this.displayHealthMetrics(metrics);
    },

    // Display Health Metrics
    displayHealthMetrics(metrics) {
        // This would be implemented when we have a health metrics widget
        console.log('Health metrics loaded:', metrics);
    },

    // Initialize Medication Widget
    initializeMedicationWidget() {
        this.loadTodaysMedications();
    },

    // Load Today's Medications
    loadTodaysMedications() {
        // Simulate medication data
        const medications = [
            {
                name: 'أسبرين',
                dosage: '100mg',
                time: '08:00',
                taken: true
            },
            {
                name: 'فيتامين د',
                dosage: '1000 وحدة',
                time: '12:00',
                taken: false
            },
            {
                name: 'أوميجا 3',
                dosage: 'كبسولة واحدة',
                time: '20:00',
                taken: false
            }
        ];

        this.displayTodaysMedications(medications);
    },

    // Display Today's Medications
    displayTodaysMedications(medications) {
        // This would be implemented when we have a medication widget
        console.log('Today\'s medications:', medications);
    },

    // Initialize Activity Widget
    initializeActivityWidget() {
        this.loadActivityData();
    },

    // Load Activity Data
    loadActivityData() {
        // Simulate activity data
        const activities = {
            steps: 8542,
            goal: 10000,
            distance: 6.2,
            calories: 312,
            activeMinutes: 45
        };

        this.displayActivityData(activities);
    },

    // Display Activity Data
    displayActivityData(activities) {
        // This would be implemented when we have an activity widget
        console.log('Activity data:', activities);
    },

    // Show Quick Appointment Modal
    showQuickAppointmentModal() {
        // Create and show modal for quick appointment booking
        console.log('Showing quick appointment modal');
        this.showModal('حجز موعد سريع', this.getQuickAppointmentHTML());
    },

    // Get Quick Appointment HTML
    getQuickAppointmentHTML() {
        return `
            <form id="quick-appointment-form">
                <div class="form-group">
                    <label class="form-label">نوع التخصص</label>
                    <select class="form-select" name="specialty" required>
                        <option value="">اختر التخصص</option>
                        <option value="cardiology">طب القلب</option>
                        <option value="dentistry">طب الأسنان</option>
                        <option value="dermatology">طب الجلدية</option>
                        <option value="orthopedics">طب العظام</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">التاريخ المفضل</label>
                    <input type="date" class="form-input" name="date" required>
                </div>
                <div class="form-group">
                    <label class="form-label">الوقت المفضل</label>
                    <select class="form-select" name="time" required>
                        <option value="">اختر الوقت</option>
                        <option value="morning">صباحاً (8:00 - 12:00)</option>
                        <option value="afternoon">بعد الظهر (12:00 - 16:00)</option>
                        <option value="evening">مساءً (16:00 - 20:00)</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline" onclick="AsceamaDashboard.closeModal()">إلغاء</button>
                    <button type="submit" class="btn btn-primary">حجز الموعد</button>
                </div>
            </form>
        `;
    },

    // Show Quick Medication Modal
    showQuickMedicationModal() {
        console.log('Showing quick medication modal');
        this.showModal('إضافة تذكير دواء', this.getQuickMedicationHTML());
    },

    // Get Quick Medication HTML
    getQuickMedicationHTML() {
        return `
            <form id="quick-medication-form">
                <div class="form-group">
                    <label class="form-label">اسم الدواء</label>
                    <input type="text" class="form-input" name="medication" placeholder="مثال: أسبرين" required>
                </div>
                <div class="form-group">
                    <label class="form-label">الجرعة</label>
                    <input type="text" class="form-input" name="dosage" placeholder="مثال: 100mg" required>
                </div>
                <div class="form-group">
                    <label class="form-label">عدد المرات يومياً</label>
                    <select class="form-select" name="frequency" required>
                        <option value="">اختر التكرار</option>
                        <option value="1">مرة واحدة</option>
                        <option value="2">مرتان</option>
                        <option value="3">ثلاث مرات</option>
                        <option value="4">أربع مرات</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">وقت التذكير الأول</label>
                    <input type="time" class="form-input" name="time" required>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline" onclick="AsceamaDashboard.closeModal()">إلغاء</button>
                    <button type="submit" class="btn btn-primary">إضافة التذكير</button>
                </div>
            </form>
        `;
    },

    // Handle Emergency Contact
    handleEmergencyContact() {
        if (confirm('هل تريد الاتصال بخدمات الطوارئ؟')) {
            // In a real app, this would initiate emergency protocols
            alert('جاري الاتصال بخدمات الطوارئ...');
            console.log('Emergency contact initiated');
        }
    },

    // Show Modal
    showModal(title, content) {
        // Remove existing modal
        this.closeModal();

        const modalHTML = `
            <div class="modal-overlay active" id="dashboard-modal">
                <div class="modal">
                    <div class="modal-header">
                        <h3 class="modal-title">${title}</h3>
                        <button class="modal-close" onclick="AsceamaDashboard.closeModal()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Setup form handlers
        this.setupModalForms();
    },

    // Setup Modal Forms
    setupModalForms() {
        const appointmentForm = document.getElementById('quick-appointment-form');
        if (appointmentForm) {
            appointmentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleQuickAppointment(appointmentForm);
            });
        }

        const medicationForm = document.getElementById('quick-medication-form');
        if (medicationForm) {
            medicationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleQuickMedication(medicationForm);
            });
        }
    },

    // Handle Quick Appointment
    handleQuickAppointment(form) {
        const formData = new FormData(form);
        const appointment = {
            specialty: formData.get('specialty'),
            date: formData.get('date'),
            time: formData.get('time')
        };

        console.log('Quick appointment booked:', appointment);
        
        // Simulate API call
        setTimeout(() => {
            alert('تم حجز الموعد بنجاح! سيتم التواصل معك قريباً.');
            this.closeModal();
            this.refreshWidgets();
        }, 1000);
    },

    // Handle Quick Medication
    handleQuickMedication(form) {
        const formData = new FormData(form);
        const medication = {
            name: formData.get('medication'),
            dosage: formData.get('dosage'),
            frequency: formData.get('frequency'),
            time: formData.get('time')
        };

        console.log('Quick medication added:', medication);
        
        // Simulate API call
        setTimeout(() => {
            alert('تم إضافة تذكير الدواء بنجاح!');
            this.closeModal();
            this.refreshWidgets();
        }, 1000);
    },

    // Close Modal
    closeModal() {
        const modal = document.getElementById('dashboard-modal');
        if (modal) {
            modal.remove();
        }
    },

    // Start Auto Refresh
    startAutoRefresh() {
        this.state.refreshTimer = setInterval(() => {
            this.refreshWidgets();
        }, this.config.refreshInterval);
    },

    // Stop Auto Refresh
    stopAutoRefresh() {
        if (this.state.refreshTimer) {
            clearInterval(this.state.refreshTimer);
            this.state.refreshTimer = null;
        }
    },

    // Refresh Widgets
    refreshWidgets() {
        console.log('Refreshing dashboard widgets...');
        this.loadUpcomingAppointments();
        this.loadTodaysMedications();
        this.loadHealthMetrics();
        this.loadActivityData();
    },

    // Cleanup
    cleanup() {
        this.stopAutoRefresh();
        this.closeModal();
    }
};

// Global functions
window.AsceamaDashboard = AsceamaDashboard;

// Auto-initialize when dashboard page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the dashboard
    if (document.querySelector('.dashboard-overview')) {
        AsceamaDashboard.init();
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AsceamaDashboard;
}