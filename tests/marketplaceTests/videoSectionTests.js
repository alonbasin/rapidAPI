let marketplace, searchSection, videoSection;

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
    },

    'video section tests': function (browser) {

        //open video
        searchSection
            .waitForElementVisible('@videoButton')
            .click('@videoButton');

        //assert iframe src
        videoSection
            .waitForElementVisible('@videoContainer');

        //close video
        videoSection
            .waitForElementVisible('@closeButton')
            .click('@closeButton');
    },

    'after': function(browser) {
        browser.end();
    }
};