const MATERIALS = {
    ingot: { 
        name: 'Hardened Alloy', 
        icon: 'https://cdn.discordapp.com/attachments/1409198146579599370/1409198188526698607/Hardened-Alloy.png?ex=68ac8195&is=68ab3015&hm=64faeb260280976a7dcbb4480c9331ccf60ce5998b276c6f6f81b88e73807de8&',
        fallback: '⚒️'
    },
    potion: { 
        name: 'Polishing Solution', 
        icon: 'https://cdn.discordapp.com/attachments/1409198146579599370/1409198345938800741/Polishing-Solution.png?ex=68ac81bb&is=68ab303b&hm=29faf42c48355d8a6ab6b3b33bd8ae2f1afdbe84d533f4aad1887028b168cad9&',
        fallback: '🧪'
    },
    scroll: { 
        name: 'Design Plans', 
        icon: 'https://cdn.discordapp.com/attachments/1409198146579599370/1409198489732251759/Design-Plan.png?ex=68ac81dd&is=68ab305d&hm=8e87fa8c10e93749dd5df75243b5c6967f83d03389158fb7889c842f7c960cd1&',
        fallback: '📜'
    },
    amber: { 
        name: 'Lunar Amber', 
        icon: 'https://cdn.discordapp.com/attachments/1409198146579599370/1409198627854749817/item_icon_600051.png?ex=68ac81fe&is=68ab307e&hm=6eb791380095ca8bd335e1d00d1e5769aaf5eb81aa8a188991cf68f433edda2e&',
        fallback: '💎'
    }
};

const CHARM_MATERIALS = {
    guide: {
        name: 'Charm Guide',
        icon: 'https://cdn.discordapp.com/attachments/1409198146579599370/1409618616114221076/charm-guide.png?ex=68ae0923&is=68acb7a3&hm=996b8b991998e7283dfdf7ef55c53c7e576a2f1171902870aa5a9f70c60e35a8&',
        fallback: '📖'
    },
    design: {
        name: 'Charm Design',
        icon: 'https://cdn.discordapp.com/attachments/1409198146579599370/1409618591094935693/charm-design.png?ex=68ae091d&is=68acb79d&hm=0439745de8f0a5e311b8af0bbadca2f2b37a2652b999c70b7dd13f832f468e7a&',
        fallback: '🎨'
    },
    secret: {
        name: 'Charm Secret',
        icon: 'https://cdn.discordapp.com/attachments/1409198146579599370/1409618637333073950/item_icon_600026.png?ex=68ae0928&is=68acb7a8&hm=646551179463712b2b379840d1ea9fe5ae20efcf32365b57fea317dddf791bfc&',
        fallback: '🔮'
    }
};

