import { AppProduitPage } from './app.po';

describe('app-produit App', function() {
  let page: AppProduitPage;

  beforeEach(() => {
    page = new AppProduitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
