import { db } from '../../src/models/db'

describe('Pathao Merchant App', function() {
  beforeEach(function() {
    db.delete()
    cy.visit('http://localhost:3000')
  })

  describe('Shipment list page', () => {
    it('can be opened', function() {
      cy.contains('Shipments')
    })

    it('can search shipment', function() {
      cy.get("[data-cy='searchOrAddTitleInput']").type('shipment')
      cy.contains('Shipment 1')
    })
  })
})