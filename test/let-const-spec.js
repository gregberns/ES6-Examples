"use strict"
/* jslint node: true */
/* global describe, it, assert */
var expect = require('chai').expect;

describe("ES6 Const and Let", ()=> {

    it("Variable Hoisting", () => {

        if (true){
            a = 1
        }
        // 'a' will be 'hoisted', so it is
        // available anywhere within the function
        var a;
        
        expect(a).to.equal(1)                
    })
    
    it("'let' variable declaration", () => {
        
        // With 'let', 'a' must be declared BEFORE it is used
        let a;
        
        if (true){
            a = 1
        }
        
        //Cannot declare 'let a;' here
        
        expect(a).to.equal(1);                
    })
    
    it("'let' block scope", () => {
        
        if (true){
            //'a' is only available within 
            //the if() block scope 
            let a = 2;
        }
        
        //Error thrown, 'a' is not defined
        expect(() => a).to.throw(ReferenceError);                
    })
    
    it("Problem to solve: for loop", () => {
        
        const arr = [];
        
        for (var i = 0; i < 3; i++){
            setTimeout(function(){
                // 'i' will alway be 3! 
                //**this is a BIG problem**
                expect(i).to.equal(3)
            }, 1)
        }
        
        expect(() => i).to.not.throw(ReferenceError);                
    })
    
    it("Solution: for loop", (done) => {
        
        const arr = [];
        
        for (let i = 0; i < 3; i++){
            setTimeout(function(){
                // 'i' will always be 0,1,2
                expect(i).to.not.equal(3)
                arr.push(i)
                if(i === 2){
                    expect(arr).to.deep.equal([0,1,2])
                    done()            
                }
            }, 1)
        }
        
        //notice: 'i' is not defined
        expect(() => i).to.throw(ReferenceError);        
    })
    
    
    /**
     * Using Const
     */
    it("'const' block scope", () => {
        
        if (true){
            //'const' follows same block scoping rule as 'let' 
            const a = 2;
        }
        
        //'a' is not defined
        expect(() => a).to.throw(ReferenceError);                
    })
    
    
    /**
     *  OH: Rule of Thumb: 'const' should always be used first.
     *          If you need to mutate, then switch to 'let'.
     * 
     *  (This will help move you toward making things more immutable.)
     */
    
    
    it("'const' assignment prevetion ", () => {
        
        const a = "Hey..."
        
        expect(() => {
            //assignment will throw an error
            a = "Yo..."
        }).to.throw(Error);
        
    })
    
    it("'const' object assignment, NOT immutable", () => {
        
        const a = [0,1,2]
        
        a.push(3)
        
        expect(a).to.deep.equal([0,1,2,3])
        
        //BUT...
        expect(() => {
            //assignment of new array will throw an error
            a = []
        }).to.throw(Error);
        
    })
    
    
    
    
    
})  