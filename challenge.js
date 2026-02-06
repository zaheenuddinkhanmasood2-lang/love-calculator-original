/**
 * Challenge Link System - Generate and handle challenge URLs
 */

const ChallengeSystem = {
    /**
     * Generate a challenge URL with encoded challenger name and score
     */
    generateChallengeLink(challengerName, score) {
        const params = new URLSearchParams({
            challenger: challengerName.trim(),
            score: score.toString()
        });
        
        const baseUrl = window.location.origin + window.location.pathname;
        return `${baseUrl}?${params.toString()}`;
    },
    
    /**
     * Parse challenge parameters from URL
     */
    parseChallengeParams() {
        const params = new URLSearchParams(window.location.search);
        const challenger = params.get('challenger');
        const score = params.get('score');
        
        if (challenger && score) {
            return {
                challenger: decodeURIComponent(challenger),
                score: parseInt(score, 10)
            };
        }
        return null;
    },
    
    /**
     * Check if current page is a challenge link
     */
    isChallengeLink() {
        return this.parseChallengeParams() !== null;
    },
    
    /**
     * Show challenge hero section
     */
    showChallengeHero(challenger, score) {
        const heroSection = document.getElementById('challengeHero');
        if (!heroSection) return;
        
        const challengerNameEl = document.getElementById('challengerName');
        const challengerScoreEl = document.getElementById('challengerScore');
        
        if (challengerNameEl) {
            challengerNameEl.textContent = challenger;
        }
        if (challengerScoreEl) {
            challengerScoreEl.textContent = score + '%';
        }
        
        heroSection.classList.remove('hidden');
        heroSection.classList.add('block', 'animate-fadeIn');
        
        // Scroll to challenge hero
        setTimeout(() => {
            heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    },
    
    /**
     * Handle challenge link on page load
     */
    handleChallengeLink() {
        const challengeData = this.parseChallengeParams();
        if (challengeData) {
            this.showChallengeHero(challengeData.challenger, challengeData.score);
        }
    }
};

