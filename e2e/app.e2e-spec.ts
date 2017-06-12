import { OverherePage } from './app.po';

describe('overhere App', () => {
  let page: OverherePage;

  beforeEach(() => {
    page = new OverherePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
