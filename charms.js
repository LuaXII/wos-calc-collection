class CharmsCalculator {
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
        Object.keys(CHARM_MATERIALS).forEach(material => {
            const input = document.getElementById(`inventory-${material}`);
            if (input) {
                const saved = localStorage.getItem(`charm-inventory-${material}`);
                if (saved) {
                    input.value = saved;
                }
                this.inventoryInputs[material] = input;
            }
        });
    }
    
    initializeIcons() {
        Object.keys(CHARM_MATERIALS).forEach(materialKey => {
            const container = document.querySelector(`.material-icon[data-icon-for="${materialKey}"]`);
            loadIcon(container, CHARM_MATERIALS[materialKey]);
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
        const levelOptions = [];
        for (let i = 0; i <= 16; i++) {
            levelOptions.push({
                value: i,
                text: i.toString()
            });
        }

        const allFromDropdownEl = document.getElementById('all-from-dropdown');
        const allToDropdownEl = document.getElementById('all-to-dropdown');
        
        if (allFromDropdownEl && allToDropdownEl) {
            const allFromDropdown = new Dropdown(allFromDropdownEl, { items: levelOptions });
            const allToDropdown = new Dropdown(allToDropdownEl, { items: levelOptions });

            allFromDropdown.setValue('0');
            allToDropdown.setValue('0');

            this.dropdowns.set('all-from', allFromDropdown);
            this.dropdowns.set('all-to', allToDropdown);
        }

        this.gearPieces.forEach(piece => {
            const card = document.querySelector(`.gear-card[data-piece="${piece}"]`);
            if (!card) return;

            const pieceFromDropdownEl = card.querySelector('.piece-from-dropdown');
            const pieceToDropdownEl = card.querySelector('.piece-to-dropdown');
            
            if (pieceFromDropdownEl && pieceToDropdownEl) {
                const pieceFromDropdown = new Dropdown(pieceFromDropdownEl, { items: levelOptions });
                const pieceToDropdown = new Dropdown(pieceToDropdownEl, { items: levelOptions });
                
                pieceFromDropdown.setValue('0');
                pieceToDropdown.setValue('0');
                
                this.dropdowns.set(`${piece}-piece-from`, pieceFromDropdown);
                this.dropdowns.set(`${piece}-piece-to`, pieceToDropdown);
            }

            for (let slot = 1; slot <= 3; slot++) {
                const slotContainer = card.querySelector(`[data-slot="${slot}"]`);
                if (slotContainer) {
                    const slotDropdowns = slotContainer.querySelectorAll('.dropdown');
                    if (slotDropdowns.length >= 2) {
                        const fromDropdownEl = slotDropdowns[0];
                        const toDropdownEl = slotDropdowns[1];

                        const fromDropdown = new Dropdown(fromDropdownEl, { items: levelOptions });
                        const toDropdown = new Dropdown(toDropdownEl, { items: levelOptions });
                        
                        fromDropdown.setValue('0');
                        toDropdown.setValue('0');

                        this.dropdowns.set(`${piece}-slot${slot}-from`, fromDropdown);
                        this.dropdowns.set(`${piece}-slot${slot}-to`, toDropdown);
                    }
                }
            }
        });
    }

    setupEventListeners() {
        const allFromDropdown = this.dropdowns.get('all-from');
        const allToDropdown = this.dropdowns.get('all-to');
        
        if (allFromDropdown) {
            allFromDropdown.element.addEventListener('change', (e) => {
                this.setAllFromLevels(e.detail.value);
            });
        }

        if (allToDropdown) {
            allToDropdown.element.addEventListener('change', (e) => {
                this.setAllToLevels(e.detail.value);
            });
        }

        this.gearPieces.forEach(piece => {
            const pieceFromDropdown = this.dropdowns.get(`${piece}-piece-from`);
            const pieceToDropdown = this.dropdowns.get(`${piece}-piece-to`);
            
            if (pieceFromDropdown) {
                pieceFromDropdown.element.addEventListener('change', (e) => {
                    this.setPieceFromLevels(piece, e.detail.value);
                });
            }

            if (pieceToDropdown) {
                pieceToDropdown.element.addEventListener('change', (e) => {
                    this.setPieceToLevels(piece, e.detail.value);
                });
            }
        });

        Object.keys(this.inventoryInputs).forEach(material => {
            if (this.inventoryInputs[material]) {
                this.inventoryInputs[material].addEventListener('input', (e) => {
                    localStorage.setItem(`charm-inventory-${material}`, e.target.value || '0');
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

        const charmsForm = document.getElementById('charms-form');
        if (charmsForm) {
            charmsForm.addEventListener('submit', (e) => {
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

    setAllFromLevels(value) {
        this.gearPieces.forEach(piece => {
            const pieceFromDropdown = this.dropdowns.get(`${piece}-piece-from`);
            if (pieceFromDropdown) {
                pieceFromDropdown.setValue(value);
            }

            for (let slot = 1; slot <= 3; slot++) {
                const slotFromDropdown = this.dropdowns.get(`${piece}-slot${slot}-from`);
                if (slotFromDropdown) {
                    slotFromDropdown.setValue(value);
                }
            }
        });
    }

    setAllToLevels(value) {
        this.gearPieces.forEach(piece => {
            const pieceToDropdown = this.dropdowns.get(`${piece}-piece-to`);
            if (pieceToDropdown) {
                pieceToDropdown.setValue(value);
            }

            for (let slot = 1; slot <= 3; slot++) {
                const slotToDropdown = this.dropdowns.get(`${piece}-slot${slot}-to`);
                if (slotToDropdown) {
                    slotToDropdown.setValue(value);
                }
            }
        });
    }

    setPieceFromLevels(piece, value) {
        for (let slot = 1; slot <= 3; slot++) {
            const slotFromDropdown = this.dropdowns.get(`${piece}-slot${slot}-from`);
            if (slotFromDropdown) {
                slotFromDropdown.setValue(value);
            }
        }
    }

    setPieceToLevels(piece, value) {
        for (let slot = 1; slot <= 3; slot++) {
            const slotToDropdown = this.dropdowns.get(`${piece}-slot${slot}-to`);
            if (slotToDropdown) {
                slotToDropdown.setValue(value);
            }
        }
    }

    getInventoryAmounts() {
        const amounts = {};
        Object.keys(CHARM_MATERIALS).forEach(material => {
            amounts[material] = parseInt(this.inventoryInputs[material]?.value || '0') || 0;
        });
        return amounts;
    }

    calculateUpgrades() {
        this.clearErrors();
        
        const totalCost = { guide: 0, design: 0, secret: 0 };
        let totalStatBonus = 0;
        let totalPowerGain = 0;
        let totalSvsPoints = 0;
        let selectedSlots = 0;
        let hasErrors = false;
        const errors = [];
        const t = window.languageManager.getCurrentTranslations();

        this.gearPieces.forEach(piece => {
            const checkbox = document.getElementById(`include-${piece}`);
            if (!checkbox?.checked) return;

            for (let slot = 1; slot <= 3; slot++) {
                const fromDropdown = this.dropdowns.get(`${piece}-slot${slot}-from`);
                const toDropdown = this.dropdowns.get(`${piece}-slot${slot}-to`);
                
                if (!fromDropdown || !toDropdown) continue;
                
                const fromLevel = parseInt(fromDropdown.getValue() || '0');
                const toLevel = parseInt(toDropdown.getValue() || '0');

                if (toLevel <= 0) continue;

                selectedSlots++;
                
                const pieceName = t[piece] || piece.charAt(0).toUpperCase() + piece.slice(1);
                const slotName = `${pieceName} Slot ${slot}`;

                if (toLevel <= fromLevel) {
                    errors.push(`${slotName}: ${t.desiredLevelMustBeHigher || 'To level must be higher than From level'}`);
                    this.addError(piece, slot);
                    hasErrors = true;
                    continue;
                }

                for (let level = fromLevel + 1; level <= toLevel; level++) {
                    const upgradeCost = CHARM_UPGRADE_COSTS[level];
                    if (upgradeCost) {
                        totalCost.guide += upgradeCost.guide;
                        totalCost.design += upgradeCost.design;
                        totalCost.secret += upgradeCost.secret;
                    }
                    
                    const svsPoints = CHARM_SVS_POINTS[level];
                    if (svsPoints) {
                        totalSvsPoints += svsPoints;
                    }
                }

                const fromStats = CHARM_STATS[fromLevel] || { statBonus: 0, power: 0 };
                const toStats = CHARM_STATS[toLevel] || { statBonus: 0, power: 0 };
                
                totalStatBonus += (toStats.statBonus - fromStats.statBonus);
                totalPowerGain += (toStats.power - fromStats.power);
            }
        });

        if (hasErrors) {
            this.showError(errors.join('<br>'));
            return;
        }
        
        const slotsWithUpgrades = this.countSlotsWithUpgrades();
        
        if (selectedSlots > 0 && slotsWithUpgrades === 0 && !hasErrors) {
            this.showError(t.desiredLevelMustBeHigher?.replace(':', '') || 'To level must be higher than From level');
            return;
        }
        
        if (slotsWithUpgrades === 0) {
            this.showError(t.selectAtLeastOnePiece || 'Please select at least one charm slot to calculate upgrade costs.');
            return;
        }

        const inventory = this.getInventoryAmounts();
        this.displayResults(totalCost, inventory, slotsWithUpgrades, totalStatBonus, totalPowerGain, totalSvsPoints);
    }

    countSlotsWithUpgrades() {
        let count = 0;
        this.gearPieces.forEach(piece => {
            const checkbox = document.getElementById(`include-${piece}`);
            if (!checkbox?.checked) return;

            for (let slot = 1; slot <= 3; slot++) {
                const fromDropdown = this.dropdowns.get(`${piece}-slot${slot}-from`);
                const toDropdown = this.dropdowns.get(`${piece}-slot${slot}-to`);
                
                if (!fromDropdown || !toDropdown) continue;
                
                const fromLevel = parseInt(fromDropdown.getValue() || '0');
                const toLevel = parseInt(toDropdown.getValue() || '0');

                if (toLevel > 0 && toLevel > fromLevel) {
                    count++;
                }
            }
        });
        return count;
    }

    displayResults(totalCost, inventory, selectedSlots, totalStatBonus, totalPowerGain, totalSvsPoints) {
        const t = window.languageManager.getCurrentTranslations();
        const resultsSection = document.getElementById('charms-results');
        
        const needed = {};
        Object.keys(CHARM_MATERIALS).forEach(material => {
            needed[material] = Math.max(0, totalCost[material] - inventory[material]);
        });

        const resultCards = Object.keys(CHARM_MATERIALS).map(material => {
            const materialData = CHARM_MATERIALS[material];
            const total = totalCost[material];
            const have = inventory[material];
            const need = needed[material];
            const sufficient = have >= total;

            return `
                <div class="result-card">
                    <div class="result-card-header">
                        <h4 class="result-card-title">${t[material] || materialData.name}</h4>
                    </div>
                    <div class="result-needed ${sufficient ? 'sufficient' : 'insufficient'}">
                        <div class="result-icon" data-charm-material-icon="${material}">${materialData.fallback}</div>
                        <div class="result-info">
                            <div class="result-amount ${sufficient ? 'sufficient' : 'insufficient'}">
                                ${sufficient ? (t.sufficient || '✓ Sufficient') : `${t.needMore || 'Need'} ${formatNumber(need)}`}
                            </div>
                            <div class="result-status">
                                ${sufficient ? (t.youHaveEnough || 'You have enough!') : (t.additionalMaterialsNeeded || 'Additional materials needed')}
                            </div>
                            <div class="result-breakdown">
                                ${t.totalRequired || 'Total Required'}: ${formatNumber(total)} | 
                                ${t.current || 'Current'}: ${formatNumber(have)} | 
                                ${sufficient ? 
                                    `${t.surplus || 'Surplus'}: ${formatNumber(have - total)}` : 
                                    `${t.missing || 'Missing'}: ${formatNumber(need)}`
                                }
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const powerStatsCard = (totalPowerGain > 0 || totalStatBonus > 0) ? `
            <div class="result-card power-stats-card">
                <div class="result-card-header">
                    <h4 class="result-card-title">${t.powerGained || 'Power & Stats Gained'}</h4>
                </div>
                <div class="result-needed sufficient">
                    <div class="result-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                        </svg>
                    </div>
                    <div class="result-info">
                        <div class="result-amount sufficient">
                            +${formatNumber(totalPowerGain)} ${t.totalPower || 'Power'}
                        </div>
                        <div class="result-status">
                            +${totalStatBonus.toFixed(2)}% ${t.statBonus || 'Stat Bonus'}
                        </div>
                        <div class="result-breakdown">
                            ${t.powerGained || 'Total power and stat bonuses from all charm upgrades'}
                        </div>
                    </div>
                </div>
            </div>
        ` : '';

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
                            ${t.svsPointsGained || 'SvS Points gained from charm upgrades'}
                        </div>
                    </div>
                </div>
            </div>
        ` : '';

        resultsSection.innerHTML = `
            <div class="results-container">
                <div class="results-header">
                    <h3 class="results-title">${t.upgradeAnalysis || 'Upgrade Analysis'}</h3>
                    <p class="results-subtitle">${t.materialsNeededFor || 'Materials needed for'} ${selectedSlots} ${t.selectedSlots || 'selected charm slot(s)'}</p>
                </div>
                <div class="results-grid">
                    ${resultCards}
                    ${powerStatsCard}
                    ${svsPointsCard}
                </div>
            </div>
        `;

        Object.keys(CHARM_MATERIALS).forEach(material => {
            const iconContainer = resultsSection.querySelector(`[data-charm-material-icon="${material}"]`);
            if (iconContainer) {
                loadIcon(iconContainer, CHARM_MATERIALS[material]);
            }
        });
    }

    clearErrors() {
        document.querySelectorAll('.gear-card').forEach(card => {
            card.classList.remove('error');
        });
        
        document.querySelectorAll('.charm-slot').forEach(slot => {
            slot.classList.remove('error');
        });
        
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    addError(piece, slot) {
        const card = document.querySelector(`.gear-card[data-piece="${piece}"]`);
        if (card) {
            card.classList.add('error');
            
            const slotContainer = card.querySelector(`[data-slot="${slot}"]`);
            if (slotContainer) {
                slotContainer.classList.add('error');
            }
        }
    }

    showError(message) {
        const resultsSection = document.getElementById('charms-results');
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
            if (checkbox) {
                localStorage.setItem(`charm-${piece}-enabled`, checkbox.checked);
            }
        });

        this.dropdowns.forEach((dropdown, key) => {
            localStorage.setItem(`charm-dropdown-${key}`, dropdown.getValue());
        });
    }

    loadSavedState() {
        this.gearPieces.forEach(piece => {
            const checkbox = document.getElementById(`include-${piece}`);
            const enabled = localStorage.getItem(`charm-${piece}-enabled`);
            
            if (enabled !== null && checkbox) {
                checkbox.checked = enabled === 'true';
                const card = document.querySelector(`.gear-card[data-piece="${piece}"]`);
                card?.classList.toggle('disabled', !checkbox.checked);
            }
        });

        this.dropdowns.forEach((dropdown, key) => {
            const savedValue = localStorage.getItem(`charm-dropdown-${key}`);
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

        Object.keys(CHARM_MATERIALS).forEach(materialKey => {
            const nameElement = document.querySelector(`[data-material="${materialKey}"]`);
            if (nameElement && translations[materialKey]) {
                nameElement.textContent = translations[materialKey];
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        window.charmsCalculator = new CharmsCalculator();
        
        console.log('%cWhiteout Survival Calculator v2.0 - Chief Charms', 'color: #667eea; font-size: 16px; font-weight: bold;');
        console.log('%cReady! ⭐', 'color: #764ba2; font-weight: bold;');
        console.log('Features:');
        console.log('• 6 Gear pieces with 3 charm slots each');
        console.log('• Levels 0-16 with upgrade costs');
        console.log('• Real-time stat and power calculations');
        console.log('• SvS Points calculation');
        console.log('• Multi-language support');
        console.log('Keyboard shortcuts:');
        console.log('• Ctrl/Cmd + Enter: Calculate');
        console.log('• Ctrl/Cmd + D: Toggle theme');
        console.log('• Escape: Close dropdowns');
        
    } catch (error) {
        console.error('Error initializing charms calculator:', error);
    }
});
