function createMineableCard(mineable) {
    const card = document.createElement('div');
    card.classList.add('card');
    const header = document.createElement('h3');
    header.textContent = mineable.name;
    card.appendChild(header);

    const pAvailable = document.createElement('p');
    pAvailable.textContent = `${mineable.name} Available: `;
    const sAvailable = document.createElement('span');
    sAvailable.textContent = mineable.available;
    mineable.availableDom = sAvailable;
    pAvailable.appendChild(sAvailable);
    card.appendChild(pAvailable);

    const pBurnerMiners = document.createElement('p');
    pBurnerMiners.textContent = 'Burner Miners Assigned: ';
    const sBurnerMiners = document.createElement('span');
    sBurnerMiners.textContent = mineable.burnerMiners;
    mineable.burnerMinersDom = sBurnerMiners;
    pBurnerMiners.appendChild(sBurnerMiners);
    const subBurnerMiners = document.createElement('button');
    subBurnerMiners.textContent = '-';
    subBurnerMiners.addEventListener('click', (event) => {
        // UNCOMMENT AFTER TESTING
        //if(mineable.burnerMiners > 0) {
            mineable.burnerMiners--;
            craftableList.burnerMiner.stored++;
           // }
            UpdateDisplay();
    });
    pBurnerMiners.appendChild(subBurnerMiners);
    const plusBurnerMiners = document.createElement('button');
    plusBurnerMiners.textContent = '+';
    plusBurnerMiners.addEventListener('click', (event) => {
        // UNCOMMENT THIS LATER AFTER TESTING
        //if(craftableList.burnerMiner.stored > 0) {
            craftableList.burnerMiner.stored--;
            mineable.burnerMiners++;
            //}
            UpdateDisplay();
    });
    mineable.burnerMinersResearchDom = pBurnerMiners;
    pBurnerMiners.appendChild(plusBurnerMiners);
    card.appendChild(pBurnerMiners);

    const pElecMiners = document.createElement('p');
    pElecMiners.textContent = 'Electric Miners Assigned: ';
    const sElecMiners = document.createElement('span');
    sElecMiners.textContent = mineable.elecMiners;
    mineable.elecMinersDom = sElecMiners;
    pElecMiners.appendChild(sElecMiners);
    const subElecMiners = document.createElement('button');
    subElecMiners.textContent = '-';
    subElecMiners.addEventListener('click', (event) => {
        // UNCOMMENT AFTER TESTING
        //if(mineable.elecMiners > 0) {
            mineable.elecMiners--;
            craftableList.elecMiner.stored++;
            //}
            UpdateDisplay();
    });
    pElecMiners.appendChild(subElecMiners);
    const plusElecMiners = document.createElement('button');
    plusElecMiners.textContent = '+';
    plusElecMiners.addEventListener('click', (event) => {
        // UNCOMMENT THIS LATER AFTER TESTING
        //if(craftableList.elecMiner.stored > 0) {
            craftableList.elecMiner.stored--;
            mineable.elecMiners++;
            //}
            UpdateDisplay();
    });
    mineable.elecMinersResearchDom = pElecMiners;
    pElecMiners.appendChild(plusElecMiners);
    card.appendChild(pElecMiners);

    const pBaseProdRate = document.createElement('p');
    pBaseProdRate.textContent = 'Base Production Rate: ';
    const sBaseProdRate = document.createElement('span');
    sBaseProdRate.textContent = mineable.baseProdRate;
    mineable.baseProdRateDom = sBaseProdRate;
    pBaseProdRate.appendChild(sBaseProdRate);
    // Don't know how to add units yet without messing up span
    //pBaseProdRate.textContent += ' Coal/Sec';
    card.appendChild(pBaseProdRate);

    const pCurProdRate = document.createElement('p');
    pCurProdRate.textContent = 'Current Production Rate: ';
    const sCurProdRate = document.createElement('span');
    sCurProdRate.textContent = mineable.curProdRate;
    mineable.curProdRateDom = sCurProdRate;
    pCurProdRate.appendChild(sCurProdRate);
    //pCurProdRate.textContent += ' Coal/Sec';
    card.appendChild(pCurProdRate);

    const pStored = document.createElement('p');
    pStored.textContent = `${mineable.name} Stored: `;
    const sStored = document.createElement('span');
    sStored.textContent = mineable.stored;
    mineable.storedDom = sStored;
    pStored.appendChild(sStored);
    card.appendChild(pStored);

    mineable.cardDom = card;
}

