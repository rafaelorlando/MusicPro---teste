describe('Login', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('Login sucesso', () => {
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.get('.post-title').should('be.visible')
        cy.url().should('include', '/logged-in-successfully/')
        cy.contains('Congratulations').should('exist')
        cy.get('.wp-block-button__link').should('be.be.visible')
    });

    it('Login usuário inválido', () => {
        cy.get('#username').type('incorrectUser')
        cy.get('#password').type('Password12')
        cy.get('#submit').click()
        cy.get('#error').should('include.text', 'Your username is invalid!')
    });

    it('Login senha inválida', () => {
        cy.get('#username').type('student')
        cy.get('#password').type('incorrectPassword')
        cy.get('#submit').click()
        cy.get('#error').should('include.text', 'Your password is invalid!')
    });

    it('Login usuário em branco', () => {
        cy.get('#password').type('Password12')
        cy.get('#submit').click()
        cy.get('#error').should('include.text', 'Your username is invalid!')
    });

    it('Login senha em branco', () => {
        cy.get('#username').type('student')
        cy.get('#submit').click()
        cy.get('#error').should('include.text', 'Your password is invalid!')
    });

})