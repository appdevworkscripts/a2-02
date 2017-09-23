import { Proj23sepPage } from './app.po';

describe('proj23sep App', () => {
  let page: Proj23sepPage;

  beforeEach(() => {
    page = new Proj23sepPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
