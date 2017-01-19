import { VvooshPage } from './app.po';

describe('vvoosh App', function() {
  let page: VvooshPage;

  beforeEach(() => {
    page = new VvooshPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
