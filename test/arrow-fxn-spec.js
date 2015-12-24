"use strict"
/* jslint node: true */
/* global describe, it, assert */
var expect = require('chai').expect;

describe("ES6 Arrow Functions", ()=> {
    
    /**
     * Simple Arrow functions
     * (Syntactic Sugar)
     */
    it("ES5 Basic Function", () => {
        
        let f = function(){
	        	return "Hello";
            }
        expect(f()).to.equal("Hello")
    })
    
    it("ES6 Basic Arrow Function", () => {
        
        //with statement
        let f = () => {
	        	return "Hello";
            }
        expect(f()).to.equal("Hello")
    })
    
    it("ES6 Single Line Arrow Function", () => {
        
        //with single expression
        let f = () => "Hello";
            
        expect(f()).to.equal("Hello")
    })
    
    
    /**
     * Arrow functions with Single Parameters
     * (Syntactic Sugar)
     */
    it("ES5 Arrow Function with Single Parameter", () => {
        
        let f = function(name) {
	            return "Hello " + name;
	        }            
        expect(f('Greg')).to.equal("Hello Greg")        
    })
    
    it("ES6 Arrow Function with Single Parameter", () => {
        
        let f = name => "Hello " + name;
            
        expect(f('Greg')).to.equal("Hello Greg")        
    })
    
    
    /**
     * Arrow functions with Multiple Parameters
     * (Syntactic Sugar)
     */
    it("ES5 Arrow Function with Multiple Parameters", () => {
        
        let f = function(greeting, name) {
	            return greeting + " " + name;
	        }            
        expect(f('Yo', 'Greg')).to.equal("Yo Greg")        
    })
    
    it("ES6 Arrow Function with Multiple Parameters", () => {
        
        let f = (greeting, name) => greeting + " " + name;
            
        expect(f('Yo', 'Greg')).to.equal("Yo Greg")        
    })
    
    
    
    /**
     * Implications of Arrow functions 
     * on Lexical binding and scope 
     * https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch2.md
     */
    it("ES5 Function Scope Basics", () => {
        
        //Global scope contains: foo
        function foo(a) {
            //foo scope contains: a, b, bar
            var b = a * 2;
            
            function bar(c) {
                //bar scope contains: c
                expect(a).to.equal(2)
                expect(b).to.equal(4)
                expect(c).to.equal(12)
            }

            bar(b * 3);
        }

        foo( 2 );
        
    })
    
    //it("ES5 Function Scope Basics", () => {
        
        // var f = function(){
        //     this.greeting = "hola"
        //     //expect(this.greeting).to.equal('hola')
        //     return this;
        // }
        // 
        // f.prototype.hey = function(){
        //     expect(this.greeting).to.equal('hola')
        //     return this.greeting;
        // }
        // 
        // var ff = f();
        // 
        // expect(ff.hey()).to.equal("hola")
                
    //})
    
})  