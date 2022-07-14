describe('Seven Popular Product', () => {
  
      it('Search Popular Product', () => { 
        
        // Navigate to Website 
        cy.visit('https://prestashop.ryviushop.com/')

        // Clicking on Popular tab 
        cy.get('a[class="homefeatured"]').click()

        // Verifying all 7 products are displayed 
        cy.get('ul[class="product_list grid row homefeatured tab-pane active"]').find('li').should('have.length', 7)
        
  
      })
    })