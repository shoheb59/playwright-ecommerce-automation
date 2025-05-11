import {expect} from '@playwright/test';
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddToCartPage extends BasePage{

   constructor(page) {
        super(page); // Pass the page object to the BasePage constructor
    }


    weblocators = {
        
        btnSpeakersCategory: '[aria-label="SpeakersCategory"]',
        listAllSpeakersProducts: '.productName',
        btnAddToCart: '[name="save_to_cart"]',
        cartCount: '.cart.ng-binding',

        
    } 
   
    async clickSpeakerCategory()
    {
        await this.page.click(this.weblocators.btnSpeakersCategory);
    }
    
    async verifySpeakerCategory()
    {
        await expect(this.page).toHaveURL(/Speakers/);
        await this.page.waitForTimeout(2000);
        await expect(this.page.getByText('ENJOY PREMIUM SOUND')).toBeVisible();
    }

    async clickSpecificSpeaker()
    {
        
        const allproductList = await this.page.locator(this.weblocators.listAllSpeakersProducts);
        const productCount = await allproductList.count();
        console.log("Total Products: ", productCount); 
        for(let i = 0; i < productCount; i++)
        {
            const productName =  await allproductList.nth(i).textContent();
            console.log("Product Name: ", productName);
        }
        await allproductList.nth(0).click();
        
    }

    async clickAddToCart()
    {
        await this.page.click(this.weblocators.btnAddToCart);
    }
    async verifyAddToCart()
    {
        const addtocartcount = await this.page.locator(this.weblocators.cartCount).first().textContent();
        await expect(addtocartcount).toContain('1');
    }

}