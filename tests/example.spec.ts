import { test, expect } from '@playwright/test';
import {faker} from "@faker-js/faker/locale/ar";
import {PageObject} from "./pages/loan-page";

let pageObject:PageObject;

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.APP_URL);
    pageObject = new PageObject(page);
})

test('verify fields', async ({  }) => {
    await expect(pageObject.amount).toBeVisible();
    await expect(pageObject.amountSlider).toBeVisible();
    await expect(pageObject.period).toBeVisible();
    await expect(pageObject.periodSlider).toBeVisible();
    await expect(pageObject.applyButton).toBeVisible();
});

test('verify apply for loan button scrolls back to top', async ({  }) => {
   await pageObject.img1.scrollIntoViewIfNeeded()
    await pageObject.img1.click()
    await expect (pageObject.amount).toBeInViewport()
    await pageObject.img2.scrollIntoViewIfNeeded()
    await pageObject.img2.click()
    await expect (pageObject.amount).toBeInViewport()
});

test(' apply for e2e', async ({  }) => {

    await pageObject.applyButton.click()
    await expect(pageObject.continueButton).toBeDisabled();
    await pageObject.usernameInput.fill(faker.internet.email());
    await pageObject.passwordInput.fill(faker.internet.password());
    await pageObject.continueButton.click();
    await expect(pageObject.fullName).toBeVisible();
    await expect(pageObject.comLanguage).toBeVisible();
    await pageObject.finalContinueButton.click();
    await pageObject.okButton.click();
    await expect(pageObject.amount).toBeInViewport()
});

test('verify validation error for amount field', async ({  }) => {
   await pageObject.amount.fill('0')
    await expect (pageObject.error).toBeVisible();
   await pageObject.amount.fill('500')
    await expect (pageObject.error).toBeHidden();

});

