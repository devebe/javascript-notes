// loop to iterate through people array
// check if people equals 'Phil' or 'Lola'
// if true concatenate to refused text paragraph
// if false concatenate to admitted text paragraph

const people = ['Chris','Anne','Colin','Terri','Phil','Lola','Sam','Kay','Bruce'];
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused')
admitted.textContent = 'Admit: ';
refused.textContent = 'Refused: ';