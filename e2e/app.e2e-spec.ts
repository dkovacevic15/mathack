import { MathackPage } from './app.po';

describe('mathack App', () => {
  let page: MathackPage;

  beforeEach(() => {
    page = new MathackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
