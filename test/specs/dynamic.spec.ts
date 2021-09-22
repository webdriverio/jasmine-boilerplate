import DynamicPage from '../pageobjects/dynamic.page'

describe('dynamic loading', function () {
    it('should be an button on the page', async () => {
        await DynamicPage.open()
        await expect(DynamicPage.loadedPage).not.toBePresent()

        await DynamicPage.btnStart.click()
        await DynamicPage.loadedPage.waitForExist()
        await expect(DynamicPage.loadedPage).toBePresent()
    })
})
