/*
Research will be done by hiding or displaying cards and lines within cards for the hard coded producers
Each research will list what it will unlock, and the cost
*/

const researchDom = document.querySelector('.research');

function createResearchCard(research) {
    console.log(research.required);
    const card = document.createElement('div');
    card.classList.add('.card');
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

    researchDom.appendChild(card);
}

createResearchCard(researchList.elecMiner);