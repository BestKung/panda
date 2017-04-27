import { browser, element, by } from 'protractor';

export class PandaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('panda-root h1')).getText();
  }
}
