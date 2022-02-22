function updateMineableDisplay(mineable) {
    console.log(`Updating ${mineable.name}`);
    mineable.availableDom.textContent = mineable.available;
    mineable.burnerMinersDom.textContent = mineable.burnerMiners;
    mineable.elecMinersDom.textContent = mineable.elecMiners;
    mineable.baseProdRateDom.textContent = mineable.baseProdRate;
    mineable.curProdRateDom.textContent = mineable.curProdRate;
    mineable.storedDom.textContent = mineable.stored;
}

function updateSmeltableDisplay(smeltable) {
    console.log(`Updating ${smeltable.name}`);
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
    console.log(`Updating ${craftable.name}`);
    for(let i = 0; i < craftable.required.length; i+=2) {
        craftable.requiredDom[i/2].textContent = ` (${craftable.required[i].stored} Available)`;
    }
    craftable.burnerCraftersDom.textContent = craftable.burnerCrafters;
    craftable.elecCraftersDom.textContent = craftable.elecCrafters;
    craftable.advCraftersDom.textContent = craftable.advCrafters;
    craftable.baseProdRateDom.textContent = craftable.baseProdRate;
    craftable.curProdRateDom.textContent = craftable.curProdRate;
    craftable.stored.textContent = craftable.stored;
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
}

function updateMineableProd(mineable) {

}

let testBtn = document.createElement('button');
document.body.appendChild(testBtn);
testBtn.textContent = ('UpdateDisplay');
testBtn.addEventListener('click', UpdateDisplay)
