let output = document.querySelector('.countdown');
output.innerHTML = " ";

function countdown(number){
    for (i = number; i >= 0; i--) {
        const para = document.createElement('p');
        if (i === number) {
            para.textContent = `Countdown from ${number}`;
        }
        else if (i === 0) {
            para.textContent = `Blast-off!`
        }
        else {
            para.textContent = i;
        }
        setTimeout(output.appendChild(para),1000);
    }
}

countdown(10);