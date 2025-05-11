import {expect} from '@playwright/test';
import {Page} from '@playwright/test';
import { BasePage } from './BasePage';


export class HeagphonePage extends BasePage{
    

    constructor(page)
    {
        super(page)
    }

    weblocators = 
    {
        btnHeadPhoneCategory: '[aria-label="HeadphonesCategory"]',
        labelOutofStock: '.imgProduct.outOfStock',
        btnAddToCart: '[name="save_to_cart"]'
        

    }

   

    async selectHeadPhoneCategory()
    {
        await this.page.click(this.weblocators.btnHeadPhoneCategory);
    }

    async verifyHeadPhonePageLabel()
    {
        await expect(this.page.getByText('FEEL YOUR MUSIC')).toHaveText('FEEL YOUR MUSIC',{timeout: 40000});
    }

    async clickSoldOutProduct()
    {
        await this.page.click(this.weblocators.labelOutofStock);
    }

    async verifyAddtoCartButtonDisable()
    {
        await expect(this.page.locator(this.weblocators.btnAddToCart)).toHaveClass(/.*disable.*/);
    }




}