const people = ['Chris','Anne','Colin','Terri','Phil','Lola','Sam','Kay','Bruce'];
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused')
admitted.textContent = 'Admit: ';
refused.textContent = 'Refused: ';

// loop to iterate through people array
for (let i = 0; i < people.length; i++) {
    // check if people equals 'Phil' or 'Lola'
    if (people[i] === 'Phil' || people[i] === 'Lola') {  
        refused.textContent += `${people[i]}, `;
    }
    else {
        admitted.textContent += `${people[i]}, `;
    }
}
// remove last comma from string
admitted.textContent = admitted.textContent.substring(0, (admitted.textContent.length - 2));
refused.textContent = refused.textContent.substring(0, (refused.textContent.length - 2));