function createSmeltableCard(smeltable) {
    const card = document.createElement('div');
    card.classList.add('card');
    const header = document.createElement('h3');
    header.textContent = smeltable.name;
    card.appendChild(header);

    const divRequired = document.createElement('div');
    const hRequired = document.createElement('h4');
    hRequired.textContent = 'Resources Required: ';
    divRequired.appendChild(hRequired);
    // Required resources are stored in a list, with the resource followed by the amount required
    // Subject to change
    for(let i = 0; i < smeltable.required.length; i+=2) {
        let pRequired = document.createElement('p');
        pRequired.textContent = `${smeltable.required[i].name}: `;
        let sRequired = document.createElement('span');
        sRequired.textContent = smeltable.required[i+1]
        let sRequiredAvailable = document.createElement('span');
        sRequiredAvailable.textContent = ` (${smeltable.required[i].stored} Available)`;
        smeltable.requiredDom[i/2] = sRequiredAvailable;
        pRequired.appendChild(sRequired);
        pRequired.appendChild(sRequiredAvailable);
        divRequired.appendChild(pRequired);
    }
    card.appendChild(divRequired);

    const pStoneFurnaces = document.createElement('p');
    pStoneFurnaces.textContent = 'Stone Furnaces Assigned: ';
    const sStoneFurnaces = document.createElement('span');
    sStoneFurnaces.textContent = smeltable.stoneFurnaces;
    smeltable.stoneFurnacesDom = sStoneFurnaces;
    pStoneFurnaces.appendChild(sStoneFurnaces);
    const subStoneFurnaces = document.createElement('button');
    subStoneFurnaces.textContent = '-';
    subStoneFurnaces.addEventListener('click', (event) => {
        //if (smeltable.stoneFurnaces > 0) {
            smeltable.stoneFurnaces--;
            craftableList.stoneFurnace.stored++;
        //}
            UpdateDisplay();
    });
    pStoneFurnaces.appendChild(subStoneFurnaces);
    const plusStoneFurnaces = document.createElement('button');
    plusStoneFurnaces.textContent = '+';
    plusStoneFurnaces.addEventListener('click', (event) => {
        //if (craftableList.stoneFurnace.stored > 0) {
            craftableList.stoneFurnace.stored--;
            smeltable.stoneFurnaces++;
        //}
            UpdateDisplay();
    });
    pStoneFurnaces.appendChild(plusStoneFurnaces);
    card.appendChild(pStoneFurnaces);

    const pSteelFurnaces = document.createElement('p');
    pSteelFurnaces.textContent = 'Steel Furnaces Assigned: ';
    const sSteelFurnaces = document.createElement('span');
    sSteelFurnaces.textContent = smeltable.steelFurnaces;
    smeltable.steelFurnacesDom = sSteelFurnaces;
    pSteelFurnaces.appendChild(sSteelFurnaces);
    const subSteelFurnaces = document.createElement('button');
    subSteelFurnaces.textContent = '-';
    subSteelFurnaces.addEventListener('click', (event) => {
        //if (smeltable.steelFurnaces > 0) {
            smeltable.steelFurnaces--;
            craftableList.steelFurnace.stored++;
        //}
            UpdateDisplay();
    });
    pSteelFurnaces.appendChild(subSteelFurnaces);
    const plusSteelFurnaces = document.createElement('button');
    plusSteelFurnaces.textContent = '+';
    plusSteelFurnaces.addEventListener('click', (event) => {
        //if (craftableList.steelFurnace.stored > 0) {
            craftableList.steelFurnace.stored--;
            smeltable.steelFurnaces++;
        //}
        UpdateDisplay();
    });
    pSteelFurnaces.appendChild(plusSteelFurnaces);
    card.appendChild(pSteelFurnaces);

    const pElecFurnaces = document.createElement('p');
    pElecFurnaces.textContent = 'Electric Furnaces Assigned: ';
    const sElecFurnaces = document.createElement('span');
    sElecFurnaces.textContent = smeltable.elecFurnaces;
    smeltable.elecFurnacesDom = sElecFurnaces;
    pElecFurnaces.appendChild(sElecFurnaces);
    const subElecFurnaces = document.createElement('button');
    subElecFurnaces.textContent = '-';
    subElecFurnaces.addEventListener('click', (event) => {
        //if (smeltable.elecFurnaces > 0) {
            smeltable.elecFurnaces--;
            craftableList.elecFurnace.stored++;
        //}
        UpdateDisplay();
    });
    pElecFurnaces.appendChild(subElecFurnaces);
    const plusElecFurnaces = document.createElement('button');
    plusElecFurnaces.textContent = '+';
    plusElecFurnaces.addEventListener('click', (event) => {
        //if (craftableList.elecFurnace.stored > 0) {
            craftableList.elecFurnace.stored--;
            smeltable.elecFurnaces++;
        //}
        UpdateDisplay();
    });
    pElecFurnaces.appendChild(plusElecFurnaces);
    card.appendChild(pElecFurnaces);

    const pBaseProdRate = document.createElement('p');
    pBaseProdRate.textContent = 'Base Production Rate: ';
    const sBaseProdRate = document.createElement('span');
    sBaseProdRate.textContent = smeltable.baseProdRate;
    smeltable.baseProdRateDom = sBaseProdRate;
    pBaseProdRate.appendChild(sBaseProdRate);
    // Don't know how to add units yet without messing up span
    //pBaseProdRate.textContent += ' Coal/Sec';
    card.appendChild(pBaseProdRate);

    const pCurProdRate = document.createElement('p');
    pCurProdRate.textContent = 'Current Production Rate: ';
    const sCurProdRate = document.createElement('span');
    sCurProdRate.textContent = smeltable.curProdRate;
    smeltable.curProdRateDom = sCurProdRate;
    pCurProdRate.appendChild(sCurProdRate);
    //pCurProdRate.textContent += ' Coal/Sec';
    card.appendChild(pCurProdRate);

    const pStored = document.createElement('p');
    pStored.textContent = `${smeltable.name} Stored: `;
    const sStored = document.createElement('span');
    sStored.textContent = smeltable.stored;
    smeltable.storedDom = sStored;
    pStored.appendChild(sStored);
    card.appendChild(pStored);

    smeltable.cardDom = card;    
}

