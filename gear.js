class GearCalculator {
    constructor() {
        this.dropdowns = new Map();
        this.gearPieces = ['helmet', 'chestplate', 'pants', 'watch', 'ring', 'staff'];
        this.inventoryInputs = {};
        
        this.initializeInventoryInputs();
        this.initializeIcons();
        this.initializeDropdowns();
        this.setupEventListeners();
        this.loadSavedState();
    }

    initializeInventoryInputs() {
        Object.keys(MATERIALS).forEach(material => {
            const input = document.getElementById(`inventory-${material}`);
            if (input) {
                const saved = localStorage.getItem(`inventory-${material}`);
                if (saved) {
                    input.value = saved;
                }
                this.inventoryInputs[material] = input;
            }
        });
    }
    
    initializeIcons() {
        Object.keys(MATERIALS).forEach(materialKey => {
            const container = document.querySelector(`.material-icon[data-icon-for="${materialKey}"]`);
            loadIcon(container, MATERIALS[materialKey]);
        });

        this.gearPieces.forEach(pieceKey => {
            const card = document.querySelector(`.gear-card[data-piece="${pieceKey}"]`);
            if (card) {
                const container = card.querySelector('.gear-icon');
                loadIcon(container, GEAR_PIECES[pieceKey]);
            }
        });
    }


    initializeDropdowns() {
        const tierOptions = GEAR_TIERS.map((tier, index) => ({
            value: index,
            text: tier.name || "None"
        }));

        const allCurrentDropdownEl = document.getElementById('all-current-dropdown');
        const allDesiredDropdownEl = document.getElementById('all-desired-dropdown');
        
        if (allCurrentDropdownEl && allDesiredDropdownEl) {
            const allCurrentDropdown = new Dropdown(allCurrentDropdownEl, { items: tierOptions });
            const allDesiredDropdown = new Dropdown(allDesiredDropdownEl, { items: tierOptions });

            this.dropdowns.set('all-current', allCurrentDropdown);
            this.dropdowns.set('all-desired', allDesiredDropdown);
        }

        this.gearPieces.forEach(piece => {
            const card = document.querySelector(`.gear-card[data-piece="${piece}"]`);
            if (!card) return;

            const dropdownElements = card.querySelectorAll('.gear-controls .dropdown');
            if (dropdownElements.length >= 2) {
                const currentDropdownEl = dropdownElements[0];
                const desiredDropdownEl = dropdownElements[1];

                const currentDropdown = new Dropdown(currentDropdownEl, { items: tierOptions });
                const desiredDropdown = new Dropdown(desiredDropdownEl, { items: tierOptions });

                this.dropdowns.set(`${piece}-current`, currentDropdown);
                this.dropdowns.set(`${piece}-desired`, desiredDropdown);
            }
        });
    }

    setupEventListeners() {
        const allCurrentDropdown = this.dropdowns.get('all-current');
        const allDesiredDropdown = this.dropdowns.get('all-desired');
        
        if (allCurrentDropdown) {
            allCurrentDropdown.element.addEventListener('change', (e) => {
                this.setAllCurrentLevels(e.detail.value);
            });
        }

        if (allDesiredDropdown) {
            allDesiredDropdown.element.addEventListener('change', (e) => {
                this.setAllDesiredLevels(e.detail.value);
            });
        }

        Object.keys(this.inventoryInputs).forEach(material => {
            if (this.inventoryInputs[material]) {
                this.inventoryInputs[material].addEventListener('input', (e) => {
                    localStorage.setItem(`inventory-${material}`, e.target.value || '0');
                });
            }
        });

        this.gearPieces.forEach(piece => {
            const checkbox = document.getElementById(`include-${piece}`);
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    const card = document.querySelector(`.gear-card[data-piece="${piece}"]`);
                    card?.classList.toggle('disabled', !checkbox.checked);
                });
            }
        });

        const gearForm = document.getElementById('gear-form');
        if (gearForm) {
            gearForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.calculateUpgrades();
            });
        }

        document.addEventListener('languageChanged', (e) => {
            this.updateContent(e.detail.translations);
        });

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                this.calculateUpgrades();
            }
        });

        document.addEventListener('change', () => this.saveFormState());
        document.addEventListener('input', debounce(() => this.saveFormState(), 500));
    }

    setAllCurrentLevels(value) {
        this.gearPieces.forEach(piece => {
            const dropdown = this.dropdowns.get(`${piece}-current`);
            if (dropdown) {
                dropdown.setValue(value);
            }
        });
    }

    setAllDesiredLevels(value) {
        this.gearPieces.forEach(piece => {
            const dropdown = this.dropdowns.get(`${piece}-desired`);
            if (dropdown) {
                dropdown.setValue(value);
            }
        });
    }

    getInventoryAmounts() {
        const amounts = {};
        Object.keys(MATERIALS).forEach(material => {
            amounts[material] = parseInt(this.inventoryInputs[material]?.value || '0') || 0;
        });
        return amounts;
    }

    calculateUpgrades() {
        this.clearErrors();
        
        const totalCost = { ingot: 0, potion: 0, scroll: 0, amber: 0 };
        let totalSvsPoints = 0;
        let selectedPieces = 0;
        let hasErrors = false;
        const errors = [];
        const t = window.languageManager.getCurrentTranslations();

        this.gearPieces.forEach(piece => {
            const checkbox = document.getElementById(`include-${piece}`);
            if (!checkbox?.checked) return;

            selectedPieces++;
            
            const currentDropdown = this.dropdowns.get(`${piece}-current`);
            const desiredDropdown = this.dropdowns.get(`${piece}-desired`);
            
            const currentIndex = parseInt(currentDropdown?.getValue() || '0');
            const desiredIndex = parseInt(desiredDropdown?.getValue() || '0');

            const pieceName = piece.charAt(0).toUpperCase() + piece.slice(1);

            if (!desiredDropdown?.getValue() || desiredIndex === 0) {
                return;
            }

            if (desiredIndex <= currentIndex) {
                errors.push(`${pieceName}${t.desiredLevelMustBeHigher}`);
                this.addError(piece);
                hasErrors = true;
                return;
            }

            for (let i = currentIndex + 1; i <= desiredIndex; i++) {
                const tier = GEAR_TIERS[i];
                if (tier) {
                    totalCost.ingot += tier.ingot;
                    totalCost.potion += tier.potion;
                    totalCost.scroll += tier.scroll;
                    totalCost.amber += tier.amber;
                    totalSvsPoints += tier.svsPoints;
                }
            }
        });

        if (hasErrors) {
            this.showError(errors.join('<br>'));
            return;
        }
        
        const piecesWithUpgrades = this.gearPieces.filter(piece => {
            const checkbox = document.getElementById(`include-${piece}`);
            if (!checkbox?.checked) return false;
            
            const currentDropdown = this.dropdowns.get(`${piece}-current`);
            const desiredDropdown = this.dropdowns.get(`${piece}-desired`);
            
            const currentIndex = parseInt(currentDropdown?.getValue() || '0');
            const desiredIndex = parseInt(desiredDropdown?.getValue() || '0');
            
            return desiredIndex > 0 && desiredIndex > currentIndex;
        }).length;

        if (selectedPieces > 0 && piecesWithUpgrades === 0 && !hasErrors) {
             this.showError(t.desiredLevelMustBeHigher.replace(':',''));
             return;
        }
        
        if (piecesWithUpgrades === 0) {
            this.showError(t.selectAtLeastOnePiece);
            return;
        }

        const inventory = this.getInventoryAmounts();
        this.displayResults(totalCost, inventory, piecesWithUpgrades, totalSvsPoints);
    }

    displayResults(totalCost, inventory, selectedPieces, totalSvsPoints) {
        const t = window.languageManager.getCurrentTranslations();
        const resultsSection = document.getElementById('gear-results');
        
        const needed = {};
        Object.keys(MATERIALS).forEach(material => {
            needed[material] = Math.max(0, totalCost[material] - inventory[material]);
        });

        const resultCards = Object.keys(MATERIALS).map(material => {
            const materialData = MATERIALS[material];
            const total = totalCost[material];
            const have = inventory[material];
            const need = needed[material];
            const sufficient = have >= total;

            return `
                <div class="result-card">
                    <div class="result-card-header">
                        <h4 class="result-card-title">${materialData.name}</h4>
                    </div>
                    <div class="result-needed ${sufficient ? 'sufficient' : 'insufficient'}">
                        <div class="result-icon" data-material-icon="${material}">${materialData.fallback}</div>
                        <div class="result-info">
                            <div class="result-amount ${sufficient ? 'sufficient' : 'insufficient'}">
                                ${sufficient ? t.sufficient : `${t.needMore} ${formatNumber(need)}`}
                            </div>
                            <div class="result-status">
                                ${sufficient ? t.youHaveEnough : t.additionalMaterialsNeeded}
                            </div>
                            <div class="result-breakdown">
                                ${t.totalRequired}: ${formatNumber(total)} | 
                                ${t.current}: ${formatNumber(have)} | 
                                ${sufficient ? 
                                    `${t.surplus}: ${formatNumber(have - total)}` : 
                                    `${t.missing}: ${formatNumber(need)}`
                                }
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const svsPointsCard = totalSvsPoints > 0 ? `
            <div class="result-card svs-points-card">
                <div class="result-card-header">
                    <h4 class="result-card-title">${t.svsPointsGained || 'SvS Points Gained'}</h4>
                </div>
                <div class="result-needed sufficient">
                    <div class="result-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                        </svg>
                    </div>
                    <div class="result-info">
                        <div class="result-amount sufficient">
                            +${formatNumber(totalSvsPoints)}
                        </div>
                        <div class="result-status">
                            ${t.totalSvsPoints || 'Total SvS Points'}
                        </div>
                        <div class="result-breakdown">
                            ${t.svsPointsGained || 'SvS Points gained from upgrades'}
                        </div>
                    </div>
                </div>
            </div>
        ` : '';

        resultsSection.innerHTML = `
            <div class="results-container">
                <div class="results-header">
                    <h3 class="results-title">${t.upgradeAnalysis}</h3>
                    <p class="results-subtitle">${t.materialsNeededFor} ${selectedPieces} ${t.selectedPieces}</p>
                </div>
                <div class="results-grid">
                    ${resultCards}
                    ${svsPointsCard}
                </div>
            </div>
        `;

        Object.keys(MATERIALS).forEach(material => {
            const iconContainer = resultsSection.querySelector(`[data-material-icon="${material}"]`);
            if (iconContainer) {
                loadIcon(iconContainer, MATERIALS[material]);
            }
        });
    }

    clearErrors() {
        document.querySelectorAll('.gear-card').forEach(card => {
            card.classList.remove('error');
        });
        
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    addError(piece) {
        const card = document.querySelector(`.gear-card[data-piece="${piece}"]`);
        if (card) {
            card.classList.add('error');
        }
    }

    showError(message) {
        const resultsSection = document.getElementById('gear-results');
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

    saveFormState() {
        this.gearPieces.forEach(piece => {
            const checkbox = document.getElementById(`include-${piece}`);
            const currentDropdown = this.dropdowns.get(`${piece}-current`);
            const desiredDropdown = this.dropdowns.get(`${piece}-desired`);

            if (checkbox) {
                localStorage.setItem(`gear-${piece}-enabled`, checkbox.checked);
            }
            if (currentDropdown) {
                localStorage.setItem(`gear-${piece}-current`, currentDropdown.getValue());
            }
            if (desiredDropdown) {
                localStorage.setItem(`gear-${piece}-desired`, desiredDropdown.getValue());
            }
        });
    }

    loadSavedState() {
        this.gearPieces.forEach(piece => {
            const checkbox = document.getElementById(`include-${piece}`);
            const currentDropdown = this.dropdowns.get(`${piece}-current`);
            const desiredDropdown = this.dropdowns.get(`${piece}-desired`);

            const enabled = localStorage.getItem(`gear-${piece}-enabled`);
            if (enabled !== null && checkbox) {
                checkbox.checked = enabled === 'true';
                const card = document.querySelector(`.gear-card[data-piece="${piece}"]`);
                card?.classList.toggle('disabled', !checkbox.checked);
            }

            const currentValue = localStorage.getItem(`gear-${piece}-current`);
            const desiredValue = localStorage.getItem(`gear-${piece}-desired`);

            if (currentValue && currentDropdown) {
                currentDropdown.setValue(currentValue);
            } else if (currentDropdown) {
                currentDropdown.setValue('0');
            }
            if (desiredValue && desiredDropdown) {
                desiredDropdown.setValue(desiredValue);
            } else if (desiredDropdown) {
                 desiredDropdown.setValue('0');
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
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        window.calculator = new GearCalculator();
        
        console.log('%cWhiteout Survival Calculator v2.0 - Chief Gear', 'color: #667eea; font-size: 16px; font-weight: bold;');
        console.log('%cReady! ⚙️', 'color: #764ba2; font-weight: bold;');
        console.log('Keyboard shortcuts:');
        console.log('• Ctrl/Cmd + Enter: Calculate');
        console.log('• Ctrl/Cmd + D: Toggle theme');
        console.log('• Escape: Close dropdowns');
        
    } catch (error) {
        console.error('Error initializing gear calculator:', error);
    }
});