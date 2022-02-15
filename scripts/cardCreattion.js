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
        curProdRate: 1.0,
        curProdRateDom: null,
        stored: 0,
        storedDom: null,
    },
}

let craftableList = {
    burnerMiner: {
        name: 'Burner Miner',
        stored: 0,
    },
    elecMiner: {
        name: 'Electric Miner',
        stored: 0,
    },
}

let mineable = mineableList.coal;

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
        // UNCOMMENT THIS LATER AFTER TESTING
        //if(craftableList.burnerMiner.stored > 0) {
        craftableList.burnerMiner.stored--;
        mineable.burnerMiners++;
        //}
        //UpdateDisplay();
    });
    pBurnerMiners.appendChild(subBurnerMiners);
    const plusBurnerMiners = document.createElement('button');
    plusBurnerMiners.textContent = '+';
    plusBurnerMiners.addEventListener('click', (event) => {
        // UNCOMMENT AFTER TESTING
        //if(mineable.burnerMiner > 0) {
        mineable.burnerMiners--;
        craftableList.burnerMiner++;
        //}
        //UpdateDisplay();
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
        // UNCOMMENT THIS LATER AFTER TESTING
        //if(craftableList.elecMiner.stored > 0) {
        craftableList.elecMiner.stored--;
        mineable.elecMiners++;
        //}
        //UpdateDisplay();
    });
    pElecMiners.appendChild(subElecMiners);
    const plusElecMiners = document.createElement('button');
    plusElecMiners.textContent = '+';
    plusElecMiners.addEventListener('click', (event) => {
        // UNCOMMENT AFTER TESTING
        //if(mineable.elecMiner > 0) {
        mineable.elecMiners--;
        craftableList.elecMiner++;
        //}
        //UpdateDisplay();
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

    return card;
}

document.body.appendChild(createMineableCard(mineableList.coal));
