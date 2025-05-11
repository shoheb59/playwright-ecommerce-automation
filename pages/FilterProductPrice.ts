import {expect} from '@playwright/test';
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class FilterProductPricePage extends BasePage{

    constructor(page)
    {
        super(page)
    }

    weblocators = {
       
        btnMiceCategory: '[aria-label="MiceCategoryTxt"]',
        btnPrice: '[translate="PRICE"]',
        sliderPrice: '[id="slider"]',
        minPriceRangeLabel: '.sliderSteps.left',
       
    }


    
    async clickMiceCategory()
    {
        await this.page.click(this.weblocators.btnMiceCategory);
    }
    async clickPrice()
    {
        await this.page.click(this.weblocators.btnPrice);
    }

    async sliderPrice(price: number) {

    const slider = await this.page.locator(this.weblocators.sliderPrice);
    const boundingBox = await slider.boundingBox();

    if (!boundingBox) {
        throw new Error("Slider bounding box not found");
    }

    const minPrice = 9;
    const maxPrice = 80;

    const sliderWidth = boundingBox.width;
    const priceRatio = (price - minPrice) / (maxPrice - minPrice);
    const xOffset = priceRatio * sliderWidth;

    await slider.click({ position: { x: xOffset, y: boundingBox.height / 2 } });
}

async verifytheMinPriceisSelected()
{
    const minPriceLabel = await this.page.locator(this.weblocators.minPriceRangeLabel).textContent();
    expect(minPriceLabel).toContain('$20')
}

    
       
    


}