  describe("Verificar redireccionamiento de usuarios", () => {
    it("Redirecciona a la página del maestro cuando se ingresan credenciales correctas para el maestro", () => {
      // Prueba Cypress para verificar redireccionamiento del maestro
      cy.visit("/");
      cy.get("#username").type("maestro");
      cy.get("#password").type("123");
      cy.get("#role").select("maestro");
      cy.get("#login-button").click();
      cy.url().should("include", "/maestro.html");
    });
  
    it("Redirecciona a la página del alumno cuando se ingresan credenciales correctas para el alumno", () => {
      // Prueba Cypress para verificar redireccionamiento del alumno
      cy.visit("/");
      cy.get("#username").type("alumno");
      cy.get("#password").type("123");
      cy.get("#role").select("alumno");
      cy.get("#login-button").click();
      cy.url().should("include", "/alumno.html");
    });
  });
