/*
 ******************************************************************************
 * Cucumber/Gherkin
 * ============================================================================
 * 
 * NOTES:
 * - Arrow functions not supported by cucumber when accessing the 'world' class
 *   SEE: github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
 * 
 ******************************************************************************
*/

const {After, Before, Given, Then, When} = require('@cucumber/cucumber');
const assert = require('assert');
const path = require('path');
const { WebDriver } = require('selenium-webdriver');
const timeout = 10000;
const webdriver = require('selenium-webdriver');

Before({timeout}, async function() {
    this.browserBuild();
});

After({timeout}, async function() {
    await this.browserExit();
});

Given('the {word} page', {timeout}, async function(page) {
    const pages = {
        'home': 'https://play.pokemonshowdown.com/',
    }

    assert((pages[page] != null), 'Page not supported!');
    await this.browserNavigate(pages[page]);
});

When('you click the ladder button', async function() {
    const button = await this.headless.findElement(webdriver.By.className('button mainmenu3'));
    await button.click();
});

Then('you should go to the ladder page', async function() {
    assert(await this.headless.getCurrentUrl()=='https://play.pokemonshowdown.com/ladder');
});

When('the forum button is clicked', async function() {
});

Then('there should be a forum tab', async function() {
});