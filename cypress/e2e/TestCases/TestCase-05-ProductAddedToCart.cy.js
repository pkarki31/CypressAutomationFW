describe('Search for Blouse', () => {

  const productAddedInCartMsg = 'There is 1 item in your cart.'

    it('Search Blouse', () => {
      

      cy.visit('https://prestashop.ryviushop.com/')

      cy.wait(3000)

      cy.get('input[id="search_query_top"]').type('blouse')

      cy.wait(5000)

      cy.get('button[name="submit_search"]').click()

      cy.wait(5000)

      cy.get('a[class="product_img_link"]').click()     
      
      cy.wait(5000)

      cy.get('#add_to_cart > button > span').click()          
      
      cy.wait(5000)

      cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > span > span.ajax_cart_product_txt').should('contain.text',productAddedInCartMsg)

      

      
      

    })
  })