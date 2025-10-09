// import FormPage from '../pageobjects/form.page.js'

// describe('auth form', () => {
//     it('should deny access with wrong creds', async () => {
//         await FormPage.open()
//         await FormPage.username.setValue('foo')
//         await FormPage.password.setValue('bar')
//         await FormPage.submit()

//         await FormPage.flash.waitForDisplayed()
//         await expect(FormPage.flash).toHaveText(
//             expect.stringContaining('Your username is invalid!')
//         )
//     })

//     it('should allow access with correct creds', async () => {
//         await FormPage.open()
//         await FormPage.username.setValue('tomsmith')
//         await FormPage.password.setValue('SuperSecretPassword!')
//         await FormPage.submit()

//         await FormPage.flash.waitForDisplayed()
//         await expect(FormPage.flash).toHaveText(
//             expect.stringContaining('You logged into a secure area!')
//         )
//     })
// })
