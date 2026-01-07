import { expect, browser, $ } from '@wdio/globals'
import 'expect-webdriverio'

describe ('Navegation tests', () => {
    
    // Open URL
    it ('should open home page', async () => {
        await browser.openHome()
        
    })
    
    // Refresh URL
    it ('should refresh the page', async () => {
        await browser.openHome()
        await browser.refresh()

    })

    // Back/Foward URLs
    it ('should navegate back and foward', async () => {
        await browser.openHome()

        await browser.url('/login')
        await expect(browser).toHaveTitle('The Internet')

        await browser.back()
        const homeHeader = await $('h1').getText()
        await expect(homeHeader).toContain('the-internet')

        await browser.forward()
        await $('#username').waitForExist()

    })
})