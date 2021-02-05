const chai = require ('chai')
const assert = require ('chai').assert;
const expect = require('chai').expect;


//cool import - destructuring
//added in multiply for import after it was added to export object in index.js 
const {name, age, isCool, object, add, array, multiply } = require('../index');


//what should I be looking for when testing: 
//1. test the datatype
//2. test the equality (what is the value)
//3. test the lenght if it makes sense (for strings array objects etc/ numbers.length doesnt make much sense )
//4. testing an object (testing property - key:value pairs)


//describe what the test is doing
//NOTE: can NOT use arrow function here;it will throw an error
describe('Test name variable', function() {
    it('should return a string as a type', function() {
        //typeOf will let me know the data type
        assert.typeOf(name, 'string');
    })

    it('should return Rome as a result', function() {
        //check what name is equal to
        //assert.equal(name, 'Rome');
        expect(name).to.equal('Rome')
    })

    it('should have length of 4', function() {
        //check the length
        assert.lengthOf(name, 4);
    })
})

describe('Test age variable', function() {
    it('should return number as a type', function() {
        assert.typeOf(age, 'number');
    })

    it('should return 33 as a result', function() {
        assert.equal(age, '33')
    })
})

describe('Test isCool variable', function() {
    it('should return isCool as a boolean type', function() {
        assert.typeOf(isCool, 'boolean');
    })
    
    it('should return true as a result', function() {
        assert.equal(isCool, true)
    })
})

describe('Test object variable', function() {
    it('should return object as an object type', function() {
        assert.typeOf(object, 'object')
    })

    it('should equal SEI-111', function() {
        assert.equal(object.class, "SEI-111");
    })
})

describe('Test add function', function() {
    //When I have a fuction, what should I test?
    // 1. Make sure it IS a function
    // 2. Make sure that it gives the correct output
    // 3. Make sure that the output data type is correct/expected
    
    it('should return add as a function', function() {
        expect(add).to.be.a('function')
    })

    it('should return the expected output: 4', function() {
        let myFavoriteNumber = add(1,8)
        expect(add(2,2)).to.equal(4);
        expect(myFavoriteNumber).to.equal(9)
    })

    it('should have number type as output', function() {
        expect(add(2,2)).to.be.a('number');
    })
})

describe('Test Array', function() {
    it('should be an array', function() {
        expect(array).to.be.a('array')
    })

    it('should have 4 DIFFERENT datatypes', function() {
        //set up a variable that will give me back a result
        let result = 0
        //iterate through the array and check each data type
        for (let i=0; i < array.length; i++) {
            let ele = array[i]
            if (typeof ele === 'boolean') {
                result += 1
            } else if (typeof ele === 'string'){
                result += 1
            } else if (typeof ele === 'number') {
                result += 1
            } else if (typeof ele === 'object') {
                result += 1
            }
        }
        //do the official test
        expect(result).to.equal(4)
    })
})

//start TDD (Test Driven Development)
//approach the code with test first 

//write a function multiply that returns a product
//1. write the test 
//2. go to the file where we want the code to live
//3. IMPORTANT: write the code in a way that passes the test
//4. export that function (this happens in the code file)
//5. Import that function into my test module(file)
//6. run the TEST (mocha)(npm run test)

describe('Test the multiply function', function() {
    it('should be a function', function() {
        assert.typeOf(multiply, 'function')
    })

    it('should produce the expect output of 9 with 3,3 as params', function() {
        expect(multiply(3,3)).to.equal(9)
        assert.equal(multiply(-1, 3), -3)
    })

    it('output should have a datatype of number', function() {
        expect(multiply(2,3)).to.be.a('number')
    })
})
