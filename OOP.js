
var MarkBlueprints = function RobotModels() { }
MarkBlueprints.prototype.getRockets = function () { return this.rockets; }
var mark_I = new MarkBlueprints();
mark_I.getRockets() // returns undefined, boring.

// Let's add some rockets!
var Mark2ndGenBlueprints = function RocketModels() { this.rockets = 6; }

// We already coded a way to retrieve rockets, so we update our prototype to use a RobotModel instead
Mark2ndGenBlueprints.prototype = new MarkBlueprints();
var mark_II = new Mark2ndGenBlueprints();
mark_II.getRockets() // returns 6, yeah!

// Let's add some lasers!
var Mark3rdGenBlueprints = function LaserModels() { this.lasers = 2; }

// We don't have yet a way to retrieve lasers, so we add one.
Mark3rdGenBlueprints.prototype.getLasers = function () { return this.lasers; }
Mark3rdGenBlueprints.prototype.totalWeapons = function () { return this.lasers + this.rockets; }
// Shi'em with rockets!
Mark3rdGenBlueprints.prototype = new Mark2ndGenBlueprints();

var mark_III = new Mark3rdGenBlueprints();
mark_III.totalWeapons() // returns TypeError: Object #<RobotModels> has no method 'totalWeapons'

//What happened? RobotModels? It's supposed to be LaserModel! Well, remember, the prototype's value is the constructor that created the object. After updating the prototype of the LaserModels() with RobotModels(), we also wrote over the constructor, because the constructor's value is the Function() that created the object! Then, we overwrote our getLasers and totalWeapons, because the RobotModels don't have such things.
// --------------------------------------------------

// Let's fix the reference.
Mark3rdGenBlueprints.prototype.constructor = Mark3rdGenBlueprints;
// We need to tell again our methods because we overwrote in the prototype last time!
Mark3rdGenBlueprints.prototype.getLasers = function () { return this.lasers; }
Mark3rdGenBlueprints.prototype.totalWeapons = function () { return this.lasers + this.rockets; }
var mark_IV = new Mark3rdGenBlueprints();
mark_IV.totalWeapons() // returns 8, it's on!


// -------------------------------

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