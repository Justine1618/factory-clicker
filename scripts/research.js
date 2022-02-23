/*
Research will be done by hiding or displaying cards and lines within cards for the hard coded producers
Each research will list what it will unlock, and the cost
*/

const researchDom = document.querySelector('.research');

function createResearchCard(research) {
    const card = document.createElement('div');
    card.classList.add('card');
    const header = document.createElement('h3');
    header.textContent = `Research ${research.name}`;
    card.appendChild(header);

    const divRequired = document.createElement('div');
    const hRequired = document.createElement('h4');
    hRequired.textContent = 'Science Required: ';
    divRequired.appendChild(hRequired);
    // Required resources are stored in a list, with the resource followed by the amount required
    // Subject to change
    for(let i = 0; i < research.required.length; i+=2) {
        let pRequired = document.createElement('p');
        pRequired.textContent = `${research.required[i].name}: `;
        let sRequired = document.createElement('span');
        sRequired.textContent = research.required[i+1]
        let sRequiredAvailable = document.createElement('span');
        sRequiredAvailable.textContent = ` (${research.required[i].stored} Available)`;
        research.requiredDom[i/2] = sRequiredAvailable;
        pRequired.appendChild(sRequired);
        pRequired.appendChild(sRequiredAvailable);
        divRequired.appendChild(pRequired);
    }
    card.appendChild(divRequired);

    const researchBtn = document.createElement('button');
    researchBtn.textContent = 'Research';
    researchBtn.addEventListener('click', (event) => {
        let requiredAvailable = [];
        for (let i = 0; i < research.required.length; i += 2) {
            if (research.required[i].stored > research.required[i+1]) requiredAvailable.push(true);
            else requiredAvailable.push(false);
        }
        // Uncomment after testing
        //if (truthList(requiredAvailable)) {
            for(let i = 0; i < research.required.length; i += 2) {
                research.required[i].stored -= research.required[i+1];
            }
            // This is an ungly hacky way of doing this, will be rewritten if the producers are no
            // longer being hard coded in
            if (research.name == 'Electric Miner') researchedElecMiner();
            else if (research.name == 'Steel Furnace') researchedSteelFurnace();
            else if (research.name == 'Electric Furnace') researchedElecFurnace();
            else if (research.name == 'Electric Crafter') researchedElecCrafter();
            else if (research.name == 'Advanced Crafter') researchedAdvCrafter();

            // Need to set the current research to completed (hidden) and show the resources that unlock
            for (let i = 0; i < research.unlocks.length; i += 2) {
                research.unlocks[i].cardDom.style.display = 'block';
            }
            research.cardDom.style.display = 'none';
            UpdateDisplay();
        //}
    });
    card.appendChild(researchBtn);
    research.cardDom = card;

    researchDom.appendChild(card);
}

// Go through and set each line for producers as visible
// Special case, this may change later
function researchedElecMiner() {
    Object.values(mineableList).forEach((mineable) => {
        mineable.elecMinersResearchDom.style.display = 'inline-block';
    });
}

function researchedSteelFurnace() {
    Object.values(smeltableList).forEach((smeltable) => {
        smeltable.steelFurnacesResearchDom.style.display = 'inline-block';
    });
}

function researchedElecFurnace() {
    Object.values(smeltableList).forEach((smeltable) => {
        smeltable.elecFurnacesResearchDom.style.display = 'inline-block';
    });
}

function researchedElecCrafter() {
    Object.values(craftableList).forEach((craftable) => {
        craftable.elecCraftersResearchDom.style.display = 'inline-block';
    });
}

function researchedAdvCrafter() {
    Object.values(craftableList).forEach((craftable) => {
        craftable.advCraftersResearchDom.style.display = 'inline-block';
    });
}

function CreateResearch() {
    Object.values(researchList).forEach(createResearchCard);
}

CreateResearch();

function updateResearchDisplay(research) {
    for (let i = 0; i < research.required.length; i += 2) {
        research.requiredDom[i/2].textContent = ` (${research.required[i].stored} Available)`;
    }
}

function updateResearchListDisplay() {
    Object.values(researchList).forEach(updateResearchDisplay);
}

function setupMineableResearch(mineable) {
    mineable.elecMinersResearchDom.style.display = 'none';
}

function setupMineableListResearch() {
    Object.values(mineableList).forEach(setupMineableResearch);
}

function setupSmeltableResearch(smeltable) {
    smeltable.steelFurnacesResearchDom.style.display = 'none';
    smeltable.elecFurnacesResearchDom.style.display = 'none';
}

function setupSmeltableListResearch() {
    Object.values(smeltableList).forEach(setupSmeltableResearch);
}

function setupCraftableResearch(craftable) {
    craftable.elecCraftersResearchDom.style.display = 'none';
    craftable.advCraftersResearchDom.style.display = 'none';
}

function setupCraftableListResearch() {
    Object.values(craftableList).forEach(setupCraftableResearch);
}

function hideUnresearchedTechs() {
    Object.values(researchList).forEach((research) => {
        for (let i = 0; i < research.unlocks.length; i += 2) {
            research.unlocks[i].cardDom.style.display = 'none';
        }
    })
}

function setupInitialResearch() {
    setupMineableListResearch();
    setupSmeltableListResearch();
    setupCraftableListResearch();
    hideUnresearchedTechs();
}

setupInitialResearch();