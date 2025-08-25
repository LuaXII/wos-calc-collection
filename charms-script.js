document.addEventListener('DOMContentLoaded', function() {
    
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    const applyTheme = (theme) => {
        body.classList.remove('light-theme', 'dark-theme');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
    };

    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    applyTheme(savedTheme);

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            const newTheme = body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';
            applyTheme(newTheme);
        });
    }

    const translations = {
        en: {
            title: "Chief Charms Calculator - Whiteout Survival",
            charmsCalculator: "Chief Charms Calculator",
            underConstruction: "This calculator is under construction. Coming soon!",
            underConstructionTitle: "Under Construction",
            charmsUnderDevelopment: "The Chief Charms calculator is currently being developed. This powerful tool will help you:",
            charmAnalysis: "🎯 Charm Analysis",
            charmAnalysisItems: [
                "Calculate optimal charm combinations",
                "Analyze effect synergies", 
                "Compare different setups"
            ],
            upgradePlanning: "📊 Upgrade Planning",
            upgradePlanningItems: [
                "Material cost calculations",
                "Upgrade path optimization",
                "Resource requirement analysis"
            ],
            performanceMetrics: "⚡ Performance Metrics",
            performanceMetricsItems: [
                "Combat effectiveness ratings",
                "Statistical improvements",
                "Build recommendations"
            ],
            developmentStatus: "Development Status:",
            inProgress: "In Progress",
            expectedRelease: "Expected Release:",
            comingSoon: "Coming Soon",
            currentFocus: "Current Focus:",
            dataCollection: "Data Collection & UI Design",
            notificationText: "Want to be notified when it's ready? Follow our updates or check back soon!",
            backToHome: "Back to Home",
            tryGearCalculator: "Try Gear Calculator",
            previewWhatsComming: "Preview: What's Coming",
            charmDatabase: "Charm Database",
            charmDatabaseDesc: "Comprehensive database of all available charms with detailed stats and effects.",
            costCalculator: "Cost Calculator",
            costCalculatorDesc: "Calculate exact materials needed for upgrading charms to your desired levels.",
            buildOptimizer: "Build Optimizer",
            buildOptimizerDesc: "Find the optimal charm combinations for your playstyle and strategy.",
            effectAnalysis: "Effect Analysis",
            effectAnalysisDesc: "Detailed breakdown of how charm combinations affect your chief's performance.",
            home: "Home",
            chiefCharms: "Chief Charms"
        },
        zh: {
            title: "首领符咒计算器 - 白日求生",
            charmsCalculator: "首领符咒计算器",
            underConstruction: "此计算器正在建设中。敬请期待！",
            underConstructionTitle: "建设中",
            charmsUnderDevelopment: "首领符咒计算器目前正在开发中。这个强大的工具将帮助您：",
            charmAnalysis: "🎯 符咒分析",
            charmAnalysisItems: [
                "计算最佳符咒组合",
                "分析效果协同作用",
                "比较不同配置"
            ],
            upgradePlanning: "📊 升级规划",
            upgradePlanningItems: [
                "材料成本计算",
                "升级路径优化",
                "资源需求分析"
            ],
            performanceMetrics: "⚡ 性能指标",
            performanceMetricsItems: [
                "战斗有效性评级",
                "统计改进",
                "构建建议"
            ],
            developmentStatus: "开发状态：",
            inProgress: "进行中",
            expectedRelease: "预期发布：",
            comingSoon: "即将推出",
            currentFocus: "当前重点：",
            dataCollection: "数据收集和UI设计",
            notificationText: "想在准备就绪时收到通知吗？关注我们的更新或稍后查看！",
            backToHome: "返回首页",
            tryGearCalculator: "尝试装备计算器",
            previewWhatsComming: "预览：即将推出",
            charmDatabase: "符咒数据库",
            charmDatabaseDesc: "包含详细统计和效果的所有可用符咒的综合数据库。",
            costCalculator: "成本计算器",
            costCalculatorDesc: "计算将符咒升级到所需等级所需的确切材料。",
            buildOptimizer: "构建优化器",
            buildOptimizerDesc: "为您的游戏风格和策略找到最佳符咒组合。",
            effectAnalysis: "效果分析",
            effectAnalysisDesc: "详细分析符咒组合如何影响您首领的表现。",
            home: "首页",
            chiefCharms: "首领符咒"
        }
    };

    let currentLanguage = localStorage.getItem('language') || 'en';

    function updateLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        document.title = translations[lang].title;
        
        const h1 = document.querySelector('h1');
        if (h1) h1.textContent = "Whiteout Survival Calculator";
        
        const breadcrumbLink = document.querySelector('.breadcrumb-link');
        const breadcrumbCurrent = document.querySelector('.breadcrumb-current');
        if (breadcrumbLink) breadcrumbLink.textContent = translations[lang].home;
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = translations[lang].chiefCharms;
        
        const sectionHeaderH2 = document.querySelector('.section-header h2');
        const sectionHeaderP = document.querySelector('.section-header p');
        if (sectionHeaderH2) sectionHeaderH2.textContent = translations[lang].charmsCalculator;
        if (sectionHeaderP) sectionHeaderP.textContent = translations[lang].underConstruction;
        
        const constructionNoticeH3 = document.querySelector('.construction-notice h3');
        const constructionDescription = document.querySelector('.construction-description');
        if (constructionNoticeH3) constructionNoticeH3.textContent = translations[lang].underConstructionTitle;
        if (constructionDescription) constructionDescription.textContent = translations[lang].charmsUnderDevelopment;
        
        const featureCategories = document.querySelectorAll('.feature-category');
        const categoryTitles = [
            translations[lang].charmAnalysis,
            translations[lang].upgradePlanning,
            translations[lang].performanceMetrics
        ];
        const categoryItems = [
            translations[lang].charmAnalysisItems,
            translations[lang].upgradePlanningItems,
            translations[lang].performanceMetricsItems
        ];
        
        featureCategories.forEach((category, index) => {
            const title = category.querySelector('h4');
            const items = category.querySelectorAll('li');
            
            if (title && categoryTitles[index]) {
                title.textContent = categoryTitles[index];
            }
            
            if (items && categoryItems[index]) {
                items.forEach((item, itemIndex) => {
                    if (categoryItems[index][itemIndex]) {
                        item.textContent = categoryItems[index][itemIndex];
                    }
                });
            }
        });
        
        const statusItems = document.querySelectorAll('.status-item .status-text');
        const statusTexts = [
            `<strong>${translations[lang].developmentStatus}</strong> ${translations[lang].inProgress}`,
            `<strong>${translations[lang].expectedRelease}</strong> ${translations[lang].comingSoon}`,
            `<strong>${translations[lang].currentFocus}</strong> ${translations[lang].dataCollection}`
        ];
        
        statusItems.forEach((item, index) => {
            if (statusTexts[index]) {
                item.innerHTML = statusTexts[index];
            }
        });
        
        const ctaText = document.querySelector('.cta-text');
        if (ctaText) ctaText.textContent = translations[lang].notificationText;
        
        const ctaButtons = document.querySelectorAll('.cta-button');
        const buttonTexts = [translations[lang].backToHome, translations[lang].tryGearCalculator];
        ctaButtons.forEach((button, index) => {
            if (buttonTexts[index]) {
                const icon = button.querySelector('.btn-icon');
                if (icon) {
                    button.innerHTML = icon.outerHTML + buttonTexts[index];
                } else {
                    button.textContent = buttonTexts[index];
                }
            }
        });
        
        const previewTitle = document.querySelector('.preview-title');
        if (previewTitle) {
            const icon = previewTitle.querySelector('.section-icon');
            const iconHTML = icon ? icon.outerHTML : '';
            previewTitle.innerHTML = iconHTML + translations[lang].previewWhatsComming;
        }
        
        const previewCards = document.querySelectorAll('.preview-card');
        const previewTitles = [
            translations[lang].charmDatabase,
            translations[lang].costCalculator,
            translations[lang].buildOptimizer,
            translations[lang].effectAnalysis
        ];
        const previewDescriptions = [
            translations[lang].charmDatabaseDesc,
            translations[lang].costCalculatorDesc,
            translations[lang].buildOptimizerDesc,
            translations[lang].effectAnalysisDesc
        ];
        
        previewCards.forEach((card, index) => {
            const title = card.querySelector('h4');
            const description = card.querySelector('p');
            
            if (title && previewTitles[index]) {
                title.textContent = previewTitles[index];
            }
            
            if (description && previewDescriptions[index]) {
                description.textContent = previewDescriptions[index];
            }
        });
        
        const languageBtn = document.getElementById('language-btn');
        if (languageBtn) languageBtn.textContent = lang.toUpperCase();
        
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === lang);
        });
    }

    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');

    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', () => {
            languageDropdown.classList.toggle('show');
        });

        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', () => {
                updateLanguage(option.dataset.lang);
                languageDropdown.classList.remove('show');
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) {
                languageDropdown.classList.remove('show');
            }
        });
    }

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

    document.querySelectorAll('.cta-button, .theme-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            addRippleEffect(button, e);
        });
    });

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            if (themeSwitcher) themeSwitcher.click();
        }
        
        if (e.key === 'Escape') {
            if (languageDropdown) languageDropdown.classList.remove('show');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

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

    document.querySelectorAll('.feature-category, .preview-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    updateLanguage(currentLanguage);

    console.log('%cWhiteout Survival Calculator v2.0 - Chief Charms', 'color: #667eea; font-size: 18px; font-weight: bold;');
    console.log('%cComing Soon! 🚧', 'color: #764ba2; font-weight: bold;');
    console.log('• Keyboard shortcuts:');
    console.log('  - Ctrl/Cmd + D: Toggle theme');
    console.log('  - Escape: Close dropdowns');
});