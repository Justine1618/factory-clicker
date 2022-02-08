// Main idea
// Once a second, all values will update
// Current production rates will produce and add to stored values
// Current required resources will be subtracted (order will be important in later versions but not now)
// All values are copied from stored values to the DOM
// Listen for button clicks, assign producers as required



// CREATE RESOURCES
// This will eventually be read as a JSON file for content creation, hard coding for now
function SetupMineableResources() {
    let mineableResourceList = {

        coal: {
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
        },

        ironOre: {
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
    }

    return mineableResourceList;
}

// Some changes may be coming here, the only difference between smeltable and mineable is the
// name of the machine they use. Is also very similar to mineable, the only difference is the required
// resource, which could be solved using a behind the scenes resource for unmined ore

function SetupSmeltableResources() {
    let smeltableResourceList = {

        ironBar: {
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

    }
    return smeltableResourceList;
}

function SetupCraftableResources() {
    let craftableResourceList = {

        miner: {
            Required: {
                IronBarCost: 10,
                IronBarCostDom: document.querySelectorAll('.minerIronBarCost')
            },
            CraftersAssigned: 0,
            CraftersAssignedDom: document.querySelectorAll('.minerCraftersAssigned'),
            BaseProdRate: 1,
            BaseProdRateDom: document.querySelectorAll('.minerBaseProdRate'),
            CurProdRate: 0,
            CurProdRateDom: document.querySelectorAll('.minerCurProdRate'),
            Stored: 10,
            StoredDom: document.querySelectorAll('.minerStored')
        },
        smelter: {
            Required: {
                IronBarCost: 10,
                IronBarCostDom: document.querySelectorAll('.smelterIronBarCost')
            },
            CraftersAssigned: 0,
            CraftersAssignedDom: document.querySelectorAll('.smelterCraftersAssigned'),
            BaseProdRate: 1,
            BaseProdRateDom: document.querySelectorAll('.smelterBaseProdRate'),
            CurProdRate: 0,
            CurProdRateDom: document.querySelectorAll('.smelterCurProdRate'),
            Stored: 10,
            StoredDom: document.querySelectorAll('.smelterStored')
        },
        crafter: {
            Required: {
                IronBarCost: 10,
                IronBarCostDom: document.querySelectorAll('.crafterIronBarCost')
            },
            CraftersAssigned: 0,
            CraftersAssignedDom: document.querySelectorAll('.crafterCraftersAssigned'),
            BaseProdRate: 1,
            BaseProdRateDom: document.querySelectorAll('.crafterBaseProdRate'),
            CurProdRate: 0,
            CurProdRateDom: document.querySelectorAll('.crafterCurProdRate'),
            Stored: 10,
            StoredDom: document.querySelectorAll('.crafterStored')
        }

    }

    return craftableResourceList;
}

// SETUP BUTTONS

function SetupButtons() {
    SetupButtonListeners(SetupButtonsDom())
}

function SetupButtonsDom() {
    let doms = {
        coalPlus: document.querySelector('.coalPlus'),
        coalMin: document.querySelector('.coalMin'),
        ironOrePlus: document.querySelector('.ironOrePlus'),
        ironOreMin: document.querySelector('.ironOreMin'),
        ironBarPlus: document.querySelector('.ironBarPlus'),
        ironBarMin: document.querySelector('.ironBarMin'),
        minerPlus: document.querySelector('.minerPlus'),
        minerMin: document.querySelector('.minerMin'),
        smelterPlus: document.querySelector('.smelterPlus'),
        smelterMin: document.querySelector('.smelterMin'),
        crafterPlus: document.querySelector('.crafterPlus'),
        crafterMin: document.querySelector('.crafterMin')
    }

    return doms;
}

function SetupButtonListeners(doms) {
    // Change the corect inventories upon button clicks
    // This is an awful way to do this, but I'm so close to being done with state 1!
    // state[0] = mineables state[1] = smeltables state[2] = craftables
    doms.coalPlus.addEventListener('click', event => {
        if (state[2].miner.Stored > 0) {
            state[2].miner.Stored--;
            state[0].coal.MinersAssigned++;
        }
        UpdateDisplay(state);
    });
    doms.coalMin.addEventListener('click', event => {
        if (state[0].coal.MinersAssigned > 0) {
            state[0].coal.MinersAssigned--;
            state[2].miner.Stored++;
        }
        UpdateDisplay(state);
    });
    doms.ironOrePlus.addEventListener('click', event => {
        if (state[2].miner.Stored > 0) {
            state[2].miner.Stored--;
            state[0].ironOre.MinersAssigned++;
        }
        UpdateDisplay(state);
    });
    doms.ironOreMin.addEventListener('click', event => {
        if (state[0].ironOre.MinersAssigned > 0) {
            state[0].ironOre.MinersAssigned--;
            state[2].miner.Stored++;
        }
        UpdateDisplay(state);
    });
    doms.ironBarPlus.addEventListener('click', event => {
        if (state[2].smelter.Stored > 0) {
            state[2].smelter.Stored--;
            state[1].ironBar.SmeltersAssigned++;
        }
        UpdateDisplay(state);
    });
    doms.ironBarMin.addEventListener('click', event => {
        if (state[1].ironBar.SmeltersAssigned > 0) {
            state[1].ironBar.SmeltersAssigned--;
            state[2].smelter.Stored++;
        }
        UpdateDisplay(state);
    });
    doms.minerPlus.addEventListener('click', event => {
        if (state[2].crafter.Stored > 0) {
            state[2].crafter.Stored--;
            state[2].miner.CraftersAssigned++;
        }
        UpdateDisplay(state);
    });
    doms.minerMin.addEventListener('click', event => {
        if (state[2].miner.CraftersAssigned > 0) {
            state[2].miner.CraftersAssigned--;
            state[2].crafter.Stored++;
        }
        UpdateDisplay(state);
    });
    doms.smelterPlus.addEventListener('click', event => {
        if (state[2].crafter.Stored > 0) {
            state[2].crafter.Stored--;
            state[2].smelter.CraftersAssigned++;
        }
        UpdateDisplay(state);
    });
    doms.smelterMin.addEventListener('click', event => {
        if (state[2].smelter.CraftersAssigned > 0) {
            state[2].smelter.CraftersAssigned--;
            state[2].crafter.Stored++;
        }
        UpdateDisplay(state);
    });
    doms.crafterPlus.addEventListener('click', event => {
        if (state[2].crafter.Stored > 0) {
            state[2].crafter.Stored--;
            state[2].crafter.CraftersAssigned++;
        }
        UpdateDisplay(state);
    });
    doms.crafterMin.addEventListener('click', event => {
        if (state[2].crafter.CraftersAssigned > 0) {
            state[2].crafter.CraftersAssigned--;
            state[2].crafter.Stored++;
        }
        UpdateDisplay(state);
    });
}

// UPDATE RESOURCES

// Mineables will need an update to allow for mining efficiency and mining time
function UpdateMineable(mineable) {
    if (mineable.Availible > mineable.CurProdRate) {
        mineable.CurProdRate = mineable.MinersAssigned * mineable.BaseProdRate;
        mineable.Stored += mineable.CurProdRate;
        mineable.Availible -= mineable.CurProdRate;
    }
}

// Resources are currently not using up required resources
// Will be done after Requirements fix

function UpdateSmeltable(smeltable) {
    if (state[0].coal.Stored > smeltable.CurProdRate && state[0].ironOre.Stored > smeltable.CurProdRate) {
        state[0].coal.Stored -= smeltable.CurProdRate;
        state[0].ironOre.Stored -= smeltable.CurProdRate;
        smeltable.CurProdRate = smeltable.SmeltersAssigned * smeltable.BaseProdRate;
        smeltable.Stored += smeltable.CurProdRate;
    }
}

function UpdateCraftable(craftable) {
    if (state[1].ironBar.Stored > craftable.CurProdRate) {
        state[1].ironBar.Stored -= craftable.CurProdRate;
        craftable.CurProdRate = craftable.CraftersAssigned * craftable.BaseProdRate;
        craftable.Stored += craftable.CurProdRate;
    }
}

function UpdateResources(state) {
    Object.values(state[0]).forEach(UpdateMineable);
    Object.values(state[1]).forEach(UpdateSmeltable);
    Object.values(state[2]).forEach(UpdateCraftable);
}

function UpdateDisplay(state) {
    // This was just the first way I thought of to update display, can be upgraded for readabiliity
    // and reuseablility
    Object.values(state[0]).forEach((curResource) => {
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
    Object.values(state[1]).forEach((curResource) => {
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

    Object.values(state[2]).forEach((curResource) => {
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
    UpdateDisplay(state);
}

let mineableResourceList = SetupMineableResources();
let smeltableResourceList = SetupSmeltableResources();
let craftableResourceList = SetupCraftableResources();
SetupButtons();



let state = [mineableResourceList, smeltableResourceList, craftableResourceList];
// Show initial setup
UpdateDisplay(state);

let interval = setInterval(() => { tick(state) }, 1000);