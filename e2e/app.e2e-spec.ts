import { EstacionaFacilPage } from './app.po';

describe('estaciona-facil App', () => {
  let page: EstacionaFacilPage;

  beforeEach(() => {
    page = new EstacionaFacilPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
