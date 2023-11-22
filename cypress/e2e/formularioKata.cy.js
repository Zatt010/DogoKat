describe("Modificacion y anadir Katas", () => {
    it("Agregar nueva Kata", () => {
        cy.visit("/maestro.html");
        cy.get("#crearKata").click();
        cy.get("#nombre").type("Kataprueba");
        cy.get("#detalle").type("Kataprueba");
        cy.get("#dificultad").select("Intermedio");
        cy.get("#categoria").select("Tecnologia");
        cy.on('window:alert', (str) => {
            // Verificar el contenido de la alerta
            expect(str).to.equal('Kata creada con éxito');
        });
        cy.get("#crearKataButton").click();
        // Verificar que los nombres se han actualizado correctamente
        const nombresEsperados = ["KataBankOCR", "KataFizzBuzz", "FooBarQix", "KataPotter", "Kataprueba"];
        cy.get('.nombres-katas a').each(($enlace, index) => {
            const nombreEsperado = nombresEsperados[index];
            expect($enlace.text()).to.equal(nombreEsperado);
        });
        // Verificar que aparece en dificultad
        const dificultadSelect = cy.get("#dificultad");
        dificultadSelect.should("have.value", "Intermedio");
        cy.get(".nombres-katas").should("contain", "FooBarQix");
        cy.get(".nombres-katas").should("contain", "Kataprueba");
    });

    it("Modificar una Kata", () => {
        cy.visit("/maestro.html");
        cy.get('.modificar-button').first().click();
        cy.get("#nuevoNombre").clear().type("NuevoNombre");
        cy.get("#nuevoDetalle").clear().type("NuevoDetalle");
        cy.get("#nuevaDificultad").select("Avanzado");
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Kata modificada exitosamente.');
        });
        cy.get("#modificarKataButton").click();
        const nombresEsperados = ["NuevoNombre", "KataFizzBuzz", "FooBarQix", "KataPotter", "Kataprueba"];
        cy.get('.nombres-katas a').each(($enlace, index) => {
            const nombreEsperado = nombresEsperados[index];
            expect($enlace.text()).to.equal(nombreEsperado);
        });
    });
});
