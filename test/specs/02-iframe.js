import { expect, browser, $ } from '@wdio/globals'
import 'expect-webdriverio'

describe ('iFrame tests', () => {
    //* switch to iFrame and switch back from it
    it('should switch to iFrame and back', async () => {

        await browser.url('https://the-internet.herokuapp.com/iframe')
        await expect(browser).toHaveTitle('The Internet')

        await browser.switchFrame($('#mce_0_ifr'))
        await expect($('#tinymce')).toBeExisting()

        await browser.switchToParentFrame()
        const text = await $('h3').getText()
        expect(text).toContain('An iFrame')

    })
})              