const EXPERT_HEROES_MATERIALS = {
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

const GEAR_PIECES = {
    helmet: { 
        name: 'Helmet', 
        icon: 'https://cdn.discordapp.com/attachments/1247926344519585842/1247926480031055872/Helmet.png?ex=6661d445&is=666082c5&hm=e1a0b36341d9e26e0e71649a5b3a8080f8373809618b76c8c4a45749298586f7&',
        fallback: '⛑️'
    },
    chestplate: { 
        name: 'Chestplate', 
        icon: 'https://cdn.discordapp.com/attachments/1247926344519585842/1247926478201716757/Chest.png?ex=6661d445&is=666082c5&hm=442d8157778b8a735e5d3090740924976451a56f0b09460a3493b8c4d7e10398&',
        fallback: '🛡️'
    },
    pants: { 
        name: 'Pants', 
        icon: 'https://cdn.discordapp.com/attachments/1247926344519585842/1247926479539425390/Pants.png?ex=6661d445&is=666082c5&hm=d3d63b2f5188f6c321689255018a032f6277f3a9a1d47190e386375003c20c0f&',
        fallback: '👖'
    },
    watch: { 
        name: 'Watch', 
        icon: 'https://cdn.discordapp.com/attachments/1247926344519585842/1247926475713417246/Watch.png?ex=6661d444&is=666082c4&hm=fd4b01e2335272a71b4a39591414e0e4952d765d752f4c207d4b4a6217596b79&',
        fallback: '⌚'
    },
    ring: { 
        name: 'Ring', 
        icon: 'https://cdn.discordapp.com/attachments/1247926344519585842/1247926477144572015/Ring.png?ex=6661d445&is=666082c5&hm=2173f62e83467406a6442c55e9757f49514f762f0263f13f1e98d1a613663a89&',
        fallback: '💍'
    },
    staff: { 
        name: 'Staff', 
        icon: 'https://cdn.discordapp.com/attachments/1247926344519585842/1247926476489379860/Weapon.png?ex=6661d444&is=666082c4&hm=89e954b4f535174e797a26f8b0548d1c99f91a92e19483015f628c61099684b3&',
        fallback: '🪄'
    }
};

const CHARM_UPGRADE_COSTS = [
    { guide: 0, design: 0, secret: 0 },
    { guide: 5, design: 5, secret: 0 },
    { guide: 40, design: 15, secret: 0 },
    { guide: 60, design: 40, secret: 0 },
    { guide: 80, design: 100, secret: 0 },
    { guide: 100, design: 200, secret: 0 },
    { guide: 120, design: 300, secret: 0 },
    { guide: 140, design: 400, secret: 0 },
    { guide: 200, design: 400, secret: 0 },
    { guide: 300, design: 400, secret: 0 },
    { guide: 420, design: 420, secret: 0 },
    { guide: 560, design: 420, secret: 0 },
    { guide: 580, design: 450, secret: 15 },
    { guide: 580, design: 450, secret: 30 },
    { guide: 600, design: 500, secret: 45 },
    { guide: 600, design: 500, secret: 70 },
    { guide: 650, design: 550, secret: 100 }
];

const CHARM_STATS = [
    { statBonus: 0, power: 0 },
    { statBonus: 9.00, power: 205700 },
    { statBonus: 12.00, power: 288000 },
    { statBonus: 16.00, power: 370000 },
    { statBonus: 19.00, power: 452000 },
    { statBonus: 25.00, power: 576000 },
    { statBonus: 30.00, power: 700000 },
    { statBonus: 35.00, power: 824000 },
    { statBonus: 40.00, power: 948000 },
    { statBonus: 45.00, power: 1072000 },
    { statBonus: 50.00, power: 1196000 },
    { statBonus: 55.00, power: 1320000 },
    { statBonus: 64.00, power: 1444000 },
    { statBonus: 73.00, power: 1568000 },
    { statBonus: 82.00, power: 1692000 },
    { statBonus: 91.00, power: 1816000 },
    { statBonus: 100.00, power: 1940000 }
];

const CHARM_SVS_POINTS = [
    0,
    625,
    1250,
    3125,
    8750,
    11250,
    12500,
    12500,
    13000,
    14000,
    15000,
    16000,
    17000,
    18000,
    19000, 
    20000, 
    21000 
];

const GEAR_TIERS = [
    { name: "", ingot: 0, potion: 0, scroll: 0, amber: 0, svsPoints: 0 },
    { name: "Uncommon", ingot: 1500, potion: 15, scroll: 0, amber: 0, svsPoints: 1125 },
    { name: "Uncommon ⭐", ingot: 3800, potion: 40, scroll: 0, amber: 0, svsPoints: 1875 },
    { name: "Rare", ingot: 7000, potion: 70, scroll: 0, amber: 0, svsPoints: 3000 },
    { name: "Rare ⭐", ingot: 0, potion: 0, scroll: 45, amber: 0, svsPoints: 4500 },
    { name: "Rare ⭐⭐", ingot: 0, potion: 0, scroll: 50, amber: 0, svsPoints: 5100 },
    { name: "Epic", ingot: 0, potion: 0, scroll: 60, amber: 0, svsPoints: 3230 },
    { name: "Epic ⭐", ingot: 0, potion: 0, scroll: 70, amber: 0, svsPoints: 3230 },
    { name: "Epic ⭐⭐", ingot: 6500, potion: 65, scroll: 40, amber: 0, svsPoints: 3225 },
    { name: "Epic ⭐⭐⭐", ingot: 8000, potion: 80, scroll: 50, amber: 0, svsPoints: 3225 },
    { name: "Epic T1", ingot: 10000, potion: 95, scroll: 60, amber: 0, svsPoints: 3440 },
    { name: "Epic T1 ⭐", ingot: 11000, potion: 110, scroll: 70, amber: 0, svsPoints: 3440 },
    { name: "Epic T1 ⭐⭐", ingot: 13000, potion: 130, scroll: 85, amber: 0, svsPoints: 4085 },
    { name: "Epic T1 ⭐⭐⭐", ingot: 15000, potion: 160, scroll: 100, amber: 0, svsPoints: 4085 },
    { name: "Mythic", ingot: 22000, potion: 220, scroll: 40, amber: 0, svsPoints: 6250 },
    { name: "Mythic ⭐", ingot: 23000, potion: 230, scroll: 40, amber: 0, svsPoints: 6250 },
    { name: "Mythic ⭐⭐", ingot: 25000, potion: 250, scroll: 45, amber: 0, svsPoints: 6250 },
    { name: "Mythic ⭐⭐⭐", ingot: 26000, potion: 260, scroll: 45, amber: 0, svsPoints: 6250 },
    { name: "Mythic T1", ingot: 28000, potion: 280, scroll: 45, amber: 0, svsPoints: 6250 },
    { name: "Mythic T1 ⭐", ingot: 30000, potion: 300, scroll: 55, amber: 0, svsPoints: 6250 },
    { name: "Mythic T1 ⭐⭐", ingot: 32000, potion: 320, scroll: 55, amber: 0, svsPoints: 6250 },
    { name: "Mythic T1 ⭐⭐⭐", ingot: 35000, potion: 340, scroll: 55, amber: 0, svsPoints: 6250 },
    { name: "Mythic T2", ingot: 38000, potion: 390, scroll: 55, amber: 0, svsPoints: 6250 },
    { name: "Mythic T2 ⭐", ingot: 43000, potion: 430, scroll: 75, amber: 0, svsPoints: 2320 },
    { name: "Mythic T2 ⭐⭐", ingot: 45000, potion: 460, scroll: 80, amber: 0, svsPoints: 2320 },
    { name: "Mythic T2 ⭐⭐⭐", ingot: 48000, potion: 500, scroll: 85, amber: 0, svsPoints: 2320 },
    { name: "Legendary Step 1", ingot: 12500, potion: 132, scroll: 21, amber: 2, svsPoints: 2600 },
    { name: "Legendary Step 2", ingot: 12500, potion: 132, scroll: 21, amber: 2, svsPoints: 2320 },
    { name: "Legendary Step 3", ingot: 12500, potion: 132, scroll: 21, amber: 2, svsPoints: 2320 },
    { name: "Legendary Step 4", ingot: 12500, potion: 134, scroll: 22, amber: 4, svsPoints: 2320 },
    { name: "Legendary ⭐ Step 1", ingot: 13000, potion: 140, scroll: 22, amber: 2, svsPoints: 2600 },
    { name: "Legendary ⭐ Step 2", ingot: 13000, potion: 140, scroll: 22, amber: 2, svsPoints: 2310 },
    { name: "Legendary ⭐ Step 3", ingot: 13000, potion: 140, scroll: 22, amber: 2, svsPoints: 2310 },
    { name: "Legendary ⭐ Step 4", ingot: 13000, potion: 140, scroll: 24, amber: 4, svsPoints: 2310 },
    { name: "Legendary ⭐⭐ Step 1", ingot: 13500, potion: 140, scroll: 23, amber: 2, svsPoints: 2630 },
    { name: "Legendary ⭐⭐ Step 2", ingot: 13500, potion: 140, scroll: 23, amber: 2, svsPoints: 2330 },
    { name: "Legendary ⭐⭐ Step 3", ingot: 13500, potion: 140, scroll: 23, amber: 2, svsPoints: 2330 },
    { name: "Legendary ⭐⭐ Step 4", ingot: 13500, potion: 149, scroll: 26, amber: 4, svsPoints: 2330 },
    { name: "Legendary ⭐⭐⭐ Step 1", ingot: 14000, potion: 155, scroll: 25, amber: 2, svsPoints: 2570 },
    { name: "Legendary ⭐⭐⭐ Step 2", ingot: 14000, potion: 155, scroll: 25, amber: 2, svsPoints: 2300 },
    { name: "Legendary ⭐⭐⭐ Step 3", ingot: 14000, potion: 155, scroll: 25, amber: 2, svsPoints: 2300 },
    { name: "Legendary ⭐⭐⭐ Step 4", ingot: 14000, potion: 155, scroll: 25, amber: 4, svsPoints: 2300 },
    { name: "Legendary T1 Step 1", ingot: 14750, potion: 167, scroll: 27, amber: 3, svsPoints: 2660 },
    { name: "Legendary T1 Step 2", ingot: 14750, potion: 167, scroll: 27, amber: 3, svsPoints: 2300 },
    { name: "Legendary T1 Step 3", ingot: 14750, potion: 167, scroll: 27, amber: 3, svsPoints: 2300 },
    { name: "Legendary T1 Step 4", ingot: 14750, potion: 169, scroll: 29, amber: 6, svsPoints: 2300 },
    { name: "Legendary T1 ⭐ Step 1", ingot: 15250, potion: 182, scroll: 28, amber: 3, svsPoints: 2660 },
    { name: "Legendary T1 ⭐ Step 2", ingot: 15250, potion: 182, scroll: 28, amber: 3, svsPoints: 2320 },
    { name: "Legendary T1 ⭐ Step 3", ingot: 15750, potion: 182, scroll: 28, amber: 3, svsPoints: 2320 },
    { name: "Legendary T1 ⭐ Step 4", ingot: 15750, potion: 184, scroll: 31, amber: 6, svsPoints: 2320 },
    { name: "Legendary T1 ⭐⭐ Step 1", ingot: 15750, potion: 182, scroll: 30, amber: 3, svsPoints: 2600 },
    { name: "Legendary T1 ⭐⭐ Step 2", ingot: 15750, potion: 182, scroll: 30, amber: 3, svsPoints: 2320 },
    { name: "Legendary T1 ⭐⭐ Step 3", ingot: 15750, potion: 182, scroll: 30, amber: 3, svsPoints: 2320 },
    { name: "Legendary T1 ⭐⭐ Step 4", ingot: 15750, potion: 184, scroll: 30, amber: 6, svsPoints: 2320 },
    { name: "Legendary T1 ⭐⭐⭐ Step 1", ingot: 16250, potion: 190, scroll: 31, amber: 3, svsPoints: 2600 },
    { name: "Legendary T1 ⭐⭐⭐ Step 2", ingot: 16250, potion: 190, scroll: 31, amber: 3, svsPoints: 2370 },
    { name: "Legendary T1 ⭐⭐⭐ Step 3", ingot: 16250, potion: 190, scroll: 31, amber: 3, svsPoints: 2370 },
    { name: "Legendary T1 ⭐⭐⭐ Step 4", ingot: 16250, potion: 190, scroll: 32, amber: 6, svsPoints: 2370 },
    { name: "Legendary T2 Step 1", ingot: 17000, potion: 202, scroll: 33, amber: 5, svsPoints: 2450 },
    { name: "Legendary T2 Step 2", ingot: 17000, potion: 202, scroll: 33, amber: 5, svsPoints: 2390 },
    { name: "Legendary T2 Step 3", ingot: 17000, potion: 202, scroll: 33, amber: 5, svsPoints: 2390 },
    { name: "Legendary T2 Step 4", ingot: 17000, potion: 204, scroll: 36, amber: 5, svsPoints: 2390 },
    { name: "Legendary T2 ⭐ Step 1", ingot: 17500, potion: 210, scroll: 35, amber: 5, svsPoints: 2390 },
    { name: "Legendary T2 ⭐ Step 2", ingot: 17500, potion: 210, scroll: 35, amber: 5, svsPoints: 2380 },
    { name: "Legendary T2 ⭐ Step 3", ingot: 17500, potion: 210, scroll: 35, amber: 5, svsPoints: 2380 },
    { name: "Legendary T2 ⭐ Step 4", ingot: 17500, potion: 210, scroll: 35, amber: 5, svsPoints: 2380 },
    { name: "Legendary T2 ⭐⭐ Step 1", ingot: 18000, potion: 217, scroll: 36, amber: 5, svsPoints: 2420 },
    { name: "Legendary T2 ⭐⭐ Step 2", ingot: 18000, potion: 217, scroll: 36, amber: 5, svsPoints: 2380 },
    { name: "Legendary T2 ⭐⭐ Step 3", ingot: 18000, potion: 217, scroll: 36, amber: 5, svsPoints: 2380 },
    { name: "Legendary T2 ⭐⭐ Step 4", ingot: 18000, potion: 219, scroll: 37, amber: 5, svsPoints: 2380 },
    { name: "Legendary T2 ⭐⭐⭐ Step 1", ingot: 18500, potion: 225, scroll: 37, amber: 5, svsPoints: 2420 },
    { name: "Legendary T2 ⭐⭐⭐ Step 2", ingot: 18500, potion: 225, scroll: 37, amber: 5, svsPoints: 2370 },
    { name: "Legendary T2 ⭐⭐⭐ Step 3", ingot: 0, potion: 0, scroll: 37, amber: 0, svsPoints: 2370 }
];

const LANGUAGES = {
    en: { flag: '🇺🇸', name: 'English' },
    zh: { flag: '🇨🇳', name: '中文' },
    ja: { flag: '🇯🇵', name: '日本語' },
    ko: { flag: '🇰🇷', name: '한국어' },
    es: { flag: '🇪🇸', name: 'Español' },
    fr: { flag: '🇫🇷', name: 'Français' },
    de: { flag: '🇩🇪', name: 'Deutsch' },
    ru: { flag: '🇷🇺', name: 'Русский' },
    pt: { flag: '🇧🇷', name: 'Português' },
    it: { flag: '🇮🇹', name: 'Italiano' },
    ar: { flag: '🇸🇦', name: 'العربية' },
    hi: { flag: '🇮🇳', name: 'हिन्दी' }
};

const TRANSLATIONS = {
    en: {
        title: "Whiteout Survival Calculator",
        logoMain: "Whiteout Survival",
        logoSub: "Calculator Suite",
        home: "Home",
        heroTitle: "Game Enhancement Tools",
        heroSubtitle: "Optimize your gameplay with precision calculations",
        chiefGear: "Chief Gear",
        chiefCharms: "Chief Charms",
        expertHeroes: "Expert Heroes",
        available: "Available",
        comingSoon: "Coming Soon",
        supportTitle: "Support Development",
        supportDescription: "If you want to contribute and support my development project. You can gift me using my ID underneath.",
        gameId: "Game ID",
        expertHeroesPageTitle: "Expert Heroes Calculator",
        expertHeroesPageSubtitle: "Calculate relationship progress and skill upgrades for Expert Heroes",
        relationshipCalculator: "Relationship Calculator",
        relationshipCalculatorDesc: "Calculate affinity requirements and sigil costs",
        skillUpgrades: "Skill Upgrades",
        skillUpgradesDesc: "Calculate skill upgrade materials and costs",
        expertHeroesOverview: "Expert Heroes Overview",
        relationshipPageTitle: "Relationship Calculator",
        relationshipPageSubtitle: "Calculate affinity requirements and sigil costs for Expert Heroes",
        currentInventory: "Current Inventory",
        selectHero: "Select Hero",
        relationshipStatus: "Relationship Status",
        affinityProgress: "Affinity Progress",
        calculateRelationship: "Calculate Relationship Requirements",
        currentLevel: "Current Level",
        targetLevel: "Target Level",
        cyrille: "Cyrille",
        agnes: "Agnes",
        holger: "Holger",
        romulus: "Romulus",
        compass: "Compass",
        fieryHeart: "Fiery Heart",
        sailOfConquest: "Sail of Conquest",
        expertSigil: "Expert Sigil",
        ingot: "Hardened Alloy",
        potion: "Polishing Solution",
        scroll: "Design Plans",
        amber: "Lunar Amber",
        guide: "Charm Guide",
        design: "Charm Design",
        secret: "Charm Secret",
        stranger: "Stranger",
        helmet: "Helmet",
        chestplate: "Chestplate",
        pants: "Pants",
        watch: "Watch",
        ring: "Ring",
        staff: "Staff",
        charmsPageTitle: "Chief Charms Calculator",
        charmsPageSubtitle: "Calculate materials needed to upgrade your chief charms",
        charmSlot: "Charm Slot",
        fromLevel: "From",
        toLevel: "To",
        setPieceFrom: "Set From",
        setPieceTo: "Set To",
        setAllFrom: "Set All From",
        setAllTo: "Set All To",
        quickSetAll: "Quick Set All",
        calculateMaterialsNeeded: "Calculate Materials Needed",
        totalXpRequired: "Total XP Required",
        totalSigilsRequired: "Total Sigils Required",
        targetLevelMustBeHigher: "Target level must be higher than current level",
        sufficient: "✓ Sufficient",
        needMore: "Need",
        youHaveEnough: "You have enough!",
        additionalMaterialsNeeded: "Additional materials needed",
        totalRequired: "Total Required",
        current: "Current",
        surplus: "Surplus",
        missing: "Missing",
        upgradeAnalysis: "Upgrade Analysis",
        materialsNeededFor: "Materials needed for",
        selectedSlots: "selected slot(s)",
        powerGained: "Power & Stats Gained",
        totalPower: "Power",
        statBonus: "Stat Bonus",
        svsPointsGained: "SvS Points Gained",
        totalSvsPoints: "Total SvS Points",
        selectAtLeastOnePiece: "Please select at least one charm slot to calculate upgrade costs.",
        desiredLevelMustBeHigher: "To level must be higher than From level"
    },
    zh: {
        title: "白日求生计算器",
        logoMain: "白日求生",
        logoSub: "计算器套件",
        home: "首页",
        heroTitle: "游戏增强工具",
        heroSubtitle: "通过精确计算优化您的游戏体验",
        chiefGear: "首领装备",
        chiefCharms: "首领符咒",
        expertHeroes: "专家英雄",
        available: "可用",
        comingSoon: "即将推出",
        supportTitle: "支持开发",
        supportDescription: "如果您想贡献并支持我的开发项目。您可以使用下面的ID给我送礼。",
        gameId: "游戏ID",
        expertHeroesPageTitle: "专家英雄计算器",
        expertHeroesPageSubtitle: "计算专家英雄的关系进度和技能升级",
        relationshipCalculator: "关系计算器",
        relationshipCalculatorDesc: "计算亲和力需求和印章成本",
        skillUpgrades: "技能升级",
        skillUpgradesDesc: "计算技能升级材料和成本",
        expertHeroesOverview: "专家英雄概览",
        relationshipPageTitle: "关系计算器",
        relationshipPageSubtitle: "计算专家英雄的亲和力需求和印章成本",
        currentInventory: "当前库存",
        selectHero: "选择英雄",
        relationshipStatus: "关系状态",
        affinityProgress: "亲和力进度",
        calculateRelationship: "计算关系需求",
        currentLevel: "当前等级",
        targetLevel: "目标等级",
        cyrille: "西里尔",
        agnes: "艾格尼丝",
        holger: "霍尔格",
        romulus: "罗慕路斯",
        compass: "指南针",
        fieryHeart: "火热之心",
        sailOfConquest: "征服之帆",
        expertSigil: "专家印章",
        ingot: "硬化合金",
        potion: "抛光溶液",
        scroll: "设计图纸",
        amber: "月光琥珀",
        guide: "符咒指南",
        design: "符咒设计",
        secret: "符咒秘密",
        stranger: "陌生人",
        helmet: "头盔",
        chestplate: "胸甲",
        pants: "护腿",
        watch: "手表",
        ring: "戒指",
        staff: "法杖",
        charmsPageTitle: "首领符咒计算器",
        charmsPageSubtitle: "计算升级首领符咒所需的材料",
        charmSlot: "符咒槽",
        fromLevel: "起始",
        toLevel: "目标",
        setPieceFrom: "设置起始",
        setPieceTo: "设置目标",
        setAllFrom: "全部设置起始",
        setAllTo: "全部设置目标",
        quickSetAll: "快速全设置",
        calculateMaterialsNeeded: "计算所需材料",
        totalXpRequired: "总经验需求",
        totalSigilsRequired: "总印章需求",
        targetLevelMustBeHigher: "目标等级必须高于当前等级",
        sufficient: "✓ 充足",
        needMore: "需要",
        youHaveEnough: "您拥有足够！",
        additionalMaterialsNeeded: "所需额外材料",
        totalRequired: "总需求",
        current: "当前",
        surplus: "剩余",
        missing: "缺少",
        upgradeAnalysis: "升级分析",
        materialsNeededFor: "所需材料",
        selectedSlots: "所选槽位",
        powerGained: "获得力量和属性",
        totalPower: "总力量",
        statBonus: "属性加成",
        svsPointsGained: "获得SvS积分",
        totalSvsPoints: "总SvS积分",
        selectAtLeastOnePiece: "请至少选择一个符咒槽来计算升级费用。",
        desiredLevelMustBeHigher: "目标等级必须高于起始等级"
    },
    ja: {
        title: "ホワイトアウト サバイバル 計算機",
        logoMain: "ホワイトアウト サバイバル",
        logoSub: "計算機スイート",
        home: "ホーム",
        heroTitle: "ゲーム強化ツール",
        heroSubtitle: "精密な計算でゲームプレイを最適化",
        chiefGear: "チーフギア",
        chiefCharms: "チーフチャーム",
        expertHeroes: "エキスパートヒーロー",
        available: "利用可能",
        comingSoon: "近日公開",
        supportTitle: "開発支援",
        supportDescription: "私の開発プロジェクトに貢献し支援したい場合は、下記のIDでギフトを送ることができます。",
        gameId: "ゲーム ID",
        expertHeroesPageTitle: "エキスパートヒーロー計算機",
        expertHeroesPageSubtitle: "エキスパートヒーローの関係進度とスキルアップグレードを計算",
        relationshipCalculator: "関係計算機",
        relationshipCalculatorDesc: "親愛度要件とシジル費用を計算",
        skillUpgrades: "スキルアップグレード",
        skillUpgradesDesc: "スキルアップグレード材料と費用を計算",
        expertHeroesOverview: "エキスパートヒーロー概要",
        relationshipPageTitle: "関係計算機",
        relationshipPageSubtitle: "エキスパートヒーローの親愛度要件とシジル費用を計算",
        currentInventory: "現在の在庫",
        selectHero: "ヒーロー選択",
        relationshipStatus: "関係ステータス",
        affinityProgress: "親愛度進度",
        calculateRelationship: "関係要件を計算",
        currentLevel: "現在のレベル",
        targetLevel: "目標レベル",
        cyrille: "シリル",
        agnes: "アグネス",
        holger: "ホルガー",
        romulus: "ロムルス",
        compass: "コンパス",
        fieryHeart: "燃える心",
        sailOfConquest: "征服の帆",
        expertSigil: "エキスパートシジル",
        ingot: "硬化合金",
        potion: "研磨溶液",
        scroll: "設計図",
        amber: "月光琥珀",
        guide: "チャームガイド",
        design: "チャームデザイン",
        secret: "チャームシークレット",
        stranger: "見知らぬ人",
        helmet: "ヘルメット",
        chestplate: "チェストプレート",
        pants: "パンツ",
        watch: "ウォッチ",
        ring: "リング",
        staff: "スタッフ",
        charmsPageTitle: "チーフチャーム計算機",
        charmsPageSubtitle: "チーフチャームをアップグレードするのに必要な材料を計算",
        charmSlot: "チャームスロット",
        fromLevel: "開始レベル",
        toLevel: "目標レベル",
        setPieceFrom: "開始設定",
        setPieceTo: "目標設定",
        setAllFrom: "全て開始設定",
        setAllTo: "全て目標設定",
        quickSetAll: "クイック全設定",
        calculateMaterialsNeeded: "必要材料を計算",
        totalXpRequired: "必要合計XP",
        totalSigilsRequired: "必要合計シジル",
        targetLevelMustBeHigher: "目標レベルは現在のレベルより高い必要があります",
        sufficient: "✓ 十分",
        needMore: "必要",
        youHaveEnough: "十分お持ちです！",
        additionalMaterialsNeeded: "追加で必要な材料",
        totalRequired: "必要合計",
        current: "現在",
        surplus: "余剰",
        missing: "不足",
        upgradeAnalysis: "アップグレード分析",
        materialsNeededFor: "必要材料",
        selectedSlots: "選択されたスロット",
        powerGained: "獲得パワーと統計",
        totalPower: "総パワー",
        statBonus: "統計ボーナス",
        svsPointsGained: "獲得SvSポイント",
        totalSvsPoints: "総SvSポイント",
        selectAtLeastOnePiece: "アップグレード費用を計算するには、少なくとも1つのチャームスロットを選択してください。",
        desiredLevelMustBeHigher: "目標レベルは開始レベルより高い必要があります"
    },
    ko: {
        title: "화이트아웃 서바이벌 계산기",
        logoMain: "화이트아웃 서바이벌",
        logoSub: "계산기 모음",
        home: "홈",
        heroTitle: "게임 향상 도구",
        heroSubtitle: "정확한 계산으로 게임플레이를 최적화",
        chiefGear: "치프 장비",
        chiefCharms: "치프 부적",
        expertHeroes: "전문가 영웅",
        available: "사용 가능",
        comingSoon: "곧 출시",
        supportTitle: "개발 지원",
        supportDescription: "내 개발 프로젝트에 기여하고 지원하고 싶다면, 아래 ID로 선물을 보낼 수 있습니다.",
        gameId: "게임 ID",
        expertHeroesPageTitle: "전문가 영웅 계산기",
        expertHeroesPageSubtitle: "전문가 영웅의 관계 진도와 스킬 업그레이드를 계산",
        relationshipCalculator: "관계 계산기",
        relationshipCalculatorDesc: "친밀도 요구사항과 인장 비용을 계산",
        skillUpgrades: "스킬 업그레이드",
        skillUpgradesDesc: "스킬 업그레이드 재료와 비용을 계산",
        expertHeroesOverview: "전문가 영웅 개요",
        relationshipPageTitle: "관계 계산기",
        relationshipPageSubtitle: "전문가 영웅의 친밀도 요구사항과 인장 비용을 계산",
        currentInventory: "현재 인벤토리",
        selectHero: "영웅 선택",
        relationshipStatus: "관계 상태",
        affinityProgress: "친밀도 진도",
        calculateRelationship: "관계 요구사항 계산",
        currentLevel: "현재 레벨",
        targetLevel: "목표 레벨",
        cyrille: "시릴",
        agnes: "아그네스",
        holger: "홀거",
        romulus: "로물루스",
        compass: "나침반",
        fieryHeart: "불타는 심장",
        sailOfConquest: "정복의 돛",
        expertSigil: "전문가 인장",
        ingot: "경화 합금",
        potion: "연마 용액",
        scroll: "설계도",
        amber: "월광 호박",
        guide: "부적 가이드",
        design: "부적 디자인",
        secret: "부적 비밀",
        stranger: "낯선 사람",
        helmet: "헬멧",
        chestplate: "흉갑",
        pants: "바지",
        watch: "시계",
        ring: "반지",
        staff: "지팡이",
        charmsPageTitle: "치프 부적 계산기",
        charmsPageSubtitle: "치프 부적을 업그레이드하는 데 필요한 재료를 계산",
        charmSlot: "부적 슬롯",
        fromLevel: "시작",
        toLevel: "목표",
        setPieceFrom: "시작 설정",
        setPieceTo: "목표 설정",
        setAllFrom: "모든 시작 설정",
        setAllTo: "모든 목표 설정",
        quickSetAll: "빠른 전체 설정",
        calculateMaterialsNeeded: "필요 재료 계산",
        totalXpRequired: "총 필요 XP",
        totalSigilsRequired: "총 필요 인장",
        targetLevelMustBeHigher: "목표 레벨은 현재 레벨보다 높아야 합니다",
        sufficient: "✓ 충분함",
        needMore: "필요",
        youHaveEnough: "충분히 가지고 있습니다!",
        additionalMaterialsNeeded: "추가로 필요한 재료",
        totalRequired: "총 필요량",
        current: "현재",
        surplus: "잉여",
        missing: "부족",
        upgradeAnalysis: "업그레이드 분석",
        materialsNeededFor: "필요 재료",
        selectedSlots: "선택된 슬롯",
        powerGained: "획득한 파워와 통계",
        totalPower: "총 파워",
        statBonus: "통계 보너스",
        svsPointsGained: "획득 SvS 포인트",
        totalSvsPoints: "총 SvS 포인트",
        selectAtLeastOnePiece: "업그레이드 비용을 계산하려면 적어도 하나의 부적 슬롯을 선택하세요.",
        desiredLevelMustBeHigher: "목표 레벨은 시작 레벨보다 높아야 합니다"
    },
    es: {
        title: "Calculadora Whiteout Survival",
        logoMain: "Whiteout Survival",
        logoSub: "Suite de Calculadoras",
        home: "Inicio",
        heroTitle: "Herramientas de Mejora del Juego",
        heroSubtitle: "Optimiza tu jugabilidad con cálculos precisos",
        chiefGear: "Equipo del Jefe",
        chiefCharms: "Encantos del Jefe",
        expertHeroes: "Héroes Expertos",
        available: "Disponible",
        comingSoon: "Próximamente",
        supportTitle: "Apoyar el Desarrollo",
        supportDescription: "Si quieres contribuir y apoyar mi proyecto de desarrollo. Puedes enviarme regalos usando mi ID de abajo.",
        gameId: "ID del Juego",
        expertHeroesPageTitle: "Calculadora de Héroes Expertos",
        expertHeroesPageSubtitle: "Calcula el progreso de relación y mejoras de habilidades para Héroes Expertos",
        relationshipCalculator: "Calculadora de Relaciones",
        relationshipCalculatorDesc: "Calcula requisitos de afinidad y costos de sellos",
        skillUpgrades: "Mejoras de Habilidades",
        skillUpgradesDesc: "Calcula materiales y costos de mejora de habilidades",
        expertHeroesOverview: "Resumen de Héroes Expertos",
        relationshipPageTitle: "Calculadora de Relaciones",
        relationshipPageSubtitle: "Calcula requisitos de afinidad y costos de sellos para Héroes Expertos",
        currentInventory: "Inventario Actual",
        selectHero: "Seleccionar Héroe",
        relationshipStatus: "Estado de Relación",
        affinityProgress: "Progreso de Afinidad",
        calculateRelationship: "Calcular Requisitos de Relación",
        currentLevel: "Nivel Actual",
        targetLevel: "Nivel Objetivo",
        cyrille: "Cyrille",
        agnes: "Agnes",
        holger: "Holger",
        romulus: "Romulus",
        compass: "Brújula",
        fieryHeart: "Corazón Ardiente",
        sailOfConquest: "Vela de Conquista",
        expertSigil: "Sello Experto",
        ingot: "Aleación Endurecida",
        potion: "Solución Pulidora",
        scroll: "Planes de Diseño",
        amber: "Ámbar Lunar",
        guide: "Guía de Encanto",
        design: "Diseño de Encanto",
        secret: "Secreto de Encanto",
        stranger: "Extraño",
        helmet: "Casco",
        chestplate: "Pechera",
        pants: "Pantalones",
        watch: "Reloj",
        ring: "Anillo",
        staff: "Bastón",
        charmsPageTitle: "Calculadora de Encantos del Jefe",
        charmsPageSubtitle: "Calcula materiales necesarios para mejorar tus encantos del jefe",
        charmSlot: "Ranura de Encanto",
        fromLevel: "Desde",
        toLevel: "Hasta",
        setPieceFrom: "Establecer Desde",
        setPieceTo: "Establecer Hasta",
        setAllFrom: "Establecer Todo Desde",
        setAllTo: "Establecer Todo Hasta",
        quickSetAll: "Establecer Rápido Todo",
        calculateMaterialsNeeded: "Calcular Materiales Necesarios",
        totalXpRequired: "XP Total Requerida",
        totalSigilsRequired: "Sellos Totales Requeridos",
        targetLevelMustBeHigher: "El nivel objetivo debe ser mayor que el nivel actual",
        sufficient: "✓ Suficiente",
        needMore: "Necesita",
        youHaveEnough: "¡Tienes suficiente!",
        additionalMaterialsNeeded: "Materiales adicionales necesarios",
        totalRequired: "Total Requerido",
        current: "Actual",
        surplus: "Excedente",
        missing: "Faltante",
        upgradeAnalysis: "Análisis de Mejora",
        materialsNeededFor: "Materiales necesarios para",
        selectedSlots: "ranura(s) seleccionada(s)",
        powerGained: "Poder y Estadísticas Ganadas",
        totalPower: "Poder Total",
        statBonus: "Bonificación de Estadísticas",
        svsPointsGained: "Puntos SvS Ganados",
        totalSvsPoints: "Puntos SvS Totales",
        selectAtLeastOnePiece: "Por favor selecciona al menos una ranura de encanto para calcular costos de mejora.",
        desiredLevelMustBeHigher: "El nivel objetivo debe ser mayor que el nivel inicial"
    },
    fr: {
        title: "Calculateur Whiteout Survival",
        logoMain: "Whiteout Survival",
        logoSub: "Suite de Calculateurs",
        home: "Accueil",
        heroTitle: "Outils d'Amélioration du Jeu",
        heroSubtitle: "Optimisez votre gameplay avec des calculs précis",
        chiefGear: "Équipement du Chef",
        chiefCharms: "Charmes du Chef",
        expertHeroes: "Héros Experts",
        available: "Disponible",
        comingSoon: "Bientôt Disponible",
        supportTitle: "Soutenir le Développement",
        supportDescription: "Si vous voulez contribuer et soutenir mon projet de développement. Vous pouvez m'envoyer des cadeaux en utilisant mon ID ci-dessous.",
        gameId: "ID du Jeu",
        expertHeroesPageTitle: "Calculateur de Héros Experts",
        expertHeroesPageSubtitle: "Calculez les progrès de relation et les améliorations de compétences pour les Héros Experts",
        relationshipCalculator: "Calculateur de Relations",
        relationshipCalculatorDesc: "Calculez les exigences d'affinité et les coûts de sceaux",
        skillUpgrades: "Améliorations de Compétences",
        skillUpgradesDesc: "Calculez les matériaux et coûts d'amélioration des compétences",
        expertHeroesOverview: "Aperçu des Héros Experts",
        relationshipPageTitle: "Calculateur de Relations",
        relationshipPageSubtitle: "Calculez les exigences d'affinité et les coûts de sceaux pour les Héros Experts",
        currentInventory: "Inventaire Actuel",
        selectHero: "Sélectionner Héros",
        relationshipStatus: "Statut de Relation",
        affinityProgress: "Progrès d'Affinité",
        calculateRelationship: "Calculer les Exigences de Relation",
        currentLevel: "Niveau Actuel",
        targetLevel: "Niveau Cible",
        cyrille: "Cyrille",
        agnes: "Agnes",
        holger: "Holger",
        romulus: "Romulus",
        compass: "Boussole",
        fieryHeart: "Cœur Ardent",
        sailOfConquest: "Voile de Conquête",
        expertSigil: "Sceau Expert",
        ingot: "Alliage Durci",
        potion: "Solution Polissante",
        scroll: "Plans de Conception",
        amber: "Ambre Lunaire",
        guide: "Guide de Charme",
        design: "Design de Charme",
        secret: "Secret de Charme",
        stranger: "Étranger",
        helmet: "Casque",
        chestplate: "Plastron",
        pants: "Pantalon",
        watch: "Montre",
        ring: "Anneau",
        staff: "Bâton",
        charmsPageTitle: "Calculateur de Charmes du Chef",
        charmsPageSubtitle: "Calculez les matériaux nécessaires pour améliorer vos charmes du chef",
        charmSlot: "Emplacement de Charme",
        fromLevel: "De",
        toLevel: "À",
        setPieceFrom: "Définir De",
        setPieceTo: "Définir À",
        setAllFrom: "Définir Tout De",
        setAllTo: "Définir Tout À",
        quickSetAll: "Définition Rapide de Tout",
        calculateMaterialsNeeded: "Calculer les Matériaux Nécessaires",
        totalXpRequired: "XP Total Requis",
        totalSigilsRequired: "Sceaux Totaux Requis",
        targetLevelMustBeHigher: "Le niveau cible doit être supérieur au niveau actuel",
        sufficient: "✓ Suffisant",
        needMore: "Besoin de",
        youHaveEnough: "Vous en avez assez !",
        additionalMaterialsNeeded: "Matériaux supplémentaires nécessaires",
        totalRequired: "Total Requis",
        current: "Actuel",
        surplus: "Surplus",
        missing: "Manquant",
        upgradeAnalysis: "Analyse d'Amélioration",
        materialsNeededFor: "Matériaux nécessaires pour",
        selectedSlots: "emplacement(s) sélectionné(s)",
        powerGained: "Puissance et Statistiques Gagnées",
        totalPower: "Puissance Totale",
        statBonus: "Bonus de Statistiques",
        svsPointsGained: "Points SvS Gagnés",
        totalSvsPoints: "Points SvS Totaux",
        selectAtLeastOnePiece: "Veuillez sélectionner au moins un emplacement de charme pour calculer les coûts d'amélioration.",
        desiredLevelMustBeHigher: "Le niveau cible doit être supérieur au niveau initial"
    },
    de: {
        title: "Whiteout Survival Rechner",
        logoMain: "Whiteout Survival",
        logoSub: "Rechner Suite",
        home: "Startseite",
        heroTitle: "Spiel-Verbesserungstools",
        heroSubtitle: "Optimiere dein Gameplay mit präzisen Berechnungen",
        chiefGear: "Anführer Ausrüstung",
        chiefCharms: "Anführer Zauber",
        expertHeroes: "Experten Helden",
        available: "Verfügbar",
        comingSoon: "Bald Verfügbar",
        supportTitle: "Entwicklung Unterstützen",
        supportDescription: "Wenn Sie zu meinem Entwicklungsprojekt beitragen und es unterstützen möchten. Sie können mir Geschenke mit meiner ID unten senden.",
        gameId: "Spiel ID",
        expertHeroesPageTitle: "Experten Helden Rechner",
        expertHeroesPageSubtitle: "Berechne Beziehungsfortschritt und Fähigkeiten-Upgrades für Experten Helden",
        relationshipCalculator: "Beziehungsrechner",
        relationshipCalculatorDesc: "Berechne Affinitätsanforderungen und Siegel-Kosten",
        skillUpgrades: "Fähigkeiten-Upgrades",
        skillUpgradesDesc: "Berechne Fähigkeiten-Upgrade-Materialien und Kosten",
        expertHeroesOverview: "Experten Helden Übersicht",
        relationshipPageTitle: "Beziehungsrechner",
        relationshipPageSubtitle: "Berechne Affinitätsanforderungen und Siegel-Kosten für Experten Helden",
        currentInventory: "Aktuelles Inventar",
        selectHero: "Held Auswählen",
        relationshipStatus: "Beziehungsstatus",
        affinityProgress: "Affinitätsfortschritt",
        calculateRelationship: "Beziehungsanforderungen Berechnen",
        currentLevel: "Aktuelles Level",
        targetLevel: "Ziel Level",
        cyrille: "Cyrille",
        agnes: "Agnes",
        holger: "Holger",
        romulus: "Romulus",
        compass: "Kompass",
        fieryHeart: "Feuriges Herz",
        sailOfConquest: "Segel der Eroberung",
        expertSigil: "Experten Siegel",
        ingot: "Gehärtete Legierung",
        potion: "Polierlösung",
        scroll: "Konstruktionspläne",
        amber: "Mondlicht Bernstein",
        guide: "Zauber Leitfaden",
        design: "Zauber Design",
        secret: "Zauber Geheimnis",
        stranger: "Fremder",
        helmet: "Helm",
        chestplate: "Brustpanzer",
        pants: "Hose",
        watch: "Uhr",
        ring: "Ring",
        staff: "Stab",
        charmsPageTitle: "Anführer Zauber Rechner",
        charmsPageSubtitle: "Berechne benötigte Materialien zum Verbessern deiner Anführer Zauber",
        charmSlot: "Zauber Slot",
        fromLevel: "Von",
        toLevel: "Bis",
        setPieceFrom: "Von Setzen",
        setPieceTo: "Bis Setzen",
        setAllFrom: "Alle Von Setzen",
        setAllTo: "Alle Bis Setzen",
        quickSetAll: "Schnell Alle Setzen",
        calculateMaterialsNeeded: "Benötigte Materialien Berechnen",
        totalXpRequired: "Gesamt XP Benötigt",
        totalSigilsRequired: "Gesamt Siegel Benötigt",
        targetLevelMustBeHigher: "Ziel Level muss höher als aktuelles Level sein",
        sufficient: "✓ Ausreichend",
        needMore: "Benötigt",
        youHaveEnough: "Du hast genug!",
        additionalMaterialsNeeded: "Zusätzliche Materialien benötigt",
        totalRequired: "Gesamt Benötigt",
        current: "Aktuell",
        surplus: "Überschuss",
        missing: "Fehlend",
        upgradeAnalysis: "Upgrade Analyse",
        materialsNeededFor: "Materialien benötigt für",
        selectedSlots: "ausgewählte(r) Slot(s)",
        powerGained: "Gewonnene Macht und Statistiken",
        totalPower: "Gesamtmacht",
        statBonus: "Statistik Bonus",
        svsPointsGained: "Gewonnene SvS Punkte",
        totalSvsPoints: "Gesamt SvS Punkte",
        selectAtLeastOnePiece: "Bitte wähle mindestens einen Zauber-Slot aus, um Upgrade-Kosten zu berechnen.",
        desiredLevelMustBeHigher: "Ziel Level muss höher als Start Level sein"
    },
    ru: {
        title: "Калькулятор Whiteout Survival",
        logoMain: "Whiteout Survival",
        logoSub: "Набор Калькуляторов",
        home: "Главная",
        heroTitle: "Инструменты Улучшения Игры",
        heroSubtitle: "Оптимизируйте свой геймплей с точными расчетами",
        chiefGear: "Снаряжение Вождя",
        chiefCharms: "Амулеты Вождя",
        expertHeroes: "Экспертные Герои",
        available: "Доступно",
        comingSoon: "Скоро",
        supportTitle: "Поддержать Разработку",
        supportDescription: "Если вы хотите внести вклад и поддержать мой проект разработки. Вы можете отправить мне подарки, используя мой ID ниже.",
        gameId: "ID Игры",
        expertHeroesPageTitle: "Калькулятор Экспертных Героев",
        expertHeroesPageSubtitle: "Рассчитайте прогресс отношений и улучшения навыков для Экспертных Героев",
        relationshipCalculator: "Калькулятор Отношений",
        relationshipCalculatorDesc: "Рассчитайте требования к близости и стоимость печатей",
        skillUpgrades: "Улучшения Навыков",
        skillUpgradesDesc: "Рассчитайте материалы и стоимость улучшения навыков",
        expertHeroesOverview: "Обзор Экспертных Героев",
        relationshipPageTitle: "Калькулятор Отношений",
        relationshipPageSubtitle: "Рассчитайте требования к близости и стоимость печатей для Экспертных Героев",
        currentInventory: "Текущий Инвентарь",
        selectHero: "Выбрать Героя",
        relationshipStatus: "Статус Отношений",
        affinityProgress: "Прогресс Близости",
        calculateRelationship: "Рассчитать Требования к Отношениям",
        currentLevel: "Текущий Уровень",
        targetLevel: "Целевой Уровень",
        cyrille: "Кирилл",
        agnes: "Агнес",
        holger: "Хольгер",
        romulus: "Ромул",
        compass: "Компас",
        fieryHeart: "Пылающее Сердце",
        sailOfConquest: "Парус Завоевания",
        expertSigil: "Печать Эксперта",
        ingot: "Закаленный Сплав",
        potion: "Полирующий Раствор",
        scroll: "Планы Конструкции",
        amber: "Лунный Янтарь",
        guide: "Руководство по Амулетам",
        design: "Дизайн Амулета",
        secret: "Секрет Амулета",
        stranger: "Незнакомец",
        helmet: "Шлем",
        chestplate: "Нагрудник",
        pants: "Штаны",
        watch: "Часы",
        ring: "Кольцо",
        staff: "Посох",
        charmsPageTitle: "Калькулятор Амулетов Вождя",
        charmsPageSubtitle: "Рассчитайте материалы, необходимые для улучшения амулетов вождя",
        charmSlot: "Слот Амулета",
        fromLevel: "С",
        toLevel: "До",
        setPieceFrom: "Установить С",
        setPieceTo: "Установить До",
        setAllFrom: "Установить Все С",
        setAllTo: "Установить Все До",
        quickSetAll: "Быстро Установить Все",
        calculateMaterialsNeeded: "Рассчитать Необходимые Материалы",
        totalXpRequired: "Всего Требуется XP",
        totalSigilsRequired: "Всего Требуется Печатей",
        targetLevelMustBeHigher: "Целевой уровень должен быть выше текущего уровня",
        sufficient: "✓ Достаточно",
        needMore: "Нужно",
        youHaveEnough: "У вас достаточно!",
        additionalMaterialsNeeded: "Необходимы дополнительные материалы",
        totalRequired: "Всего Требуется",
        current: "Текущий",
        surplus: "Излишек",
        missing: "Недостает",
        upgradeAnalysis: "Анализ Улучшения",
        materialsNeededFor: "Материалы необходимы для",
        selectedSlots: "выбранных слота(ов)",
        powerGained: "Полученная Мощь и Статистика",
        totalPower: "Общая Мощь",
        statBonus: "Бонус к Статистике",
        svsPointsGained: "Полученные SvS Очки",
        totalSvsPoints: "Всего SvS Очков",
        selectAtLeastOnePiece: "Пожалуйста, выберите хотя бы один слот амулета для расчета стоимости улучшения.",
        desiredLevelMustBeHigher: "Целевой уровень должен быть выше начального уровня"
    },
    pt: {
        title: "Calculadora Whiteout Survival",
        logoMain: "Whiteout Survival",
        logoSub: "Suíte de Calculadoras",
        home: "Início",
        heroTitle: "Ferramentas de Melhoria do Jogo",
        heroSubtitle: "Otimize seu gameplay com cálculos precisos",
        chiefGear: "Equipamento do Chefe",
        chiefCharms: "Encantos do Chefe",
        expertHeroes: "Heróis Especialistas",
        available: "Disponível",
        comingSoon: "Em Breve",
        supportTitle: "Apoiar o Desenvolvimento",
        supportDescription: "Se você quer contribuir e apoiar meu projeto de desenvolvimento. Você pode me enviar presentes usando meu ID abaixo.",
        gameId: "ID do Jogo",
        expertHeroesPageTitle: "Calculadora de Heróis Especialistas",
        expertHeroesPageSubtitle: "Calcule o progresso de relacionamento e melhorias de habilidades para Heróis Especialistas",
        relationshipCalculator: "Calculadora de Relacionamento",
        relationshipCalculatorDesc: "Calcule requisitos de afinidade e custos de selos",
        skillUpgrades: "Melhorias de Habilidades",
        skillUpgradesDesc: "Calcule materiais e custos de melhoria de habilidades",
        expertHeroesOverview: "Visão Geral dos Heróis Especialistas",
        relationshipPageTitle: "Calculadora de Relacionamento",
        relationshipPageSubtitle: "Calcule requisitos de afinidade e custos de selos para Heróis Especialistas",
        currentInventory: "Inventário Atual",
        selectHero: "Selecionar Herói",
        relationshipStatus: "Status do Relacionamento",
        affinityProgress: "Progresso de Afinidade",
        calculateRelationship: "Calcular Requisitos de Relacionamento",
        currentLevel: "Nível Atual",
        targetLevel: "Nível Alvo",
        cyrille: "Cyrille",
        agnes: "Agnes",
        holger: "Holger",
        romulus: "Romulus",
        compass: "Bússola",
        fieryHeart: "Coração Ardente",
        sailOfConquest: "Vela da Conquista",
        expertSigil: "Selo de Especialista",
        ingot: "Liga Endurecida",
        potion: "Solução de Polimento",
        scroll: "Planos de Design",
        amber: "Âmbar Lunar",
        guide: "Guia de Encanto",
        design: "Design de Encanto",
        secret: "Segredo de Encanto",
        stranger: "Estranho",
        helmet: "Capacete",
        chestplate: "Peitoral",
        pants: "Calças",
        watch: "Relógio",
        ring: "Anel",
        staff: "Cajado",
        charmsPageTitle: "Calculadora de Encantos do Chefe",
        charmsPageSubtitle: "Calcule materiais necessários para melhorar seus encantos do chefe",
        charmSlot: "Slot de Encanto",
        fromLevel: "De",
        toLevel: "Para",
        setPieceFrom: "Definir De",
        setPieceTo: "Definir Para",
        setAllFrom: "Definir Todos De",
        setAllTo: "Definir Todos Para",
        quickSetAll: "Definir Rápido Todos",
        calculateMaterialsNeeded: "Calcular Materiais Necessários",
        totalXpRequired: "XP Total Necessário",
        totalSigilsRequired: "Selos Totais Necessários",
        targetLevelMustBeHigher: "O nível alvo deve ser maior que o nível atual",
        sufficient: "✓ Suficiente",
        needMore: "Precisa",
        youHaveEnough: "Você tem o suficiente!",
        additionalMaterialsNeeded: "Materiais adicionais necessários",
        totalRequired: "Total Necessário",
        current: "Atual",
        surplus: "Excesso",
        missing: "Faltando",
        upgradeAnalysis: "Análise de Melhoria",
        materialsNeededFor: "Materiais necessários para",
        selectedSlots: "slot(s) selecionado(s)",
        powerGained: "Poder e Estatísticas Ganhos",
        totalPower: "Poder Total",
        statBonus: "Bônus de Estatística",
        svsPointsGained: "Pontos SvS Ganhos",
        totalSvsPoints: "Pontos SvS Totais",
        selectAtLeastOnePiece: "Por favor, selecione pelo menos um slot de encanto para calcular custos de melhoria.",
        desiredLevelMustBeHigher: "O nível alvo deve ser maior que o nível inicial"
    },
    it: {
        title: "Calcolatore Whiteout Survival",
        logoMain: "Whiteout Survival",
        logoSub: "Suite di Calcolatori",
        home: "Casa",
        heroTitle: "Strumenti di Miglioramento del Gioco",
        heroSubtitle: "Ottimizza il tuo gameplay con calcoli precisi",
        chiefGear: "Equipaggiamento del Capo",
        chiefCharms: "Amuleti del Capo",
        expertHeroes: "Eroi Esperti",
        available: "Disponibile",
        comingSoon: "Prossimamente",
        supportTitle: "Sostieni lo Sviluppo",
        supportDescription: "Se vuoi contribuire e sostenere il mio progetto di sviluppo. Puoi inviarmi regali usando il mio ID qui sotto.",
        gameId: "ID del Gioco",
        expertHeroesPageTitle: "Calcolatore Eroi Esperti",
        expertHeroesPageSubtitle: "Calcola i progressi nelle relazioni e i miglioramenti delle abilità per gli Eroi Esperti",
        relationshipCalculator: "Calcolatore di Relazioni",
        relationshipCalculatorDesc: "Calcola i requisiti di affinità e i costi dei sigilli",
        skillUpgrades: "Miglioramenti delle Abilità",
        skillUpgradesDesc: "Calcola materiali e costi per miglioramento delle abilità",
        expertHeroesOverview: "Panoramica Eroi Esperti",
        relationshipPageTitle: "Calcolatore di Relazioni",
        relationshipPageSubtitle: "Calcola i requisiti di affinità e i costi dei sigilli per gli Eroi Esperti",
        currentInventory: "Inventario Attuale",
        selectHero: "Seleziona Eroe",
        relationshipStatus: "Stato della Relazione",
        affinityProgress: "Progresso Affinità",
        calculateRelationship: "Calcola Requisiti Relazione",
        currentLevel: "Livello Attuale",
        targetLevel: "Livello Obiettivo",
        cyrille: "Cyrille",
        agnes: "Agnes",
        holger: "Holger",
        romulus: "Romulus",
        compass: "Bussola",
        fieryHeart: "Cuore Infuocato",
        sailOfConquest: "Vela della Conquista",
        expertSigil: "Sigillo Esperto",
        ingot: "Lega Indurita",
        potion: "Soluzione Lucidante",
        scroll: "Piani di Progettazione",
        amber: "Ambra Lunare",
        guide: "Guida degli Amuleti",
        design: "Design dell'Amuleto",
        secret: "Segreto dell'Amuleto",
        stranger: "Sconosciuto",
        helmet: "Elmo",
        chestplate: "Corazza",
        pants: "Pantaloni",
        watch: "Orologio",
        ring: "Anello",
        staff: "Bastone",
        charmsPageTitle: "Calcolatore Amuleti del Capo",
        charmsPageSubtitle: "Calcola i materiali necessari per migliorare i tuoi amuleti del capo",
        charmSlot: "Slot Amuleto",
        fromLevel: "Da",
        toLevel: "A",
        setPieceFrom: "Imposta Da",
        setPieceTo: "Imposta A",
        setAllFrom: "Imposta Tutti Da",
        setAllTo: "Imposta Tutti A",
        quickSetAll: "Imposta Rapidamente Tutti",
        calculateMaterialsNeeded: "Calcola Materiali Necessari",
        totalXpRequired: "XP Totali Richiesti",
        totalSigilsRequired: "Sigilli Totali Richiesti",
        targetLevelMustBeHigher: "Il livello obiettivo deve essere più alto del livello attuale",
        sufficient: "✓ Sufficiente",
        needMore: "Necessario",
        youHaveEnough: "Ne hai abbastanza!",
        additionalMaterialsNeeded: "Materiali aggiuntivi necessari",
        totalRequired: "Totale Richiesto",
        current: "Attuale",
        surplus: "Eccesso",
        missing: "Mancante",
        upgradeAnalysis: "Analisi Miglioramento",
        materialsNeededFor: "Materiali necessari per",
        selectedSlots: "slot selezionato/i",
        powerGained: "Potenza e Statistiche Guadagnate",
        totalPower: "Potenza Totale",
        statBonus: "Bonus Statistiche",
        svsPointsGained: "Punti SvS Guadagnati",
        totalSvsPoints: "Punti SvS Totali",
        selectAtLeastOnePiece: "Per favore seleziona almeno uno slot amuleto per calcolare i costi di miglioramento.",
        desiredLevelMustBeHigher: "Il livello obiettivo deve essere più alto del livello iniziale"
    },
    ar: {
        title: "حاسبة وايت آوت سيرفايفل",
        logoMain: "وايت آوت سيرفايفل",
        logoSub: "مجموعة الحاسبات",
        home: "الرئيسية",
        heroTitle: "أدوات تحسين اللعبة",
        heroSubtitle: "حسّن أسلوب لعبك بحسابات دقيقة",
        chiefGear: "معدات الزعيم",
        chiefCharms: "تعاويذ الزعيم",
        expertHeroes: "الأبطال الخبراء",
        available: "متاح",
        comingSoon: "قريباً",
        supportTitle: "دعم التطوير",
        supportDescription: "إذا كنت تريد المساهمة ودعم مشروع التطوير الخاص بي. يمكنك إرسال هدايا لي باستخدام معرفي أدناه.",
        gameId: "معرف اللعبة",
        expertHeroesPageTitle: "حاسبة الأبطال الخبراء",
        expertHeroesPageSubtitle: "احسب تقدم العلاقة وترقيات المهارات للأبطال الخبراء",
        relationshipCalculator: "حاسبة العلاقات",
        relationshipCalculatorDesc: "احسب متطلبات التقارب وتكاليف الأختام",
        skillUpgrades: "ترقيات المهارات",
        skillUpgradesDesc: "احسب مواد وتكاليف ترقية المهارات",
        expertHeroesOverview: "نظرة عامة على الأبطال الخبراء",
        relationshipPageTitle: "حاسبة العلاقات",
        relationshipPageSubtitle: "احسب متطلبات التقارب وتكاليف الأختام للأبطال الخبراء",
        currentInventory: "المخزون الحالي",
        selectHero: "اختر البطل",
        relationshipStatus: "حالة العلاقة",
        affinityProgress: "تقدم التقارب",
        calculateRelationship: "احسب متطلبات العلاقة",
        currentLevel: "المستوى الحالي",
        targetLevel: "المستوى المستهدف",
        cyrille: "سيريل",
        agnes: "أغنيس",
        holger: "هولغر",
        romulus: "رومولوس",
        compass: "بوصلة",
        fieryHeart: "قلب ناري",
        sailOfConquest: "شراع الغزو",
        expertSigil: "ختم الخبير",
        ingot: "سبيكة مقواة",
        potion: "محلول تلميع",
        scroll: "خطط التصميم",
        amber: "عنبر القمر",
        guide: "دليل التعويذة",
        design: "تصميم التعويذة",
        secret: "سر التعويذة",
        stranger: "غريب",
        helmet: "خوذة",
        chestplate: "درع صدر",
        pants: "سروال",
        watch: "ساعة",
        ring: "خاتم",
        staff: "عصا",
        charmsPageTitle: "حاسبة تعاويذ الزعيم",
        charmsPageSubtitle: "احسب المواد اللازمة لترقية تعاويذ الزعيم",
        charmSlot: "فتحة التعويذة",
        fromLevel: "من",
        toLevel: "إلى",
        setPieceFrom: "تعيين من",
        setPieceTo: "تعيين إلى",
        setAllFrom: "تعيين الكل من",
        setAllTo: "تعيين الكل إلى",
        quickSetAll: "تعيين سريع للكل",
        calculateMaterialsNeeded: "احسب المواد المطلوبة",
        totalXpRequired: "إجمالي الخبرة المطلوبة",
        totalSigilsRequired: "إجمالي الأختام المطلوبة",
        targetLevelMustBeHigher: "يجب أن يكون المستوى المستهدف أعلى من المستوى الحالي",
        sufficient: "✓ كافي",
        needMore: "تحتاج",
        youHaveEnough: "لديك ما يكفي!",
        additionalMaterialsNeeded: "مواد إضافية مطلوبة",
        totalRequired: "إجمالي المطلوب",
        current: "الحالي",
        surplus: "فائض",
        missing: "مفقود",
        upgradeAnalysis: "تحليل الترقية",
        materialsNeededFor: "المواد المطلوبة لـ",
        selectedSlots: "الفتحة/الفتحات المختارة",
        powerGained: "القوة والإحصائيات المكتسبة",
        totalPower: "إجمالي القوة",
        statBonus: "مكافأة الإحصائيات",
        svsPointsGained: "نقاط SvS المكتسبة",
        totalSvsPoints: "إجمالي نقاط SvS",
        selectAtLeastOnePiece: "يرجى اختيار فتحة تعويذة واحدة على الأقل لحساب تكاليف الترقية.",
        desiredLevelMustBeHigher: "يجب أن يكون المستوى المستهدف أعلى من المستوى الأولي"
    },
    hi: {
        title: "व्हाइटआउट सर्वाइवल कैलकुलेटर",
        logoMain: "व्हाइटआउट सर्वाइवल",
        logoSub: "कैलकुलेटर सूट",
        home: "होम",
        heroTitle: "गेम एन्हांसमेंट टूल्स",
        heroSubtitle: "सटीक गणनाओं के साथ अपने गेमप्ले को अनुकूलित करें",
        chiefGear: "चीफ गियर",
        chiefCharms: "चीफ चार्म्स",
        expertHeroes: "विशेषज्ञ हीरो",
        available: "उपलब्ध",
        comingSoon: "जल्द आ रहा है",
        supportTitle: "विकास का समर्थन करें",
        supportDescription: "यदि आप मेरे विकास प्रोजेक्ट में योगदान और समर्थन करना चाहते हैं। आप नीचे दिए गए मेरे ID का उपयोग करके मुझे उपहार भेज सकते हैं।",
        gameId: "गेम ID",
        expertHeroesPageTitle: "विशेषज्ञ हीरो कैलकुलेटर",
        expertHeroesPageSubtitle: "विशेषज्ञ हीरो के लिए रिश्ते की प्रगति और कौशल अपग्रेड की गणना करें",
        relationshipCalculator: "रिश्ता कैलकुलेटर",
        relationshipCalculatorDesc: "आकर्षण आवश्यकताओं और सील लागत की गणना करें",
        skillUpgrades: "कौशल अपग्रेड",
        skillUpgradesDesc: "कौशल अपग्रेड सामग्री और लागत की गणना करें",
        expertHeroesOverview: "विशेषज्ञ हीरो अवलोकन",
        relationshipPageTitle: "रिश्ता कैलकुलेटर",
        relationshipPageSubtitle: "विशेषज्ञ हीरो के लिए आकर्षण आवश्यकताओं और सील लागत की गणना करें",
        currentInventory: "वर्तमान इन्वेंटरी",
        selectHero: "हीरो चुनें",
        relationshipStatus: "रिश्ते की स्थिति",
        affinityProgress: "आकर्षण प्रगति",
        calculateRelationship: "रिश्ते की आवश्यकताओं की गणना करें",
        currentLevel: "वर्तमान स्तर",
        targetLevel: "लक्ष्य स्तर",
        cyrille: "सिरिल",
        agnes: "एग्नेस",
        holger: "होल्गर",
        romulus: "रोमुलस",
        compass: "कम्पास",
        fieryHeart: "ज्वलंत हृदय",
        sailOfConquest: "विजय की पाल",
        expertSigil: "विशेषज्ञ मुहर",
        ingot: "कठोर मिश्र धातु",
        potion: "पॉलिशिंग समाधान",
        scroll: "डिज़ाइन योजना",
        amber: "चांद्र एम्बर",
        guide: "चार्म गाइड",
        design: "चार्म डिज़ाइन",
        secret: "चार्म रहस्य",
        stranger: "अजनबी",
        helmet: "हेलमेट",
        chestplate: "छाती कवच",
        pants: "पैंट",
        watch: "घड़ी",
        ring: "अंगूठी",
        staff: "स्टाफ",
        charmsPageTitle: "चीफ चार्म्स कैलकुलेटर",
        charmsPageSubtitle: "अपने चीफ चार्म्स को अपग्रेड करने के लिए आवश्यक सामग्री की गणना करें",
        charmSlot: "चार्म स्लॉट",
        fromLevel: "से",
        toLevel: "तक",
        setPieceFrom: "से सेट करें",
        setPieceTo: "तक सेट करें",
        setAllFrom: "सभी को से सेट करें",
        setAllTo: "सभी को तक सेट करें",
        quickSetAll: "त्वरित सभी सेट",
        calculateMaterialsNeeded: "आवश्यक सामग्री की गणना करें",
        totalXpRequired: "कुल आवश्यक XP",
        totalSigilsRequired: "कुल आवश्यक मुहरें",
        targetLevelMustBeHigher: "लक्ष्य स्तर वर्तमान स्तर से अधिक होना चाहिए",
        sufficient: "✓ पर्याप्त",
        needMore: "चाहिए",
        youHaveEnough: "आपके पास पर्याप्त है!",
        additionalMaterialsNeeded: "अतिरिक्त सामग्री आवश्यक",
        totalRequired: "कुल आवश्यक",
        current: "वर्तमान",
        surplus: "अतिरिक्त",
        missing: "गुम",
        upgradeAnalysis: "अपग्रेड विश्लेषण",
        materialsNeededFor: "के लिए आवश्यक सामग्री",
        selectedSlots: "चयनित स्लॉट",
        powerGained: "प्राप्त शक्ति और आँकड़े",
        totalPower: "कुल शक्ति",
        statBonus: "आँकड़े बोनस",
        svsPointsGained: "प्राप्त SvS अंक",
        totalSvsPoints: "कुल SvS अंक",
        selectAtLeastOnePiece: "कृपया अपग्रेड लागत की गणना के लिए कम से कम एक चार्म स्लॉट चुनें।",
        desiredLevelMustBeHigher: "लक्ष्य स्तर प्रारंभिक स्तर से अधिक होना चाहिए"
    }
};

class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.init();
    }

    init() {
        this.createLanguageDropdown();
        this.setupEventListeners();
        this.updateLanguage(this.currentLanguage);
    }

    createLanguageDropdown() {
        const dropdown = document.getElementById('language-dropdown');
        if (!dropdown) return;

        Object.keys(LANGUAGES).forEach(langCode => {
            const option = document.createElement('div');
            option.className = 'language-option';
            if (langCode === this.currentLanguage) {
                option.classList.add('active');
            }
            option.innerHTML = `
                <span class="language-flag">${LANGUAGES[langCode].flag}</span>
                <span>${LANGUAGES[langCode].name}</span>
            `;
            option.addEventListener('click', () => {
                this.updateLanguage(langCode);
                dropdown.classList.remove('show');
            });
            dropdown.appendChild(option);
        });
    }

    setupEventListeners() {
        const languageBtn = document.getElementById('language-btn');
        const dropdown = document.getElementById('language-dropdown');
        
        if (languageBtn && dropdown) {
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('show');
            });

            document.addEventListener('click', (e) => {
                if (!languageBtn.contains(e.target)) {
                    dropdown.classList.remove('show');
                }
            });
        }
    }

    updateLanguage(langCode) {
        this.currentLanguage = langCode;
        localStorage.setItem('language', langCode);

        const languageBtn = document.getElementById('language-btn');
        if (languageBtn) {
            languageBtn.textContent = langCode.toUpperCase();
        }

        const dropdown = document.getElementById('language-dropdown');
        if (dropdown) {
            dropdown.querySelectorAll('.language-option').forEach(option => {
                option.classList.remove('active');
            });
            const activeOption = dropdown.children[Object.keys(LANGUAGES).indexOf(langCode)];
            if (activeOption) {
                activeOption.classList.add('active');
            }
        }

        this.applyTranslations();
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: langCode, translations: this.getCurrentTranslations() }
        }));
    }

    getCurrentTranslations() {
        return TRANSLATIONS[this.currentLanguage] || TRANSLATIONS.en;
    }

    applyTranslations() {
        const translations = this.getCurrentTranslations();
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        document.title = translations.title || 'Whiteout Survival Calculator';

        Object.keys(MATERIALS).forEach(materialKey => {
            const nameElement = document.querySelector(`[data-material="${materialKey}"]`);
            if (nameElement && translations[materialKey]) {
                nameElement.textContent = translations[materialKey];
            }
        });

        Object.keys(CHARM_MATERIALS).forEach(materialKey => {
            const nameElement = document.querySelector(`[data-material="${materialKey}"]`);
            if (nameElement && translations[materialKey]) {
                nameElement.textContent = translations[materialKey];
            }
        });

        Object.keys(EXPERT_HEROES_MATERIALS).forEach(materialKey => {
            const nameElement = document.querySelector(`[data-material="${materialKey}"]`);
            if (nameElement && translations[materialKey]) {
                nameElement.textContent = translations[materialKey];
            }
        });
    }
}

