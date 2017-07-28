import { CarsangularbunPage } from './app.po';

describe('carsangularbun App', () => {
  let page: CarsangularbunPage;

  beforeEach(() => {
    page = new CarsangularbunPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
