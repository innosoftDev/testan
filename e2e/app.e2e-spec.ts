import { TestanPage } from './app.po';

describe('testan App', function() {
  let page: TestanPage;

  beforeEach(() => {
    page = new TestanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
