/**
 * Badge System UI - Modal with animations
 */

const BadgeSystem = {
    modal: null,
    
    /**
     * Initialize badge modal
     */
    init() {
        this.createModal();
        this.setupEventListeners();
        this.updateBadgeDisplay();
    },
    
    /**
     * Create badge modal HTML
     */
    createModal() {
        const modal = document.createElement('div');
        modal.id = 'badgeModal';
        modal.className = 'fixed inset-0 z-[9999] hidden items-center justify-center bg-black/70 backdrop-blur-sm';
        modal.innerHTML = `
            <div class="bg-[rgba(17,3,12,0.98)] backdrop-blur-[30px] rounded-[30px] p-8 border border-[rgba(255,107,138,0.7)] shadow-[0_24px_60px_rgba(0,0,0,0.8)] max-w-[600px] w-full mx-4 max-h-[90vh] overflow-y-auto transform scale-95 opacity-0 transition-all duration-300">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-3xl font-extrabold text-gradient-main">🏆 My Trophies</h2>
                    <button id="closeBadgeModal" class="text-muted hover:text-accent transition-colors text-3xl font-bold" aria-label="Close modal">
                        ×
                    </button>
                </div>
                
                <div class="space-y-6">
                    <!-- Match Maker Badge -->
                    <div id="badge-matchMaker" class="badge-item bg-[rgba(17,3,12,0.9)] rounded-[20px] p-6 border border-[rgba(255,107,138,0.5)] transition-all duration-300 opacity-50">
                        <div class="flex items-center gap-4">
                            <div class="badge-icon w-16 h-16 rounded-full bg-gradient-main flex items-center justify-center text-3xl flex-shrink-0">
                                🔗
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-text-light mb-2">Match Maker</h3>
                                <p class="text-muted text-sm">Share your results 5 times to unlock this badge!</p>
                                <div class="badge-status mt-2 text-accent font-semibold hidden">✓ Unlocked!</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- True Romantic Badge -->
                    <div id="badge-trueRomantic" class="badge-item bg-[rgba(17,3,12,0.9)] rounded-[20px] p-6 border border-[rgba(255,107,138,0.5)] transition-all duration-300 opacity-50">
                        <div class="flex items-center gap-4">
                            <div class="badge-icon w-16 h-16 rounded-full bg-gradient-main flex items-center justify-center text-3xl flex-shrink-0">
                                💖
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-text-light mb-2">True Romantic</h3>
                                <p class="text-muted text-sm">Visit the app 3 days in a row to unlock this badge!</p>
                                <div class="badge-status mt-2 text-accent font-semibold hidden">✓ Unlocked!</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-8 text-center">
                    <button id="closeBadgeModalBtn" class="px-6 py-3 bg-gradient-main rounded-[15px] text-white font-bold hover:shadow-[0_0_35px_rgba(255,107,138,0.9)] transition-all duration-300">
                        Close
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        this.modal = modal;
    },
    
    /**
     * Setup event listeners
     */
    setupEventListeners() {
        const closeBtn = document.getElementById('closeBadgeModal');
        const closeBtn2 = document.getElementById('closeBadgeModalBtn');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.hide());
        }
        if (closeBtn2) {
            closeBtn2.addEventListener('click', () => this.hide());
        }
        
        // Close on backdrop click
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.hide();
                }
            });
        }
        
        // Listen for badge unlock events
        document.addEventListener('badgeUnlocked', (e) => {
            this.handleBadgeUnlock(e.detail.badge);
        });
    },
    
    /**
     * Show badge modal
     */
    show() {
        if (!this.modal) return;
        
        this.updateBadgeDisplay();
        this.modal.classList.remove('hidden');
        this.modal.classList.add('flex');
        
        // Trigger animation
        requestAnimationFrame(() => {
            const content = this.modal.querySelector('div > div');
            if (content) {
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }
        });
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    },
    
    /**
     * Hide badge modal
     */
    hide() {
        if (!this.modal) return;
        
        const content = this.modal.querySelector('div > div');
        if (content) {
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
        }
        
        setTimeout(() => {
            this.modal.classList.add('hidden');
            this.modal.classList.remove('flex');
            document.body.style.overflow = '';
        }, 300);
    },
    
    /**
     * Update badge display based on current state
     */
    updateBadgeDisplay() {
        const badges = GameState.getBadges();
        const state = GameState.getState();
        
        // Match Maker badge
        const matchMakerBadge = document.getElementById('badge-matchMaker');
        if (matchMakerBadge) {
            if (badges.matchMaker) {
                matchMakerBadge.classList.remove('opacity-50');
                matchMakerBadge.classList.add('opacity-100', 'border-[rgba(255,107,138,0.9)]');
                const status = matchMakerBadge.querySelector('.badge-status');
                const description = matchMakerBadge.querySelector('p');
                if (status) {
                    status.classList.remove('hidden');
                }
                if (description) {
                    description.textContent = 'You\'ve shared your results 5+ times!';
                }
                const icon = matchMakerBadge.querySelector('.badge-icon');
                if (icon) {
                    icon.classList.add('animate-pulse');
                }
            } else {
                // Show progress
                const description = matchMakerBadge.querySelector('p');
                if (description) {
                    description.textContent = `Share your results ${state.shareCount}/5 times to unlock this badge!`;
                }
            }
        }
        
        // True Romantic badge
        const trueRomanticBadge = document.getElementById('badge-trueRomantic');
        if (trueRomanticBadge) {
            if (badges.trueRomantic) {
                trueRomanticBadge.classList.remove('opacity-50');
                trueRomanticBadge.classList.add('opacity-100', 'border-[rgba(255,107,138,0.9)]');
                const status = trueRomanticBadge.querySelector('.badge-status');
                const description = trueRomanticBadge.querySelector('p');
                if (status) {
                    status.classList.remove('hidden');
                }
                if (description) {
                    description.textContent = `You've visited ${state.streakCount} days in a row!`;
                }
                const icon = trueRomanticBadge.querySelector('.badge-icon');
                if (icon) {
                    icon.classList.add('animate-pulse');
                }
            } else {
                // Show progress
                const description = trueRomanticBadge.querySelector('p');
                if (description) {
                    description.textContent = `Visit the app ${state.streakCount}/3 days in a row to unlock this badge!`;
                }
            }
        }
    },
    
    /**
     * Handle badge unlock animation
     */
    handleBadgeUnlock(badgeName) {
        const badgeEl = document.getElementById(`badge-${badgeName}`);
        if (badgeEl) {
            // Show modal if not already visible
            if (this.modal.classList.contains('hidden')) {
                this.show();
            }
            
            // Animate unlock
            badgeEl.classList.remove('opacity-50');
            badgeEl.classList.add('opacity-100', 'border-[rgba(255,107,138,0.9)]', 'animate-scaleIn');
            
            const status = badgeEl.querySelector('.badge-status');
            const description = badgeEl.querySelector('p');
            if (status) {
                status.classList.remove('hidden');
            }
            
            // Update description
            const state = GameState.getState();
            if (description) {
                if (badgeName === 'matchMaker') {
                    description.textContent = 'You\'ve shared your results 5+ times!';
                } else if (badgeName === 'trueRomantic') {
                    description.textContent = `You've visited ${state.streakCount} days in a row!`;
                }
            }
            
            const icon = badgeEl.querySelector('.badge-icon');
            if (icon) {
                icon.classList.add('animate-pulse');
            }
            
            // Show celebration toast
            Toast.success(`🎉 Badge Unlocked: ${badgeName === 'matchMaker' ? 'Match Maker' : 'True Romantic'}!`, 4000);
        }
    }
};