class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupEventListener();
    }

    setupEventListener() {
        const themeBtn = document.getElementById('theme-switcher');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme() {
        if (this.currentTheme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }
}

class Dropdown {
    constructor(element, options = {}) {
        this.element = element;
        this.toggle = element.querySelector('.dropdown-toggle');
        this.menu = element.querySelector('.dropdown-menu');
        this.text = element.querySelector('.dropdown-text');
        this.items = options.items || [];
        this.value = '';

        this.init();
    }

    init() {
        this.createItems();
        this.setupEventListeners();
    }

    createItems() {
        this.menu.innerHTML = '';
        this.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'dropdown-item';
            div.textContent = item.text;
            div.dataset.value = item.value;
            div.addEventListener('click', () => {
                this.setValue(item.value);
                this.close();
            });
            this.menu.appendChild(div);
        });
    }

    setupEventListeners() {
        this.toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (this.element.classList.contains('show')) {
                this.close();
            } else {
                this.open();
            }
        });

        document.addEventListener('click', (e) => {
            if (!this.element.contains(e.target)) {
                this.close();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        });
    }

    toggle() {
        if (this.element.classList.contains('show')) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        document.querySelectorAll('.dropdown.show').forEach(dropdown => {
            if (dropdown !== this.element) {
                dropdown.classList.remove('show');
            }
        });

        this.element.classList.add('show');
        this.menu.classList.add('show');
    }

    close() {
        this.element.classList.remove('show');
        this.menu.classList.remove('show');
    }

    setValue(value) {
        this.value = value.toString();
        const item = this.items.find(item => item.value.toString() === value.toString());
        if (item) {
            this.text.textContent = item.text;
        }

        this.element.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.value }
        }));
    }

    getValue() {
        return this.value;
    }

    updateItems(items) {
        this.items = items;
        this.createItems();
    }
}

function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toLocaleString();
}

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

async function loadIcon(container, materialData) {
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

document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
    window.themeManager = new ThemeManager();

    const closeAllDropdowns = () => {
        document.querySelectorAll('.dropdown.show').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
            menu.classList.remove('show');
        });
        document.querySelectorAll('.language-dropdown.show').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllDropdowns();
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown') && !e.target.closest('.language-selector')) {
            closeAllDropdowns();
        }
    });
});
