

class AmazonPage {
  visit() {
    cy.visit('https://www.amazon.com/');
  }

  clickHamburgerMenu() {
    cy.get('<i class="hm-icon nav-sprite"></i>').click();
  }

  clickComputers() {
    cy.contains('Computers').click();
  }

  clickTableAccessories() {
    cy.contains('Table Accessories').click();
  }

  filterByBrand(brand: string) {
    cy.get('#brandsRefinements').contains(brand).click();
  }

  sortResultsBy(option: string) {
    cy.get('#sort').select(option);
  }

  clickLowestPricedItem() {
    cy.get('.s-result-list')
      .find('.s-result-item')
      .first()
      .find('a.a-link-normal')
      .click();
  }

  switchWindow() {
    cy.window().then(win => {
      const newWindow = win.open();
      newWindow.focus();
    });
  }

  assertAboutThisItemSection(section: string) {
    cy.get('#productDescription').should('contain', section);
  }
}

export default AmazonPage;
