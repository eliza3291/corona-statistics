import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Corona Xtreme App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  beforeEach(async() => {
    await page.navigateTo();
  });

  it('data should be higher for longer timeframe', async () => {
    const casesBefore = await page.getCasesText();
    const deathsBefore = await page.getDeathsText();
    const recoveredBefore = await page.getRecoveredText();
    const button = await page.getNextButton();
    await button.click();
    expect(await page.getCasesText()).toBeGreaterThan(parseInt(casesBefore));
    expect(await page.getDeathsText()).toBeGreaterThan(parseInt(deathsBefore));
    expect(await page.getRecoveredText()).toBeGreaterThan(parseInt(recoveredBefore));
  });

  it('data should be lower for specific state', async () => {
    const casesBefore = await page.getCasesText();
    const deathsBefore = await page.getDeathsText();
    const recoveredBefore = await page.getRecoveredText();
    const stateOne = await page.getGermanyMapState1();
    await stateOne.click();
    expect(await page.getCasesText()).toBeLessThan(parseInt(casesBefore));
    expect(await page.getDeathsText()).toBeLessThan(parseInt(deathsBefore));
    expect(await page.getRecoveredText()).toBeLessThan(parseInt(recoveredBefore));
  });

  it('Overview name should be Schleswig-Holstein when state 1 selected', async () => {
    const stateOne = await page.getGermanyMapState1();
    await stateOne.click(); 
    expect(await page.getTitleOverview()).toBe('Schleswig-Holstein');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
