import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openUrl() {
        await this.page.goto('/');
    }

    async waitForElement(selector: string, timeout: number = 5000) {
        await this.page.locator(selector).waitFor({ timeout });
    }
}