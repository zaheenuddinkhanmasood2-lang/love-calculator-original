/**
 * Sanitizes a name by removing punctuation, trimming whitespace, and converting to lowercase.
 * @param {string} name - The name to sanitize
 * @returns {string} - The sanitized name
 */
function sanitizeName(name) {
    if (!name) return '';
    // Remove punctuation and special characters, keep only letters and spaces
    return name.trim().toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, ' ');
}

const feedbackLibrary = {
    low: [
        {
            title: "Signal Lost 📡",
            line: "Cupid pinged {name1} & {name2} but the packet timed out at {score}%.",
            reference: "Maybe reboot the friendship before upgrading to romance."
        },
        {
            title: "Roommates Energy 🛋️",
            line: "{name1} & {name2} just compared grocery lists. That's it.",
            reference: "Chemistry lab absences are finally showing."
        },
        {
            title: "Friend Zone Frontier 🚧",
            line: "{score}% suggests a polite handshake and mutual playlists.",
            reference: "Not every duet needs violins—some just need better WiFi."
        },
        {
            title: "Glitch in the Matrix 🕳️",
            line: "The algorithm checked twice and still whispered \"nah.\"",
            reference: "Even the stars asked for a rain check."
        },
        {
            title: "Low Battery Love 🔻",
            line: "Romantic charge for {name1} & {name2} is blinking red at {score}%.",
            reference: "Find a power bank called conversation."
        },
        {
            title: "Mismatched Playlist 🎧",
            line: "{name1} is blasting rock while {name2} queued lo-fi goodbyes.",
            reference: "Shuffle mode might be the only hope."
        },
        {
            title: "Plot Twist: Just Buddies 📖",
            line: "{score}% indicates your story is currently a sitcom cold open.",
            reference: "Writers suggest character development first."
        },
        {
            title: "Cold Brew Hearts 🧊",
            line: "This vibe is refreshing but not exactly warm.",
            reference: "Add sunlight, patience, and maybe a meme."
        }
    ],
    spark: [
        {
            title: "Pilot Episode Feelings 🎬",
            line: "{name1} & {name2} just aired a solid teaser at {score}%.",
            reference: "Renew the season with brave texts and snacks."
        },
        {
            title: "Half-Charged Romance 🔋",
            line: "Kuch Kuch Hota Hai… bas thoda sa for this duo.",
            reference: "Romeo is typing, Juliet is drafting."
        },
        {
            title: "Awkwardly Adorable 😊",
            line: "Nervous laughter plus {score}% equals wholesome chaos.",
            reference: "Great things start with mismatched jokes."
        },
        {
            title: "Green Shoots 🌱",
            line: "Feelings sprouting, not flowering—yet.",
            reference: "Water with honesty, sunlight with time."
        },
        {
            title: "Soft Launch 💌",
            line: "{name1} & {name2} just soft-launched a maybe-relationship.",
            reference: "Official announcement pending brave emojis."
        },
        {
            title: "Potential Energy ⚡",
            line: "{score}% says physics approves but emotion needs momentum.",
            reference: "Push the cart with movie nights and walks."
        },
        {
            title: "Slow Burn Candle 🕯️",
            line: "This flame flickers but refuses to quit.",
            reference: "Add playlists, late calls, and patient pauses."
        },
        {
            title: "Meet-Cute Material 📚",
            line: "Your origin story is charmingly clumsy.",
            reference: "Stay for the banter, upgrade to brunch."
        }
    ],
    strong: [
        {
            title: "Cozy Firelight 🔥",
            line: "{score}% warmth means mugs, blankets, and comfortable silence.",
            reference: "Keep stoking with tiny thoughtful things."
        },
        {
            title: "Rom-Com Groove 💃",
            line: "{name1} & {name2} are dancing through montage territory.",
            reference: "Cue the spontaneous road trip."
        },
        {
            title: "Aligned Constellations ✨",
            line: "Your names just drew a pleasing pattern in the sky.",
            reference: "Astronomers recommend wishful thinking."
        },
        {
            title: "Magnetic Duo 🧲",
            line: "Poles align, sparks behave, destiny nods approvingly.",
            reference: "Protect this field with clear conversations."
        },
        {
            title: "Serious Crush Credentials 📜",
            line: "{score}% validates every inside joke you've collected.",
            reference: "Scrapbook the memories before they trend."
        },
        {
            title: "Heartbeat Harmony 🎶",
            line: "Your playlist just transitioned flawlessly.",
            reference: "Keep sharing tracks and truths."
        },
        {
            title: "Adventure Partners 🗺️",
            line: "Maps, snacks, and playlists already agree with you two.",
            reference: "Sign the travel waiver of love."
        },
        {
            title: "Story Arc Rising 📈",
            line: "{name1} & {name2} are climbing toward the chapter everyone rereads.",
            reference: "Stay brave during the plot twist."
        }
    ],
    epic: [
        {
            title: "Headline Romance 🗞️",
            line: "{score}% is front-page worthy—journalists are calling.",
            reference: "Quote each other before the press does."
        },
        {
            title: "Shah Rukh Arms Activate 💫",
            line: "Grand gestures feel natural with this match.",
            reference: "Background dancers already warmed up."
        },
        {
            title: "Aurora Hearts 🌌",
            line: "Northern lights envy the glow you two emit.",
            reference: "Travel agencies are building packages."
        },
        {
            title: "Royal Ball RSVP 👑",
            line: "{name1} & {name2} just skipped the queue to the VIP terrace.",
            reference: "Fairy godmothers signed the guest book."
        },
        {
            title: "Destined Co-Authors ✍️",
            line: "Every chapter ends with cliffhangers of joy.",
            reference: "Publishers want sequel rights already."
        },
        {
            title: "Celestial Duet 🌠",
            line: "Shooting stars slowed down to watch this {score}% connection.",
            reference: "Make a wish before they catch up."
        },
        {
            title: "Mythic Chemistry 🐉",
            line: "Legends whisper about the way you laugh together.",
            reference: "Bards demand royalties for narrating."
        },
        {
            title: "Epic Bollywood Romance 💞🔥",
            line: "Shah Rukh would spread his arms for {name1} & {name2}.",
            reference: "Heer–Ranjha level connection—poetic and deep."
        }
    ],
    destiny: [
        {
            title: "SOULMATES. PERIOD. 💯🔥",
            line: "{name1} & {name2} just hit {score}%—destiny approved.",
            reference: "Legends politely scoot over to make room."
        },
        {
            title: "Universe in Applause 🌌",
            line: "Galaxies paused their spin to watch you two align.",
            reference: "Astronauts are updating folklore manuals."
        },
        {
            title: "Perfect Match — Bollywood Finale 🌹✨",
            line: "Even Karan Johar would roll out confetti for this climax.",
            reference: "This love outshines every K-drama montage."
        },
        {
            title: "Epic Love, History-Level 💖",
            line: "This is Laila–Majnu reborn with WiFi and happily-ever-after vibes.",
            reference: "Shakespeare would drop the quill in applause."
        },
        {
            title: "Limitless Loop ♾️",
            line: "{score}% says you're the post-credits scene that never ends.",
            reference: "Even time travelers are speechless."
        },
        {
            title: "Destiny Playlist On Repeat 🔁",
            line: "Every song suddenly describes {name1} & {name2}.",
            reference: "Streaming services request exclusive rights."
        },
        {
            title: "Cosmic Home Run ⚾",
            line: "Love just cleared the stadium roof.",
            reference: "Scorekeepers retired the numbers in your honor."
        },
        {
            title: "Legendary Forever Stamp 💌",
            line: "Postal services immortalized this pairing at {score}%.",
            reference: "Every letter now smells like happily ever after."
        }
    ]
};

