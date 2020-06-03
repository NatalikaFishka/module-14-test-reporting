const { After } = require('cucumber');

After(async function () {
  browser.executeScript('window.localStorage.clear();');
  browser.executeScript('window.sessionStorage.clear();');
  browser.driver.manage().deleteAllCookies();

  const screenshot = await browser.takeScreenshot();
  const decodedImage = new Buffer.from(screenshot, 'base64');
  return this.attach(decodedImage, 'image/png')
});