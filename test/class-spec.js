"use strict"
/* jslint node: true */
/* global describe, it, assert */
var expect = require('chai').expect;

describe("ES6 Classes", ()=> {

    it("Variable Hoisting", () => {

        if (true){
            a = 1
        }
        // 'a' will be 'hoisted', so it is
        // available anywhere within the function
        var a;
        
        expect(a).to.equal(1)                
    })
    
})