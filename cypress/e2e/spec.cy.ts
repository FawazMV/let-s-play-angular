describe('Home Page', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Get Started')
    cy.get('#toggleMenu').click()
    cy.contains('Get Started').click()
    cy.url().should('include', '/login')
  })
})

describe('Login Page', () => {
  it('Should navigate to /login and check button disabled state', () => {
    cy.visit('/login')
    cy.contains('Email address')
    cy.contains('Password')
    cy.get('button')
      .contains('Login')
      .should('be.disabled')

    cy.contains('Signup here.')
    cy.get('a')
      .contains('Signup')
      .click()
    cy.url().should('include', '/register')
  })
})

describe('Signup page', () => {
  it('Visits the signup page', () => {
    cy.visit('/register')
    cy.get('#toggleMenu').click()
    cy.contains('TURF BOOKING').click()
    cy.url().should('include', '/turfs')
  })
})

describe('All turf', () => {
  it('Visits the tur showing page', () => {
    cy.visit('/turfs')
    // cy.get('#toggleMenu').click()
    cy.contains("Let's Play Together")
    cy.contains('Blasters Playground').click()
    cy.url().should('include', '/turf')
  })
})
