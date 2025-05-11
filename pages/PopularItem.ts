import {expect} from '@playwright/test';
import {Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class PopularItemPage extends BasePage {

    constructor(page)
    {
        super(page)
    }

    weblocators = 
    {
        btnPopularitem: '[translate="POPULAR_ITEMS"]', //nth 0
        allPopularItemProduct: '.viewDetail',
        btnPlusQuantity: '.plus',

    }

   

    async navigatePopularItem()
    {
        await this.page.locator(this.weblocators.btnPopularitem).nth(0).click();
    }

    async selectFristProduct()
    {
        await this.page.locator(this.weblocators.allPopularItemProduct).nth(0).click();
        await this.page.waitForLoadState('networkidle');
    }

    async addQuantity()
    {
        
        await this.page.locator(this.weblocators.btnPlusQuantity).waitFor({state: 'visible', timeout: 40000})
        for(let i = 0 ; i < 5; i ++)
        {
            await this.page.locator(this.weblocators.btnPlusQuantity).click();
            console.log("Adding item Quantity for:", i)
        }
    }

}