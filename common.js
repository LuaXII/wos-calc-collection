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
        charmsPageTitle: "Chief Charms Calculator",
        charmsPageSubtitle: "Calculate materials needed to upgrade your chief charms",
        charmSlot: "Charm Slot",
        fromLevel: "From Level",
        toLevel: "To Level",
        setAllFrom: "Set All From",
        setAllTo: "Set All To",
        setPieceFrom: "Set Piece From",
        setPieceTo: "Set Piece To",
        statBonus: "Stat Bonus",
        totalPower: "Total Power",
        powerGained: "Power Gained"
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
        charmsPageTitle: "首领符咒计算器",
        charmsPageSubtitle: "计算升级首领符咒所需的材料",
        charmSlot: "符咒槽",
        fromLevel: "从等级",
        toLevel: "到等级",
        setAllFrom: "设置全部从",
        setAllTo: "设置全部到",
        setPieceFrom: "设置装备从",
        setPieceTo: "设置装备到",
        statBonus: "属性加成",
        totalPower: "总战力",
        powerGained: "获得战力"
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
        gameId: "ゲーム ID"
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
        gameId: "게임 ID"
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
        gameId: "ID del Juego"
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
        gameId: "ID du Jeu"
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
        gameId: "Spiel-ID"
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
        gameId: "ID Игры"
    },
    pt: {
        title: "Calculadora Whiteout Survival",
        logoMain: "Whiteout Survival",
        logoSub: "Conjunto de Calculadoras",
        home: "Início",
        heroTitle: "Ferramentas de Melhoria do Jogo",
        heroSubtitle: "Otimize sua jogabilidade com cálculos precisos",
        chiefGear: "Equipamento do Chefe",
        chiefCharms: "Encantos do Chefe",
        available: "Disponível",
        comingSoon: "Em Breve",
        supportTitle: "Apoiar o Desenvolvimento",
        supportDescription: "Se você quer contribuir e apoiar meu projeto de desenvolvimento. Você pode me enviar presentes usando meu ID abaixo.",
        gameId: "ID do Jogo"
    },
    it: {
        title: "Calcolatore Whiteout Survival",
        logoMain: "Whiteout Survival",
        logoSub: "Suite di Calcolatori",
        home: "Casa",
        heroTitle: "Strumenti di Miglioramento del Gioco",
        heroSubtitle: "Ottimizza il tuo gameplay con calcoli precisi",
        chiefGear: "Equipaggiamento del Capo",
        chiefCharms: "Incantesimi del Capo",
        available: "Disponibile",
        comingSoon: "Prossimamente",
        supportTitle: "Supporta lo Sviluppo",
        supportDescription: "Se vuoi contribuire e supportare il mio progetto di sviluppo. Puoi inviarmi regali usando il mio ID qui sotto.",
        gameId: "ID del Gioco"
    },
    ar: {
        title: "حاسبة وايت آوت سرفايفل",
        logoMain: "وايت آوت سرفايفل",
        logoSub: "مجموعة الحاسبات",
        home: "الرئيسية",
        heroTitle: "أدوات تحسين اللعبة",
        heroSubtitle: "حسن طريقة لعبك بحسابات دقيقة",
        chiefGear: "معدات الزعيم",
        chiefCharms: "تعاويذ الزعيم",
        available: "متاح",
        comingSoon: "قريباً",
        supportTitle: "دعم التطوير",
        supportDescription: "إذا كنت تريد المساهمة ودعم مشروع التطوير الخاص بي. يمكنك إرسال الهدايا باستخدام معرفي أدناه.",
        gameId: "معرف اللعبة"
    },
    hi: {
        title: "व्हाइटआउट सर्वाइवल कैलकुलेटर",
        logoMain: "व्हाइटआउट सर्वाइवल",
        logoSub: "कैलकुलेटर सूट",
        home: "मुखपृष्ठ",
        heroTitle: "गेम संवर्धन उपकरण",
        heroSubtitle: "सटीक गणनाओं के साथ अपने गेमप्ले को अनुकूलित करें",
        chiefGear: "चीफ गियर",
        chiefCharms: "चीफ चार्म्स",
        available: "उपलब्ध",
        comingSoon: "जल्द आ रहा है",
        supportTitle: "विकास का समर्थन करें",
        supportDescription: "यदि आप मेरे विकास प्रोजेक्ट में योगदान और समर्थन करना चाहते हैं। आप नीचे दिए गए मेरे ID का उपयोग करके उपहार भेज सकते हैं।",
        gameId: "गेम आईडी"
    }
};

function loadIcon(container, itemData, onLoad = null) {
    if (!container) return;
    if (!itemData.icon || !itemData.icon.startsWith('http')) {
        container.textContent = itemData.fallback || '❓';
        return;
    }

    const img = document.createElement('img');
    img.src = itemData.icon;
    img.alt = itemData.name;
    img.style.cssText = 'width:100%;height:100%;object-fit:contain;';
    
    img.onload = () => {
        container.innerHTML = '';
        container.appendChild(img);
        if (onLoad) onLoad(true);
    };
    
    img.onerror = () => {
        container.textContent = itemData.fallback || '❓';
        if (onLoad) onLoad(false);
    };
}

function t(key, lang = 'en') {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS.en[key] || key;
}

class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light-theme';
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
    }

    applyTheme(theme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
        this.applyTheme(newTheme);
    }

    setupEventListeners() {
        const themeSwitcher = document.getElementById('theme-switcher');
        if (themeSwitcher) {
            themeSwitcher.addEventListener('click', () => this.toggleTheme());
        }
    }
}

