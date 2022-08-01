let score = 99;
let response;
let machineActive = true;

if (machineActive) {
    switch (true) {
        case (score < 0 || score > 100):
            response = "Impossible";
            break;

        case (score >= 0 && score < 20):
            response = "Very low";
            break;

        case (score >=20 && score < 40):
            response = "Still low";
            break;

        case (score >=40 && score < 70):
            response = "Reasonable";
            break;

        case (score >=70 && score < 90):
            response = "Good";
            break;

        case (score >=90 && score < 100):
            response = "Egg-celent";
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