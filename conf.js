var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    framework: 'jasmine',


    capabilities: {
        'browserName': 'chrome'
    },

	// seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['screenshot_test.js'],

	baseUrl: 'https://www.npmjs.com/package/protractor-image-comparison',

    onPrepare: function() {

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports2/'
        }).getJasmine2Reporter());
    }

};
