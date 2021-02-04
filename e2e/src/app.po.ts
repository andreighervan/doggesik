import { browser, by, element } from 'protractor';

export class AppPage {
<<<<<<< HEAD
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
=======
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
  }
}