function createCraftableCard(craftable) {
    const card = document.createElement('div');
    card.classList.add('card');
    const header = document.createElement('h3');
    header.textContent = craftable.name;
    card.appendChild(header);

    const divRequired = document.createElement('div');
    const hRequired = document.createElement('h4');
    hRequired.textContent = 'Resources Required: ';
    divRequired.appendChild(hRequired);
    // Required resources are stored in a list, with the resource followed by the amount required
    // Subject to change
    for(let i = 0; i < craftable.required.length; i+=2) {
        let pRequired = document.createElement('p');
        pRequired.textContent = `${craftable.required[i].name}: `;
        let sRequired = document.createElement('span');
        sRequired.textContent = craftable.required[i+1]
        let sRequiredAvailable = document.createElement('span');
        sRequiredAvailable.textContent = ` (${craftable.required[i].stored} Available)`;
        craftable.requiredDom[i/2] = sRequiredAvailable;
        pRequired.appendChild(sRequired);
        pRequired.appendChild(sRequiredAvailable);
        divRequired.appendChild(pRequired);
    }
    card.appendChild(divRequired);

    const pBurnerCrafters = document.createElement('p');
    pBurnerCrafters.textContent = 'Burner Crafters Assigned: ';
    const sBurnerCrafters = document.createElement('span');
    sBurnerCrafters.textContent = craftable.burnerCrafters;
    craftable.burnerCraftersDom = sBurnerCrafters;
    pBurnerCrafters.appendChild(sBurnerCrafters);
    const subBurnerCrafters = document.createElement('button');
    subBurnerCrafters.textContent = '-';
    subBurnerCrafters.addEventListener('click', (event) => {
        //if (craftable.burnerCrafters > 0) {
            craftable.burnerCrafters--;
            craftableList.burnerCrafter.stored++;
        //}
        UpdateDisplay();
    });
    pBurnerCrafters.appendChild(subBurnerCrafters);
    const plusBurnerCrafters = document.createElement('button');
    plusBurnerCrafters.textContent = '+';
    plusBurnerCrafters.addEventListener('click', (event) => {
        //if (craftableList.burnerCrafter.stored > 0) {
            craftableList.burnerCrafter.stored--;
            craftable.burnerCrafters++;
        //}
        UpdateDisplay();
    });
    pBurnerCrafters.appendChild(plusBurnerCrafters);
    card.appendChild(pBurnerCrafters);

    const pElecCrafters = document.createElement('p');
    pElecCrafters.textContent = 'Electric Crafters Assigned: ';
    const sElecCrafters = document.createElement('span');
    sElecCrafters.textContent = craftable.elecCrafters;
    craftable.elecCraftersDom = sElecCrafters;
    pElecCrafters.appendChild(sElecCrafters);
    const subElecCrafters = document.createElement('button');
    subElecCrafters.textContent = '-';
    subElecCrafters.addEventListener('click', (event) => {
        //if (craftable.elecCrafters > 0) {
            craftable.elecCrafters--;
            craftableList.elecCrafter.stored++;
        //}
        UpdateDisplay();
    });
    pElecCrafters.appendChild(subElecCrafters);
    const plusElecCrafters = document.createElement('button');
    plusElecCrafters.textContent = '+';
    plusElecCrafters.addEventListener('click', (event) => {
        //if (craftableList.elecCrafter.stored > 0) {
            craftableList.elecCrafter.stored--;
            craftable.elecCrafters++;
        //}
        UpdateDisplay();
    });
    pElecCrafters.appendChild(plusElecCrafters);
    card.appendChild(pElecCrafters);

    const pAdvCrafters = document.createElement('p');
    pAdvCrafters.textContent = 'Advanced Crafters Assigned: ';
    const sAdvCrafters = document.createElement('span');
    sAdvCrafters.textContent = craftable.advCrafters;
    craftable.advCraftersDom = sAdvCrafters;
    pAdvCrafters.appendChild(sAdvCrafters);
    const subAdvCrafters = document.createElement('button');
    subAdvCrafters.textContent = '-';
    subAdvCrafters.addEventListener('click', (event) => {
        //if (craftable.advCrafters > 0) {
            craftable.advCrafters--;
            craftableList.advCrafter.stored++;
        //}
        UpdateDisplay();
    });
    pAdvCrafters.appendChild(subAdvCrafters);
    const plusAdvCrafters = document.createElement('button');
    plusAdvCrafters.textContent = '+';
    plusAdvCrafters.addEventListener('click', (event) => {
        //if (craftableList.advCrafter.stored > 0) {
            craftableList.advCrafter.stored--;
            craftable.advCrafters++;
        //}
        UpdateDisplay();
    });
    pAdvCrafters.appendChild(plusAdvCrafters);
    card.appendChild(pAdvCrafters);

    const pBaseProdRate = document.createElement('p');
    pBaseProdRate.textContent = 'Base Production Rate: ';
    const sBaseProdRate = document.createElement('span');
    sBaseProdRate.textContent = craftable.baseProdRate;
    craftable.baseProdRateDom = sBaseProdRate;
    pBaseProdRate.appendChild(sBaseProdRate);
    // Don't know how to add units yet without messing up span
    //pBaseProdRate.textContent += ' Coal/Sec';
    card.appendChild(pBaseProdRate);

    const pCurProdRate = document.createElement('p');
    pCurProdRate.textContent = 'Current Production Rate: ';
    const sCurProdRate = document.createElement('span');
    sCurProdRate.textContent = craftable.curProdRate;
    craftable.curProdRateDom = sCurProdRate;
    pCurProdRate.appendChild(sCurProdRate);
    //pCurProdRate.textContent += ' Coal/Sec';
    card.appendChild(pCurProdRate);

    const pStored = document.createElement('p');
    pStored.textContent = `${craftable.name} Stored: `;
    const sStored = document.createElement('span');
    sStored.textContent = craftable.stored;
    craftable.storedDom = sStored;
    pStored.appendChild(sStored);
    card.appendChild(pStored);

    craftable.cardDom = card;
}

function createMineableList() {
    Object.values(mineableList).forEach(createMineableCard);
}

function createSmeltableList() {
    Object.values(smeltableList).forEach(createSmeltableCard);
}

function createCraftableList() {
    Object.values(craftableList).forEach(createCraftableCard);
}

function appendMineableList() {
    Object.values(mineableList).forEach((mineable) => {
        mineableColumn.appendChild(mineable.cardDom);
    });
}

function appendSmeltableList() {
    Object.values(smeltableList).forEach((smeltable) => {
        smeltableColumn.appendChild(smeltable.cardDom);
    });
}

function appendCraftableList() {
    Object.values(craftableList).forEach((craftable) => {
        craftableColumn.appendChild(craftable.cardDom);
    });
}

function CreateAndAppendCards() {
    createMineableList();
    createSmeltableList();
    createCraftableList();
    appendMineableList();
    appendSmeltableList();
    appendCraftableList();
}

const mineableColumn = document.querySelector('.mineables');
const smeltableColumn = document.querySelector('.smeltables');
const craftableColumn = document.querySelector('.craftables');

CreateAndAppendCards();
