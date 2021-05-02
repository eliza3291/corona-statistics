import { browser, by, element, ElementFinder, WebElement } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleOverview(): Promise<string> {
    return element(by.css('app-root .container-fluid .card h1.card-title')).getText();
  }

  async getCasesText(): Promise<string> {
    return element(by.css('.fas.fa-viruses')).element(by.xpath('..')).element(by.css('span.display-4')).getText();
  }

  async getDeathsText(): Promise<string> {
    return element(by.css('.fas.fa-cross')).element(by.xpath('..')).element(by.css('span.display-4')).getText();
  }

  async getRecoveredText(): Promise<string> {
    return element(by.css('.fas.fa-hand-holding-heart')).element(by.xpath('..')).element(by.css('span.display-4')).getText();
  }

  async getNextButton(): Promise<WebElement> {
    return element(by.css('app-timeframe-selector #btnNext')).getWebElement();
  }

  async getBackButton(): Promise<WebElement> {
    return element(by.css('app-timeframe-selector #btnBack')).getWebElement();
  }

  async getGermanyMapState1(): Promise<WebElement> {
    return element(by.css('app-germany-map .land[id="1"]')).getWebElement();
  }
}
