const path = require('path');
const yargs = require('yargs').argv;
const htmlReporter = require('cucumber-html-reporter');
const junitReporter = require('cucumber-junit-convert');

const htmlReporterOptions = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, '../reports/report.json'),
  output: path.join(__dirname, '../reports/cucumber_report.html'),
  reportSuiteAsScenarios: true,
  launchReport: true
};

const junitReporterOptions = {
  inputJsonFile: path.join(__dirname, '../reports/report.json'),
  outputXmlFile: path.join(__dirname, '../reports/cucumber_report.xml')
}

exports.config = {
  allScriptsTimeout: 60000,
  getPageTimeout: 60000,
  specs: [path.resolve('./test/features/*.feature')],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox', '--window-size=1920,1080']
    },
  },
  disableChecks: true,
  directConnect: true,
  cucumberOpts: {
    require: [path.resolve('./test/step_definitions/*.js')],
    ignoreUncaughtExceptions: true,
    format: ['json:./test/reports/report.json', './node_modules/cucumber-pretty'],
    tags: yargs.tags || '@full'
  },

  afterLaunch: () => {
    htmlReporter.generate(htmlReporterOptions);
    junitReporter.convert(junitReporterOptions);
  },
  rootElement: 'html.ng-scope',
};