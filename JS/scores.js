let score = 102;
let response;
let machineActive = true;

if (machineActive) {
    switch (true){
        case (score < 0 || score > 100):
            response = "Impossible";
            break;

        case (score >= 0 && score < 20):
            console.log(score);
            response = "Very low";
            break;
        default: 
        response = 'wtf happened we just defaulted';

    };

}
else {
    response = "Turn the machine on."
}

let para1 = `Your score is ${ score }.`;
let para2 = response;

console.log(para1,para2);