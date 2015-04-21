# sanity-test

Sanity Test

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

