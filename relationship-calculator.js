const EXPERT_HEROES_DATA = {
    cyrille: {
        name: 'Cyrille',
        avatar: 'https://via.placeholder.com/100x100/667eea/ffffff?text=C',
        totalXp: 171690,
        totalSigils: 275,
        levels: [
            200, 210, 220, 230, 240, 260, 280, 300, 320, // 1-9
            340, 360, 380, 400, 420, 440, 460, 480, 500, 520, // 10-19
            540, 560, 580, 600, 620, 640, 660, 680, 700, 730, // 20-29
            760, 790, 820, 850, 880, 910, 940, 970, 1000, 1040, // 30-39
            1080, 1120, 1160, 1200, 1240, 1280, 1320, 1360, 1400, 1450, // 40-49
            1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950, // 50-59
            2000, 2050, 2100, 2150, 2200, 2250, 2300, 2350, 2400, 2450, // 60-69
            2500, 2550, 2600, 2650, 2700, 2750, 2800, 2850, 2900, 2950, // 70-79
            3000, 3050, 3100, 3150, 3200, 3250, 3300, 3350, 3400, 3450, // 80-89
            3500, 3550, 3600, 3650, 3700, 3750, 3800, 3850, 3900, 3950  // 90-99
        ],
        sigils: [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50]
    },
    agnes: {
        name: 'Agnes',
        avatar: 'https://via.placeholder.com/100x100/764ba2/ffffff?text=A',
        totalXp: 313200,
        totalSigils: 275,
        levels: [
            240, 260, 270, 280, 290, 320, 340, 360, 390, // 1-9
            410, 440, 460, 480, 510, 530, 560, 580, 600, 630, // 10-19
            650, 680, 700, 720, 750, 770, 800, 820, 840, 880, // 20-29
            920, 950, 990, 1020, 1060, 1100, 1130, 1170, 1210, 1250, // 30-39
            1300, 1350, 1400, 1440, 1490, 1540, 1590, 1640, 1680, 1740, // 40-49
            1800, 1860, 1920, 1980, 2040, 2100, 2160, 2220, 2280, 2340, // 50-59
            2400, 2460, 2520, 2580, 2640, 2700, 2760, 2820, 2880, 2940, // 60-69
            3000, 3060, 3120, 3180, 3240, 3300, 3360, 3420, 3480, 3540, // 70-79
            3600, 3660, 3720, 3780, 3840, 3900, 3960, 4020, 4080, 4140, // 80-89
            4200, 4260, 4320, 4380, 4440, 4500, 4560, 4620, 4680, 4740  // 90-99
        ],
        sigils: [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50]
    },
    holger: {
        name: 'Holger',
        avatar: 'https://via.placeholder.com/100x100/10b981/ffffff?text=H',
        totalXp: 680430,
        totalSigils: 440,
        levels: [
            600, 630, 660, 690, 720, 780, 840, 900, 960, // 1-9
            1020, 1080, 1140, 1200, 1260, 1320, 1380, 1440, 1500, 1560, // 10-19
            1620, 1680, 1740, 1800, 1860, 1920, 1980, 2040, 2100, 2190, // 20-29
            2280, 2370, 2460, 2550, 2640, 2730, 2820, 2910, 3000, 3120, // 30-39
            3240, 3360, 3480, 3600, 3720, 3840, 3960, 4080, 4200, 4350, // 40-49
            4500, 4650, 4800, 4950, 5100, 5250, 5400, 5550, 5700, 5850, // 50-59
            6000, 6150, 6300, 6450, 6600, 6750, 6900, 7050, 7200, 7350, // 60-69
            7500, 7650, 7800, 7950, 8100, 8250, 8400, 8550, 8700, 8850, // 70-79
            9000, 9150, 9300, 9450, 9600, 9750, 9900, 10050, 10200, 10350, // 80-89
            10500, 10650, 10800, 10950, 11100, 11250, 11400, 11550, 11700, 11850 // 90-99
        ],
        sigils: [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80]
    },
    romulus: {
        name: 'Romulus',
        avatar: 'https://via.placeholder.com/100x100/f59e0b/ffffff?text=R',
        totalXp: 1507500,
        totalSigils: 1800,
        levels: [
            1100, 1160, 1210, 1270, 1320, 1430, 1540, 1650, 1760, // 1-9
            1870, 1980, 2090, 2200, 2310, 2420, 2530, 2640, 2750, 2860, // 10-19
            2970, 3080, 3190, 3300, 3410, 3520, 3630, 3740, 3850, 4020, // 20-29
            4180, 4350, 4510, 4680, 4840, 5010, 5170, 5340, 5500, 5720, // 30-39
            5940, 6160, 6380, 6600, 6820, 7040, 7260, 7480, 7700, 7980, // 40-49
            8250, 8530, 8800, 9080, 9350, 9630, 9900, 10180, 10450, 10730, // 50-59
            11000, 11280, 11550, 11830, 12110, 12380, 12660, 12930, 13210, 13480, // 60-69
            13750, 14030, 14300, 14580, 14850, 15130, 15400, 15680, 15950, 16230, // 70-79
            16500, 16780, 17050, 17330, 17600, 17880, 18150, 18430, 18700, 18980, // 80-89
            19250, 19530, 19800, 20080, 20350, 20630, 20900, 21180, 21450, 21730 // 90-99
        ],
        sigils: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 240, 0, 0, 0, 0, 0, 0, 0, 0, 0, 280, 0, 0, 0, 0, 0, 0, 0, 0, 0, 320, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360]
    }
};

