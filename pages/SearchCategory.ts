import {expect} from '@playwright/test'
import {Page}  from '@playwright/test'
import { BasePage } from './BasePage';

export class SearchCategoryPage extends BasePage{

    constructor(page){
        super(page)

    }

    weblocators = 
    {
        txtSearchbox: '[id="autoComplete"]',
        labelSearchResult: '#searchResultLabel'
        
    }

   

    async enterSearchText(text)
    {
        await this.page.locator(this.weblocators.txtSearchbox).clear();
        await this.page.fill(this.weblocators.txtSearchbox,text);
        await this.page.keyboard.press('Enter');

    }

    async verifytheSearhcResult()
    {
        
        const searchLabel = await this.page.locator(this.weblocators.labelSearchResult);
        await searchLabel.waitFor({timeout: 4000})
        await expect(searchLabel).toHaveText('Search result: "Headphones"')
    }

}