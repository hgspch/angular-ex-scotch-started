import { NgCliCmdLinePage } from './app.po';

describe('ng-cli-cmd-line App', function() {
  let page: NgCliCmdLinePage;

  beforeEach(() => {
    page = new NgCliCmdLinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
