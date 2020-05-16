import { AngularversionPage } from './app.po';

describe('angularversion App', function() {
  let page: AngularversionPage;

  beforeEach(() => {
    page = new AngularversionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
