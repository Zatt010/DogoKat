describe("Mostrar katas por dificultad", () => {
});

describe("Mostrar katas por categoria", () => {
});

describe("Mostrar katas por lenguaje", () => {
    it("Muestra las katas correspondientes al seleccionar 'c++'", () => {
        cy.visit("/");
            cy.get("#lenguajeSelect").select("c++");
        cy.get(".nombres-katas").should("contain", "KataBankOCR");
        cy.get(".nombres-katas").should("contain", "KataPotter");
    });
});
