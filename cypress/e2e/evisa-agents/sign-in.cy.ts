describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://172.25.250.11:3000/auth/sign-in')
    })

    const wrongDataset = [
        {
            username: usernameRandom(),
            password: passwordRandom()
        },
        {
            username: usernameRandom(),
            password: passwordRandom()
        },
        {
            username: usernameRandom(),
            password: passwordRandom()
        },
    ]

    const time = 1500

    wrongDataset.forEach(wrong => {
        const { username, password } = wrong;

        it('login failed!!', () => {
            cy.log('Fill Authentication Data')
            cy.get('input[name=username]', { timeout: 20_000 }).type(username).should('be.false')
            cy.wait(time)
            cy.get('input[name=password]', { timeout: 20_000 }).type(password).should('be.false')
            cy.wait(time)
            cy.get('input[type="checkbox"]').check()
            cy.wait(time)
            cy.get('button').click()
        })
    })

    const wrongPaasword = [
        {
            username: 'locatravel',
            password: passwordRandom()
        },
        {
            username: 'travel',
            password: passwordRandom()
        },
        {
            username: 'hackerowen',
            password: passwordRandom()
        }
    ]

    wrongPaasword.forEach(wrong => {
        const { username, password } = wrong;

        it('login invalid password!!', () => {
            cy.log('Fill Authentication Data')
            cy.get('input[name=username]', { timeout: 20_000 }).type(username)
            cy.wait(time)
            cy.get('input[name=password]', { timeout: 20_000 }).type(password).should('be.false')
            cy.wait(time)
            cy.get('input[type="checkbox"]').check()
            cy.wait(time)
            cy.get('button').click()
        })
    })

    const dataset = [
        { username: 'locatravel', password: '12345678' },
        { username: 'travel', password: '12345678' },
        { username: 'hackerowen', password: '12345678' },
        { username: 'travel', password: '12345678' },
        { username: 'hackerowen', password: '12345678' },
        { username: 'locatravel', password: '12345678' },
        { username: 'hackerowen', password: '12345678' },
        { username: 'travel', password: '12345678' },
        { username: 'locatravel', password: '12345678' },
    ]

    dataset.forEach(data => {
        const { username, password } = data;

        it('login success', () => {
            cy.log('Fill Authentication Data')
            cy.get('input[name=username]', { timeout: 20_000 }).type(username, { delay: 100 }).should('be.visible')
            cy.wait(time)
            cy.get('input[name=password]', { timeout: 20_000 }).type(password, { delay: 100 }).should('be.visible')
            cy.wait(time)
            cy.get('input[type="checkbox"]').check()
            cy.wait(time)
            cy.get('button').click()
            cy.wait(3000)
        })
    })

})

export { }

function usernameRandom() {
    var text = "";
    let len = Math.floor(Math.random() * 50)
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm1234567890";
    for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function passwordRandom() {
    var text = "";
    let len = Math.floor(Math.random() * 50)
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm0123456789!@#$%^&*\()_+-=<>?,./;':{}[]|";
    for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}