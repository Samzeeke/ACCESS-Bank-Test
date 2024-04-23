// amazon_steps.ts

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AmazonPage from '../../page_objects/AmazonPage';

NodeEvents.setupNodeEvents();

const amazonPage = new AmazonPage();

Given('I open Amazon website', () => {
  amazonPage.visit();
});

When('I click on the hamburger menu', () => {
  amazonPage.clickHamburgerMenu();
});

When('I click on Computers', () => {
  amazonPage.clickComputers();
});

When('I click on Table Accessories', () => {
  amazonPage.clickTableAccessories();
});

When('I filter the results by Brand {string}', (brand: string) => {
  amazonPage.filterByBrand(brand);
});

When('I sort the JETech results by {string}', (option: string) => {
  amazonPage.sortResultsBy(option);
});

When('I click on the lowest priced item', () => {
  amazonPage.clickLowestPricedItem();
});

When('I switch the window', () => {
  amazonPage.switchWindow();
});

Then('I assert that {string} section is present', (section: string) => {
  amazonPage.assertAboutThisItemSection(section);
});
