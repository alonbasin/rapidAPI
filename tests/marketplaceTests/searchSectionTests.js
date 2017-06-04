let marketplace, searchSection, mostUsedSection;

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
        mostUsedSection = marketplace.section.mostUsedSection;
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


    'after': function(browser) {
        browser.end();
    }
};