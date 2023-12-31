import Helper from '../../helper/helper';
const envURLs = Helper.parseJsonFile('./environments/env.json');
import AddRemovePage from '../pages/AddRemove.page';
import {expect} from 'chai';

const h3TitleTex = "Add/Remove Elements";
const h3Title = "h3";

//#region //Preparation
before('land to main url', async () => {
  await browser.url(envURLs.LOG_IN+"add_remove_elements/");
});
//#endregion
describe('Check Add Remove elements page defaults', () => {
  //#region //Inspect login form
  it('Check h3 header displayed', async () => {
    await expect(await AddRemovePage.isTitleDisplayed(h3Title)).true;
    await expect(await AddRemovePage.getHeaderText(h3Title)).contain(h3TitleTex);
  });
  it('Verify Add button', async ()=>{
    await expect(await AddRemovePage.isAddBtnDisplayed()).true;
  });
});

describe('Verify Add Remove elements', () => {
  //#region //Inspect login form
  it('Add element', async () => {
    await AddRemovePage.clickAddBtn();
    await expect(await AddRemovePage.isDeleteBtnDisplayed()).true;
  });
  it('Remove element', async ()=>{
    await expect(await AddRemovePage.isDeleteBtnDisplayed()).true;
    await AddRemovePage.clickDeleteBtn();
    await browser.pause(1000);
    await expect(await AddRemovePage.isDeleteBtnDisplayed()).false;
  });
});