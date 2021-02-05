
let name = "Rome"
let age = 33
let isCool = true
const object = {
    class: "SEI-111", 
    company: "GA"
}

const array = [ 1, 'hello', {name: 'John'}, true ]

function add(num1, num2) {
    return num1 + num2
}

//adding in the multiply function after the test is already written
function multiply(num1, num2) {
    //handle edge case
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1*num2
    } else {
        throw Error('One or more of the inputs are not numbers')
    }
}


//module.export gives the ability to import the following 
//into other files (test.js in our caes)
//added in the multiply function to export list after function is written
module.exports = {
    name, 
    age, 
    isCool, 
    object, 
    add, 
    array, 
    multiply
}