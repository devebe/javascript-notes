let user = { // creates an Object called user using "object literal" syntax
    name: "John", // Adding a property name (name) and a property value ("John") of type String
    age: 40, // Adding a property name (age) and property value (40) of type Number
};

let person = new Object(); // creates an Object person using "object constructor" syntax

user.isAdmin = true; // Adding a property name (isAdmin) and property value (true) of type Boolean

delete user.age;

user["likes birds"] = true;

let keys = "likes birds";

// console.log(user[keys]); // results in the same (true) as we can substitute the string by a variable that holds it

// console.log(user["likes birds"]);

person.name = "Holly";
person.position = "Senior Software Engineer II"
person.company = "Apple";
person.location = "New York";

// let key = prompt('What do you want to know about this person?', 'name'); 
// letting key be the property name so you can retrieve the property value

// alert(person[key]); // This only works with the person[key] syntax and NOT with person.key

console.table(person); // shows all key value (property name and property value) pairs of Object person in a table

function makePerson(name, age) {
    return {
        name: name,
        age: age,
    };
}

let newPerson = makePerson("John", 56);

console.log(newPerson.name);

function makeTweet(userName,text,timeStamp,isRetweet,isReply) {
    return {
        userName,
        text,
        timeStamp,
        isRetweet,
        isReply,
    }
}

let elonTweet = makeTweet("@elonmusk", "I'm a billionaire douchebag sociopath with anger management issues", Date.now(), false, false);

console.table(elonTweet);

console.log("userName" in elonTweet); // evaluates if a key (property) in the Object with name "userName" exists - returns false or true

let searchKey = "text";

console.log(searchKey in elonTweet); // will also work as requested key is now stored in a variable

let carListing = {
    brand:'Porsche',
    model: '911',
    modelYear: 1994,
    color: 'Cadmium Yellow',
    bodyType: 'Coupe',
    listPrice: 56000,
    forSale: true,
}

for (let key in carListing) { // for ... in - loop allows us to execute code on all properties of the object
    // console.log(key);
    // console.log(carListing[key]);
} // this will show each of the key value pairs as it loops over it

console.table(carListing);

let users = {};
users.name = 'John';
users.surname = 'Smith';
users.name = 'Pete';
delete users.name;

function isEmpty(obj) {
    for (let key in obj){
        return false;
    }
    return true;
}

console.log(isEmpty(users));

let poep = {};

console.log(isEmpty(poep));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function sumObject(obj) {
    let result = 0;
    for (let key in obj) {
        result += obj[key];
    }
    return result;
}

let sum = sumObject(salaries);

console.log(sum);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == 'number') {
            obj[key] = obj[key] * 2;
        }
        else return;
    }
}

let menu = {
    width: 200,
    height: 400,
    title: 'My menu',
};

console.table(menu);

multiplyNumeric(menu);

console.table(menu);

const car = {
    brand: 'Lamborghini',
    model: 'Countach',
    modelYearStart: 1974,
    modelYearEnd: 1990,
    yearsInProduction: 16,
    bodyType: 'coupe',
    carType: 'sportscar',
    manufacturedIn: 'Italy',
    description() {
        console.log(
            `The ${this.brand} ${this.model} is a ${this.carType} manufactured in ${this.manufacturedIn} 
            from ${this.modelYearStart} until ${this.modelYearEnd}. Due to it's long period of existence 
            (${this.yearsInProduction} years), it is praised by most as ${this.brand}'s most iconic
            car.`);
    },

};

