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
        available: "Available",
        comingSoon: "Coming Soon",
        supportTitle: "Support Development",
        supportDescription: "If you want to contribute and support my development project. You can gift me using my ID underneath.",
        gameId: "Game ID",
        pageTitle: "Chief Gear Calculator",
        pageSubtitle: "Calculate materials needed to upgrade your chief gear",
        charmsPageTitle: "Chief Charms Calculator",
        charmsPageSubtitle: "Calculate materials needed to upgrade your chief charms",
        currentInventory: "Current Inventory",
        quickSetAll: "Quick Set All",
        currentLevel: "Current Level",
        desiredLevel: "Desired Level",
        selectLevel: "Select level...",
        helmet: "Helmet",
        chestplate: "Chestplate",
        pants: "Pants",
        watch: "Watch",
        ring: "Ring",
        staff: "Staff",
        calculateMaterialsNeeded: "Calculate Materials Needed",
        upgradeAnalysis: "Upgrade Analysis",
        materialsNeededFor: "Materials needed for",
        selectedPieces: "selected piece(s)",
        sufficient: "✓ Sufficient",
        needMore: "Need",
        more: "more",
        youHaveEnough: "You have enough!",
        additionalMaterialsNeeded: "Additional materials needed",
        totalRequired: "Total Required",
        current: "Current",
        surplus: "Surplus",
        missing: "Missing",
        desiredLevelRequired: ": Desired level is required",
        invalidDesiredLevel: ": Invalid desired level",
        desiredLevelMustBeHigher: ": Desired level must be higher than current level",
        selectAtLeastOnePiece: "Please select at least one gear piece to calculate upgrade costs.",
        svsPointsGained: "SvS Points Gained",
        totalSvsPoints: "Total SvS Points",
        charmSlot: "Charm Slot",
        fromLevel: "From Level",
        toLevel: "To Level",
        setAllFrom: "Set All From",
        setAllTo: "Set All To",
        setPieceFrom: "Set From",
        setPieceTo: "Set To",
        statBonus: "Stat Bonus",
        totalPower: "Total Power",
        powerGained: "Power Gained",
        selectedSlots: "selected charm slot(s)",
        guide: "Charm Guide",
        design: "Charm Design",
        secret: "Charm Secret",
        ingot: "Hardened Alloy",
        potion: "Polishing Solution",
        scroll: "Design Plans",
        amber: "Lunar Amber"
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
        available: "可用",
        comingSoon: "即将推出",
        supportTitle: "支持开发",
        supportDescription: "如果您想贡献并支持我的开发项目。您可以使用下面的ID给我送礼。",
        gameId: "游戏ID",
        pageTitle: "首领装备计算器",
        pageSubtitle: "计算升级首领装备所需的材料",
        charmsPageTitle: "首领符咒计算器",
        charmsPageSubtitle: "计算升级首领符咒所需的材料",
        currentInventory: "当前库存",
        quickSetAll: "快速设置全部",
        currentLevel: "当前等级",
        desiredLevel: "目标等级",
        selectLevel: "选择等级...",
        helmet: "头盔",
        chestplate: "胸甲",
        pants: "护腿",
        watch: "手表",
        ring: "戒指",
        staff: "法杖",
        calculateMaterialsNeeded: "计算所需材料",
        upgradeAnalysis: "升级分析",
        materialsNeededFor: "所需材料为",
        selectedPieces: "选定件数",
        sufficient: "✓ 充足",
        needMore: "需要",
        more: "更多",
        youHaveEnough: "您拥有足够！",
        additionalMaterialsNeeded: "所需额外材料",
        totalRequired: "总需求",
        current: "当前",
        surplus: "剩余",
        missing: "缺少",
        desiredLevelRequired: "：需要目标等级",
        invalidDesiredLevel: "：无效的目标等级",
        desiredLevelMustBeHigher: "：目标等级必须高于当前等级",
        selectAtLeastOnePiece: "请至少选择一件装备来计算升级费用。",
        svsPointsGained: "获得的SvS积分",
        totalSvsPoints: "总SvS积分",
        charmSlot: "符咒槽",
        fromLevel: "从等级",
        toLevel: "到等级",
        setAllFrom: "设置全部从",
        setAllTo: "设置全部到",
        setPieceFrom: "设置装备从",
        setPieceTo: "设置装备到",
        statBonus: "属性加成",
        totalPower: "总战力",
        powerGained: "获得战力",
        selectedSlots: "选择的符咒槽",
        guide: "符咒指南",
        design: "符咒设计",
        secret: "符咒秘籍",
        ingot: "硬化合金",
        potion: "抛光溶液",
        scroll: "设计图纸",
        amber: "月光琥珀"
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
        available: "利用可能",
        comingSoon: "近日公開",
        supportTitle: "開発支援",
        supportDescription: "私の開発プロジェクトに貢献し支援したい場合は、下記のIDでギフトを送ることができます。",
        gameId: "ゲーム ID",
        pageTitle: "チーフギア計算機",
        pageSubtitle: "チーフギアのアップグレードに必要な材料を計算",
        charmsPageTitle: "チーフチャーム計算機",
        charmsPageSubtitle: "チーフチャームのアップグレードに必要な材料を計算",
        currentInventory: "現在の在庫",
        quickSetAll: "すべて一括設定",
        currentLevel: "現在のレベル",
        desiredLevel: "目標レベル",
        selectLevel: "レベルを選択...",
        helmet: "ヘルメット",
        chestplate: "チェストプレート",
        pants: "パンツ",
        watch: "時計",
        ring: "リング",
        staff: "スタッフ",
        calculateMaterialsNeeded: "必要材料を計算",
        upgradeAnalysis: "アップグレード分析",
        materialsNeededFor: "必要材料",
        selectedPieces: "選択されたピース",
        sufficient: "✓ 十分",
        needMore: "必要",
        more: "もっと",
        youHaveEnough: "十分お持ちです！",
        additionalMaterialsNeeded: "追加で必要な材料",
        totalRequired: "必要合計",
        current: "現在",
        surplus: "余剰",
        missing: "不足",
        desiredLevelRequired: "：目標レベルが必要です",
        invalidDesiredLevel: "：無効な目標レベル",
        desiredLevelMustBeHigher: "：目標レベルは現在のレベルより高い必要があります",
        selectAtLeastOnePiece: "アップグレード費用を計算するには、少なくとも1つのギアピースを選択してください。",
        svsPointsGained: "獲得SvSポイント",
        totalSvsPoints: "合計SvSポイント",
        charmSlot: "チャームスロット",
        fromLevel: "開始レベル",
        toLevel: "目標レベル",
        setAllFrom: "全て開始設定",
        setAllTo: "全て目標設定",
        setPieceFrom: "装備開始設定",
        setPieceTo: "装備目標設定",
        statBonus: "ステータスボーナス",
        totalPower: "総パワー",
        powerGained: "獲得パワー",
        selectedSlots: "選択されたチャームスロット",
        guide: "チャームガイド",
        design: "チャームデザイン",
        secret: "チャームシークレット",
        ingot: "硬化合金",
        potion: "研磨溶液",
        scroll: "設計図",
        amber: "月光琥珀"
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
        available: "사용 가능",
        comingSoon: "곧 출시",
        supportTitle: "개발 지원",
        supportDescription: "내 개발 프로젝트에 기여하고 지원하고 싶다면, 아래 ID로 선물을 보낼 수 있습니다.",
        gameId: "게임 ID",
        pageTitle: "치프 장비 계산기",
        pageSubtitle: "치프 장비 업그레이드에 필요한 재료를 계산",
        charmsPageTitle: "치프 부적 계산기",
        charmsPageSubtitle: "치프 부적 업그레이드에 필요한 재료를 계산",
        currentInventory: "현재 인벤토리",
        quickSetAll: "모두 빠른 설정",
        currentLevel: "현재 레벨",
        desiredLevel: "목표 레벨",
        selectLevel: "레벨 선택...",
        helmet: "헬멧",
        chestplate: "흉갑",
        pants: "바지",
        watch: "시계",
        ring: "반지",
        staff: "스태프",
        calculateMaterialsNeeded: "필요 재료 계산",
        upgradeAnalysis: "업그레이드 분석",
        materialsNeededFor: "필요 재료",
        selectedPieces: "선택된 피스",
        sufficient: "✓ 충분함",
        needMore: "필요",
        more: "더",
        youHaveEnough: "충분히 가지고 있습니다!",
        additionalMaterialsNeeded: "추가로 필요한 재료",
        totalRequired: "총 필요량",
        current: "현재",
        surplus: "잉여",
        missing: "부족",
        desiredLevelRequired: ": 목표 레벨이 필요합니다",
        invalidDesiredLevel: ": 잘못된 목표 레벨",
        desiredLevelMustBeHigher: ": 목표 레벨은 현재 레벨보다 높아야 합니다",
        selectAtLeastOnePiece: "업그레이드 비용을 계산하려면 최소 하나의 장비를 선택하세요.",
        svsPointsGained: "획득한 SvS 포인트",
        totalSvsPoints: "총 SvS 포인트",
        charmSlot: "부적 슬롯",
        fromLevel: "시작 레벨",
        toLevel: "목표 레벨",
        setAllFrom: "모두 시작 설정",
        setAllTo: "모두 목표 설정",
        setPieceFrom: "장비 시작 설정",
        setPieceTo: "장비 목표 설정",
        statBonus: "스탯 보너스",
        totalPower: "총 파워",
        powerGained: "획득 파워",
        selectedSlots: "선택된 부적 슬롯",
        guide: "부적 가이드",
        design: "부적 디자인",
        secret: "부적 비밀",
        ingot: "경화 합금",
        potion: "연마 용액",
        scroll: "설계도",
        amber: "달빛 호박"
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
        available: "Disponible",
        comingSoon: "Próximamente",
        supportTitle: "Apoyar el Desarrollo",
        supportDescription: "Si quieres contribuir y apoyar mi proyecto de desarrollo. Puedes enviarme regalos usando mi ID de abajo.",
        gameId: "ID del Juego",
        pageTitle: "Calculadora de Equipo del Jefe",
        pageSubtitle: "Calcula los materiales necesarios para mejorar tu equipo de jefe",
        charmsPageTitle: "Calculadora de Encantos del Jefe",
        charmsPageSubtitle: "Calcula los materiales necesarios para mejorar tus encantos del jefe",
        currentInventory: "Inventario Actual",
        quickSetAll: "Configurar Todo Rápido",
        currentLevel: "Nivel Actual",
        desiredLevel: "Nivel Deseado",
        selectLevel: "Seleccionar nivel...",
        helmet: "Casco",
        chestplate: "Pechera",
        pants: "Pantalones",
        watch: "Reloj",
        ring: "Anillo",
        staff: "Bastón",
        calculateMaterialsNeeded: "Calcular Materiales Necesarios",
        upgradeAnalysis: "Análisis de Mejora",
        materialsNeededFor: "Materiales necesarios para",
        selectedPieces: "pieza(s) seleccionada(s)",
        sufficient: "✓ Suficiente",
        needMore: "Necesita",
        more: "más",
        youHaveEnough: "¡Tienes suficiente!",
        additionalMaterialsNeeded: "Materiales adicionales necesarios",
        totalRequired: "Total Requerido",
        current: "Actual",
        surplus: "Excedente",
        missing: "Faltante",
        desiredLevelRequired: ": Se requiere nivel deseado",
        invalidDesiredLevel: ": Nivel deseado inválido",
        desiredLevelMustBeHigher: ": El nivel deseado debe ser mayor que el nivel actual",
        selectAtLeastOnePiece: "Por favor selecciona al menos una pieza de equipo para calcular los costos de mejora.",
        svsPointsGained: "Puntos SvS Ganados",
        totalSvsPoints: "Puntos SvS Totales",
        charmSlot: "Ranura de Encanto",
        fromLevel: "Nivel Inicial",
        toLevel: "Nivel Final",
        setAllFrom: "Establecer Todo Desde",
        setAllTo: "Establecer Todo Hasta",
        setPieceFrom: "Establecer Pieza Desde",
        setPieceTo: "Establecer Pieza Hasta",
        statBonus: "Bonificación de Estadística",
        totalPower: "Poder Total",
        powerGained: "Poder Ganado",
        selectedSlots: "ranuras de encanto seleccionadas",
        guide: "Guía de Encanto",
        design: "Diseño de Encanto",
        secret: "Secreto de Encanto",
        ingot: "Aleación Endurecida",
        potion: "Solución Pulida",
        scroll: "Planos de Diseño",
        amber: "Ámbar Lunar"
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
        available: "Disponible",
        comingSoon: "Bientôt Disponible",
        supportTitle: "Soutenir le Développement",
        supportDescription: "Si vous voulez contribuer et soutenir mon projet de développement. Vous pouvez m'envoyer des cadeaux en utilisant mon ID ci-dessous.",
        gameId: "ID du Jeu",
        pageTitle: "Calculateur d'Équipement du Chef",
        pageSubtitle: "Calculez les matériaux nécessaires pour améliorer votre équipement de chef",
        charmsPageTitle: "Calculateur de Charmes du Chef",
        charmsPageSubtitle: "Calculez les matériaux nécessaires pour améliorer vos charmes de chef",
        currentInventory: "Inventaire Actuel",
        quickSetAll: "Configurer Tout Rapidement",
        currentLevel: "Niveau Actuel",
        desiredLevel: "Niveau Désiré",
        selectLevel: "Sélectionner le niveau...",
        helmet: "Casque",
        chestplate: "Plastron",
        pants: "Pantalon",
        watch: "Montre",
        ring: "Anneau",
        staff: "Bâton",
        calculateMaterialsNeeded: "Calculer les Matériaux Nécessaires",
        upgradeAnalysis: "Analyse d'Amélioration",
        materialsNeededFor: "Matériaux nécessaires pour",
        selectedPieces: "pièce(s) sélectionnée(s)",
        sufficient: "✓ Suffisant",
        needMore: "Besoin de",
        more: "plus",
        youHaveEnough: "Vous en avez assez !",
        additionalMaterialsNeeded: "Matériaux supplémentaires nécessaires",
        totalRequired: "Total Requis",
        current: "Actuel",
        surplus: "Surplus",
        missing: "Manquant",
        desiredLevelRequired: ": Niveau désiré requis",
        invalidDesiredLevel: ": Niveau désiré invalide",
        desiredLevelMustBeHigher: ": Le niveau désiré doit être supérieur au niveau actuel",
        selectAtLeastOnePiece: "Veuillez sélectionner au moins une pièce d'équipement pour calculer les coûts d'amélioration.",
        svsPointsGained: "Points SvS Gagnés",
        totalSvsPoints: "Points SvS Totaux",
        charmSlot: "Emplacement de Charme",
        fromLevel: "Niveau Initial",
        toLevel: "Niveau Final",
        setAllFrom: "Définir Tout Depuis",
        setAllTo: "Définir Tout Jusqu'à",
        setPieceFrom: "Définir Pièce Depuis",
        setPieceTo: "Définir Pièce Jusqu'à",
        statBonus: "Bonus de Statistique",
        totalPower: "Puissance Totale",
        powerGained: "Puissance Gagnée",
        selectedSlots: "emplacements de charme sélectionnés",
        guide: "Guide de Charme",
        design: "Design de Charme",
        secret: "Secret de Charme",
        ingot: "Alliage Durci",
        potion: "Solution de Polissage",
        scroll: "Plans de Conception",
        amber: "Ambre Lunaire"
    },
    de: {
        title: "Whiteout Survival Rechner",
        logoMain: "Whiteout Survival",
        logoSub: "Rechner-Suite",
        home: "Startseite",
        heroTitle: "Spiel-Verbesserungstools",
        heroSubtitle: "Optimieren Sie Ihr Gameplay mit präzisen Berechnungen",
        chiefGear: "Häuptlings-Ausrüstung",
        chiefCharms: "Häuptlings-Amulette",
        available: "Verfügbar",
        comingSoon: "Demnächst",
        supportTitle: "Entwicklung Unterstützen",
        supportDescription: "Wenn Sie zu meinem Entwicklungsprojekt beitragen und es unterstützen möchten. Sie können mir Geschenke mit meiner unten stehenden ID senden.",
        gameId: "Spiel-ID",
        pageTitle: "Häuptlings-Ausrüstungsrechner",
        pageSubtitle: "Berechnen Sie die Materialien, die für das Upgrade Ihrer Häuptlingsausrüstung benötigt werden",
        charmsPageTitle: "Häuptlings-Amulette Rechner",
        charmsPageSubtitle: "Berechnen Sie die Materialien, die für das Upgrade Ihrer Häuptlings-Amulette benötigt werden",
        currentInventory: "Aktuelles Inventar",
        quickSetAll: "Alles Schnell Einstellen",
        currentLevel: "Aktueller Level",
        desiredLevel: "Gewünschter Level",
        selectLevel: "Level auswählen...",
        helmet: "Helm",
        chestplate: "Brustplatte",
        pants: "Hose",
        watch: "Uhr",
        ring: "Ring",
        staff: "Stab",
        calculateMaterialsNeeded: "Benötigte Materialien Berechnen",
        upgradeAnalysis: "Upgrade-Analyse",
        materialsNeededFor: "Benötigte Materialien für",
        selectedPieces: "ausgewählte(s) Teil(e)",
        sufficient: "✓ Ausreichend",
        needMore: "Benötigt",
        more: "mehr",
        youHaveEnough: "Sie haben genug!",
        additionalMaterialsNeeded: "Zusätzlich benötigte Materialien",
        totalRequired: "Insgesamt Erforderlich",
        current: "Aktuell",
        surplus: "Überschuss",
        missing: "Fehlend",
        desiredLevelRequired: ": Gewünschter Level erforderlich",
        invalidDesiredLevel: ": Ungültiger gewünschter Level",
        desiredLevelMustBeHigher: ": Gewünschter Level muss höher als aktueller Level sein",
        selectAtLeastOnePiece: "Bitte wählen Sie mindestens ein Ausrüstungsteil aus, um Upgrade-Kosten zu berechnen.",
        svsPointsGained: "Erhaltene SvS-Punkte",
        totalSvsPoints: "Gesamt SvS-Punkte",
        charmSlot: "Amulett-Slot",
        fromLevel: "Anfangslevel",
        toLevel: "Ziellevel",
        setAllFrom: "Alle Von Setzen",
        setAllTo: "Alle Bis Setzen",
        setPieceFrom: "Teil Von Setzen",
        setPieceTo: "Teil Bis Setzen",
        statBonus: "Statistikbonus",
        totalPower: "Gesamtleistung",
        powerGained: "Erhaltene Leistung",
        selectedSlots: "ausgewählte Amulett-Slots",
        guide: "Amulett-Leitfaden",
        design: "Amulett-Design",
        secret: "Amulett-Geheimnis",
        ingot: "Gehärtete Legierung",
        potion: "Polierlösung",
        scroll: "Designpläne",
        amber: "Mondstein"
    },
    ru: {
        title: "Калькулятор Whiteout Survival",
        logoMain: "Whiteout Survival",
        logoSub: "Набор Калькуляторов",
        home: "Главная",
        heroTitle: "Инструменты Улучшения Игры",
        heroSubtitle: "Оптимизируйте свой геймплей с точными вычислениями",
        chiefGear: "Снаряжение Вождя",
        chiefCharms: "Амулеты Вождя",
        available: "Доступно",
        comingSoon: "Скоро",
        supportTitle: "Поддержать Разработку",
        supportDescription: "Если вы хотите внести вклад и поддержать мой проект разработки. Вы можете отправить мне подарки, используя мой ID ниже.",
        gameId: "ID Игры",
        pageTitle: "Калькулятор Снаряжения Вождя",
        pageSubtitle: "Рассчитайте материалы, необходимые для улучшения снаряжения вождя",
        charmsPageTitle: "Калькулятор Амулетов Вождя",
        charmsPageSubtitle: "Рассчитайте материалы, необходимые для улучшения амулетов вождя",
        currentInventory: "Текущий Инвентарь",
        quickSetAll: "Быстро Установить Все",
        currentLevel: "Текущий Уровень",
        desiredLevel: "Желаемый Уровень",
        selectLevel: "Выберите уровень...",
        helmet: "Шлем",
        chestplate: "Нагрудник",
        pants: "Штаны",
        watch: "Часы",
        ring: "Кольцо",
        staff: "Посох",
        calculateMaterialsNeeded: "Рассчитать Необходимые Материалы",
        upgradeAnalysis: "Анализ Улучшений",
        materialsNeededFor: "Необходимые материалы для",
        selectedPieces: "выбранные предметы",
        sufficient: "✓ Достаточно",
        needMore: "Нужно",
        more: "больше",
        youHaveEnough: "У вас достаточно!",
        additionalMaterialsNeeded: "Дополнительно необходимые материалы",
        totalRequired: "Всего Требуется",
        current: "Текущее",
        surplus: "Излишек",
        missing: "Недостает",
        desiredLevelRequired: ": Требуется желаемый уровень",
        invalidDesiredLevel: ": Недопустимый желаемый уровень",
        desiredLevelMustBeHigher: ": Желаемый уровень должен быть выше текущего уровня",
        selectAtLeastOnePiece: "Пожалуйста, выберите хотя бы один предмет снаряжения для расчета стоимости улучшений.",
        svsPointsGained: "Полученные Очки SvS",
        totalSvsPoints: "Общие Очки SvS",
        charmSlot: "Слот Амулета",
        fromLevel: "С Уровня",
        toLevel: "До Уровня",
        setAllFrom: "Установить Все С",
        setAllTo: "Установить Все До",
        setPieceFrom: "Установить Предмет С",
        setPieceTo: "Установить Предмет До",
        statBonus: "Бонус Характеристик",
        totalPower: "Общая Мощность",
        powerGained: "Полученная Мощность",
        selectedSlots: "выбранные слоты амулетов",
        guide: "Руководство по Амулетам",
        design: "Дизайн Амулета",
        secret: "Секрет Амулета",
        ingot: "Закаленный Сплав",
        potion: "Полировочный Раствор",
        scroll: "Чертежи",
        amber: "Лунный Янтарь"
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
        available: "Disponível",
        comingSoon: "Em Breve",
        supportTitle: "Apoiar o Desenvolvimento",
        supportDescription: "Se você quiser contribuir e apoiar meu projeto de desenvolvimento. Você pode me enviar presentes usando meu ID abaixo.",
        gameId: "ID do Jogo",
        pageTitle: "Calculadora de Equipamento do Chefe",
        pageSubtitle: "Calcule os materiais necessários para melhorar seu equipamento de chefe",
        charmsPageTitle: "Calculadora de Encantos do Chefe",
        charmsPageSubtitle: "Calcule os materiais necessários para melhorar seus encantos de chefe",
        currentInventory: "Inventário Atual",
        quickSetAll: "Definir Tudo Rapidamente",
        currentLevel: "Nível Atual",
        desiredLevel: "Nível Desejado",
        selectLevel: "Selecionar nível...",
        helmet: "Capacete",
        chestplate: "Peitoral",
        pants: "Calças",
        watch: "Relógio",
        ring: "Anel",
        staff: "Cajado",
        calculateMaterialsNeeded: "Calcular Materiais Necessários",
        upgradeAnalysis: "Análise de Melhoria",
        materialsNeededFor: "Materiais necessários para",
        selectedPieces: "peça(s) selecionada(s)",
        sufficient: "✓ Suficiente",
        needMore: "Precisa",
        more: "mais",
        youHaveEnough: "Você tem o suficiente!",
        additionalMaterialsNeeded: "Materiais adicionais necessários",
        totalRequired: "Total Necessário",
        current: "Atual",
        surplus: "Excedente",
        missing: "Faltando",
        desiredLevelRequired: ": Nível desejado é obrigatório",
        invalidDesiredLevel: ": Nível desejado inválido",
        desiredLevelMustBeHigher: ": O nível desejado deve ser maior que o nível atual",
        selectAtLeastOnePiece: "Por favor, selecione pelo menos uma peça de equipamento para calcular os custos de melhoria.",
        svsPointsGained: "Pontos SvS Ganhos",
        totalSvsPoints: "Pontos SvS Totais",
        charmSlot: "Slot de Encanto",
        fromLevel: "Nível Inicial",
        toLevel: "Nível Final",
        setAllFrom: "Definir Todos Desde",
        setAllTo: "Definir Todos Até",
        setPieceFrom: "Definir Peça Desde",
        setPieceTo: "Definir Peça Até",
        statBonus: "Bônus de Estatística",
        totalPower: "Poder Total",
        powerGained: "Poder Ganho",
        selectedSlots: "slots de encanto selecionados",
        guide: "Guia de Encanto",
        design: "Design de Encanto",
        secret: "Segredo de Encanto",
        ingot: "Liga Endurecida",
        potion: "Solução de Polimento",
        scroll: "Planos de Design",
        amber: "Âmbar Lunar"
    },
    it: {
        title: "Calcolatore Whiteout Survival",
        logoMain: "Whiteout Survival",
        logoSub: "Suite di Calcolatori",
        home: "Home",
        heroTitle: "Strumenti di Miglioramento del Gioco",
        heroSubtitle: "Ottimizza il tuo gameplay con calcoli precisi",
        chiefGear: "Equipaggiamento del Capo",
        chiefCharms: "Incantesimi del Capo",
        available: "Disponibile",
        comingSoon: "Prossimamente",
        supportTitle: "Supporta lo Sviluppo",
        supportDescription: "Se vuoi contribuire e supportare il mio progetto di sviluppo. Puoi inviarmi regali usando il mio ID qui sotto.",
        gameId: "ID Gioco",
        pageTitle: "Calcolatore Equipaggiamento del Capo",
        pageSubtitle: "Calcola i materiali necessari per migliorare il tuo equipaggiamento del capo",
        charmsPageTitle: "Calcolatore Incantesimi del Capo",
        charmsPageSubtitle: "Calcola i materiali necessari per migliorare i tuoi incantesimi del capo",
        currentInventory: "Inventario Attuale",
        quickSetAll: "Imposta Tutto Rapidamente",
        currentLevel: "Livello Attuale",
        desiredLevel: "Livello Desiderato",
        selectLevel: "Seleziona livello...",
        helmet: "Elmetto",
        chestplate: "Corazza",
        pants: "Pantaloni",
        watch: "Orologio",
        ring: "Anello",
        staff: "Bastone",
        calculateMaterialsNeeded: "Calcola Materiali Necessari",
        upgradeAnalysis: "Analisi Miglioramento",
        materialsNeededFor: "Materiali necessari per",
        selectedPieces: "pezzo/i selezionato/i",
        sufficient: "✓ Sufficiente",
        needMore: "Serve",
        more: "di più",
        youHaveEnough: "Ne hai abbastanza!",
        additionalMaterialsNeeded: "Materiali aggiuntivi necessari",
        totalRequired: "Totale Richiesto",
        current: "Attuale",
        surplus: "Surplus",
        missing: "Mancante",
        desiredLevelRequired: ": Livello desiderato richiesto",
        invalidDesiredLevel: ": Livello desiderato non valido",
        desiredLevelMustBeHigher: ": Il livello desiderato deve essere superiore al livello attuale",
        selectAtLeastOnePiece: "Seleziona almeno un pezzo di equipaggiamento per calcolare i costi di miglioramento.",
        svsPointsGained: "Punti SvS Guadagnati",
        totalSvsPoints: "Punti SvS Totali",
        charmSlot: "Slot Incantesimo",
        fromLevel: "Livello Iniziale",
        toLevel: "Livello Finale",
        setAllFrom: "Imposta Tutti Da",
        setAllTo: "Imposta Tutti A",
        setPieceFrom: "Imposta Pezzo Da",
        setPieceTo: "Imposta Pezzo A",
        statBonus: "Bonus Statistiche",
        totalPower: "Potere Totale",
        powerGained: "Potere Guadagnato",
        selectedSlots: "slot incantesimo selezionati",
        guide: "Guida Incantesimo",
        design: "Design Incantesimo",
        secret: "Segreto Incantesimo",
        ingot: "Lega Indurita",
        potion: "Soluzione Lucidante",
        scroll: "Piani di Design",
        amber: "Ambra Lunare"
    },
    ar: {
        title: "حاسبة وايت أوت سرفايفل",
        logoMain: "وايت أوت سرفايفل",
        logoSub: "مجموعة الحاسبات",
        home: "الرئيسية",
        heroTitle: "أدوات تحسين اللعبة",
        heroSubtitle: "حسّن أسلوب لعبك بحسابات دقيقة",
        chiefGear: "معدات الزعيم",
        chiefCharms: "تعاويذ الزعيم",
        available: "متاح",
        comingSoon: "قريباً",
        supportTitle: "دعم التطوير",
        supportDescription: "إذا كنت تريد المساهمة ودعم مشروع التطوير الخاص بي. يمكنك إرسال هدايا لي باستخدام معرفي أدناه.",
        gameId: "معرف اللعبة",
        pageTitle: "حاسبة معدات الزعيم",
        pageSubtitle: "احسب المواد المطلوبة لتطوير معدات زعيمك",
        charmsPageTitle: "حاسبة تعاويذ الزعيم",
        charmsPageSubtitle: "احسب المواد المطلوبة لتطوير تعاويذ زعيمك",
        currentInventory: "المخزون الحالي",
        quickSetAll: "تعيين الكل بسرعة",
        currentLevel: "المستوى الحالي",
        desiredLevel: "المستوى المرغوب",
        selectLevel: "اختر المستوى...",
        helmet: "خوذة",
        chestplate: "درع صدر",
        pants: "بنطلون",
        watch: "ساعة",
        ring: "خاتم",
        staff: "عصا",
        calculateMaterialsNeeded: "احسب المواد المطلوبة",
        upgradeAnalysis: "تحليل التطوير",
        materialsNeededFor: "المواد المطلوبة لـ",
        selectedPieces: "القطع المختارة",
        sufficient: "✓ كافي",
        needMore: "تحتاج",
        more: "أكثر",
        youHaveEnough: "لديك ما يكفي!",
        additionalMaterialsNeeded: "مواد إضافية مطلوبة",
        totalRequired: "المطلوب الإجمالي",
        current: "الحالي",
        surplus: "فائض",
        missing: "مفقود",
        desiredLevelRequired: ": المستوى المرغوب مطلوب",
        invalidDesiredLevel: ": مستوى مرغوب غير صالح",
        desiredLevelMustBeHigher: ": يجب أن يكون المستوى المرغوب أعلى من المستوى الحالي",
        selectAtLeastOnePiece: "يرجى اختيار قطعة معدات واحدة على الأقل لحساب تكاليف التطوير.",
        svsPointsGained: "نقاط SvS المكتسبة",
        totalSvsPoints: "إجمالي نقاط SvS",
        charmSlot: "فتحة التعويذة",
        fromLevel: "من المستوى",
        toLevel: "إلى المستوى",
        setAllFrom: "تعيين الكل من",
        setAllTo: "تعيين الكل إلى",
        setPieceFrom: "تعيين القطعة من",
        setPieceTo: "تعيين القطعة إلى",
        statBonus: "مكافأة الإحصائيات",
        totalPower: "القوة الإجمالية",
        powerGained: "القوة المكتسبة",
        selectedSlots: "فتحات التعويذة المختارة",
        guide: "دليل التعويذة",
        design: "تصميم التعويذة",
        secret: "سر التعويذة",
        ingot: "سبيكة مقواة",
        potion: "محلول تلميع",
        scroll: "مخططات التصميم",
        amber: "عنبر قمري"
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
        available: "उपलब्ध",
        comingSoon: "जल्द आ रहा है",
        supportTitle: "विकास का समर्थन करें",
        supportDescription: "यदि आप मेरे विकास प्रोजेक्ट में योगदान देना और समर्थन करना चाहते हैं। आप नीचे दी गई मेरी ID का उपयोग करके मुझे उपहार भेज सकते हैं।",
        gameId: "गेम ID",
        pageTitle: "चीफ गियर कैलकुलेटर",
        pageSubtitle: "अपने चीफ गियर को अपग्रेड करने के लिए आवश्यक सामग्री की गणना करें",
        charmsPageTitle: "चीफ चार्म्स कैलकुलेटर",
        charmsPageSubtitle: "अपने चीफ चार्म्स को अपग्रेड करने के लिए आवश्यक सामग्री की गणना करें",
        currentInventory: "वर्तमान इन्वेंटरी",
        quickSetAll: "सभी को त्वरित सेट करें",
        currentLevel: "वर्तमान स्तर",
        desiredLevel: "वांछित स्तर",
        selectLevel: "स्तर चुनें...",
        helmet: "हेलमेट",
        chestplate: "चेस्टप्लेट",
        pants: "पैंट्स",
        watch: "घड़ी",
        ring: "रिंग",
        staff: "स्टाफ",
        calculateMaterialsNeeded: "आवश्यक सामग्री की गणना करें",
        upgradeAnalysis: "अपग्रेड विश्लेषण",
        materialsNeededFor: "के लिए आवश्यक सामग्री",
        selectedPieces: "चयनित टुकड़े",
        sufficient: "✓ पर्याप्त",
        needMore: "चाहिए",
        more: "और",
        youHaveEnough: "आपके पास पर्याप्त है!",
        additionalMaterialsNeeded: "अतिरिक्त सामग्री की आवश्यकता",
        totalRequired: "कुल आवश्यक",
        current: "वर्तमान",
        surplus: "अतिरिक्त",
        missing: "गुम",
        desiredLevelRequired: ": वांछित स्तर आवश्यक है",
        invalidDesiredLevel: ": अमान्य वांछित स्तर",
        desiredLevelMustBeHigher: ": वांछित स्तर वर्तमान स्तर से अधिक होना चाहिए",
        selectAtLeastOnePiece: "कृपया अपग्रेड लागत की गणना करने के लिए कम से कम एक गियर पीस चुनें।",
        svsPointsGained: "प्राप्त SvS अंक",
        totalSvsPoints: "कुल SvS अंक",
        charmSlot: "चार्म स्लॉट",
        fromLevel: "स्तर से",
        toLevel: "स्तर तक",
        setAllFrom: "सभी को से सेट करें",
        setAllTo: "सभी को तक सेट करें",
        setPieceFrom: "टुकड़े को से सेट करें",
        setPieceTo: "टुकड़े को तक सेट करें",
        statBonus: "स्टेट बोनस",
        totalPower: "कुल शक्ति",
        powerGained: "प्राप्त शक्ति",
        selectedSlots: "चयनित चार्म स्लॉट्स",
        guide: "चार्म गाइड",
        design: "चार्म डिज़ाइन",
        secret: "चार्म सीक्रेट",
        ingot: "हार्डन्ड एलॉय",
        potion: "पॉलिशिंग सोल्यूशन",
        scroll: "डिज़ाइन प्लान्स",
        amber: "चंद्र एम्बर"
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
            this.toggle();
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
