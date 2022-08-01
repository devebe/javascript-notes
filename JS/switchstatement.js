const select = document.querySelector('select');
const html = document.querySelector('body');

let bgColor;
let textColor;

select.addEventListener('change', () => {
    const choice = select.value;
    console.log(choice);

    switch (choice){

        case 'black':
            update('black','white');
        break;

        case 'white':
            update('white','black');
        break;

        case 'yellow':
            update('yellow','purple');
        break;

        case 'purple':
            update('purple','yellow');
        break;
    }
});

function update(bgColor,textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}