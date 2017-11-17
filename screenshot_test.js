const protractorImageComparison = require('protractor-image-comparison');

const path = require('path');
const screenshotPath = path.resolve(__dirname, `actual\\`);
const differencePath = path.resolve(__dirname, `diff\\`);
const helpers = require('./helpers');

const exampleFullPage = 'example-fullpage-compare';

describe('Google Home Page Test', function() {

    beforeEach(function() {
        // because I now use a non angular page I disable wait for Angular
        browser.waitForAngularEnabled(false);
        browser.protractorImageComparison = new protractorImageComparison({
            baselineFolder: './tmp/',
            screenshotPath: './tmp2/'
        });
        browser.get(browser.baseUrl)
            .then(() => browser.sleep(500));
        browser.driver.manage().window().maximize();
    });

    it("should match the page", () => {
        // The error was here, you had
        // expect(browser.imageComparson.checkFullPageScreen(exampleFullPage)).toEqual(0);
        // It needs to be
        expect(browser.protractorImageComparison.checkFullPageScreen(exampleFullPage)).toEqual(0);
    });

  });
