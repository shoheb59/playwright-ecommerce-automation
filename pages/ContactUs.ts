import {expect} from '@playwright/test';
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactUsPage extends BasePage{
    
    constructor(page)
    {
        super(page)
    }

    weblocators = {
        btnContactUs: '[translate="CONTACT_US"]', 
        ddSelectCategrory: '[name="categoryListboxContactUs"]',   
        ddProductList: '[name="productListboxContactUs"]',
        txtEmail: '[name="emailContactUs"]',
        txtMessage: '[name="subjectTextareaContactUs"]',
        btnSendMessage: '#send_btn',
        successMessage: '.successMessage',
    }
    
    
    async clickContactUs()
    {
        await this.page.click(this.weblocators.btnContactUs);
    }
    async categoryDropdown()
    {
        //await this.page.click(this.weblocators.ddSelectCategrory);
        await this.page.selectOption(this.weblocators.ddSelectCategrory, 'Laptops');
    }

    async productDropdown()
    {
        await this.page.selectOption(this.weblocators.ddProductList, 'HP Pavilion 15z Laptop');
    }

    async enterEmail()
    {
        await this.page.fill(this.weblocators.txtEmail,`hasnat${Math.floor(Math.random() * 1000)}@yopmail.com`);
    }
    async enterMessage()
    {
        await this.page.fill(this.weblocators.txtMessage, 'This is a test message');
    }
    async clickSendMessage()
    {
        await this.page.click(this.weblocators.btnSendMessage);
    }

    async verifyMessageSent()
    {
        await expect(this.page.locator(this.weblocators.successMessage)).toHaveText('Thank you for contacting Advantage support.')
        
    }
        


}