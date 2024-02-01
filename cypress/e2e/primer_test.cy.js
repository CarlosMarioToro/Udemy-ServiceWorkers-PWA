/// <reference types="cypress"/>

describe('Carga la pagina principal', () => {
    it("Debe cargar correctamente", () => {
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');

        //Verificar el elemento y su texto
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

        //Verificar que exista
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        //Verificar que existe el elemento y contenga un texto
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria')

        
    })
})