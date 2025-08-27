class ExpertHeroesPage {
    constructor() {
        this.setupEventListeners();
        this.setupAnimations();
    }

    setupEventListeners() {
        document.addEventListener('languageChanged', (e) => {
            this.updateContent(e.detail.translations);
        });

        document.querySelectorAll('a.coming-soon').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.showComingSoonMessage();
            });
        });

        document.querySelectorAll('.hero-preview-card').forEach(card => {
            card.addEventListener('click', () => {
                const heroName = card.dataset.hero;
                this.showHeroDetails(heroName);
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

        document.querySelectorAll('.tool-card, .hero-preview-card').forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(element);
        });
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
            <span>Skill Upgrades calculator is coming soon! Stay tuned for updates.</span>
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

    showHeroDetails(heroName) {
        const heroData = {
            cyrille: { name: 'Cyrille', description: 'A skilled strategist with balanced growth requirements.' },
            agnes: { name: 'Agnes', description: 'A powerful mage with moderate XP requirements.' },
            holger: { name: 'Holger', description: 'A mighty warrior requiring substantial resources.' },
            romulus: { name: 'Romulus', description: 'A legendary hero with the highest XP and sigil costs.' }
        };

        const hero = heroData[heroName];
        if (!hero) return;

        const existingModal = document.querySelector('.hero-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'hero-modal';
        modal.innerHTML = `
            <div class="hero-modal-overlay"></div>
            <div class="hero-modal-content">
                <div class="hero-modal-header">
                    <h3>${hero.name}</h3>
                    <button class="hero-modal-close">&times;</button>
                </div>
                <div class="hero-modal-body">
                    <p>${hero.description}</p>
                    <div class="hero-modal-actions">
                        <a href="relationship-calculator.html" class="btn btn-primary">
                            Calculate Relationship
                        </a>
                    </div>
                </div>
            </div>
        `;

        const modalStyles = document.createElement('style');
        modalStyles.textContent = `
            .hero-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
            }
            
            .hero-modal-overlay {
                position: absolute;
                inset: 0;
                background-color: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(4px);
            }
            
            .hero-modal-content {
                position: relative;
                background-color: var(--bg-primary);
                border: 1px solid var(--border);
                border-radius: 1rem;
                max-width: 400px;
                width: 100%;
                box-shadow: var(--shadow-lg);
                animation: modalSlideIn 0.3s ease-out;
            }
            
            .hero-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem 1.5rem 1rem;
                border-bottom: 1px solid var(--border);
            }
            
            .hero-modal-header h3 {
                margin: 0;
                font-size: 1.25rem;
                font-weight: 600;
                color: var(--text-primary);
            }
            
            .hero-modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--text-secondary);
                cursor: pointer;
                padding: 0;
                width: 2rem;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0.5rem;
                transition: all 0.2s ease;
            }
            
            .hero-modal-close:hover {
                background-color: var(--bg-secondary);
                color: var(--text-primary);
            }
            
            .hero-modal-body {
                padding: 1rem 1.5rem 1.5rem;
            }
            
            .hero-modal-body p {
                color: var(--text-secondary);
                margin-bottom: 1.5rem;
                line-height: 1.5;
            }
            
            .hero-modal-actions {
                display: flex;
                justify-content: center;
            }
            
            @keyframes modalSlideIn {
                from {
                    opacity: 0;
                    transform: translateY(-1rem) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
        `;

        document.head.appendChild(modalStyles);
        document.body.appendChild(modal);

        const closeModal = () => {
            modal.remove();
            modalStyles.remove();
        };

        modal.querySelector('.hero-modal-close').addEventListener('click', closeModal);
        modal.querySelector('.hero-modal-overlay').addEventListener('click', closeModal);
        
        document.addEventListener('keydown', function escapeHandler(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escapeHandler);
            }
        });
    }

    updateContent(translations) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        document.title = translations.expertHeroesPageTitle || 'Expert Heroes Calculator - Whiteout Survival';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        new ExpertHeroesPage();
        
        console.log('%cWhiteout Survival Calculator v2.0 - Expert Heroes', 'color: #667eea; font-size: 16px; font-weight: bold;');
        console.log('%cWelcome to Expert Heroes! ⚔️', 'color: #764ba2; font-weight: bold;');
        console.log('Available tools:');
        console.log('• Relationship Calculator - Calculate affinity and sigil requirements');
        console.log('• Skill Upgrades - Coming Soon!');
    } catch (error) {
        console.error('Error initializing expert heroes page:', error);
    }
});