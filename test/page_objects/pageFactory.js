const HomePage = require('./home_page/home_page');
const TrainingsPage = require('./trainings_page/trainings_page');
const AboutUsPage = require('./about_us_page/about_us_page');
const BasePage = require('./base_page/base_page');

class PageFactory {
  static getPage(pageName) {
    switch (pageName) {
      case 'Home':
        return new HomePage();
      case 'Trainings':
        return new TrainingsPage();
      case 'About Us':
        return new AboutUsPage();
      default:
        return new BasePage();
    };
  };
};

module.exports = PageFactory;