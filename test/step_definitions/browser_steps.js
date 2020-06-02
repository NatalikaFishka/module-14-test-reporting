const { When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
setDefaultTimeout(60000)

const PageFactory = require('../page_objects/pageFactory');


When('I open {string} page {string}', async (pageName, link) => {
  // const currentPage = PageFactory.getPage(pageName);
  // await currentPage.open();
  await browser.get(link)
});

Then('Link of {string} page is {string}', async (pageName, expectedLink) => {
  const link = await browser.getCurrentUrl();
  expect(link).to.be.equal(expectedLink);
});
