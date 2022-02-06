// Main idea
// Once a second, all values will update
// Current production rates will produce and add to stored values
// Current required resources will be subtracted (order will be important in later versions but not now)
// All values are copied from stored values to the DOM
// Listen for button clicks, assign producers as required



// CREATE RESOURCES
// This will eventually be read as a JSON file for content creation, hard coding for now
function SetupMineableResources() {
    let mineableResourceList = [];

    let coal = {
        Availible: 5000000,
        AvailibleDom: document.querySelectorAll('.coalAvailible'),
        MinersAssigned: 1,
        MinersAssignedDom: document.querySelectorAll('.coalMinersAssigned'),
        BaseProdRate: 1,
        BaseProdRateDom: document.querySelectorAll('.coalBaseProdRate'),
        CurProdRate: 0,
        CurProdRateDom: document.querySelectorAll('.coalCurProdRate'),
        Stored: 0,
        StoredDom: document.querySelectorAll('.coalStored')
    }

    let ironOre = {
        Availible: 50000000,
        AvailibleDom: document.querySelectorAll('.ironOreAvailible'),
        MinersAssigned: 0,
        MinersAssignedDom: document.querySelectorAll('.ironOreMinersAssigned'),
        BaseProdRate: 1,
        BaseProdRateDom: document.querySelectorAll('.ironOreBaseProdRate'),
        CurProdRate: 0,
        CurProdRateDom: document.querySelectorAll('.ironOreCurProdRate'),
        Stored: 0,
        StoredDom: document.querySelectorAll('.ironOreStored')
    }

    mineableResourceList.push(coal);
    mineableResourceList.push(ironOre);

    return mineableResourceList;
}

// Some changes may be coming here, the only difference between smeltable and mineable is the
// name of the machine they use. Is also very similar to mineable, the only difference is the required
// resource, which could be solved using a behind the scenes resource for unmined ore

function SetupSmeltableResources() {
    let smeltableResourceList = [];

    let ironBar = {
        //Requried resources will need some chaning
        Required: {
            IronOreCost: 1,
            IronOreCostDom: document.querySelectorAll('.ironBarIronOreCost'),
            CoalCost: 1,
            CoalCostDom: document.querySelectorAll('.ironBarCoalCost')
        },
        SmeltersAssigned: 0,
        SmeltersAssignedDom: document.querySelectorAll('.ironBarSmeltersAssigned'),
        BaseProdRate: 1,
        BaseProdRateDom: document.querySelectorAll('.ironBarBaseProdRate'),
        CurProdRate: 0,
        CurProdRateDom: document.querySelectorAll('.ironBarCurProdRate'),
        Stored: 0,
        StoredDom: document.querySelectorAll('.ironBarStored')
    }

    smeltableResourceList.push(ironBar);
    return smeltableResourceList;
}

function SetupCraftableResources() {
    let craftableResourceList = [];

    let miner = {
        Required: {
            IronBarCost: 10,
            IronBarCostDom: document.querySelectorAll('.minerIronBarCost')
        },
        CraftersAssigned: 0,
        CraftersAssignedDom: document.querySelectorAll('.minerCraftersAssigned'),
        BaseProdRate: 0.1,
        BaseProdRateDom: document.querySelectorAll('.minerBaseProdRate'),
        CurProdRate: 0,
        CurProdRateDom: document.querySelectorAll('.minerCurProdRate'),
        Stored: 0,
        StoredDom: document.querySelectorAll('.minerStored')
    }
    let smelter = {
        Required: {
            IronBarCost: 10,
            IronBarCostDom: document.querySelectorAll('.smelterIronBarCost')
        },
        CraftersAssigned: 0,
        CraftersAssignedDom: document.querySelectorAll('.smelterCraftersAssigned'),
        BaseProdRate: 0.1,
        BaseProdRateDom: document.querySelectorAll('.smelterBaseProdRate'),
        CurProdRate: 0,
        CurProdRateDom: document.querySelectorAll('.smelterCurProdRate'),
        Stored: 0,
        StoredDom: document.querySelectorAll('.smelterStored')
    }
    let crafter = {
        Required: {
            IronBarCost: 10,
            IronBarCostDom: document.querySelectorAll('.crafterIronBarCost')
        },
        CraftersAssigned: 0,
        CraftersAssignedDom: document.querySelectorAll('.crafterCraftersAssigned'),
        BaseProdRate: 0.1,
        BaseProdRateDom: document.querySelectorAll('.crafterBaseProdRate'),
        CurProdRate: 0,
        CurProdRateDom: document.querySelectorAll('.crafterCurProdRate'),
        Stored: 0,
        StoredDom: document.querySelectorAll('.crafterStored')
    }

    craftableResourceList.push(miner);
    craftableResourceList.push(smelter);
    craftableResourceList.push(crafter);

    return craftableResourceList;
}

