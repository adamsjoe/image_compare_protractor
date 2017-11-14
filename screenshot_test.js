const protractorImageComparison = require('protractor-image-comparison');

const path = require('path');
const screenshotPath = path.resolve(__dirname, `actual\\`);
const differencePath = path.resolve(__dirname, `diff\\`);
const helpers = require('./helpers');

const exampleFullPage = 'example-fullpage-compare';

describe('Google Home Page Test', function() {

    beforeEach(function() {
        browser.protractorImageComparison = new protractorImageComparison({
            baselineFolder: '/tmp/',
            screenshotPath: '/tmp2/'
        });
        browser.get(browser.baseUrl)
            .then(() => browser.sleep(500));
        browser.driver.manage().window().maximize();
    });

    it("should match the page", () => {
        expect(browser.imageComparson.checkFullPageScreen(exampleFullPage)).toEqual(0);
    });
  
  });
