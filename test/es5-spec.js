/* jslint node: true */
/* global describe, it, assert */
var expect = require('chai').expect;

describe("ES5 Functions", ()=> {

    it("Scope Basics", () => {

        var FF = function(){
            this.greeting = "hola"
            //expect(this.greeting).to.equal('hola')
        }
        
        FF.prototype.hey = function(){
            expect(this.greeting).to.equal('hola')
            return this.greeting;
        }
        
        var ff = new FF();
         
        expect(ff.hey()).to.equal("hola")
                
    })
    
})  