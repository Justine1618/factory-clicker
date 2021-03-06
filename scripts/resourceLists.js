let mineableList = {
    coal: {
        name: 'Coal',
        cardDom: null,
        available: 1000000,
        availableDom: null,
        burnerMiners: 0,
        burnerMinersDom: null,
        burnerMinersResearchDom: null,
        elecMiners: 0,
        elecMinersDom: null,
        elecMinersResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 100,
        storedDom: null,
    },

    ironOre: {
        name: 'Iron Ore',
        cardDom: null,
        available: 1000000,
        availableDom: null,
        burnerMiners: 0,
        burnerMinersDom: null,
        burnerMinersResearchDom: null,
        elecMiners: 0,
        elecMinersDom: null,
        elecMinersResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },

    copperOre: {
        name: 'Copper Ore',
        cardDom: null,
        available: 1000000,
        availableDom: null,
        burnerMiners: 0,
        burnerMinersDom: null,
        burnerMinersResearchDom: null,
        elecMiners: 0,
        elecMinersDom: null,
        elecMinersResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },

    stone: {
        name: 'Stone',
        cardDom: null,
        available: 1000000,
        availableDom: null,
        burnerMiners: 0,
        burnerMinersDom: null,
        burnerMinersResearchDom: null,
        elecMiners: 0,
        elecMinersDom: null,
        elecMinersResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    }
}

let smeltableList = {
    ironBar: {
        name: 'Iron Bar',
        cardDom: null,
        required: [mineableList.ironOre, 1.0],
        requiredDom: [null],
        stoneFurnaces: 0,
        stoneFurnacesDom: null,
        stoneFurnacesResearchDom: null,
        steelFurnaces: 0,
        steelFurnacesDom: null,
        steelFurnacesResearchDom: null,
        elecFurnaces: 0,
        elecFurnacesDom: null,
        elecFurnacesResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },

    copperBar: {
        name: 'Copper Bar',
        cardDom: null,
        required: [mineableList.copperOre, 1.0],
        requiredDom: [null],
        stoneFurnaces: 0,
        stoneFurnacesDom: null,
        stoneFurnacesResearchDom: null,
        steelFurnaces: 0,
        steelFurnacesDom: null,
        steelFurnacesResearchDom: null,
        elecFurnaces: 0,
        elecFurnacesDom: null,
        elecFurnacesResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },

    stoneBrick: {
        name: 'Stone Brick',
        cardDom: null,
        required: [mineableList.stone, 1.0],
        requiredDom: [null],
        stoneFurnaces: 0,
        stoneFurnacesDom: null,
        stoneFurnacesResearchDom: null,
        steelFurnaces: 0,
        steelFurnacesDom: null,
        steelFurnacesResearchDom: null,
        elecFurnaces: 0,
        elecFurnacesDom: null,
        elecFurnacesResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },

    steelBar: {
        name: 'Steel Bar',
        cardDom: null,
        required: [mineableList.ironOre, 10],
        requiredDom: [null],
        stoneFurnaces: 0,
        stoneFurnacesDom: null,
        stoneFurnacesResearchDom: null,
        steelFurnaces: 0,
        steelFurnacesDom: null,
        steelFurnacesResearchDom: null,
        elecFurnaces: 0,
        elecFurnacesDom: null,
        elecFurnacesResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    }
}

let craftableList = {
    copperWire: {
        name: 'Copper Wire',
        cardDom: null,
        required: [smeltableList.copperBar, 2],
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    circuitBoard: {
        name: 'Circuit Board',
        cardDom: null,
        required: null,
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    burnerCore: {
        name: 'Burner Core',
        cardDom: null,
        required: [mineableList.stone, 10],
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    elecCore: {
        name: 'Electric Core',
        cardDom: null,
        required: null,
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    advCore: {
        name: 'Advanced Core',
        cardDom: null,
        required: null,
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    burnerMiner: {
        name: 'Burner Miner',
        cardDom: null,
        // Need to add requirements after list initializtion
        required: null,
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    elecMiner: {
        name: 'Electric Miner',
        cardDom: null,
        required: null,
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    stoneFurnace: {
        name: 'Stone Furnace',
        cardDom: null,
        required: [mineableList.stone, 10],
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0,
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    steelFurnace: {
        name: 'Steel Furnace',
        cardDom: null,
        required: null,
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0, 
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    elecFurnace: {
        name: 'Electric Furnace',
        cardDom: null,
        required: null,
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0, 
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    burnerCrafter: {
        name: 'Burner Crafter',
        cardDom: null,
        required: null,
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0, 
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    elecCrafter: {
        name: 'Electric Crafter',
        cardDom: null,
        required: null,
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0, 
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    advCrafter: {
        name: 'Advanced Crafter',
        cardDom: null,
        required: null,
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0, 
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
    redSP: {
        name: 'Red Science Pack',
        cardDom: null,
        required: [smeltableList.ironBar, 10, smeltableList.copperBar, 10],
        requiredDom: [null],
        burnerCrafters: 0,
        burnerCraftersDom: null,
        burnerCraftersResearchDom: null,
        elecCrafters: 0,
        elecCraftersDom: null,
        elecCraftersResearchDom: null,
        advCrafters: 0,
        advCraftersDom: null,
        advCraftersResearchDom: null,
        baseProdRate: 1.0, 
        baseProdRateDom: null,
        curProdRate: 0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
}
craftableList.burnerMiner.required = [smeltableList.ironBar, 10, craftableList.burnerCore, 1];
craftableList.steelFurnace.required = [smeltableList.steelBar, 10, craftableList.burnerCore, 1];
craftableList.elecMiner.required = [smeltableList.ironBar, 10, craftableList.elecCore, 1];
craftableList.elecCore.required = [smeltableList.ironBar, 10, craftableList.copperWire, 10];
craftableList.elecFurnace.required = [smeltableList.steelBar, 20, craftableList.elecCore, 1];
craftableList.burnerCrafter.required = [smeltableList.ironBar, 10, craftableList.burnerCore, 1];
craftableList.elecCrafter.required = [smeltableList.steelBar, 10, craftableList.elecCore, 1];
craftableList.circuitBoard.required = [smeltableList.ironBar, 5, craftableList.copperWire, 10];
craftableList.advCore.required = [smeltableList.steelBar, 10, craftableList.circuitBoard, 10];
craftableList.advCrafter.required = [smeltableList.steelBar, 10, craftableList.advCore, 1];

