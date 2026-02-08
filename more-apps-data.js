// ============================================
// MORE APPS DATA - Easy to Update!
// ============================================
// To add a new app, simply add an object to the appsData array below
// Each app needs: title, description, url, thumbnail, and isNew (optional)

const appsData = [
    {
        title: "Insult Chatbot",
        description: "A hilarious AI-powered chatbot that generates witty and creative insults. Perfect for a good laugh with friends!",
        url: "https://insult-chatbot.vercel.app/",
        thumbnail: "insult_chatbot_thumbnail.png", // You can change this to your own image path
        isNew: true // Set to false or remove this line to remove the "NEW" badge
    }
    // Add more apps here in the future like this:
    // {
    //     title: "Your Next App",
    //     description: "Description of your amazing app",
    //     url: "https://your-app-url.com",
    //     thumbnail: "your-app-thumbnail.png",
    //     isNew: true
    // }
];

// ============================================
// APP RENDERING CODE - Don't modify unless needed
// ============================================

function createAppCard(app) {
    return `
        <div class="app-card bg-[rgba(17,3,12,0.9)] backdrop-blur-[20px] rounded-[20px] border border-[rgba(255,107,138,0.7)] shadow-[0_18px_45px_rgba(0,0,0,0.5)] overflow-hidden hover:border-[rgba(255,107,138,0.9)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.8),0_0_40px_rgba(255,107,138,0.6)]"
             onclick="window.open('${app.url}', '_blank')"
             role="button"
             tabindex="0"
             aria-label="Open ${app.title}">
            
            <!-- Thumbnail Image -->
            <img src="${app.thumbnail}" 
                 alt="${app.title} thumbnail" 
                 class="app-card-image"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%23b3002d%22 width=%22400%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3E${app.title}%3C/text%3E%3C/svg%3E'">
            
            <!-- Card Content -->
            <div class="p-6 md:p-8">
                <h3 class="text-xl md:text-2xl font-bold text-gradient-main mb-3 flex items-center">
                    ${app.title}
                    ${app.isNew ? '<span class="badge-new">NEW</span>' : ''}
                </h3>
                <p class="text-text-light/80 leading-relaxed mb-4 text-sm md:text-base">
                    ${app.description}
                </p>
                <div class="flex items-center text-accent font-semibold text-sm md:text-base">
                    Visit App
                    <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </div>
            </div>
        </div>
    `;
}

function renderApps() {
    const container = document.getElementById('appsContainer');
    const emptyState = document.getElementById('emptyState');

    if (!container) return;

    if (appsData.length === 0) {
        // Show empty state if no apps
        if (emptyState) {
            container.classList.add('hidden');
            emptyState.classList.remove('hidden');
        }
    } else {
        // Render all apps
        container.innerHTML = appsData.map(app => createAppCard(app)).join('');
        container.classList.remove('hidden');
        if (emptyState) {
            emptyState.classList.add('hidden');
        }
    }
}

// Keyboard accessibility for cards
document.addEventListener('keydown', (e) => {
    if (e.target.classList.contains('app-card') && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        e.target.click();
    }
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApps);
} else {
    renderApps();
}
