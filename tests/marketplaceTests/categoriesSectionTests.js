let marketplace, mostUsedSection, categoriesSection;

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
        mostUsedSection = marketplace.section.mostUsedSection;
        categoriesSection = marketplace.section.categoriesSection;
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