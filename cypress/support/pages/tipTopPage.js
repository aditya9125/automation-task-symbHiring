class TipTopPage {

    getDisabledInput() {
      return cy.xpath(".//input[@name='my-disabled']");
    }
  
    getReadonlyInputField() {
      return cy.xpath("//input[@value='Readonly input']");
    }
  
    getReadonlyInputFieldAlternate() {
      return cy.xpath("//form//input[@value='Readonly input']");
    }
  
    getColorDropdown() {
      return cy.get("select[name='color']");
    }
  
    getColorDropdownOptions() {
      return cy.xpath("//select[@name='color']//option");
    }
  
    getSubmitButton() {
      return cy.get("button[type='submit']");
    }
  
    fillNameField(name) {
      cy.get("input[name='name']").type(name);
    }
  
    fillPasswordField(password) {
      cy.get("input[name='password']").type(password);
    }
  
    clickSubmitButton() {
      this.getSubmitButton().click();
    }
  
    getReceivedMessage() {
      return cy.contains('Received');
    }
  }
  
export default TipTopPage;