const feedbackDecks = {};

/**
 * Calculates the love compatibility score between two names.
 * Algorithm:
 * 1. Sanitize both names (trim, lowercase, remove punctuation)
 * 2. Calculate rawScore as the sum of all character codes modulo 101
 * 3. Map the result to 51-100 range (always above 50%)
 *
 * @param {string} name1 - First person's name
 * @param {string} name2 - Second person's name
 * @returns {number} - Compatibility score between 51 and 100
 */
function calculateScore(name1, name2) {
    // Sanitize inputs
    const cleanName1 = sanitizeName(name1);
    const cleanName2 = sanitizeName(name2);

    // Combine both names for calculation
    const combined = cleanName1 + cleanName2;

    // Calculate sum of character codes
    let charCodeSum = 0;
    for (let i = 0; i < combined.length; i++) {
        charCodeSum += combined.charCodeAt(i);
    }

    // Get raw score modulo 101 (0-100)
    const rawScore = Math.abs(charCodeSum) % 101;

    // Map to 51-100 range (always above 50%)
    // This ensures every result is between 51% and 100%
    return 51 + (rawScore % 50);
}

/**
 * Replaces placeholders with actual values
 */
function formatTemplate(template, name1, name2, score) {
    return template
        .replace(/{name1}/gi, name1)
        .replace(/{name2}/gi, name2)
        .replace(/{score}/gi, score);
}

