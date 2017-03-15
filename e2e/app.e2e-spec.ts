import { BoursesFrontPage } from './app.po';

describe('bourses-front App', () => {
  let page: BoursesFrontPage;

  beforeEach(() => {
    page = new BoursesFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
