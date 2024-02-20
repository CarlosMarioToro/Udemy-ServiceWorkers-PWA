/// <reference types="cypress"/>

describe('Llena los campos para una nueva cita y la elimina', () => {
    it('Campos nueva cita', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Luna')
        
        cy.get('[data-cy="propietario-input"]')
            .type('Cartlos Toro')
        
        cy.get('[data-cy="telefono-input"]')
            .type('3174776726')
        
        cy.get('[data-cy="fecha-input"]')
            .type('2024-02-01')
        
        cy.get('[data-cy="hora-input"]')
            .type('12:15')
        
        cy.get('[data-cy="sintomas-textarea"]')
            .type('No come')

        cy.get('[data-cy="submit-cita"]')
            .click()

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'Administra tus Citas')
        
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')
        
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')

        cy.get('[data-cy="btn-eliminar"]').click()
    });
})