/**
 * Fisher-Yates shuffle to randomize feedback decks
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getNextFeedback(rangeKey) {
    const options = feedbackLibrary[rangeKey];
    if (!feedbackDecks[rangeKey] || feedbackDecks[rangeKey].length === 0) {
        feedbackDecks[rangeKey] = shuffleArray([...options]);
    }
    return feedbackDecks[rangeKey].pop();
}

/**
 * Gets romantic feedback based on the compatibility score range.
 * @param {number} score - The compatibility score (51-100)
 * @param {string} name1 - First person's raw name
 * @param {string} name2 - Second person's raw name
 * @returns {object} - Object containing title and description
 */
function getFeedback(score, name1, name2) {
    let rangeKey = 'destiny';
    // Scores are now always 51-100, so we adjust ranges accordingly
    if (score <= 70) {
        rangeKey = 'spark';
    } else if (score <= 85) {
        rangeKey = 'strong';
    } else if (score <= 95) {
        rangeKey = 'epic';
    } else {
        rangeKey = 'destiny';
    }

    const pick = getNextFeedback(rangeKey);

    return {
        title: formatTemplate(pick.title, name1, name2, score),
        description: formatTemplate(
            `${pick.line}\n${pick.reference}`,
            name1,
            name2,
            score
        )
    };
}

