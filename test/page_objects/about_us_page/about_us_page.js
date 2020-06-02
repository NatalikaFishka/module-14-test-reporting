const BasePage = require('../base_page/base_page');

class AboutUsPage extends BasePage {
  constructor() {
    super();
  };
  open() {
    // return super.open('https://training.by/#!/About?lang=ru');
    return super.open('https://training.by/#!/About?lang=ru');
  };
};

module.exports = AboutUsPage;