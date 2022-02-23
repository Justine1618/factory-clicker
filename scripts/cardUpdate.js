function updateMineableDisplay(mineable) {
    mineable.availableDom.textContent = mineable.available;
    mineable.burnerMinersDom.textContent = mineable.burnerMiners;
    mineable.elecMinersDom.textContent = mineable.elecMiners;
    mineable.baseProdRateDom.textContent = mineable.baseProdRate;
    mineable.curProdRateDom.textContent = mineable.curProdRate;
    mineable.storedDom.textContent = mineable.stored;
}

function updateSmeltableDisplay(smeltable) {
    for(let i = 0; i < smeltable.required.length; i+=2) {
        smeltable.requiredDom[i/2].textContent = ` (${smeltable.required[i].stored} Available)`;
    }
    smeltable.stoneFurnacesDom.textContent = smeltable.stoneFurnaces;
    smeltable.steelFurnacesDom.textContent = smeltable.steelFurnaces;
    smeltable.elecFurnacesDom.textContent = smeltable.elecFurnaces;
    smeltable.baseProdRateDom.textContent = smeltable.baseProdRate;
    smeltable.curProdRateDom.textContent = smeltable.curProdRate;
    smeltable.storedDom.textContent = smeltable.stored;
}

function updateCraftableDisplay(craftable) {
    for(let i = 0; i < craftable.required.length; i+=2) {
        craftable.requiredDom[i/2].textContent = ` (${craftable.required[i].stored} Available)`;
    }
    craftable.burnerCraftersDom.textContent = craftable.burnerCrafters;
    craftable.elecCraftersDom.textContent = craftable.elecCrafters;
    craftable.advCraftersDom.textContent = craftable.advCrafters;
    craftable.baseProdRateDom.textContent = craftable.baseProdRate;
    craftable.curProdRateDom.textContent = craftable.curProdRate;
    craftable.storedDom.textContent = craftable.stored;
}

function updateMineableListDisplay() {
    Object.values(mineableList).forEach(updateMineableDisplay); 
}

function updateSmeltableListDisplay() {
    Object.values(smeltableList).forEach(updateSmeltableDisplay);
}

function updateCraftableListDisplay() {
    Object.values(craftableList).forEach(updateCraftableDisplay);
}

function UpdateDisplay() {
    updateMineableListDisplay();
    updateSmeltableListDisplay();
    updateCraftableListDisplay();
    updateResearchListDisplay();
}

function truthList(curList) {
    for (let i = 0; i < curList.length; i++) {
        if (curList[i] == false) {
            return false;
        }
    }
    return true;
}

function updateMineableProd(mineable) {
    let requiredAvailable = [];
    if (mineable.available > mineable.burnerMiners) requiredAvailable.push(true);
    else requiredAvailable.push(false);
    if (mineableList.coal.stored > mineable.burnerMiners * 0.1) requiredAvailable.push(true);
    else requiredAvailable.push(false);
    // Need to add fuel requirements for elecminers
    if (truthList(requiredAvailable)) {
        mineable.curProdRate = mineable.baseProdRate * mineable.burnerMiners;
        mineable.available -= mineable.curProdRate;
        mineableList.coal.stored -= mineable.burnerMiners * 0.1;
        mineable.stored += mineable.curProdRate;
    }
    else return;
}

function updateSmeltableProd(smeltable) {
    let requiredAvailable = [];
    for (let i = 0; i < smeltable.required.length; i += 2) {
        if(smeltable.required[i].stored > smeltable.required[i+1] * smeltable.stoneFurnaces) {
            requiredAvailable.push(true);
        }
        else {
            requiredAvailable.push(false);
        }
    }
    if (mineableList.coal.stored > smeltable.stoneFurnaces) requiredAvailable.push(true);
    else requiredAvailable.push(false);
    // Need to add fuel requirements for elecminers etc
    if (truthList(requiredAvailable)) {
        for (let i = 0; i < smeltable.required.length; i += 2) {
            smeltable.required[i].stored -= smeltable.required[i+1] * smeltable.stoneFurnaces;
        }
        mineableList.coal.stored -= smeltable.stoneFurnaces * 0.1;
        smeltable.curProdRate = smeltable.baseProdRate * (smeltable.stoneFurnaces);
        smeltable.stored += smeltable.curProdRate;
    }
    else {
        return;
    }
}

function updateCraftableProd(craftable) {
    let requiredAvailable = [];
    for (let i = 0; i < craftable.required.length; i += 2) {
        if(craftable.required[i].stored > (craftable.required[i+1] * craftable.burnerCrafters)) {
            requiredAvailable.push(true);
        }
        else {
            requiredAvailable.push(false);
        }
    }
    if (mineableList.coal.stored > craftable.burnerCrafters * 0.1) requiredAvailable.push(true);
    else requiredAvailable.push(false);
    // Need to add fuel requirements for elecminers
    if (truthList(requiredAvailable)) {
        for (let i = 0; i < craftable.required.length; i += 2) {
            craftable.required[i].stored -= craftable.required[i+1] * craftable.burnerCrafters;
        }
        mineableList.coal.stored -= craftable.burnerCrafters * 0.1;
        craftable.curProdRate = craftable.baseProdRate * craftable.burnerCrafters;
        craftable.stored += craftable.curProdRate;
    }
    else {
        return;
    }
}

function updateMineableProdList() {
    Object.values(mineableList).forEach(updateMineableProd);
}

function updateSmeltableProdList() {
    Object.values(smeltableList).forEach(updateSmeltableProd);
}

function updateCraftableProdList() {
    Object.values(craftableList).forEach(updateCraftableProd);
}

function UpdateProd() {
    updateMineableProdList();
    updateSmeltableProdList();
    updateCraftableProdList();
}

function Tick() {
    UpdateProd();
    UpdateDisplay();
}

let testBtn = document.createElement('button');
document.body.appendChild(testBtn);
testBtn.textContent = 'Update Display';
testBtn.addEventListener('click', UpdateDisplay);



let updateProdButton = document.createElement('button');
document.body.appendChild(updateProdButton);
updateProdButton.textContent = 'Update Production';
updateProdButton.addEventListener('click', UpdateProd);

let interval = setInterval(Tick, 1000);
