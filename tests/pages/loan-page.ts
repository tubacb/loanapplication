import {Locator, Page} from "@playwright/test";

export class PageObject {
    readonly page: Page
    readonly amount: Locator
    readonly amountSlider: Locator
    readonly period: Locator
    readonly periodSlider: Locator
    readonly applyButton: Locator
    readonly img1: Locator
    readonly img2: Locator
    readonly continueButton: Locator
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly fullName: Locator
    readonly comLanguage: Locator
    readonly finalContinueButton: Locator
    readonly okButton: Locator
    readonly error:Locator ;

    constructor(page:Page) {
        this.amount = page.getByTestId('id-small-loan-calculator-field-amount');
        this.amountSlider = page.getByTestId('id-small-loan-calculator-field-amount-slider')
        this.period = page.getByTestId('ib-small-loan-calculator-field-period')
        this.periodSlider = page.getByTestId('ib-small-loan-calculator-field-period-slider')
        this.applyButton = page.getByTestId('id-small-loan-calculator-field-apply')
        this.img1 = page.getByTestId('id-image-element-button-image-1');
        this.img2 = page.getByTestId('id-image-element-button-image-2');
        this.continueButton = page.getByTestId('login-popup-continue-button');
        this.usernameInput = page.getByTestId('login-popup-username-input');
        this.passwordInput = page.getByTestId('login-popup-password-input');
        this.fullName = page.getByTestId('final-page-full-name');
        this.comLanguage = page.getByTestId('final-page-communication-language');
        this.finalContinueButton = page.getByTestId('final-page-continue-button');
        this.okButton = page.getByTestId('final-page-success-ok-button');
        this.error = page.getByTestId('id-small-loan-calculator-field-error');

    }

}

