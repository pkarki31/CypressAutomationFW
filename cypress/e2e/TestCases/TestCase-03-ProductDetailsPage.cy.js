describe('Product Details', () => {

    const expectedSearchUrl = 'Short'
  
      it('Search Short', () => {  
        
  
        cy.visit('https://prestashop.ryviushop.com/')

        cy.wait(3000)
  
        cy.get('input[id="search_query_top"]').type('Short')

        cy.wait(3000)

        cy.get('button[name="submit_search"]').click()

        cy.wait(3000)

        cy.get('a[class="product_img_link"]').eq(0).click()

        cy.wait(3000)

        cy.url().should('include',expectedSearchUrl)

        

        
        
  
      })
    })