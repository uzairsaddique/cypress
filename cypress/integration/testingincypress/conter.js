/// <reference types="cypress" />

describe("testing the main pat of the ", ()=>{
    it("should be able to submit a successful via contact us from" , ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
       
        cy.get('[name="first_name"]').type("uzair")
        cy.get('[name="last_name"]').type("siddique")
        cy.get('[name="email"]').type("uzair@gmail.com")
        cy.get('textarea.feedback-input').type("something is not here")
        cy.get('[type="submit"]').dblclick({ force: true})
       

    });
    it("should not be  able to submit a successful via contact us from as from all fiedle are required" , ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("uzair")
        cy.get('[name="last_name"]').type("siddique")
        cy.get('[name="email"]').type("uzair@gmail.com")
        cy.get('textarea.feedback-input').type("something is not here")
        cy.get('[type="submit"]').dblclick({ force: true})
        cy.get('h1').should('have.text', 'Thank You for your Message!')
        cy.get('#fountainG_8').dblclick({force: true})

    });
});