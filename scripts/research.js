/*
Research will be done by hiding or displaying cards and lines within cards for the hard coded producers
Each research will list what it will unlock, and the cost
*/

const researchDom = document.querySelector('.research');

function createResearchCard(research) {
    const card = document.createElement('div');
    card.classList.add('.card');
    const header = document.createElement('h3');
    header.textContent = `Research ${research.name}`;
    card.appendChild(header);

    const pCost = document.createElement('p');
    pCost.textContent = `Cost ${research.cost} Red Science Packs`;


    researchDom.appendChild(card);
}

createResearchCard(researchList.elecMiner);