const AFFINITY_MATERIALS = {
    compass: {
        name: 'Compass',
        icon: 'https://via.placeholder.com/40x40/3b82f6/ffffff?text=🧭',
        fallback: '🧭',
        value: 10
    },
    fieryHeart: {
        name: 'Fiery Heart',
        icon: 'https://via.placeholder.com/40x40/ef4444/ffffff?text=❤️',
        fallback: '❤️',
        value: 100
    },
    sailOfConquest: {
        name: 'Sail of Conquest',
        icon: 'https://via.placeholder.com/40x40/10b981/ffffff?text=⛵',
        fallback: '⛵',
        value: 1000
    },
    expertSigil: {
        name: 'Expert Sigil',
        icon: 'https://via.placeholder.com/40x40/f59e0b/ffffff?text=🗡️',
        fallback: '🗡️',
        value: 0
    }
};

const RELATIONSHIP_STATUSES = [
    'Stranger',
    'Acquaintance',
    'Acquaintance 2',
    'Acquaintance 3',
    'Casual 1',
    'Casual 2',
    'Casual 3',
    'Close 1',
    'Close 2',
    'Close 3',
    'Intimate'
];

class RelationshipCalculator {
    constructor() {
        this.dropdowns = new Map();
        this.inventoryInputs = {};
        this.selectedHero = 'cyrille';
        
        this.initializeInventoryInputs();
        this.initializeIcons();
        this.initializeDropdowns();
        this.setupEventListeners();
        this.loadSavedState();
        this.updateHeroDisplay();
    }

    initializeInventoryInputs() {
        Object.keys(AFFINITY_MATERIALS).forEach(material => {
            const input = document.getElementById(`inventory-${material}`);
            if (input) {
                const saved = localStorage.getItem(`relationship-inventory-${material}`);
                if (saved) {
                    input.value = saved;
                }
                this.inventoryInputs[material] = input;
            }
        });
    }
    
    initializeIcons() {
        Object.keys(AFFINITY_MATERIALS).forEach(materialKey => {
            const container = document.querySelector(`.material-icon[data-icon-for="${materialKey}"]`);
            this.loadIcon(container, AFFINITY_MATERIALS[materialKey]);
        });
    }

    async loadIcon(container, materialData) {
        if (!container || !materialData) return;

        try {
            const img = new Image();
            img.onload = () => {
                container.innerHTML = '';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'contain';
                container.appendChild(img);
            };
            img.onerror = () => {
                container.textContent = materialData.fallback;
            };
            img.src = materialData.icon;
        } catch (error) {
            container.textContent = materialData.fallback;
        }
    }

