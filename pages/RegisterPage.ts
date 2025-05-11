import  {test, expect} from '@playwright/test';
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';



export class RegisterPage extends BasePage{
    
    private randomNumber: number;

    constructor(page)
    {
        super(page)
        this.randomNumber = Math.floor(Math.random() * 1000);
    }

    webLocators = {
        btnloginIcon: "#menuUser",
        btnCreateNewAccount: '[translate="CREATE_NEW_ACCOUNT"]',
        txtUserName: '[name="usernameRegisterPage"]',
        txtEmail: '[name="emailRegisterPage"]',
        txtPassword: '[name="passwordRegisterPage"]',
        txtConfirmPassword: '[name="confirm_passwordRegisterPage"]',
        cbIAgree: '[name="i_agree"]',   
        btnRegister: '[id="register_btn"]',
        labelUserName: '[data-ng-show="userCookie.response"]',

    }

   

    async clickLoginIcon()
    {
        await this.page.click(this.webLocators.btnloginIcon);
    }
    async clickCreateNewAccount()
    {
        await this.page.click(this.webLocators.btnCreateNewAccount);
    }

    async verifyRegisterUrl()
    {
        await expect(this.page).toHaveURL(/register/);
    }

    
    async enterUserName()
    {
    
        const userName = `id${this.randomNumber}`;
        await this.page.fill(this.webLocators.txtUserName, userName);
        return userName;
    }
    async enterEmail()
    {
        await this.page.fill(this.webLocators.txtEmail,`hasnat${this.randomNumber}@yopmail.com`);
    }
    async enterPassword()
    {
        await this.page.fill(this.webLocators.txtPassword, '1234aA')
    }
    async enterConfirmPassword()
    {
        await this.page.fill(this.webLocators.txtConfirmPassword, '1234aA')
    }
    async checkIAgree()
    {
        await this.page.check(this.webLocators.cbIAgree);
    }
    async clickRegister()
    {
        await this.page.click(this.webLocators.btnRegister);
    }

    async verifyUserName(expectedUserName)
    {
        const userName = await this.page.locator(this.webLocators.labelUserName).nth(1).textContent();
        console.log("Actual Username: ", userName);
        console.log("Expected Username: ", expectedUserName);
        expect(userName).toContain(expectedUserName);
    }
    
}
