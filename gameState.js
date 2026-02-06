/**
 * Game State Manager - Tracks user behavior and unlocks badges
 * Uses localStorage for persistence
 */

const GameState = {
    STORAGE_KEY: 'loveCheckerGameState',
    
    /**
     * Initialize game state from localStorage or create default
     */
    init() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                this.state = {
                    shareCount: parsed.shareCount || 0,
                    lastVisit: parsed.lastVisit || null,
                    streakCount: parsed.streakCount || 0,
                    badges: parsed.badges || {
                        matchMaker: false,
                        trueRomantic: false
                    }
                };
            } catch (e) {
                this.state = this.getDefaultState();
            }
        } else {
            this.state = this.getDefaultState();
        }
        
        // Update visit tracking
        this.updateVisitTracking();
        this.save();
    },
    
    /**
     * Get default state structure
     */
    getDefaultState() {
        return {
            shareCount: 0,
            lastVisit: null,
            streakCount: 0,
            badges: {
                matchMaker: false,
                trueRomantic: false
            }
        };
    },
    
    /**
     * Update visit tracking and check for streak
     */
    updateVisitTracking() {
        const today = new Date().toDateString();
        const lastVisit = this.state.lastVisit;
        
        if (!lastVisit) {
            // First visit
            this.state.lastVisit = today;
            this.state.streakCount = 1;
        } else if (lastVisit === today) {
            // Same day visit, don't increment
            return;
        } else {
            const lastVisitDate = new Date(lastVisit);
            const todayDate = new Date(today);
            const daysDiff = Math.floor((todayDate - lastVisitDate) / (1000 * 60 * 60 * 24));
            
            if (daysDiff === 1) {
                // Consecutive day
                this.state.streakCount += 1;
                this.state.lastVisit = today;
            } else {
                // Streak broken
                this.state.streakCount = 1;
                this.state.lastVisit = today;
            }
        }
        
        // Check for True Romantic badge (3 days in a row)
        if (this.state.streakCount >= 3 && !this.state.badges.trueRomantic) {
            this.state.badges.trueRomantic = true;
            this.triggerBadgeUnlock('trueRomantic');
        }
    },
    
    /**
     * Increment share count and check for Match Maker badge
     */
    incrementShare() {
        this.state.shareCount += 1;
        
        // Check for Match Maker badge (5 shares)
        if (this.state.shareCount >= 5 && !this.state.badges.matchMaker) {
            this.state.badges.matchMaker = true;
            this.triggerBadgeUnlock('matchMaker');
        }
        
        this.save();
    },
    
    /**
     * Save state to localStorage
     */
    save() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
        } catch (e) {
            console.error('Failed to save game state:', e);
        }
    },
    
    /**
     * Get current state
     */
    getState() {
        return { ...this.state };
    },
    
    /**
     * Get badge status
     */
    getBadges() {
        return { ...this.state.badges };
    },
    
    /**
     * Trigger badge unlock event
     */
    triggerBadgeUnlock(badgeName) {
        const event = new CustomEvent('badgeUnlocked', {
            detail: { badge: badgeName }
        });
        document.dispatchEvent(event);
    },
    
    /**
     * Reset game state (for testing)
     */
    reset() {
        this.state = this.getDefaultState();
        this.save();
    }
};

// Initialize on load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        GameState.init();
    });
}

