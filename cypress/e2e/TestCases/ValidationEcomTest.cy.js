describe('Search for Blouse', () => {

  const shortDesc = 'Short-sleeved blouse with feminine draped sleeve detail.'

    it('Search Blouse', () => {


      

      cy.visit('https://prestashop.ryviushop.com/')

      //cy.get('#search_query_top').type('blouse')

      //cy.get('[id^=search_query_top]').type('blouse')

      cy.get('input[id="search_query_top"]').type('blouse')

      //cy.get('[name^=submit_search]').click()

      cy.get('button[name="submit_search"]').click()

      //cy.get('[class^=product_img_link]').click()

      cy.get('a[class="product_img_link"]').click()      

      //cy.get('[id^=short_description_content]').should('have.text', shortDesc)

      cy.get('div[id="short_description_content"]').should('have.text', shortDesc)
      

    })
  })