class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.setupEventListeners();
    }

    updateLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        document.title = t('title', lang);
        
        const languageBtn = document.getElementById('language-btn');
        if (languageBtn) languageBtn.textContent = lang.toUpperCase();
        
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === lang);
        });

        document.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: lang, translations: TRANSLATIONS[lang] || TRANSLATIONS.en } 
        }));
    }

    setupEventListeners() {
        const languageBtn = document.getElementById('language-btn');
        const languageDropdown = document.getElementById('language-dropdown');

        if (languageBtn && languageDropdown) {
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });

            languageDropdown.innerHTML = Object.entries(LANGUAGES).map(([code, lang]) => 
                `<div class="language-option ${code === this.currentLanguage ? 'active' : ''}" data-lang="${code}">
                    <span class="language-flag">${lang.flag}</span>
                    <span class="language-name">${lang.name}</span>
                </div>`
            ).join('');

            languageDropdown.addEventListener('click', (e) => {
                const option = e.target.closest('.language-option');
                if (option) {
                    this.updateLanguage(option.dataset.lang);
                    languageDropdown.classList.remove('show');
                }
            });

            document.addEventListener('click', (e) => {
                if (!e.target.closest('.language-selector')) {
                    languageDropdown.classList.remove('show');
                }
            });
        }
    }

    getCurrentTranslations() {
        return TRANSLATIONS[this.currentLanguage] || TRANSLATIONS.en;
    }
}

class Dropdown {
    constructor(element, options = {}) {
        this.element = element;
        this.toggle = element.querySelector('.dropdown-toggle');
        this.menu = element.querySelector('.dropdown-menu');
        this.options = options;
        this.selectedValue = '';
        this.selectedText = '';
        
        if (!this.toggle || !this.menu) return;
        this.setupEventListeners();
        this.populateOptions();
    }

    setupEventListeners() {
        this.toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggleMenu();
        });
    }

    populateOptions() {
        if (!this.options.items) return;
        this.menu.innerHTML = this.options.items.map(item => 
            `<div class="dropdown-item" data-value="${item.value !== undefined ? item.value : item}">
                ${item.text || item}
            </div>`
        ).join('');

        this.menu.addEventListener('click', (e) => {
            const item = e.target.closest('.dropdown-item');
            if (item) {
                e.stopPropagation();
                this.selectItem(item.dataset.value, item.textContent);
            }
        });
    }

    selectItem(value, text) {
        this.selectedValue = value;
        this.selectedText = text;
        
        const toggleText = this.toggle.querySelector('.dropdown-text');
        if (toggleText) toggleText.textContent = text.trim();
        
        this.closeMenu();
        this.element.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.selectedValue, text: this.selectedText }
        }));
    }

    toggleMenu() {
        const isOpening = !this.element.classList.contains('show');
        document.querySelectorAll('.dropdown.show').forEach(d => d.classList.remove('show'));
        document.querySelectorAll('.dropdown-menu.show').forEach(m => m.classList.remove('show'));
        
        if (isOpening) {
            this.element.classList.add('show');
            this.menu.classList.add('show');
        }
    }

    openMenu() {
        this.toggleMenu();
    }

    closeMenu() {
        this.element.classList.remove('show');
        this.menu.classList.remove('show');
    }

    setValue(value) {
        const item = this.options.items.find(item => 
            (item.value !== undefined ? item.value : item).toString() === value.toString()
        );
        if (item) this.selectItem(item.value !== undefined ? item.value : item, item.text || item);
    }

    getValue() { return this.selectedValue; }
    getText() { return this.selectedText; }
}

class ProtectionManager {
    constructor() {
        document.addEventListener('contextmenu', e => {
            if (!['INPUT', 'TEXTAREA'].includes(e.target.tagName)) e.preventDefault();
        });
        document.addEventListener('keydown', e => {
            if (e.keyCode === 123 || (e.ctrlKey && [85, 83].includes(e.keyCode))) e.preventDefault();
        });
    }
}

const addRippleEffect = (element, event) => {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('div');
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${event.clientX-rect.left-size/2}px;top:${event.clientY-rect.top-size/2}px;background:rgba(255,255,255,0.3);border-radius:50%;transform:scale(0);animation:ripple 0.6s linear;pointer-events:none;`;
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
};

const formatNumber = num => num.toLocaleString();
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

function initializeCommon() {
    window.protectionManager = new ProtectionManager();
    window.themeManager = new ThemeManager();
    window.languageManager = new LanguageManager();

    document.querySelectorAll('.btn, .theme-btn, .language-btn').forEach(button => {
        button.addEventListener('click', e => addRippleEffect(button, e));
    });

    document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            window.themeManager.toggleTheme();
        }
        if (e.key === 'Escape') {
            document.querySelectorAll('.dropdown.show, .language-dropdown.show').forEach(el => {
                el.classList.remove('show');
            });
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown.show').forEach(d => {
                d.classList.remove('show');
                const menu = d.querySelector('.dropdown-menu');
                if(menu) menu.classList.remove('show');
            });
        }
    });

    const style = document.createElement('style');
    style.textContent = '@keyframes ripple{to{transform:scale(4);opacity:0;}}';
    document.head.appendChild(style);

    window.languageManager.updateLanguage(window.languageManager.currentLanguage);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCommon);
} else {
    initializeCommon();
}
