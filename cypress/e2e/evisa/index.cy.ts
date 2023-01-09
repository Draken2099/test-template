describe('Visit Homepage', () => {
    beforeEach('', () => {
        cy.visit('https://laoevisa.gov.la')
    })
    const seq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
    const time = 1000

    it('open the homepage', () => {
        cy.log('Close a notice')
        cy.get(':nth-child(3) > :nth-child(3) > .btn').click()
        cy.wait(time)
        cy.scrollTo('bottom', { duration: 10000 })
        cy.wait(time)
        cy.get(':nth-child(8) > .embed-responsive > .embed-responsive-item').click()
        cy.get('#checkForm > .text-center > .btn').click()
        cy.wait(time)
        cy.get('#client_email').type('anakin.n@laogw.la', { delay: 100 })
        cy.wait(time)
        cy.get('.navbar-nav > [routerlink="/info"] > .nav-link').click()
        cy.wait(time)
        cy.get('body').scrollTo('bottom')
        cy.wait(time)
        cy.get('.navbar-nav > [routerlink="/faq"] > .nav-link').click()
        cy.wait(time)
        seq.forEach(n => {
            cy.get(`:nth-child(${n}) > .faq-header > .mb-0 > .btn-primary`).click()
            cy.wait(time)
        })
        cy.get('.navbar-nav > .dropdown > .nav-link').click()
        cy.wait(time)
        cy.get('.navbar-nav > .dropdown > .dropdown-menu > [href="/apply"]').click()
        cy.get('#client_email').type('anoukone.s@laogw.la', { delay: 100 })
        cy.wait(time)
        cy.get('#verify_code').type('775135', { delay: 100 })
        cy.wait(time)
        cy.get('.navbar-nav > [routerlink="/index"] > .nav-link').click()
        cy.wait(time)
        cy.get(':nth-child(3) > :nth-child(3) > .btn').click()
    })
})

export { }