import { browser, $ } from '@wdio/globals'
import 'expect-webdriverio'
import { expect } from 'expect-webdriverio'

describe('Basic auth test', () => {
    it('should login with basic auth', async () => {
        
        await browser.url('https://admin:admin@the-internet.herokuapp.com/basic_auth')

        const successMessage = await $('p')

        await successMessage.waitForExist({ timeout: 5000 })
        await successMessage.waitForDisplayed({ timeout: 5000 })

        const isVisible = await successMessage.isDisplayed()
        console.log('Visible message:', isVisible)

        await expect(successMessage).toBeDisplayed()

    })
})