import { PandaPage } from './app.po';

describe('panda App', () => {
  let page: PandaPage;

  beforeEach(() => {
    page = new PandaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('panda works!');
  });
});
