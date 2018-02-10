import { MeuprojetoPage } from './app.po';

describe('meuprojeto App', function() {
  let page: MeuprojetoPage;

  beforeEach(() => {
    page = new MeuprojetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
