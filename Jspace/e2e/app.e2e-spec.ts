import { JspacePage } from './app.po';

describe('jspace App', () => {
  let page: JspacePage;

  beforeEach(() => {
    page = new JspacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