/**
 * Escapes HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize game state and badge system
    if (typeof GameState !== 'undefined') {
        GameState.init();
    }
    if (typeof BadgeSystem !== 'undefined') {
        BadgeSystem.init();
    }

    // Handle challenge links on page load
    if (typeof ChallengeSystem !== 'undefined') {
        ChallengeSystem.handleChallengeLink();
    }

    // DOM Elements
    const form = document.getElementById('loveForm');
    if (!form) return; // Exit if form doesn't exist (not on calculator page)

    const name1Input = document.getElementById('name1');
    const name2Input = document.getElementById('name2');
    const resultDiv = document.getElementById('result');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const messageDisplay = document.getElementById('messageDisplay');
    const descriptionDisplay = document.getElementById('descriptionDisplay');
    const errorMessage = document.getElementById('errorMessage');

    /**
     * Validates that both names are provided and contain valid characters.
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateInputs() {
        const name1 = name1Input.value.trim();
        const name2 = name2Input.value.trim();

        errorMessage.classList.remove('block');
        errorMessage.classList.add('hidden');
        errorMessage.textContent = '';

        if (!name1 || !name2) {
            errorMessage.textContent = 'Please enter both names.';
            errorMessage.classList.remove('hidden');
            errorMessage.classList.add('block', 'animate-shake');
            return false;
        }

        const cleanName1 = sanitizeName(name1);
        const cleanName2 = sanitizeName(name2);

        if (!cleanName1 || !cleanName2) {
            errorMessage.textContent = 'Please enter valid names (letters only).';
            errorMessage.classList.remove('hidden');
            errorMessage.classList.add('block', 'animate-shake');
            return false;
        }

        return true;
    }

    /**
     * Shows loading animation with progress bar
     */
    function showLoadingAnimation() {
        const loadingDiv = document.getElementById('loadingAnimation');
        const progressBar = document.getElementById('progressBar');
        const loadingText = document.getElementById('loadingText');
        const loadingSubtext = document.getElementById('loadingSubtext');
        const calculateBtn = document.getElementById('calculateBtn');

        if (!loadingDiv || !progressBar) return;

        // Hide result and show loading
        resultDiv.classList.add('hidden');
        resultDiv.classList.remove('block');
        loadingDiv.classList.remove('hidden');
        loadingDiv.classList.add('block', 'animate-fadeIn');

        // Disable button
        if (calculateBtn) {
            calculateBtn.disabled = true;
            calculateBtn.style.opacity = '0.6';
            calculateBtn.style.cursor = 'not-allowed';
        }

        // Loading messages sequence
        const messages = [
            { text: 'AI Scanning...', subtext: 'Analyzing compatibility patterns...' },
            { text: 'Processing Names...', subtext: 'Calculating character frequencies...' },
            { text: 'Matching Patterns...', subtext: 'Finding romantic connections...' },
            { text: 'Finalizing Results...', subtext: 'Almost there...' }
        ];

        let progress = 0;
        const duration = 3000; // 3 seconds
        const interval = 50; // Update every 50ms
        const totalSteps = duration / interval;
        const progressIncrement = 100 / totalSteps;
        let messageIndex = 0;

        const progressInterval = setInterval(() => {
            progress += progressIncrement;

            // Update progress bar
            progressBar.style.width = Math.min(progress, 100) + '%';

            // Update messages at intervals
            const messageStep = Math.floor((progress / 100) * messages.length);
            if (messageStep < messages.length && messageStep !== messageIndex) {
                messageIndex = messageStep;
                if (loadingText) loadingText.textContent = messages[messageIndex].text;
                if (loadingSubtext) loadingSubtext.textContent = messages[messageIndex].subtext;
            }

            if (progress >= 100) {
                clearInterval(progressInterval);
            }
        }, interval);
    }

    /**
     * Hides loading animation and shows results
     */
    function hideLoadingAnimation() {
        const loadingDiv = document.getElementById('loadingAnimation');
        const calculateBtn = document.getElementById('calculateBtn');

        if (loadingDiv) {
            loadingDiv.classList.add('hidden');
            loadingDiv.classList.remove('block');
        }

        // Re-enable button
        if (calculateBtn) {
            calculateBtn.disabled = false;
            calculateBtn.style.opacity = '1';
            calculateBtn.style.cursor = 'pointer';
        }
    }

    /**
     * Handles form submission and calculates the love score.
     * @param {Event} event - The form submit event
     */
    function handleSubmit(event) {
        event.preventDefault();

        if (!validateInputs()) {
            resultDiv.classList.remove('block');
            resultDiv.classList.add('hidden');
            return;
        }

        // Show loading animation
        showLoadingAnimation();

        // Calculate score (do this immediately but delay showing results)
        const score = calculateScore(name1Input.value, name2Input.value);
        const rawName1 = name1Input.value.trim();
        const rawName2 = name2Input.value.trim();
        const feedback = getFeedback(score, rawName1, rawName2);

        // After 3 seconds, hide loading and show results
        setTimeout(() => {
            hideLoadingAnimation();

            // Display results
            scoreDisplay.textContent = score + '%';
            messageDisplay.textContent = feedback.title;
            descriptionDisplay.textContent = feedback.description;

            // Show result with animation
            resultDiv.classList.remove('hidden');
            resultDiv.classList.add('block', 'animate-slideUp');

            // Show share button
            const shareSection = document.getElementById('shareSection');
            if (shareSection) {
                shareSection.classList.remove('hidden');
                shareSection.classList.add('block', 'animate-slideUp');
            }

            // Store current result for challenge link (use first name as challenger)
            window.currentResult = {
                challengerName: rawName1,
                score: score
            };

            // Announce to screen readers
            scoreDisplay.setAttribute('aria-label', `Love compatibility score: ${score} percent`);

            // Scroll to result
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 3000);
    }

    // Event Listeners
    form.addEventListener('submit', handleSubmit);

    // Challenge/Share Button Handler
    const challengeBtn = document.getElementById('challengeBtn');
    if (challengeBtn) {
        challengeBtn.addEventListener('click', async function () {
            if (!window.currentResult) {
                Toast.error('Please calculate a result first!');
                return;
            }

            const { challengerName, score } = window.currentResult;
            const challengeLink = ChallengeSystem.generateChallengeLink(challengerName, score);

            // Try Web Share API first (mobile-friendly)
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'Love Check Challenge',
                        text: `I got a ${score}% match! Can you beat me?`,
                        url: challengeLink
                    });
                    // Increment share count
                    GameState.incrementShare();
                    Toast.success('Challenge shared! 🎉');
                    return;
                } catch (err) {
                    // User cancelled or error, fall back to clipboard
                    if (err.name !== 'AbortError') {
                        console.error('Share failed:', err);
                    }
                }
            }

            // Fallback to clipboard
            try {
                await navigator.clipboard.writeText(challengeLink);
                GameState.incrementShare();
                Toast.success('Challenge link copied to clipboard! 📋');
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = challengeLink;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    GameState.incrementShare();
                    Toast.success('Challenge link copied to clipboard! 📋');
                } catch (e) {
                    Toast.error('Failed to copy link. Please try again.');
                }
                document.body.removeChild(textArea);
            }
        });
    }

    // Badge Modal Trigger
    const showBadgesBtn = document.getElementById('showBadgesBtn');
    if (showBadgesBtn) {
        showBadgesBtn.addEventListener('click', function () {
            BadgeSystem.show();
        });
    }

    // Keyboard support
    name1Input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            name2Input.focus();
        }
    });

    name2Input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    });

    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        if (question && answer && icon) {
            question.addEventListener('click', function () {
                const isExpanded = question.getAttribute('aria-expanded') === 'true';

                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherQuestion = otherItem.querySelector('.faq-question');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('.faq-icon');
                        if (otherQuestion && otherAnswer && otherIcon) {
                            otherQuestion.setAttribute('aria-expanded', 'false');
                            otherAnswer.style.maxHeight = null;
                            otherIcon.textContent = '+';
                            otherIcon.style.transform = 'rotate(0deg)';
                        }
                    }
                });

                // Toggle current item
                if (isExpanded) {
                    question.setAttribute('aria-expanded', 'false');
                    answer.style.maxHeight = null;
                    icon.textContent = '+';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    question.setAttribute('aria-expanded', 'true');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.textContent = '−';
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        }
    });
});


