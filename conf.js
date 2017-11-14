var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    framework: 'jasmine',
    

    capabilities: {
        'browserName': 'internet explorer'
    },

	seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['screenshot_test.js'],

	baseUrl: 'http://localhost:4200',
  
    onPrepare: function() {

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports2/'
        }).getJasmine2Reporter());
    }
	
};