/**
 * Toast Notification System
 */

const Toast = {
    /**
     * Show a toast notification
     */
    show(message, type = 'success', duration = 3000) {
        // Remove existing toast if any
        const existingToast = document.getElementById('toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create toast element
        const toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = `fixed top-4 right-4 z-[9999] px-6 py-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 transform translate-x-full ${
            type === 'success' 
                ? 'bg-green-500/90 text-white' 
                : 'bg-red-500/90 text-white'
        }`;
        toast.textContent = message;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'polite');
        
        document.body.appendChild(toast);
        
        // Trigger animation
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                toast.classList.remove('translate-x-full');
                toast.classList.add('translate-x-0');
            });
        });
        
        // Auto remove
        setTimeout(() => {
            toast.classList.remove('translate-x-0');
            toast.classList.add('translate-x-full');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, duration);
    },
    
    success(message, duration) {
        this.show(message, 'success', duration);
    },
    
    error(message, duration) {
        this.show(message, 'error', duration);
    }
};

