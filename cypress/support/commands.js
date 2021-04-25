require('@4tw/cypress-drag-drop')

Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args)
  });

  Cypress.Commands.add('getBySelLike', (selector, ...args) => {
    return cy.get(`[data-test*=${selector}]`, ...args)
  });

  Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
  })

  Cypress.Commands.add('centerForm', (label) => {
    cy.get('a').contains(label).click()
  })

  Cypress.Commands.add("login", (username, password, rememberUser = false) => {
    const signinPath = "/signin";
    const log = Cypress.log({
      name: "login",
      displayName: "LOGIN",
      message: [`🔐 Authenticating | ${username}`],
      // @ts-ignore
      autoEnd: false,
    });

  });

  Cypress.Commands.add("loginByApi", (username, password = Cypress.env("defaultPassword")) => {
    return cy.request("POST", `${Cypress.env("apiUrl")}/login`, {
      username,
      password,
    });
    
});

Cypress.Commands.add('createUser', (user) => {
  cy.request({
    method: 'POST',
    url: 'https://www.example.com/tokens',
    body: {
      email: 'admin_username',
      password: 'admin_password',
    },
  }).then((resp) => {
    cy.request({
      method: 'POST',
      url: 'https://www.example.com/users',
      headers: { Authorization: 'Bearer ' + resp.body.token },
      body: user,
    })
  })
})

Cypress.Commands.add('createClinic', (clinic) => {
  cy.request({
    method: 'POST',
    url: 'https://localhost:5006/Clinics',
    body: {
      hsa_id: '3',
      name:clinic,
      phone: '1122'
    }
  })
})