let marketplace;
let searchSection;
let videoSection;
let mostUsedSection;
let categoriesSection;

module.exports = {

    'before': function (browser) {
        marketplace = browser.page.marketplace();

        browser
            .url(marketplace.navigate())
            .maximizeWindow()
            .waitForElementVisible('body');

        //marketplace.expect.section('@nav').to.be.present;
        //marketplace.expect.section('@footer').to.be.present;

        marketplace.expect.section('@categoriesSection').to.be.present;
        marketplace.expect.section('@searchSection').to.be.present;
        marketplace.expect.section('@mostUsedSection').to.be.present;
        marketplace.expect.section('@recommendedSection').to.be.present;

        //init sections
        searchSection = marketplace.section.searchSection;
        videoSection = marketplace.section.videoSection;
        mostUsedSection = marketplace.section.mostUsedSection;
        categoriesSection = marketplace.section.categoriesSection;
    },


    'open / close video': function (browser) {
        searchSection.waitForElementVisible('@videoButton').click('@videoButton');
        videoSection.waitForElementVisible('@videoContainer').click('@closeButton');
    },


    'search functionality': function (browser) {
        searchSection.waitForElementVisible('@searchField').sendKeys('@searchField', 'Sport');

        browser
            .waitForText('.title', function (text) {
                return text === 'Search Results for: Sport';
            });

        mostUsedSection.assert.containsText('@mostUsedSectionTitle', 'Search Results for: Sport');
        searchSection.clearValue('@searchField');

        //class="brackets-loader packages-loader"
        // browser
        //     .waitForText('.title', function (text) {
        //         return text === 'Most Used APIs';
        //     });
    },


    'select category functionality': function (browser) {
        //categoriesSection.waitForElementVisible('@categoriesSectionTitle');
        //categoriesSection.moveToElement('li',0 ,0).click('li');
        // browser
        //     .useXpath()
        //     .click("//a[text()='Translation']")
        //     .useCss()
    },

    'after': function(browser) {
        browser.end();
    }
};