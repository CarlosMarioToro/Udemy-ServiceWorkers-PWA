/// <reference types="cypress"/>

describe('Carga la pagina principal', () => {
    it("Debe cargar correctamente", () => {
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');

        cy.contains('h1', 'Administrador de Pacientes de Veterinaria');
    })
})