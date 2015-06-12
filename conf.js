/**

Sanity Test Configuration
by Jacob W Smith

See sanity-test.js for details

**/

// ============================================================
// conf.js
// ============================================================
exports.config = {
    baseUrl: 'http://www.sorensonmedia.com',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'sanity-test.js'
    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 10000
    }
};