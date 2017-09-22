import { MyfirstprojectPage } from './app.po';

describe('myfirstproject App', () => {
  let page: MyfirstprojectPage;

  beforeEach(() => {
    page = new MyfirstprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
