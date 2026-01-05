import { expect, browser, $ } from '@wdio/globals'
import 'expect-webdriverio'

describe ('Navegation tests', () => {
    
    // Open URL
    it ('should open google.com', async () => {

        await browser.url('https://the-internet.herokuapp.com')
        await expect(browser).toHaveTitle('The Internet')

    })
    
    // Refresh URL
    it ('should refresh the page', async () => {

        await browser.url('https://the-internet.herokuapp.com/')
        await browser.refresh()
        await expect(browser).toHaveTitle('The Internet')
        
    })

    // Back/Foward URLs
    it ('should navegate back and foward', async () => {

        await browser.url('https://the-internet.herokuapp.com/')
        await expect(browser).toHaveTitle('The Internet')

        await browser.url('https://the-internet.herokuapp.com/login')
        await expect(browser).toHaveTitle('The Internet')

        await browser.back()
        const homeHeader = await $('h1').getText()
        await expect(homeHeader).toContain('the-internet')

        await browser.forward()
        await $('#username').waitForExist()

    })
})