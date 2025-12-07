import { test, expect } from '@playwright/test';
import {faker} from "@faker-js/faker/locale/ar";
import {LoanPage} from "./pages/loan-page";

let loanPage:LoanPage;

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.APP_URL);
    loanPage = new LoanPage(page);
})

test('verify fields', async ({  }) => {
    await loanPage.checkPageVisibility();

});

test('verify apply for loan button scrolls back to top', async ({  }) => {
   await loanPage.img1.scrollIntoViewIfNeeded()
    await loanPage.img1.click()
    await expect (loanPage.amount).toBeInViewport()
    await loanPage.img2.scrollIntoViewIfNeeded()
    await loanPage.img2.click()
    await expect (loanPage.amount).toBeInViewport()
});

test(' apply for e2e', async ({  }) => {

    await loanPage.applyButton.click()
    await expect(loanPage.continueButton).toBeDisabled();
    await loanPage.usernameInput.fill(faker.internet.email());
    await loanPage.passwordInput.fill(faker.internet.password());
    await loanPage.continueButton.click();
    await loanPage.checkVisibility(loanPage.fullName)
    await loanPage.checkVisibility(loanPage.comLanguage)
    await loanPage.finalContinueButton.click();
    await loanPage.okButton.click();
    await expect(loanPage.amount).toBeInViewport()
});

test('verify validation error for amount field', async ({  }) => {
    await loanPage.amount.fill('0');
    await loanPage.checkVisibility(loanPage.error);
    await loanPage.amount.fill('500');
    await expect (loanPage.error).toBeHidden();

});

