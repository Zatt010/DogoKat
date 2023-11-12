describe("Mostrar katas por dificultad", () => {
});

describe("Mostrar katas por categoria", () => {
    it("Deberia mostrar todos los kata de la categoria 'Matematicas'", () => {
        cy.visit("/");
            cy.get("#categoriaSelect").select("Matematicas");
        cy.get(".nombres-katas").should("contain","KataBankOCR");
    
    });
});

describe("Mostrar katas por lenguaje", () => {
    it("Muestra las katas correspondientes al seleccionar 'c++'", () => {
        cy.visit("/");
            cy.get("#lenguajeSelect").select("c++");
        cy.get(".nombres-katas").should("contain", "KataBankOCR");
        cy.get(".nombres-katas").should("contain", "KataPotter");
    });
});
