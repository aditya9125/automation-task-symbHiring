describe('TipTop Form Validation Tests', () => {
  
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Verify the input element is disabled', () => {
      cy.xpath(".//input[@name='my-disabled']")
        .should('be.disabled');
    });
  
    it('Verify readonly input field with two XPaths', () => {
      // First XPath
      cy.xpath("//input[@value='Readonly input']")
        .should('have.attr', 'readonly');
  
      // Second XPath
      cy.xpath("//form//input[@value='Readonly input']")
        .should('have.attr', 'readonly');
    });
  
    it('Verify dropdown field has 8 elements using two XPaths', () => {
      // First XPath
      cy.xpath("//select[@name='my-select']//option")
        .should('have.length', 8);
  
      // Second XPath
      cy.xpath("//label[contains(text(),'Select Color')]/select")
        .children()
        .should('have.length', 8);
    });
  
    it('Verify submit button is disabled when Name field is empty', () => {
      cy.get('button[type="submit"]').should('be.disabled');
    });
  
    it('Verify submit button is enabled when Name and Password fields are filled', () => {
        cy.get('input#my-name-id').type('Test User');
        cy.get('input#my-password-id').type('TestPassword123');
      cy.get('button[type="submit"]').should('not.be.disabled');
    });
  
    it("Verify the page shows 'Received' text on submit", () => {
      cy.get('input#my-name-id').type('Test User');
      cy.get('input#my-password-id').type('TestPassword123');
      cy.get('button[type="submit"]').click();
      cy.wait(2000);
      cy.contains('Received').should('be.visible');
    });
  
    it('Verify all form data is passed to the URL on submission', () => {
      cy.intercept('https://d3pv22lioo8876.cloudfront.net/tiptop/*').as('formSubmit');
      cy.get('input#my-name-id').type('testName');
      cy.get('input#my-password-id').type('TestPassword123');
      cy.get('button[type="submit"]').click();
      cy.wait('@formSubmit').then((interception) => {

        expect(interception.response.statusCode).to.equal(200);
        expect(interception.request.url).to.include('my-name=testName&my-password=TestPassword123');
    });
  
  });

})