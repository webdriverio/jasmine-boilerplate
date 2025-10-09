import Page from './page';
import { Key } from 'webdriverio';

class RetirementCalculatorPage extends Page {
    // Age fields
    get inputCurrentAge() { return $('#current-age'); }
    get inputRetirementAge() { return $('#retirement-age'); }

    // Income/Savings fields
    get inputAnnualIncome() { return $('input[id="current-income"]'); }
    get inputSpouseIncome() { return $('input[id="spouse-income"]'); }
    get inputRetirementSavings() { return $('input[id="current-total-savings"]'); }
    get inputAnnualSavings() { return $('#current-annual-savings'); }
    get inputSavingsIncreaseRate() { return $('#savings-increase-rate'); }

    // Social Security income radio buttons
    get radioIncludeSSYes() { return $('label[for="yes-social-benefits"]'); }
    get radioIncludeSSNo() { return $('label[for="no-social-benefits"]'); }

    // Marital Status radio buttons
    get maritalStatusQuestion() { return $('//*[@id="retirement-form"]/div[3]/div[2]/div'); }
    get radioMarriedYes() { return $('label[for="single"]'); } ////*[@id="marital-status-ul"]/div[1]/label
    get radioMarriedNo() { return $('label[for="married"]'); }

    // Buttons
    get btnCalculate() { return $('button[onclick="calculateResults();"]'); }
    get btnClearForm() { return $("[on-click='clearRetirementForm()']"); }
    get btnAdjustDefaults() { return $('#default-values-modal'); }
    get btnEditInfo() { return $('#edit-info'); }

    // Error message selectors
    get ageErrorMessage() {
        return $('#age-error-message') // Update selector as needed
    }

    get incomeErrorMessage() {
        return $('#income-error-message') // Update selector as needed
    }

    get retirementAgeErrorMessage() {
        return $('#retirement-age-error-message') // Update selector as needed
    }

    // Methods to interact with the page
    async enterAge(current: number | string, retirement: number | string) {
        await this.inputCurrentAge.setValue(current);
        await this.inputRetirementAge.setValue(retirement);
    }

    async enterIncomeAndSavings({
        annualIncome,
        spouseIncome,
        retirementSavings,
        annualSavings,
        savingsIncreaseRate
    }: {
        annualIncome?: number | string;
        spouseIncome?: number | string;
        retirementSavings?: number | string;
        annualSavings?: number | string;
        savingsIncreaseRate?: number | string;
    }) {
        if (annualIncome) await this.inputAnnualIncome.addValue(Key.ArrowRight);
        if (annualIncome) await this.inputAnnualIncome.addValue(annualIncome);
        
        if (spouseIncome) await this.inputSpouseIncome.addValue(Key.ArrowRight);
        if (spouseIncome) await this.inputSpouseIncome.addValue(spouseIncome);
        
        if (retirementSavings) await this.inputRetirementSavings.addValue(Key.ArrowRight);
        if (retirementSavings) await this.inputRetirementSavings.addValue(retirementSavings);
        
        if (annualSavings) await this.inputAnnualSavings.setValue(annualSavings);
        if (savingsIncreaseRate) await this.inputSavingsIncreaseRate.setValue(savingsIncreaseRate);
    }

    async selectSocialSecurity(include: boolean) {
        if (include) {
            await this.radioIncludeSSYes.click();
        } else {
            await this.radioIncludeSSNo.click();
        }
    }

    async calculate() {
        await this.btnCalculate.click();
    }

    async clearForm() {
        await this.btnClearForm.click();
    }

    async adjustDefaults() {
        await this.btnAdjustDefaults.click();
    }

    open() {
        return super.open('retirement-calculator.html');
    }
}

export default new RetirementCalculatorPage();
