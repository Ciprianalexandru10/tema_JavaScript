var assert = require('assert');
var assert = require('chai').assert;
var app = require('../app');

/*A.  
In https://www.digi24.ro/ page identify LIVE TV button (top right hand) as an unique element  with .css classes and attributes
    a[title="Digi24 HD Live"].live-link
In https://www.digi24.ro/ page identify SPORT element (top men) as an unique element with. css clases :nth-child() or :nth-of-type()
 .nav .nav-list .nav-list-item:nth-child(5) a[title="Sport"]
In https://www.digi24.ro/ identify ECONOMIE element top menu) as an unique element with .css clases and attributes
  .nav-list .nav-list-item a[title="Economie"]
*/

var testObj = {
    name: "test",
    numbers: [1, 2, 3, 4, 5],
    subObj: {
        name: "sub",
    },
    hasNumbers: true,
}

describe('Test array', function () {
    let { numbers } = testObj
    it('Should return is Array', function () {
        assert.equal(numbers.constructor.name, "Array")
    })

    it('Should return 4', function () {
        assert.equal(numbers[3], 4)
    })
})

var temaObj = {
    name: "Tema",
    firstSubject: {
        subjId: 1,
        desc: "Primul exercitiu",
    },

    secondSubject: {
        subjId: 2,
        desc: "Al doilea exercitiu",
    },
    isDone: true,
}

describe('Homework is done', function () {

    it('is done true?', function () {
        assert.equal(temaObj.isDone, true)
    })

    it('second subject', function () {
        assert.equal(temaObj.secondSubject.desc, "Al doilea exercitiu")
    })
})

describe('Is odd', function () {

    it('is odd', function () {
        assert.equal(app.isOdd(4), false)
    })

})