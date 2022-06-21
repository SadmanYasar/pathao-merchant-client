describe('Pathao Merchant App', function() {
    beforeEach(function() {
      cy.visit('http://localhost:3000')
    })
  
    it('front page can be opened', function() {
      cy.contains('Shipments')
    })
  })