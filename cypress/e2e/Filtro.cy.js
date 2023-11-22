describe("Mostrar katas por dificultad", () => {
});

describe("Mostrar katas por categoria", () => {
    it("Deberia mostrar todos los kata de la categoria 'Matematicas'", () => {
        cy.visit("/");
        cy.get("#username").type("maestro");
        cy.get("#password").type("123");
        cy.get("#role").select("maestro");
        cy.get("#login-button").click();
        cy.url().should("include", "/maestro.html");
            cy.get("#categoriaSelect").select("Matematicas");
        cy.get(".nombres-katas").should("contain","KataBankOCR");
    
    });
    it("Deberia mostrar todos los kata de la categoria 'Juegos'", () => {
        cy.visit("/");
        cy.get("#username").type("maestro");
        cy.get("#password").type("123");
        cy.get("#role").select("maestro");
        cy.get("#login-button").click();
        cy.url().should("include", "/maestro.html");
            cy.get("#categoriaSelect").select("Juegos");
        cy.get(".nombres-katas").should("contain","KataFizzBuzz");
    
    });
    it("Deberia mostrar todos los kata de la categoria 'Tecnologia'", () => {
        cy.visit("/");
        cy.get("#username").type("maestro");
        cy.get("#password").type("123");
        cy.get("#role").select("maestro");
        cy.get("#login-button").click();
        cy.url().should("include", "/maestro.html");
            cy.get("#categoriaSelect").select("Tecnologia");
        cy.get(".nombres-katas").should("contain","FooBarQix");
    
    });
    it("Deberia mostrar todos los kata de la categoria 'Algoritmos'", () => {
        cy.visit("/");
        cy.get("#username").type("maestro");
        cy.get("#password").type("123");
        cy.get("#role").select("maestro");
        cy.get("#login-button").click();
        cy.url().should("include", "/maestro.html");
            cy.get("#categoriaSelect").select("Algoritmos");
        cy.get(".nombres-katas").should("contain","KataPotter");
    
    });

});

describe("Mostrar katas por lenguaje", () => {
    it("Muestra las katas correspondientes al seleccionar 'c++'", () => {
        cy.visit("/maestro.html");
            cy.get("#lenguajeSelect").select("c++");
        cy.get(".nombres-katas").should("contain", "KataBankOCR");
        cy.get(".nombres-katas").should("contain", "KataPotter");
    });
});
