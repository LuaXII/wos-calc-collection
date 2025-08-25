class HomePage {
    constructor() {
        this.gameId = '369628693';
        this.setupEventListeners();
        this.setupAnimations();
    }

    setupEventListeners() {
        const copyBtn = document.querySelector('.copy-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => this.copyGameId());
        }

        document.addEventListener('languageChanged', (e) => {
            this.updateContent(e.detail.translations);
        });

        document.querySelectorAll('a.coming-soon').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.showComingSoonMessage();
            });
        });
    }

    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.calculator-card, .support-card').forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(element);
        });
    }

    copyGameId() {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(this.gameId).then(() => {
                this.showCopyFeedback();
            }).catch(() => {
                this.fallbackCopy();
            });
        } else {
            this.fallbackCopy();
        }
    }

    fallbackCopy() {
        const textArea = document.createElement('textarea');
        textArea.value = this.gameId;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showCopyFeedback();
        } catch (error) {
            console.error('Copy failed:', error);
        }
        
        document.body.removeChild(textArea);
    }

    showCopyFeedback() {
        const copyBtn = document.querySelector('.copy-btn');
        if (!copyBtn) return;
        
        const existingFeedback = copyBtn.querySelector('.copy-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }
        
        const feedback = document.createElement('div');
        feedback.className = 'copy-feedback';
        feedback.textContent = 'Copied!';
        feedback.style.cssText = `
            position: absolute;
            top: -2.5rem;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--success);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.2s ease;
            pointer-events: none;
            z-index: 1000;
        `;
        
        copyBtn.style.position = 'relative';
        copyBtn.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            feedback.style.opacity = '0';
            setTimeout(() => {
                if (feedback.parentNode) {
                    feedback.parentNode.removeChild(feedback);
                }
            }, 200);
        }, 2000);
    }

    showComingSoonMessage() {
        const existingMessage = document.querySelector('.coming-soon-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const message = document.createElement('div');
        message.className = 'coming-soon-message success-message';
        message.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9 12l2 2 4-4"/>
            </svg>
            <span>This feature is coming soon! Stay tuned for updates.</span>
        `;
        
        const container = document.querySelector('.container');
        if (container) {
            container.insertBefore(message, container.firstChild);
            
            setTimeout(() => {
                if (message.parentNode) {
                    message.remove();
                }
            }, 5000);
        }
    }

    updateContent(translations) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        document.title = translations.title;

        const logoH1 = document.querySelector('.logo h1');
        const logoSub = document.querySelector('.logo-sub');
        if (logoH1) logoH1.textContent = translations.logoMain;
        if (logoSub) logoSub.textContent = translations.logoSub;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        new HomePage();
        
        console.log('%cWhiteout Survival Calculator v2.0', 'color: #667eea; font-size: 16px; font-weight: bold;');
        console.log('%cWelcome! 🎮', 'color: #764ba2; font-weight: bold;');
        console.log('Available pages:');
        console.log('• Chief Gear Calculator - gear.html');
        console.log('• Chief Charms Calculator - Coming Soon!');
    } catch (error) {
        console.error('Error initializing home page:', error);
    }
});