    initializeDropdowns() {
        const levelOptions = [];
        for (let i = 1; i <= 100; i++) {
            levelOptions.push({
                value: i,
                text: i.toString()
            });
        }

        const currentLevelDropdownEl = document.getElementById('current-level-dropdown');
        const targetLevelDropdownEl = document.getElementById('target-level-dropdown');
        
        if (currentLevelDropdownEl && targetLevelDropdownEl) {
            const currentLevelDropdown = new Dropdown(currentLevelDropdownEl, { items: levelOptions });
            const targetLevelDropdown = new Dropdown(targetLevelDropdownEl, { items: levelOptions });

            currentLevelDropdown.setValue('1');
            targetLevelDropdown.setValue('100');

            this.dropdowns.set('current-level', currentLevelDropdown);
            this.dropdowns.set('target-level', targetLevelDropdown);
        }
    }

    setupEventListeners() {
        document.querySelectorAll('.hero-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.hero-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.selectedHero = btn.dataset.hero;
                this.updateHeroDisplay();
                this.saveFormState();
            });
        });

        const currentLevelDropdown = this.dropdowns.get('current-level');
        const targetLevelDropdown = this.dropdowns.get('target-level');
        
        if (currentLevelDropdown) {
            currentLevelDropdown.element.addEventListener('change', (e) => {
                this.updateProgressDisplay();
                this.saveFormState();
            });
        }

        if (targetLevelDropdown) {
            targetLevelDropdown.element.addEventListener('change', (e) => {
                this.updateProgressDisplay();
                this.saveFormState();
            });
        }

        Object.keys(this.inventoryInputs).forEach(material => {
            if (this.inventoryInputs[material]) {
                this.inventoryInputs[material].addEventListener('input', (e) => {
                    localStorage.setItem(`relationship-inventory-${material}`, e.target.value || '0');
                });
            }
        });

        const relationshipForm = document.getElementById('relationship-form');
        if (relationshipForm) {
            relationshipForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.calculateRelationship();
            });
        }

        document.addEventListener('languageChanged', (e) => {
            this.updateContent(e.detail.translations);
        });

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                this.calculateRelationship();
            }
        });

        document.addEventListener('change', () => this.saveFormState());
        document.addEventListener('input', this.debounce(() => this.saveFormState(), 500));
    }

    updateHeroDisplay() {
        const heroData = EXPERT_HEROES_DATA[this.selectedHero];
        if (!heroData) return;

        const heroAvatar = document.getElementById('hero-avatar');
        const heroName = document.getElementById('hero-name');
        
        if (heroAvatar) {
            heroAvatar.src = heroData.avatar;
            heroAvatar.alt = heroData.name;
        }
        
        if (heroName) {
            heroName.textContent = heroData.name;
        }

        this.updateProgressDisplay();
    }

    updateProgressDisplay() {
        const currentLevelDropdown = this.dropdowns.get('current-level');
        if (!currentLevelDropdown) return;

        const currentLevel = parseInt(currentLevelDropdown.getValue() || '1');
        const heroData = EXPERT_HEROES_DATA[this.selectedHero];
        
        if (!heroData || currentLevel < 1 || currentLevel > 100) return;

        const relationshipStatus = this.getRelationshipStatus(currentLevel);
        const currentRelationshipEl = document.getElementById('current-relationship');
        if (currentRelationshipEl) {
            currentRelationshipEl.textContent = relationshipStatus;
        }

        const nextXp = currentLevel < 100 ? heroData.levels[currentLevel - 1] : heroData.levels[98];
        
        const progressValues = document.getElementById('affinity-values');
        const progressFill = document.getElementById('affinity-progress-fill');
        
        if (progressValues && progressFill) {
            if (currentLevel >= 100) {
                progressValues.textContent = `MAX LEVEL`;
                progressFill.style.width = '100%';
            } else {
                progressValues.textContent = `0 / ${this.formatNumber(nextXp)}`;
                progressFill.style.width = '0%';
            }
        }
    }

    getRelationshipStatus(level) {
        if (level <= 9) return RELATIONSHIP_STATUSES[0];
        if (level <= 19) return RELATIONSHIP_STATUSES[1];
        if (level <= 29) return RELATIONSHIP_STATUSES[2];
        if (level <= 39) return RELATIONSHIP_STATUSES[3];
        if (level <= 49) return RELATIONSHIP_STATUSES[4];
        if (level <= 59) return RELATIONSHIP_STATUSES[5];
        if (level <= 69) return RELATIONSHIP_STATUSES[6];
        if (level <= 79) return RELATIONSHIP_STATUSES[7];
        if (level <= 89) return RELATIONSHIP_STATUSES[8];
        if (level <= 99) return RELATIONSHIP_STATUSES[9];
        return RELATIONSHIP_STATUSES[10];
    }

    calculateRelationship() {
        this.clearErrors();
        
        const currentLevelDropdown = this.dropdowns.get('current-level');
        const targetLevelDropdown = this.dropdowns.get('target-level');
        
        const currentLevel = parseInt(currentLevelDropdown?.getValue() || '1');
        const targetLevel = parseInt(targetLevelDropdown?.getValue() || '100');
        
        const t = window.languageManager?.getCurrentTranslations() || {};
        
        if (targetLevel <= currentLevel) {
            this.showError(t.targetLevelMustBeHigher || 'Target level must be higher than current level');
            return;
        }

        const heroData = EXPERT_HEROES_DATA[this.selectedHero];
        if (!heroData) return;

        let totalXpNeeded = 0;
        let totalSigilsNeeded = 0;

        for (let level = currentLevel; level < targetLevel; level++) {
            if (level > 0 && level <= 99) {
                totalXpNeeded += heroData.levels[level - 1];
                totalSigilsNeeded += heroData.sigils[level - 1];
            }
        }

        const inventory = this.getInventoryAmounts();
        this.displayResults(totalXpNeeded, totalSigilsNeeded, inventory, currentLevel, targetLevel);
    }

    getInventoryAmounts() {
        const amounts = {};
        Object.keys(AFFINITY_MATERIALS).forEach(material => {
            amounts[material] = parseInt(this.inventoryInputs[material]?.value || '0') || 0;
        });
        return amounts;
    }

    displayResults(totalXpNeeded, totalSigilsNeeded, inventory, currentLevel, targetLevel) {
        const t = window.languageManager?.getCurrentTranslations() || {};
        const resultsSection = document.getElementById('relationship-results');
        
        const totalAffinityFromItems = 
            inventory.compass * AFFINITY_MATERIALS.compass.value +
            inventory.fieryHeart * AFFINITY_MATERIALS.fieryHeart.value +
            inventory.sailOfConquest * AFFINITY_MATERIALS.sailOfConquest.value;

        const affinityNeeded = Math.max(0, totalXpNeeded - totalAffinityFromItems);
        const sigilsNeeded = Math.max(0, totalSigilsNeeded - inventory.expertSigil);

        const affinitySufficient = totalAffinityFromItems >= totalXpNeeded;
        const sigilsSufficient = inventory.expertSigil >= totalSigilsNeeded;

        const heroData = EXPERT_HEROES_DATA[this.selectedHero];
        const currentStatus = this.getRelationshipStatus(currentLevel);
        const targetStatus = this.getRelationshipStatus(targetLevel);

        const affinityCard = `
            <div class="result-card">
                <div class="result-card-header">
                    <h4 class="result-card-title">Total Affinity Required</h4>
                </div>
                <div class="result-needed ${affinitySufficient ? 'sufficient' : 'insufficient'}">
                    <div class="result-icon">❤️</div>
                    <div class="result-info">
                        <div class="result-amount ${affinitySufficient ? 'sufficient' : 'insufficient'}">
                            ${affinitySufficient ? '✓ Sufficient' : `Need ${this.formatNumber(affinityNeeded)} more`}
                        </div>
                        <div class="result-status">
                            ${affinitySufficient ? 'You have enough affinity!' : 'Additional affinity needed'}
                        </div>
                        <div class="result-breakdown">
                            Total Required: ${this.formatNumber(totalXpNeeded)} | 
                            Current: ${this.formatNumber(totalAffinityFromItems)} | 
                            ${affinitySufficient ? 
                                `Surplus: ${this.formatNumber(totalAffinityFromItems - totalXpNeeded)}` : 
                                `Missing: ${this.formatNumber(affinityNeeded)}`
                            }
                        </div>
                    </div>
                </div>
            </div>
        `;

        const sigilCard = totalSigilsNeeded > 0 ? `
            <div class="result-card">
                <div class="result-card-header">
                    <h4 class="result-card-title">Expert Sigils Required</h4>
                </div>
                <div class="result-needed ${sigilsSufficient ? 'sufficient' : 'insufficient'}">
                    <div class="result-icon">🗡️</div>
                    <div class="result-info">
                        <div class="result-amount ${sigilsSufficient ? 'sufficient' : 'insufficient'}">
                            ${sigilsSufficient ? '✓ Sufficient' : `Need ${sigilsNeeded} more`}
                        </div>
                        <div class="result-status">
                            ${sigilsSufficient ? 'You have enough sigils!' : 'Additional sigils needed'}
                        </div>
                        <div class="result-breakdown">
                            Total Required: ${totalSigilsNeeded} | 
                            Current: ${inventory.expertSigil} | 
                            ${sigilsSufficient ? 
                                `Surplus: ${inventory.expertSigil - totalSigilsNeeded}` : 
                                `Missing: ${sigilsNeeded}`
                            }
                        </div>
                    </div>
                </div>
            </div>
        ` : '';

        const relationshipCard = `
            <div class="result-card relationship-progress-card">
                <div class="result-card-header">
                    <h4 class="result-card-title">Relationship Progress</h4>
                </div>
                <div class="result-needed sufficient">
                    <div class="result-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </div>
                    <div class="result-info">
                        <div class="result-amount sufficient">
                            ${currentStatus} → ${targetStatus}
                        </div>
                        <div class="result-status">
                            Level ${currentLevel} to Level ${targetLevel}
                        </div>
                        <div class="result-breakdown">
                            Upgrading relationship with ${heroData.name}
                        </div>
                    </div>
                </div>
            </div>
        `;

        resultsSection.innerHTML = `
            <div class="results-container">
                <div class="results-header">
                    <h3 class="results-title">Relationship Requirements</h3>
                    <p class="results-subtitle">Materials needed for ${heroData.name} Level ${currentLevel} → ${targetLevel}</p>
                </div>
                <div class="results-grid">
                    ${affinityCard}
                    ${sigilCard}
                    ${relationshipCard}
                </div>
            </div>
        `;
    }

    clearErrors() {
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    showError(message) {
        const resultsSection = document.getElementById('relationship-results');
        resultsSection.innerHTML = `
            <div class="error-message">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>${message}</span>
            </div>
        `;
    }

    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num.toLocaleString();
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    saveFormState() {
        localStorage.setItem('relationship-selected-hero', this.selectedHero);
        
        this.dropdowns.forEach((dropdown, key) => {
            localStorage.setItem(`relationship-dropdown-${key}`, dropdown.getValue());
        });
    }

    loadSavedState() {
        const savedHero = localStorage.getItem('relationship-selected-hero');
        if (savedHero && EXPERT_HEROES_DATA[savedHero]) {
            this.selectedHero = savedHero;
            
            document.querySelectorAll('.hero-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.hero === savedHero);
            });
        }

        this.dropdowns.forEach((dropdown, key) => {
            const savedValue = localStorage.getItem(`relationship-dropdown-${key}`);
            if (savedValue !== null) {
                dropdown.setValue(savedValue);
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

        Object.keys(AFFINITY_MATERIALS).forEach(materialKey => {
            const nameElement = document.querySelector(`[data-material="${materialKey}"]`);
            if (nameElement && translations[materialKey]) {
                nameElement.textContent = translations[materialKey];
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        window.relationshipCalculator = new RelationshipCalculator();
        
        console.log('%cWhiteout Survival Calculator v2.0 - Relationship Calculator', 'color: #667eea; font-size: 16px; font-weight: bold;');
        console.log('%cReady! 💝', 'color: #764ba2; font-weight: bold;');
        console.log('Features:');
        console.log('• 4 Expert Heroes with unique XP requirements');
        console.log('• Affinity materials calculation');
        console.log('• Expert Sigil requirements');
        console.log('• Relationship status tracking');
        console.log('• Multi-language support');
        console.log('Keyboard shortcuts:');
        console.log('• Ctrl/Cmd + Enter: Calculate');
        console.log('• Ctrl/Cmd + D: Toggle theme');
        console.log('• Escape: Close dropdowns');
        
    } catch (error) {
        console.error('Error initializing relationship calculator:', error);
    }
});