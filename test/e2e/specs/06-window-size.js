import { expect, browser, $ } from '@wdio/globals'

describe('Window size manipulation', () => {

    beforeEach(async () => {
        await browser.openHome()
        await expect($('h1')).toBeDisplayed()
    })

    it('should get and set window size', async () => {
    
        await browser.setWindowSize(800, 600)
        const size = await browser.getWindowSize()
        expect(size.width).toBeGreaterThanOrEqual(798)
        expect(size.width).toBeLessThanOrEqual(803)
        expect(size.height).toBeGreaterThanOrEqual(598)
        expect(size.height).toBeLessThanOrEqual(603)
        
    })

    it('should maximize the browser window', async () => {

        const size = await browser.maximizeWindow()
        expect(size.width).toBeGreaterThan(800)
        expect(size.height).toBeGreaterThan(600)

    })

})