describe("katas", () => {
    it("Muestra la lista de nombres de katas", () => {
        cy.visit("/");
        cy.get('a[href="/maestro"]').click();
        const nombresEsperados = ["KataBankOCR", "KataFizzBuzz", "FooBarQix", "KataPotter"];
        cy.get('.nombres-katas a').each(($enlace, index) => {
            const nombreEsperado = nombresEsperados[index];
            expect($enlace.text()).to.equal(nombreEsperado);
        });
    });
    it("Eliminar Katas", () => {
        cy.visit("/");
        cy.get("#username").type("maestro");
        cy.get("#password").type("123");
        cy.get("#role").select("maestro");
        cy.get("#login-button").click();
        cy.url().should("include", "/maestro.html");
        cy.get('.eliminar-button').first().click();
        const nombresEsperados = ["KataFizzBuzz", "FooBarQix", "KataPotter"];
        cy.get('.nombres-katas a').each(($enlace, index) => {
            const nombreEsperado = nombresEsperados[index];
            expect($enlace.text()).to.equal(nombreEsperado);
        });
    });
});