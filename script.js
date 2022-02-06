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



    return craftableResourceList;
}

function Update(mineableResourceList, smeltableResourceList, craftableResourceList) {
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
            curDom.textContent = curResource.Requried.IronOreCost.toString()});
    })  
}

let mineableResourceList = SetupMineableResources();
let smeltableResourceList = SetupSmeltableResources();
let craftableResourceList = SetupCraftableResources();
Update(mineableResourceList, smeltableResourceList, craftableResourceList);