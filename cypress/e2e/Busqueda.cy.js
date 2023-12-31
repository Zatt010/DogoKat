describe("Criterios de busqueda", () => {
    it("Mostrar resultados de busqueda", () => {
        cy.visit("/");
        cy.get('a[href="/maestro"]').click();
        cy.get("#busquedaInput").type("f");
        cy.get("#busquedaButton").click();
        cy.get(".nombres-katas")
        .should("contain", "KataFizzBuzz")
        .and("contain", "FooBarQix");
    });
});
describe("Criterios de busqueda", () => {
    it("Mostrar resultados de busqueda", () => {
        cy.visit("/");
        cy.get('a[href="/maestro"]').click();

        cy.get("#busquedaInput").type("f");
        cy.get("#busquedaButton").click();
        cy.get(".nombres-katas")
        .should("contain", "KataFizzBuzz")
        .and("contain", "FooBarQix");
    });
    it("Mostrar busqueda no encontrada", () => {
        cy.visit("/");
        cy.get('a[href="/maestro"]').click();
        cy.get("#busquedaInput").type("m");
        cy.get("#busquedaButton").click();
        cy.get(".nombres-katas").should("contain", "Kata no encontrada");
    });
});