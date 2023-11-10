describe("Criterios de busqueda", () => {
    it("Mostrar resultados de busqueda", () => {
        cy.visit("/");
        cy.get("#busquedaInput").type("f");
        cy.get("#busquedaButton").click();
        cy.get(".nombres-katas")
        .should("contain", "KataFizzBuzz")
        .and("contain", "FooBarQix");
    });
});