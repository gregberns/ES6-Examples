"use strict"
/* jslint node: true */
/* global describe, it, assert */
var expect = require('chai').expect;

describe("ES6 Template Strings", ()=> {

    it("simple usage", () => {

        var s = `a template string`
        
        expect(s).to.equal("a template string")          
    })
    
    it("with variables", () => {

        let t = 'awesome'
        let s = `an ${t} template string`
        
        expect(s).to.equal("an awesome template string")          
    })
    
    it("with variables", () => {

        let u = "really"
        let t = 'awesome'
        let s = `a ${u} ${t} template string`
        
        expect(s).to.equal("a really awesome template string")          
    })
    
    
    it("with function evaluation", () => {

        let t = function(){
            return "awesome function"
        }
        let s = `an ${t()} template string`
        
        expect(s).to.equal("an awesome function template string")          
    })
    
    it("with multiple lines", () => {
        //Note: Any whitespace inside of the backtick syntax will 
        //         also be considered part of the string.
        let s = `a 
really 
awesome 
template string`
                        
        expect(s).to.equal("a \nreally \nawesome \ntemplate string")
        //I see issues with this...
        //What happens on minification?? 
        //I guess the minifier has to take this into account??
    })

})