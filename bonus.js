
var createCounter = function (init) {
    let number = init
    return {
        increment: () => ++number,
        reset: () => (number = init),
        decrement: () => --number,

    }
};

const counter = createCounter(5)
console.log("First Example")

console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())


// =========================================================================


var createCounter2 = function (init) {
    let number2 = init
    return {
        increment: () => ++number2,
        reset: () => (number2 = init),
        decrement: () => --number2,

    }
};

const counter2 = createCounter2(0)
console.log("Second Example")
console.log(counter2.increment())
console.log(counter2.increment())

console.log(counter2.decrement())
console.log(counter2.reset())

console.log(counter2.reset())
