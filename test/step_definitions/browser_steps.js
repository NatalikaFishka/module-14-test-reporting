const { When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
setDefaultTimeout(60000)

const PageFactory = require('../page_objects/pageFactory');

When('I open {string} page', async (pageName) => {
  await PageFactory.getPage(pageName).open();
});

Then('Title of {string} page is: {string}', async (pageName, expectedTitle) => {
  const title = await PageFactory.getPage(pageName).getTitle();
  expect(title).to.include(expectedTitle);
});

When('I click on Glob icon on {string} page and select {string} language', async (pageName, language) => {
  await PageFactory.getPage(pageName).Header.languageButton.click();
  await PageFactory.getPage(pageName).Header.languageSelectionPanel.clickElementByText(language);
});

Then('{string} page link is changed to {string}', async (pageName, englishLink) => {
  const isUrlMatch = await PageFactory.getPage(pageName).waitForUrl(englishLink);
  expect(isUrlMatch).to.be.true;
})

When('I click on {string} in the header', async (linkText) => {
  await PageFactory.getPage().Header.navigationButtons.clickElementByText(linkText);
  return;
})

Then('{string} link opens', async (pageLink) => {
  const currentURL = await PageFactory.getPage().getCurrentUrl();
  expect(currentURL).to.be.equal(pageLink);
})
