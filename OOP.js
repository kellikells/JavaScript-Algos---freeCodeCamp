// Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    numLegs: 4,
    eat: function () {
        console.log(`eating now`);
    },
    describe: function () {
        console.log(`describing dog`);
    }
};
// -------------------------------

function Bird(name) {
    this.name = name;
}

let duck = new Bird("Donald");
// duck inherits its prototype from the Bird constructor function.You can show this relationship with the isPrototypeOf method:

Bird.prototype.isPrototypeOf(duck);
// This would return true.


// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------




// -------------------------------