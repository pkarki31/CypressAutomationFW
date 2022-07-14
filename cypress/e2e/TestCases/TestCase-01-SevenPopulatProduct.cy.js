describe('Seven Popular Product', () => {
  
      it('Search Popular Product', () => { 
        
        // Navigate to Website 
        cy.visit('https://prestashop.ryviushop.com/')

        cy.wait(3000)

        // Clicking on Popular tab 
        cy.get('a[class="homefeatured"]').click()

        cy.wait(3000)

        // Verifying all 7 products are displayed 
        cy.get('ul[class="product_list grid row homefeatured tab-pane active"]').find('li').should('have.length', 7)
        
  
      })
    })