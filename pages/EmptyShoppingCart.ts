import {expect,Page} from '@playwright/test'
import { BasePage } from './BasePage';

export class EmptyShoppingCartPage extends BasePage{

    constructor(page)
    {
        super(page)
    }

    weblocators = 
    {

        btnHeadPhoneCategory: '[aria-label="HeadphonesCategory"]',
        labelOutofStock: '.imgProduct.outOfStock',
        btnAddToCart: '[name="save_to_cart"]',
        allProductName: '.productName ',
        btnAddtoCart: '[name="save_to_cart"]',
        btnMenuCart:'[aria-label="ShoppingCart"]',
        btnRemove: '.remove ',
        labelEmptyCart: '.roboto-bold.ng-scope'


    }


   
    async selectHeadPhoneCategory()
    {
        await this.page.waitForLoadState('networkidle');
        await this.page.click(this.weblocators.btnHeadPhoneCategory);
        await this.page.waitForLoadState('networkidle');
    }

    async verifyHeadPhonePageLabel()
    {
        await this.page.waitForLoadState('networkidle');
        await expect(this.page.getByText('FEEL YOUR MUSIC')).toHaveText('FEEL YOUR MUSIC',{timeout: 40000});
    }

    async productSelectionForCart()
    {
        for (let  i = 3;  i < 6; i++)
        {
            await this.page.locator(this.weblocators.allProductName).nth(i).click();
            await this.page.waitForLoadState('networkidle');
            await this.page.locator(this.weblocators.btnAddtoCart).click({timeout: 50000});
            await this.page.goBack();     

        }
    }

    async navigateShopingCartPage()
    {
        await this.page.locator(this.weblocators.btnMenuCart).click();
        await this.page.waitForLoadState('networkidle')
        await this.page.waitForURL('https://advantageonlineshopping.com/#/shoppingCart', { waitUntil: 'load' });

        
        const labelShopingCart = this.page.locator('.fixedImportant').nth(0)
        expect(labelShopingCart).toBeVisible();

    }

    async removeProductFromCart()
    {
        
        await this.page.waitForTimeout(4000);
        let productncount =  await this.page.locator(this.weblocators.allProductName).count();
        console.log("product count:", productncount);

        for( let i = productncount - 1; i >= 0;  i--)
        {
            await this.page.waitForLoadState('networkidle')
            await this.page.locator(this.weblocators.btnRemove).nth(i).click();
            console.log('Remove item:', i);
        }


    }


    async verifyAllitemRemoved()
    {
        const actualTextLabel = await this.page.locator(this.weblocators.labelEmptyCart).textContent();
        console.log(actualTextLabel);
        await expect(actualTextLabel).toContain('Your shopping cart is empty');
    }



}