// UPDATE RESOURCES

// Mineables will need an update to allow for mining efficiency and mining time
function UpdateMineable(mineable) {
    if (mineable.Availible > 0) {
        mineable.Availible -= 1;
        mineable.CurProdRate = mineable.MinersAssigned * mineable.BaseProdRate;
        mineable.Stored += mineable.CurProdRate;
    }
}

// Resources are currently not using up required resources
// Will be done after Requirements fix

function UpdateSmeltable(smeltable) {
    smeltable.CurProdRate = smeltable.SmeltersAssigned * smeltable.BaseProdRate;
    smeltable.Stored += smeltable.CurProdRate;
}

function UpdateCraftable(craftable) {
    craftable.CurProdRate = craftable.CraftersAssigned * craftable.BaseProdRate;
    craftable.Stored += craftable.CurProdRate;
}

function UpdateResources(state) {
    state[0].forEach(UpdateMineable);
    state[1].forEach(UpdateSmeltable);
    state[2].forEach(UpdateCraftable);
}

function UpdateDisplay(mineableResourceList, smeltableResourceList, craftableResourceList) {
    // This was just the first way I thought of to update display, can be upgraded for readabiliity
    // and reuseablility
    mineableResourceList.forEach((curResource) => {
        curResource.AvailibleDom.forEach((curDom) => {
            curDom.textContent = curResource.Availible.toString()
        });
        curResource.MinersAssignedDom.forEach((curDom) => {
            curDom.textContent = curResource.MinersAssigned.toString()
        });
        curResource.BaseProdRateDom.forEach((curDom) => {
            curDom.textContent = curResource.BaseProdRate.toString()
        });
        curResource.CurProdRateDom.forEach((curDom) => {
            curDom.textContent = curResource.CurProdRate.toString()
        });
        curResource.StoredDom.forEach((curDom) => {
            curDom.textContent = curResource.Stored.toString()
        });
    });
    //Displaying required resources will take some changing
    smeltableResourceList.forEach((curResource) => {
        curResource.Required.IronOreCostDom.forEach((curDom) => {
            curDom.textContent = curResource.Required.IronOreCost.toString()
        });
        curResource.Required.CoalCostDom.forEach((curDom) => {
            curDom.textContent = curResource.Required.CoalCost.toString()
        });

        curResource.SmeltersAssignedDom.forEach((curDom) => {
            curDom.textContent = curResource.SmeltersAssigned.toString()
        });
        curResource.BaseProdRateDom.forEach((curDom) => {
            curDom.textContent = curResource.BaseProdRate.toString()
        });
        curResource.CurProdRateDom.forEach((curDom) => {
            curDom.textContent = curResource.CurProdRate.toString()
        });
        curResource.StoredDom.forEach((curDom) => {
            curDom.textContent = curResource.Stored.toString()
        });
    });

    craftableResourceList.forEach((curResource) => {
        curResource.Required.IronBarCostDom.forEach((curDom) => {
            curDom.textContent = curResource.Required.IronBarCost.toString()
        });

        curResource.CraftersAssignedDom.forEach((curDom) => {
            curDom.textContent = curResource.CraftersAssigned.toString()
        });
        curResource.BaseProdRateDom.forEach((curDom) => {
            curDom.textContent = curResource.BaseProdRate.toString()
        });
        curResource.CurProdRateDom.forEach((curDom) => {
            curDom.textContent = curResource.CurProdRate.toString()
        });
        curResource.StoredDom.forEach((curDom) => {
            curDom.textContent = curResource.Stored.toString()
        });
    });
}

function tick(state) {
    let now = new Date();
    console.log(`Ticking: ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`);
    UpdateResources(state);
    UpdateDisplay(state[0], state[1], state[2]);
}

let mineableResourceList = SetupMineableResources();
let smeltableResourceList = SetupSmeltableResources();
let craftableResourceList = SetupCraftableResources();
let state = [mineableResourceList, smeltableResourceList, craftableResourceList];
// Show initial setup
UpdateDisplay(state[0], state[1], state[2]);

let interval = setTimeout(tick(state), 1000);
