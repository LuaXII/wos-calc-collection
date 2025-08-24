document.addEventListener('DOMContentLoaded', function() {
    // ==================== THEME MANAGEMENT ====================
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    // Apply theme with smooth transition
    const applyTheme = (theme) => {
        body.classList.remove('light-theme', 'dark-theme');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
    };

    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    applyTheme(savedTheme);

    // Theme switcher event
    themeSwitcher.addEventListener('click', () => {
        const newTheme = body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';
        applyTheme(newTheme);
    });

    // ==================== TAB NAVIGATION ====================
    const navButtons = document.querySelectorAll('.nav-btn');
    const calculatorSections = document.querySelectorAll('.calculator-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            // Update active nav button
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show target section
            calculatorSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${targetTab}-calculator`) {
                    section.classList.add('active');
                }
            });
        });
    });

    // ==================== GEAR DATA & CONSTANTS ====================
    const gearTiers = [
        { name: "Uncommon", ingot: 1500, potion: 15, scroll: 0, amber: 0 },
        { name: "Uncommon ⭐", ingot: 3800, potion: 40, scroll: 0, amber: 0 },
        { name: "Rare", ingot: 7000, potion: 70, scroll: 0, amber: 0 },
        { name: "Rare ⭐", ingot: 0, potion: 0, scroll: 45, amber: 0 },
        { name: "Rare ⭐⭐", ingot: 0, potion: 0, scroll: 50, amber: 0 },
        { name: "Epic", ingot: 0, potion: 0, scroll: 60, amber: 0 },
        { name: "Epic ⭐", ingot: 0, potion: 0, scroll: 70, amber: 0 },
        { name: "Epic ⭐⭐", ingot: 6500, potion: 65, scroll: 40, amber: 0 },
        { name: "Epic ⭐⭐⭐", ingot: 8000, potion: 80, scroll: 50, amber: 0 },
        { name: "Epic T1", ingot: 10000, potion: 95, scroll: 60, amber: 0 },
        { name: "Epic T1 ⭐", ingot: 11000, potion: 110, scroll: 70, amber: 0 },
        { name: "Epic T1 ⭐⭐", ingot: 13000, potion: 130, scroll: 85, amber: 0 },
        { name: "Epic T1 ⭐⭐⭐", ingot: 15000, potion: 160, scroll: 100, amber: 0 },
        { name: "Mythic", ingot: 22000, potion: 220, scroll: 40, amber: 0 },
        { name: "Mythic ⭐", ingot: 23000, potion: 230, scroll: 40, amber: 0 },
        { name: "Mythic ⭐⭐", ingot: 25000, potion: 250, scroll: 45, amber: 0 },
        { name: "Mythic ⭐⭐⭐", ingot: 26000, potion: 260, scroll: 45, amber: 0 },
        { name: "Mythic T1", ingot: 28000, potion: 280, scroll: 45, amber: 0 },
        { name: "Mythic T1 ⭐", ingot: 30000, potion: 300, scroll: 55, amber: 0 },
        { name: "Mythic T1 ⭐⭐", ingot: 32000, potion: 320, scroll: 55, amber: 0 },
        { name: "Mythic T1 ⭐⭐⭐", ingot: 35000, potion: 340, scroll: 55, amber: 0 },
        { name: "Mythic T2", ingot: 38000, potion: 390, scroll: 55, amber: 0 },
        { name: "Mythic T2 ⭐", ingot: 43000, potion: 430, scroll: 75, amber: 0 },
        { name: "Mythic T2 ⭐⭐", ingot: 45000, potion: 460, scroll: 80, amber: 0 },
        { name: "Mythic T2 ⭐⭐⭐", ingot: 48000, potion: 500, scroll: 85, amber: 0 },
        { name: "Legendary", ingot: 50000, potion: 530, scroll: 85, amber: 0 },
        { name: "Legendary ⭐", ingot: 52000, potion: 560, scroll: 90, amber: 10 },
        { name: "Legendary ⭐⭐", ingot: 54000, potion: 590, scroll: 95, amber: 10 },
        { name: "Legendary ⭐⭐⭐", ingot: 56000, potion: 620, scroll: 100, amber: 10 },
        { name: "Legendary T1", ingot: 59000, potion: 670, scroll: 110, amber: 15 },
        { name: "Legendary T1 ⭐", ingot: 61000, potion: 700, scroll: 115, amber: 15 },
        { name: "Legendary T1 ⭐⭐", ingot: 63000, potion: 730, scroll: 120, amber: 15 },
        { name: "Legendary T1 ⭐⭐⭐", ingot: 65000, potion: 760, scroll: 125, amber: 20 },
        { name: "Legendary T2", ingot: 68000, potion: 810, scroll: 135, amber: 20 },
        { name: "Legendary T2 ⭐", ingot: 70000, potion: 840, scroll: 140, amber: 20 },
        { name: "Legendary T2 ⭐⭐", ingot: 72000, potion: 870, scroll: 145, amber: 20 },
        { name: "Legendary T2 ⭐⭐⭐", ingot: 74000, potion: 900, scroll: 150, amber: 20 },
        { name: "Legendary T3", ingot: 77000, potion: 950, scroll: 160, amber: 25 },
        { name: "Legendary T3 ⭐", ingot: 80000, potion: 990, scroll: 165, amber: 25 },
        { name: "Legendary T3 ⭐⭐", ingot: 83000, potion: 1030, scroll: 170, amber: 25 },
        { name: "Legendary T3 ⭐⭐⭐", ingot: 86000, potion: 1070, scroll: 180, amber: 25 },
    ];

    const tierNames = ["", ...gearTiers.map(tier => tier.name)];
    
    const materialImages = {
        ingot: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/05/Hardened-Alloy.png',
        potion: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/05/Polishing-Solution.png',
        scroll: 'https://www-cf.whiteoutsurvival.wiki/wp-content/uploads/2023/05/Design-Plan.png',
        amber: 'https://whiteoutdata.com/wp-content/uploads/2024/06/lunar-amber-whiteout-survival.webp'
    };

    const materialNames = {
        ingot: 'Hardened Alloy',
        potion: 'Polishing Solution',
        scroll: 'Design Plans',
        amber: 'Lunar Amber'
    };

    const gearPieces = ['helmet', 'chestplate', 'pants', 'watch', 'ring', 'staff'];

    // ==================== INVENTORY MANAGEMENT ====================
    const inventoryInputs = {
        ingot: document.getElementById('inventory-ingot'),
        potion: document.getElementById('inventory-potion'),
        scroll: document.getElementById('inventory-scroll'),
        amber: document.getElementById('inventory-amber')
    };

    // Load saved inventory
    Object.keys(inventoryInputs).forEach(material => {
        const saved = localStorage.getItem(`inventory-${material}`);
        if (saved) {
            inventoryInputs[material].value = saved;
        }
    });

    // Save inventory on change
    Object.keys(inventoryInputs).forEach(material => {
        inventoryInputs[material].addEventListener('input', (e) => {
            localStorage.setItem(`inventory-${material}`, e.target.value || '0');
        });
    });

    // ==================== DROPDOWN FUNCTIONALITY ====================
    function setupDropdown(input, dropdown, onSelectCallback) {
        function populateDropdown(filter = '') {
            dropdown.innerHTML = '';
            tierNames.forEach(name => {
                if (!filter || name.toLowerCase().includes(filter.toLowerCase())) {
                    const item = document.createElement('div');
                    item.textContent = name || "None";
                    item.addEventListener('click', () => {
                        input.value = name;
                        dropdown.classList.remove('show');
                        if (onSelectCallback) onSelectCallback(name);
                    });
                    dropdown.appendChild(item);
                }
            });
        }

        input.addEventListener('focus', () => {
            populateDropdown(input.value);
            dropdown.classList.add('show');
        });

        input.addEventListener('input', (e) => {
            populateDropdown(e.target.value);
            dropdown.classList.add('show');
        });

        // Initialize dropdown
        populateDropdown();
    }

    // Setup global control dropdowns
    const allCurrentInput = document.getElementById('all-current-input');
    const allDesiredInput = document.getElementById('all-desired-input');
    
    setupDropdown(allCurrentInput, document.getElementById('all-current-dropdown'), (value) => {
        document.querySelectorAll('.gear-input.current').forEach(input => {
            input.value = value;
        });
    });

    setupDropdown(allDesiredInput, document.getElementById('all-desired-dropdown'), (value) => {
        document.querySelectorAll('.gear-input.desired').forEach(input => {
            input.value = value;
        });
    });

    // Setup individual gear piece dropdowns
    gearPieces.forEach(piece => {
        const card = document.querySelector(`.gear-card[data-piece="${piece}"]`);
        if (!card) return;

        const currentInput = card.querySelector('.gear-input.current');
        const desiredInput = card.querySelector('.gear-input.desired');
        const currentDropdown = currentInput.nextElementSibling;
        const desiredDropdown = desiredInput.nextElementSibling;
        
        setupDropdown(currentInput, currentDropdown);
        setupDropdown(desiredInput, desiredDropdown);
        
        // Handle checkbox toggle
        const checkbox = card.querySelector('.gear-checkbox');
        checkbox.addEventListener('change', () => {
            card.classList.toggle('disabled', !checkbox.checked);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });

    // ==================== CALCULATION LOGIC ====================
    const gearForm = document.getElementById('gear-form');
    const gearResults = document.getElementById('gear-results');

    function getInventoryAmounts() {
        return {
            ingot: parseInt(inventoryInputs.ingot.value) || 0,
            potion: parseInt(inventoryInputs.potion.value) || 0,
            scroll: parseInt(inventoryInputs.scroll.value) || 0,
            amber: parseInt(inventoryInputs.amber.value) || 0
        };
    }

    function clearErrors() {
        document.querySelectorAll('.gear-card').forEach(card => {
            card.classList.remove('error');
        });
    }

    function addError(piece) {
        const card = document.querySelector(`.gear-card[data-piece="${piece}"]`);
        if (card) {
            card.classList.add('error');
        }
    }

    function createResultsHTML(totalCost, inventory, selectedPieces) {
        const needed = {
            ingot: Math.max(0, totalCost.ingot - inventory.ingot),
            potion: Math.max(0, totalCost.potion - inventory.potion),
            scroll: Math.max(0, totalCost.scroll - inventory.scroll),
            amber: Math.max(0, totalCost.amber - inventory.amber)
        };

        const materials = ['ingot', 'potion', 'scroll', 'amber'];
        const resultCards = materials.map(material => {
            const total = totalCost[material];
            const have = inventory[material];
            const need = needed[material];
            const sufficient = need === 0;

            return `
                <div class="result-card glass-card">
                    <div class="result-card-header">
                        <h4 class="result-card-title">${materialNames[material]}</h4>
                    </div>
                    <div class="result-needed ${sufficient ? 'sufficient' : 'insufficient'}">
                        <img src="${materialImages[material]}" alt="${materialNames[material]}" class="result-icon">
                        <div class="result-info">
                            <div class="result-amount ${sufficient ? 'sufficient' : 'insufficient'}">
                                ${sufficient ? '✓ Sufficient' : `Need ${need.toLocaleString()} more`}
                            </div>
                            <div class="result-status">
                                ${sufficient ? 'You have enough!' : 'Additional materials needed'}
                            </div>
                            <div class="result-breakdown">
                                Total Required: ${total.toLocaleString()} | 
                                Current: ${have.toLocaleString()} | 
                                ${sufficient ? `Surplus: ${(have - total).toLocaleString()}` : `Missing: ${need.toLocaleString()}`}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="results-container glass-card">
                <div class="results-header">
                    <h3 class="results-title">Upgrade Analysis</h3>
                    <p class="results-subtitle">Materials needed for ${selectedPieces} selected piece(s)</p>
                </div>
                <div class="results-grid">
                    ${resultCards}
                </div>
            </div>
        `;
    }

    function showError(message) {
        gearResults.innerHTML = `
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

    gearForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        clearErrors();
        
        const totalCost = { ingot: 0, potion: 0, scroll: 0, amber: 0 };
        let selectedPieces = 0;
        let hasErrors = false;
        const errors = [];

        // Calculate costs for each selected piece
        gearPieces.forEach(piece => {
            const card = document.querySelector(`.gear-card[data-piece="${piece}"]`);
            if (!card) return;

            const checkbox = card.querySelector('.gear-checkbox');
            if (!checkbox.checked) return;

            selectedPieces++;
            
            const currentInput = card.querySelector('.gear-input.current');
            const desiredInput = card.querySelector('.gear-input.desired');
            
            const currentLevelName = currentInput.value.trim();
            const desiredLevelName = desiredInput.value.trim();

            // Validation
            if (!desiredLevelName) {
                errors.push(`${piece.charAt(0).toUpperCase() + piece.slice(1)}: Desired level is required`);
                addError(piece);
                hasErrors = true;
                return;
            }

            const currentIndex = tierNames.indexOf(currentLevelName) || 0;
            const desiredIndex = tierNames.indexOf(desiredLevelName);

            if (desiredIndex === -1) {
                errors.push(`${piece.charAt(0).toUpperCase() + piece.slice(1)}: Invalid desired level`);
                addError(piece);
                hasErrors = true;
                return;
            }

            if (desiredIndex <= currentIndex) {
                errors.push(`${piece.charAt(0).toUpperCase() + piece.slice(1)}: Desired level must be higher than current level`);
                addError(piece);
                hasErrors = true;
                return;
            }

            // Calculate upgrade cost
            for (let i = currentIndex; i < desiredIndex; i++) {
                const tier = gearTiers[i];
                if (tier) {
                    totalCost.ingot += tier.ingot;
                    totalCost.potion += tier.potion;
                    totalCost.scroll += tier.scroll;
                    totalCost.amber += tier.amber;
                }
            }
        });

        // Handle errors
        if (hasErrors) {
            showError(errors.join('<br>'));
            return;
        }

        if (selectedPieces === 0) {
            showError('Please select at least one gear piece to calculate upgrade costs.');
            return;
        }

        // Get current inventory
        const inventory = getInventoryAmounts();

        // Display results
        gearResults.innerHTML = createResultsHTML(totalCost, inventory, selectedPieces);
    });

    // ==================== FORM PERSISTENCE ====================
    // Save form state
    function saveFormState() {
        gearPieces.forEach(piece => {
            const card = document.querySelector(`.gear-card[data-piece="${piece}"]`);
            if (!card) return;

            const checkbox = card.querySelector('.gear-checkbox');
            const currentInput = card.querySelector('.gear-input.current');
            const desiredInput = card.querySelector('.gear-input.desired');

            localStorage.setItem(`gear-${piece}-enabled`, checkbox.checked);
            localStorage.setItem(`gear-${piece}-current`, currentInput.value);
            localStorage.setItem(`gear-${piece}-desired`, desiredInput.value);
        });
    }

    // Load form state
    function loadFormState() {
        gearPieces.forEach(piece => {
            const card = document.querySelector(`.gear-card[data-piece="${piece}"]`);
            if (!card) return;

            const checkbox = card.querySelector('.gear-checkbox');
            const currentInput = card.querySelector('.gear-input.current');
            const desiredInput = card.querySelector('.gear-input.desired');

            const enabled = localStorage.getItem(`gear-${piece}-enabled`);
            const current = localStorage.getItem(`gear-${piece}-current`);
            const desired = localStorage.getItem(`gear-${piece}-desired`);

            if (enabled !== null) {
                checkbox.checked = enabled === 'true';
                card.classList.toggle('disabled', !checkbox.checked);
            }
            if (current) currentInput.value = current;
            if (desired) desiredInput.value = desired;
        });
    }

    // Auto-save form changes
    gearForm.addEventListener('input', saveFormState);
    gearForm.addEventListener('change', saveFormState);

    // Load saved form state
    loadFormState();

    // ==================== KEYBOARD SHORTCUTS ====================
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Enter to calculate
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            gearForm.dispatchEvent(new Event('submit'));
        }
        
        // Escape to close dropdowns
        if (e.key === 'Escape') {
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
        
        // Ctrl/Cmd + D to toggle theme
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            themeSwitcher.click();
        }
    });

    // ==================== ACCESSIBILITY ENHANCEMENTS ====================
    // Add ARIA labels and keyboard navigation
    document.querySelectorAll('.gear-checkbox').forEach(checkbox => {
        checkbox.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change'));
            }
        });
    });

    // Focus management for dropdowns
    document.querySelectorAll('.search-input').forEach(input => {
        input.addEventListener('keydown', (e) => {
            const dropdown = input.nextElementSibling;
            const items = dropdown.querySelectorAll('div');
            
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (items.length > 0) {
                    items[0].focus();
                }
            }
        });
    });

    // ==================== PERFORMANCE OPTIMIZATIONS ====================
    // Debounce search inputs
    function debounce(func, wait) {
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

    // Apply debouncing to dropdown filtering
    document.querySelectorAll('.search-input').forEach(input => {
        const originalHandler = input._inputHandler;
        if (originalHandler) {
            input.removeEventListener('input', originalHandler);
            input.addEventListener('input', debounce(originalHandler, 150));
        }
    });

    // ==================== PROGRESSIVE ENHANCEMENT ====================
    // Add visual feedback for interactions
    function addRippleEffect(element, event) {
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('div');
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }

    // Add ripple effect to buttons
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('.calculate-btn, .nav-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            addRippleEffect(button, e);
        });
    });

    // ==================== ERROR HANDLING ====================
    window.addEventListener('error', (e) => {
        console.error('Calculator error:', e.error);
        showError('An unexpected error occurred. Please refresh the page and try again.');
    });

    // ==================== INITIALIZATION COMPLETE ====================
    console.log('Whiteout Survival Calculator initialized successfully');
    
    // Show welcome message in console
    console.log('%cWhiteout Survival Calculator v2.0', 'color: #667eea; font-size: 18px; font-weight: bold;');
    console.log('%cKeyboard shortcuts:', 'color: #764ba2; font-weight: bold;');
    console.log('• Ctrl/Cmd + Enter: Calculate materials');
    console.log('• Ctrl/Cmd + D: Toggle theme');
    console.log('• Escape: Close dropdowns');
});