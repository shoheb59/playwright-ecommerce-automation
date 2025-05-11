import  {test, expect} from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { AddToCartPage } from '../pages/AddToCart';
import { CheckoutPage } from '../pages/Checkout';
import { ContactUsPage } from '../pages/ContactUs';
import { FilterProductPricePage } from '../pages/FilterProductPrice';
import { SearchCategoryPage } from '../pages/SearchCategory';
import { HeagphonePage } from '../pages/HeadphoneCategory';
import { PopularItemPage } from '../pages/PopularItem';
import { EmptyShoppingCartPage } from '../pages/EmptyShoppingCart';




test.describe('10 unique test cases',()=> {

    test('TC 1: Verify user registration', async ({page})=> {

        const registerobject = new RegisterPage(page);

        await registerobject.openUrl();
        await registerobject.clickLoginIcon();
        await registerobject.clickCreateNewAccount();
        const enteredUserName = await registerobject.enterUserName(); 
        await registerobject.enterEmail();
        await registerobject.enterPassword();
        await registerobject.enterConfirmPassword();
        await registerobject.checkIAgree();
        await registerobject.clickRegister();  
        await registerobject.verifyUserName(enteredUserName);

    });

    test.only('TC 2: Verify user login', async ({page})=> {
        const loginobject = new LoginPage(page);

        await loginobject.openUrl();
        await loginobject.clickLoginIcon();
        await loginobject.enterUserName('id674');
        await loginobject.enterPassword('1234aA');
        await loginobject.clickSignIn();
        await loginobject.verifyUserName('id674');
        await page.pause();
        
    

    });

    test('TC 3: Verify adding a product to the cart', async ({page})=>{

        const addtocartobject =  new AddToCartPage(page);

        await addtocartobject.openUrl();
        await addtocartobject.clickSpeakerCategory();
        await addtocartobject.verifySpeakerCategory();
        await addtocartobject.clickSpecificSpeaker();
        await addtocartobject.clickAddToCart();
        await addtocartobject.verifyAddToCart();
        


    });

    test('TC 4: Verify checkout process', async ({page})=>{
        const checkoutobject = new CheckoutPage(page);

        await checkoutobject.openUrl();
        await checkoutobject.clickTabletCategory();
        await checkoutobject.verifyTabletCategory();
        await checkoutobject.clickSpecificTablet();
        await checkoutobject.clickAddToCart();
        await checkoutobject.verifyAddToCart();
        await checkoutobject.clickCheckout();
        await checkoutobject.enterLoginCredentials('id674', '1234aA');
        await checkoutobject.clickLogin();
        await checkoutobject.clickOrderPaymentNext();
        await checkoutobject.clickPayNow();
        await checkoutobject.verifyOrderPayment();
        

    })

    test('TC 5: Verify Contact Us functionality', async ({page})=>{

        const contactusobject = new ContactUsPage(page);

        await contactusobject.openUrl();
        await contactusobject.clickContactUs();
        await contactusobject.categoryDropdown();
        await contactusobject.productDropdown();
        await contactusobject.enterEmail();
        await contactusobject.enterMessage();   
        await contactusobject.clickSendMessage();
        await contactusobject.verifyMessageSent();
        
       
       

    })

    test('TC 6: Verify filtering products by price', async ({page})=>{

        const filterobject = new FilterProductPricePage(page);

        await filterobject.openUrl();
        await filterobject.clickMiceCategory();
        await filterobject.clickPrice();
        await filterobject.sliderPrice(20);
        await filterobject.verifytheMinPriceisSelected()
       
        

    })

    test('TC 7: Verify searching for a specific category', async({page})=>{

        const searchobject =  new SearchCategoryPage(page);

        await searchobject.openUrl();
        await searchobject.enterSearchText('Headphones');
        await searchobject.verifytheSearhcResult();

          

    })

    test('TC 8: Verify sold-out product behavior',async({page})=>{

        const headphoneobject = new HeagphonePage(page);

        await headphoneobject.openUrl();
        await headphoneobject.selectHeadPhoneCategory();
        await headphoneobject.verifyHeadPhonePageLabel();
        await headphoneobject.clickSoldOutProduct();
        await headphoneobject.verifyAddtoCartButtonDisable();
        


    })

    test('TC 9: Verify adding 5 quantities of a product to the cart', async({page})=>{

        const popularitemobject = new PopularItemPage(page);

        await popularitemobject.openUrl();
        await popularitemobject.navigatePopularItem();
        await popularitemobject.selectFristProduct();
        await popularitemobject.addQuantity();

    })


    test('TC 10: Verify emptying the shopping cart', async({page})=>{

        const emptycartobject = new EmptyShoppingCartPage(page);

        await emptycartobject.openUrl();
        await emptycartobject.selectHeadPhoneCategory();
        await emptycartobject.verifyHeadPhonePageLabel();
        await emptycartobject.productSelectionForCart();
        await emptycartobject.navigateShopingCartPage();
        await emptycartobject.removeProductFromCart();
        await emptycartobject.verifyAllitemRemoved();
   
       
    })

    


})