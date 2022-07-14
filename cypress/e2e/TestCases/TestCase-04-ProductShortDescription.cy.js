describe('Search for Blouse', () => {

  const shortDesc = 'Short-sleeved blouse with feminine draped sleeve detail.'

    it('Search Blouse', () => {      

      cy.visit('https://prestashop.ryviushop.com/')

      cy.wait(3000)

      cy.get('input[id="search_query_top"]').type('blouse')

      cy.wait(3000)

      cy.get('button[name="submit_search"]').click()

      cy.wait(3000)

      cy.get('a[class="product_img_link"]').click()      

      cy.wait(3000)

      cy.get('div[id="short_description_content"]').should('have.text', shortDesc)
      

    })
  })