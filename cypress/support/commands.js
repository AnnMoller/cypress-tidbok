Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args)
  });

  Cypress.Commands.add('getBySelLike', (selector, ...args) => {
    return cy.get(`[data-test*=${selector}]`, ...args)
  });

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

Cypress.Commands.add("loginByApi", (username, password = Cypress.env("defaultPassword")) => {
  return cy.request("POST", `${Cypress.env("apiUrl")}/login`, {
    username,
    password,
  });
  
});