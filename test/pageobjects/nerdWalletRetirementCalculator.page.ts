import { ChainablePromiseElement } from 'webdriverio';

class NerdwalletRetirementCalculatorPage {
    // ---------------------------
    // Age fields
    // ---------------------------
    // Current Age input
    get inputCurrentAge(): ChainablePromiseElement {
        return $('//input[@name="currentAge"]');
    }
    // Retirement Age input
    get inputRetirementAge(): ChainablePromiseElement {
        return $('//input[@name="retirementAge"]');
    }

    // ---------------------------
    // Income/Savings fields
    // ---------------------------
    // Annual Income input
    get inputAnnualIncome(): ChainablePromiseElement {
        return $('//input[@name="preTaxIndividualAnnualIncome"]');
    }
    // Spouse Income input
    get inputSpouseIncome(): ChainablePromiseElement {
        return $('//input[@name="spouseIncome"]');
    }
    // Retirement Savings input
    get inputRetirementSavings(): ChainablePromiseElement {
        return $('//input[@name="currentSavingAmount"]');
    }
    // Annual Savings input
    get inputAnnualSavings(): ChainablePromiseElement {
        return $('//input[@name="monthlySavingContributionAmount"]');
    }
    // Savings Increase Rate input
    get inputSavingsIncreaseRate(): ChainablePromiseElement {
        return $('//input[@name="annualIncomeIncreaseRate"]');
    }

    // ---------------------------
    // Social Security income radio buttons
    // ---------------------------
    // Social Security Yes radio
    get radioIncludeSSYes(): ChainablePromiseElement {
        return $('//input[@name="includeSocialSecurity" and @value="yes"]/following-sibling::label');
    }
    // Social Security No radio
    get radioIncludeSSNo(): ChainablePromiseElement {
        return $('//input[@name="includeSocialSecurity" and @value="no"]/following-sibling::label');
    }

    // ---------------------------
    // Marital Status radio buttons
    // ---------------------------
    // Marital Status question container
    get maritalStatusQuestion(): ChainablePromiseElement {
        return $('//div[contains(@class,"marital-status-question")]');
    }
    // Married Yes radio
    get radioMarriedYes(): ChainablePromiseElement {
        return $('//input[@name="maritalStatus" and @value="married"]/following-sibling::label');
    }
    // Married No radio
    get radioMarriedNo(): ChainablePromiseElement {
        return $('//input[@name="maritalStatus" and @value="single"]/following-sibling::label');
    }

    // ---------------------------
    // Buttons
    // ---------------------------
    // Advanced Details button
    get btnAdvancedDetails(): ChainablePromiseElement {
        return $('//button[contains(text(),"Advanced Details")]');
    }
    // Calculate button
    get btnCalculate(): ChainablePromiseElement {
        return $('//button[contains(text(),"Calculate")]');
    }
    // Clear button
    get btnClear(): ChainablePromiseElement {
        return $('//button[contains(text(),"Clear")]');
    }
    // Adjust Defaults button
    get btnAdjustDefaults(): ChainablePromiseElement {
        return $('//button[contains(text(),"Adjust defaults")]');
    }

    // ---------------------------
    // Methods to interact with the page
    // ---------------------------
    async open(): Promise<void> {
        await browser.url('https://www.nerdwallet.com/calculator/retirement-calculator');
    }

    async enterAge(currentAge: number | string, retirementAge: number | string): Promise<void> {
        await this.inputCurrentAge.setValue(currentAge);
        await this.inputRetirementAge.setValue(retirementAge);
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
    }): Promise<void> {
        if (annualIncome !== undefined) await this.inputAnnualIncome.setValue(annualIncome);
        if (spouseIncome !== undefined) await this.inputSpouseIncome.setValue(spouseIncome);
        if (retirementSavings !== undefined) await this.inputRetirementSavings.setValue(retirementSavings);
        if (annualSavings !== undefined) await this.inputAnnualSavings.setValue(annualSavings);
        if (savingsIncreaseRate !== undefined) await this.inputSavingsIncreaseRate.setValue(savingsIncreaseRate);
    }

    async selectSocialSecurity(include: boolean): Promise<void> {
        if (include) {
            await this.radioIncludeSSYes.click();
        } else {
            await this.radioIncludeSSNo.click();
        }
    }

    async selectMaritalStatus(married: boolean): Promise<void> {
        if (married) {
            await this.radioMarriedYes.click();
        } else {
            await this.radioMarriedNo.click();
        }
    }

    async calculate(): Promise<void> {
        await this.btnCalculate.click();
    }

    async clearForm(): Promise<void> {
        await this.btnClear.click();
    }

    async adjustDefaults(): Promise<void> {
        await this.btnAdjustDefaults.click();
    }
}

export default new NerdwalletRetirementCalculatorPage();