import { expect } from "@playwright/test";
import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage{
    

    constructor(page) {
        super(page)
    }

    webLocators = {
        btnTabletCategory: '[aria-label="TabletsCategory"]',
        listTabletProducts: '.productName',
        btnAddToCart: '[name="save_to_cart"]',
        cartCount: '.cart.ng-binding',
        btnShoppingCart: '#shoppingCartLink',
        btnCheckout: '#checkOutPopUp',
        btnUsername: '[name="usernameInOrderPayment"]',
        btnPassword: '[name="passwordInOrderPayment"]', 
        btnLogin: '#login_btn',
        btnOrderPaymentNext: "#next_btn",
        btnPayNow: '[id="pay_now_btn_SAFEPAY"]',
        labelverifyOrderPayment: '[translate="Thank_you_for_buying_with_Advantage"]',

       
    }


   
    async clickTabletCategory() {
        await this.page.waitForLoadState('networkidle');
        await this.page.click(this.webLocators.btnTabletCategory);
    }
    async verifyTabletCategory() {
        await expect(this.page).toHaveURL(/Tablets/);
        await this.page.waitForTimeout(3000);
        await expect(this.page.getByText(' TRAVEL CONFIDENTLY AND IN STYLE')).toBeVisible({timeout: 40000});
    }
    
    async clickSpecificTablet() {
        const allproductList = await this.page.locator(this.webLocators.listTabletProducts);
        const productCount = await allproductList.count();
        console.log("Total Products: ", productCount);
        for (let i = 0; i < productCount; i++) {
            const productName = await allproductList.nth(i).textContent();
            console.log("Product Name: ", productName);
        }
        await allproductList.nth(0).click();

    }

    async clickAddToCart() {
        await this.page.click(this.webLocators.btnAddToCart);
    }

    async verifyAddToCart() {
        const addtocartcount = await this.page.locator(this.webLocators.cartCount).first().textContent();
        await expect(addtocartcount).toContain('1');
    }

    async clickCheckout() {
        await this.page.locator(this.webLocators.btnShoppingCart).waitFor({ state: 'visible' });
        await this.page.hover(this.webLocators.btnShoppingCart);
        await this.page.click(this.webLocators.btnCheckout);
       
    }

    async enterLoginCredentials(userName: string, password: string) {
        await this.page.fill(this.webLocators.btnUsername, userName);
        await this.page.fill(this.webLocators.btnPassword, password);

    }
    async clickLogin() {
        await this.page.click(this.webLocators.btnLogin);
    }

    async clickOrderPaymentNext() {
        await this.page.click(this.webLocators.btnOrderPaymentNext);
    }
    async clickPayNow() {
        await this.page.click(this.webLocators.btnPayNow);
    }
    async verifyOrderPayment() {
        await expect(this.page).toHaveURL(/orderPayment/);
        await this.page.locator(this.webLocators.labelverifyOrderPayment).waitFor({ state: 'visible', timeout: 40000 }).then(() => {
            console.log("Thank you for buying with Advantage");
        })
        await expect(this.page.getByText('Thank you for buying with Advantage')).toBeVisible();
    }




}

    