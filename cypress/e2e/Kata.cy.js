describe("katas", () => {
    it("Muestra la lista de nombres de katas", () => {
        cy.visit("/");
        const nombresEsperados = ["KataBankOCR", "KataFizzBuzz", "FooBarQix", "KataPotter"];
        cy.get('.nombres-katas a').each(($enlace, index) => {
            const nombreEsperado = nombresEsperados[index];
            expect($enlace.text()).to.equal(nombreEsperado);
        });
    });
});