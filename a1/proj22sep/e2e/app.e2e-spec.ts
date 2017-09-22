import { Proj22sepPage } from './app.po';

describe('proj22sep App', () => {
  let page: Proj22sepPage;

  beforeEach(() => {
    page = new Proj22sepPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
