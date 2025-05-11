import  {test, expect} from '@playwright/test';
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';



export class LoginPage extends BasePage{

    

    constructor(page)
    {
        super(page);
    }

    webLocators = {
          btnloginIcon: "#menuUser",
          txtUserName: '[name="username"]',
          txtPassword: '[name="password"]',
          btnSignIn: '#sign_in_btn' ,
          labelUserName: '[data-ng-show="userCookie.response"]',
       
    }

 
    async clickLoginIcon()
    {
        await this.page.click(this.webLocators.btnloginIcon);
    }
    async enterUserName(userName: string)
    {
        await this.page.fill(this.webLocators.txtUserName, userName);
    }
    async enterPassword(password: string)
    {
        await this.page.fill(this.webLocators.txtPassword, password);
    }
    async clickSignIn()
    {
        await this.page.click(this.webLocators.btnSignIn);
    }

    async verifyUserName(actualUserName)
    {
        
        await this.page.waitForLoadState('networkidle');
        const userName = await this.page.locator(this.webLocators.labelUserName).nth(1).textContent();
        console.log("Actual Username: ", userName);
        console.log("Expected Username: ", actualUserName);
        expect(userName).toContain(actualUserName);
    }


}