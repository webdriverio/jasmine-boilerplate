// test/pageobjects/retirementCalculator.page.test.ts
import { Key } from 'webdriverio'
import RetirementCalculatorPage from '../pageobjects/retirementCalculator.page.js'

describe('Retirement Calculator Page', () => {
    // Runs before each test, opens the calculator page
    beforeEach(async () => {
        await RetirementCalculatorPage.open()
    })

/**
    // Test: Entering age values should update the input fields
    it('should allow entering age values', async () => {
        await RetirementCalculatorPage.enterAge(30, 65)
        await expect(RetirementCalculatorPage.inputCurrentAge).toHaveValue('30')
        await expect(RetirementCalculatorPage.inputRetirementAge).toHaveValue('65')
        // Webpage sets cursor before "$" placeholder, preventing any value to be entered
        await $('input[id="current-income"]').addValue(Key.ArrowRight)
        await $('input[id="current-income"]').addValue(80000)
        await expect($('input[id="current-income"]')).toHaveValue('$80,000')
    })
 
    // Test: Entering income and savings values should update the respective fields
    it('should allow entering income and savings values', async () => {
        await RetirementCalculatorPage.enterAge(40, 65)
        await RetirementCalculatorPage.calculate()
        await RetirementCalculatorPage.enterIncomeAndSavings({
            annualIncome: 50000,
            spouseIncome: 30000,
            retirementSavings: 10000,
            annualSavings: 10,
            savingsIncreaseRate: 2
        })
        await expect(RetirementCalculatorPage.inputCurrentAge).toHaveValue('40')
        await expect(RetirementCalculatorPage.inputRetirementAge).toHaveValue('65')
        await expect(RetirementCalculatorPage.inputAnnualIncome).toHaveValue('$50,000')
        await expect(RetirementCalculatorPage.inputSpouseIncome).toHaveValue('$30,000')
        await expect(RetirementCalculatorPage.inputRetirementSavings).toHaveValue('$10,000')
        await expect(RetirementCalculatorPage.inputAnnualSavings).toHaveValue('10%')
        await expect(RetirementCalculatorPage.inputSavingsIncreaseRate).toHaveValue('2%')
        await RetirementCalculatorPage.calculate()
        await browser.pause(3000) // Pause to observe results
        await expect(RetirementCalculatorPage.resultsContainer).toHaveText(expect.stringContaining('Your username is invalid!'))
    })
*/
    // Test: Selecting Social Security Yes should select the correct radio and show marital status options
    it('should select Social Security Yes option', async () => {
        await RetirementCalculatorPage.selectSocialSecurity(true)
        await RetirementCalculatorPage.radioIncludeSSYes.waitForClickable()
        expect(RetirementCalculatorPage.radioIncludeSSYes).toBe
        // Tooggle Yes, shows the Marital Status options
        await expect(RetirementCalculatorPage.maritalStatusQuestion).toContain('marital status')
        await expect(RetirementCalculatorPage.radioMarriedYes).toBeDisplayed()
        await expect(RetirementCalculatorPage.radioMarriedYes).toBeSelected()
        await expect(RetirementCalculatorPage.radioMarriedNo).not.toBeSelected()
    })

    // Test: Selecting Social Security No should select the correct radio
    it('should select Social Security No option', async () => {
        await RetirementCalculatorPage.selectSocialSecurity(false)
        await expect(RetirementCalculatorPage.radioIncludeSSNo).toBeSelected()
        await expect(RetirementCalculatorPage.radioIncludeSSYes).not.toBeSelected()
    })

    // Test: Filling the form and clicking calculate should trigger calculation
    it('should calculate retirement after filling form', async () => {
        // await RetirementCalculatorPage.enterAge(40, 65)
        // await RetirementCalculatorPage.enterIncomeAndSavings({ annualIncome: 60000 })
        // await RetirementCalculatorPage.selectSocialSecurity(true)
        await RetirementCalculatorPage.calculate()
        // Add assertion for result if available, e.g. await expect(resultElement).toBeDisplayed()

        // Go back (Edit Info)
    })

    // Test: Clearing the form should reset all input fields
    it('should clear the form', async () => {
        await RetirementCalculatorPage.clearForm()
        await RetirementCalculatorPage.enterAge(50, 70)
        await RetirementCalculatorPage.enterIncomeAndSavings({ annualIncome: 70000 })
        await RetirementCalculatorPage.clearForm()
        await expect(RetirementCalculatorPage.inputCurrentAge).toHaveValue('')
        await expect(RetirementCalculatorPage.inputRetirementAge).toHaveValue('')
        await expect(RetirementCalculatorPage.inputAnnualIncome).toHaveValue('')
    })

    // Test: Clicking adjust defaults should trigger the defaults modal/dialog
    it('should click adjust defaults button', async () => {
        await RetirementCalculatorPage.adjustDefaults()
        // Add assertion for adjust defaults modal/dialog if available
    })
   
    // Negative Test: Entering non-numeric age should show error
    it('should show error for non-numeric age input', async () => {
        await RetirementCalculatorPage.inputCurrentAge.setValue(0)
        await RetirementCalculatorPage.inputRetirementAge.setValue(0)
        await RetirementCalculatorPage.calculate()
        await expect(RetirementCalculatorPage.ageErrorMessage).toBeDisplayed()
        await expect(RetirementCalculatorPage.ageErrorMessage).toContain('What is your current age?')
    })

    // Negative Test: Retirement age less than current age should show error
    it('should show error if retirement age is less than current age', async () => {
        await RetirementCalculatorPage.enterAge(65, 30)
        await RetirementCalculatorPage.calculate()
        await expect(RetirementCalculatorPage.retirementAgeErrorMessage).toBeDisplayed()
        await expect(RetirementCalculatorPage.retirementAgeErrorMessage).toContain('Planned retirement age must be greater than current age')
    })
})