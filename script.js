// Main idea
// Once a second, all values will update
// Current production rates will produce and add to stored values
// Current required resources will be subtracted (order will be important in later versions but not now)
// All values are copied from stored values to the DOM
// Listen for button clicks, assign producers as required

function SetupMineableResources() {
    let mineableResourceList = [];

    let coal = {
        Availible: 5000000,
        AvailibleDom: document.querySelectorAll('.coalAvailible'),
        MinersAssigned: 0,
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

function UpdateDisplay(mineableResourceList, smeltableResourceList, craftableResourceList) {
    mineableResourceList.forEach((curResource) => {
        curResource.AvailibleDom.forEach((curDom) => {
            curDom.textContent = curResource.Availible.toString()});
        curResource.MinersAssignedDom.forEach((curDom) => {
            curDom.textContent = curResource.MinersAssigned.toString()});
        curResource.BaseProdRateDom.forEach((curDom) => {
            curDom.textContent = curResource.BaseProdRate.toString()});
        curResource.CurProdRateDom.forEach((curDom) => {
            curDom.textContent = curResource.CurProdRate.toString()});
        curResource.StoredDom.forEach((curDom) => {
            curDom.textContent = curResource.Stored.toString()});
        });
    //Displaying required resources will take some changing
    smeltableResourceList.forEach((curResource) => {
        curResource.Required.IronOreCostDom.forEach((curDom) => {
            curDom.textContent = curResource.Required.IronOreCost.toString()});
        curResource.Required.CoalCostDom.forEach((curDom) => {
            curDom.textContent = curResource.Required.CoalCost.toString()});
            
        curResource.SmeltersAssignedDom.forEach((curDom) => {
            curDom.textContent = curResource.SmeltersAssigned.toString()});
        curResource.BaseProdRateDom.forEach((curDom) => {
            curDom.textContent = curResource.BaseProdRate.toString()});
        curResource.CurProdRateDom.forEach((curDom) => {
            curDom.textContent = curResource.CurProdRate.toString()});
        curResource.StoredDom.forEach((curDom) => {
            curDom.textContent = curResource.Stored.toString()});
        });  

    craftableResourceList.forEach((curResource) => {
        curResource.Required.IronBarCostDom.forEach((curDom) => {
            curDom.textContent = curResource.Required.IronBarCost.toString()});
            
        curResource.CraftersAssignedDom.forEach((curDom) => {
            curDom.textContent = curResource.CraftersAssigned.toString()});
        curResource.BaseProdRateDom.forEach((curDom) => {
            curDom.textContent = curResource.BaseProdRate.toString()});
        curResource.CurProdRateDom.forEach((curDom) => {
            curDom.textContent = curResource.CurProdRate.toString()});
        curResource.StoredDom.forEach((curDom) => {
            curDom.textContent = curResource.Stored.toString()});
    });
}

let mineableResourceList = SetupMineableResources();
let smeltableResourceList = SetupSmeltableResources();
let craftableResourceList = SetupCraftableResources();
UpdateDisplay(mineableResourceList, smeltableResourceList, craftableResourceList);