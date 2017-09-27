import { Proj27sepPage } from './app.po';

describe('proj27sep App', () => {
  let page: Proj27sepPage;

  beforeEach(() => {
    page = new Proj27sepPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
