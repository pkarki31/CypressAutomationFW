describe('Search for Blouse', () => {

    const expectedProductName = 'Blouse'
  
      it('Search Blouse', () => {  
        
  
        cy.visit('https://prestashop.ryviushop.com/')

        cy.wait(3000)
  
        cy.get('input[id="search_query_top"]').type('blouse')

        cy.wait(3000)

        cy.get('button[name="submit_search"]').click()

        cy.wait(3000)

        cy.get('#product_list > li > div > div.right-block > h5 > a').should('contain.text',expectedProductName)
        
  
      })
    })