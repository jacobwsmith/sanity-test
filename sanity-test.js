/**

Sanity Test
by Jacob Smith

WHAT:
Jasmine Protractor functional test. Loads a list of urls and verifies the following: 
    - exists at the url expected
    - does not have javascript errors 
    - does not have missing assets

WHEN:
A nice test to run when removing old (thought to be unused) assets, refactoring code, and before preforming more detailed end to end testing. Easy to add additional tests.

INSTALL:
Terminal (OSX Yosemite):
    1. Install Protractor globally with:
        npm install -g protractor
    2. Download the necessary binaries:
        webdriver-manager update
    3. Start up a server:
        webdriver-manager start
    4. Open a new terminal tab and run test:
        protractor conf.js

More information here: http://angular.github.io/protractor/#/

**/
describe('Test a list of urls', function() {

    var ptor = protractor.getInstance();

    // List of urls to test often taken from router
    // This could be set in the config to clean things up
    // also can add other values like title and test them
    var list = [{
        url: '/index.html'
    }, {
        url: '/about.html'
    }, {
        url: '/services.html'
    }, {
        url: '/our-work.html'
    }, {
        url: '/press-coverage.html'
    }, {
        url: '/connect-map.html'
    }, {
        url: '/careers.html'
    }];

    // testing a non-angular page
    browser.ignoreSynchronization = true;

    beforeEach(function() {
        // nothing yet
    });

    afterEach(function() {

        // Checks for javascript errors and/or missing assets
        browser.manage().logs().get('browser').then(function(browserLogs) {
            expect(browserLogs.length).toEqual(0);
            browserLogs.forEach(function(log) {
                if (log.level.value > 900) {
                    // log out the error to help with debugging
                    //console.log('==== Browser console error! ====');
                    console.log(log.message);
                }
            });
        });

    });

    for (var i = 0; i < list.length; i++) {
        (function(item) {

            // Title Test
            it(item.url + ' correct page loads with no javascript errors and no missing assets', function() {

                // Get the url
                browser.get(item.url);

                // TODO: this should be a helper method
                // that checks a javascript flag or ui element for when all loading is complete
                // for the sake of this demo we use sleep 2 seconds delay before running our tests
                ptor.sleep(2000);

                // log out the url to help with debugging
                console.log('\n» ' + item.url);
                
                // Correct page loads
                browser.getCurrentUrl().then(function(actualUrl) {
                  expect(actualUrl).toBe(ptor.baseUrl + item.url);
                });

            });

            // More tests go here...

        })(list[i]);
    }

});