// import NerdwalletRetirementCalculatorPage from '../pageobjects/nerdWalletRetirementCalculator.page.js';

// describe('NerdWallet Retirement Calculator Page', () => {
//     beforeEach(async () => {
//         await NerdwalletRetirementCalculatorPage.open();
//     });
// /** 
//     // Positive Test: Valid age input
//     it('should accept valid age values', async () => {
//         await NerdwalletRetirementCalculatorPage.enterAge(30, 65);
//         await expect(NerdwalletRetirementCalculatorPage.inputCurrentAge).toHaveValue('30');
//         await expect(NerdwalletRetirementCalculatorPage.inputRetirementAge).toHaveValue('065');
//     });

//     // Negative Test: Invalid age input (non-numeric)
//     it('should not accept non-numeric age values', async () => {
//         await NerdwalletRetirementCalculatorPage.inputCurrentAge.setValue('abc');
//         await NerdwalletRetirementCalculatorPage.inputRetirementAge.setValue('xyz');
//         await NerdwalletRetirementCalculatorPage.calculate();
//         // Expect some validation error or field to not update
//         await expect(NerdwalletRetirementCalculatorPage.inputCurrentAge).not.toHaveValue('abc');
//         await expect(NerdwalletRetirementCalculatorPage.inputRetirementAge).not.toHaveValue('xyz');
//     });
// */
//     // Positive Test: Valid income and savings
//     it('should accept valid income and savings values', async () => {
//         await NerdwalletRetirementCalculatorPage.enterIncomeAndSavings({
//             annualIncome: 50000,
//             spouseIncome: 30000,
//             retirementSavings: 10000,
//             annualSavings: 5000,
//             savingsIncreaseRate: 2
//         });
//         await expect(NerdwalletRetirementCalculatorPage.inputAnnualIncome).toHaveValue('$50,000');
//         await expect(NerdwalletRetirementCalculatorPage.inputSpouseIncome).toHaveValue('$30,000');
//         await expect(NerdwalletRetirementCalculatorPage.inputRetirementSavings).toHaveValue('$10,000');
//         await expect(NerdwalletRetirementCalculatorPage.inputAnnualSavings).toHaveValue('$5,000');
//         await expect(NerdwalletRetirementCalculatorPage.inputSavingsIncreaseRate).toHaveValue('2%');
//     });
// /**
//     // Negative Test: Negative income value
//     it('should not accept negative income values', async () => {
//         await NerdwalletRetirementCalculatorPage.inputAnnualIncome.setValue('-10000');
//         await NerdwalletRetirementCalculatorPage.calculate();
//         // Expect some validation error or field to not update
//         await expect(NerdwalletRetirementCalculatorPage.inputAnnualIncome).not.toHaveValue('-10000');
//     });

//     // Positive Test: Social Security selection
//     it('should select Social Security Yes and No options', async () => {
//         await NerdwalletRetirementCalculatorPage.selectSocialSecurity(true);
//         await expect(NerdwalletRetirementCalculatorPage.radioIncludeSSYes).toBeSelected();
//         await NerdwalletRetirementCalculatorPage.selectSocialSecurity(false);
//         await expect(NerdwalletRetirementCalculatorPage.radioIncludeSSNo).toBeSelected();
//     });

//     // Negative Test: Try to calculate with missing required fields
//     it('should not calculate with missing required fields', async () => {
//         await NerdwalletRetirementCalculatorPage.clearForm();
//         await NerdwalletRetirementCalculatorPage.calculate();
//         // Expect some validation error or result not displayed
//         // Example: await expect(resultElement).not.toBeDisplayed();
//     });

//     // Positive Test: Adjust defaults button
//     it('should open adjust defaults modal/dialog', async () => {
//         await NerdwalletRetirementCalculatorPage.adjustDefaults();
//         // Add assertion for modal/dialog if available
//     });
//     */
// });