// Keywords, Variables, Constants, Functions, Classes, Control Flow, and Operators

// Primitive Types and Variables
let stringVar = "Hello, World!";
const numberVar = 42;
var boolVar = true;
let undefinedVar;
const nullVar = null;
let bigIntVar = 1234567890123456789012345678901234567890n;
let symbolVar = Symbol("unique");

// Object Types
let objectVar = {
    key1: "value1",
    key2: 123,
    nested: {
        nestedKey: "nestedValue",
    },
    fun: function () { }
};

let arrayVar = [1, 2, 3, 4, 5];

// Functions
function regularFunction(param1, param2) {
    return param1 + param2;
}

const arrowFunction = (param1, param2) => param1 * param2;

function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

// Async Function
async function asyncFunction() {
    try {
        const result = await fetch("https://api.example.com/data");
        return await result.json();
    } catch (error) {
        console.error("Error:", error);
    }
}

// Classes
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex", 5, "German Shepherd");
dog.speak();

// Control Flow
for (let i = 0; i < arrayVar.length; i++) {
    console.log(arrayVar[i]);
}

let count = 0;
while (count < 5) {
    console.log("Count is:", count);
    count++;
}

do {
    console.log("This runs at least once");
} while (false);

// Conditional Statements
if (boolVar) {
    console.log("Boolean is true");
} else if (!boolVar) {
    console.log("Boolean is false");
} else {
    console.log("This will never happen");
}

switch (numberVar) {
    case 42:
        console.log("The answer to everything");
        break;
    case 7:
        console.log("A lucky number");
        break;
    default:
        console.log("Just another number");
}

// Operators
let sum = 5 + 3;
let difference = 10 - 2;
let product = 4 * 2;
let quotient = 20 / 4;
let remainder = 9 % 2;
let exponent = 3 ** 2;

// Comparison
let isEqual = numberVar === 42;
let isNotEqual = numberVar !== 7;
let isGreaterThan = numberVar > 10;
let isLessThan = numberVar < 50;

// Logical Operators
let andOperation = boolVar && isEqual;
let orOperation = boolVar || isNotEqual;
let notOperation = !boolVar;

// Destructuring
const { key1, nested: { nestedKey } } = objectVar;
const [firstElement, secondElement] = arrayVar;

// Spread and Rest
const newArray = [...arrayVar, 6, 7, 8];
const newObject = { ...objectVar, key3: "value3" };

function sumAll(...args) {
    return args.reduce((total, current) => total + current, 0);
}

// Promises
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 1000);
});

myPromise.then((message) => console.log(message)).catch((error) => console.error(error));

// Modules (ES6 Example)
// export const myExportedVar = 100;
// export default function exportedFunction() {
//   console.log("Exported function called");
// }

// Regular Expressions
let regex = /hello/i;
console.log(regex.test("Hello World"));

// Map, Set, WeakMap, WeakSet
let map = new Map();
map.set("key1", "value1");
let set = new Set([1, 2, 3]);

// Symbol Usage
let uniqueId = Symbol("id");
objectVar[uniqueId] = 123;

// Optional Chaining and Nullish Coalescing
let optionalChain = objectVar?.nested?.nonExistentKey;
let nullish = nullVar ?? "defaultValue";

console.log(optionalChain, nullish);

// Class Static Method and Private Fields
class Counter {
    static count = 0;
    #secretCount = 42;

    static increment() {
        Counter.count++;
    }

    getSecretCount() {
        return this.#secretCount;
    }
}

Counter.increment();
console.log(Counter.count);
const counterInstance = new Counter();
console.log(counterInstance.getSecretCount());

