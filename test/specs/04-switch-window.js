import { expect, browser, $ } from '@wdio/globals'

describe ('Window test', () => {

    it ('should open a new window and switch windows', async () => {
        
        // open url
        await browser.url('https://the-internet.herokuapp.com/windows')
        await expect(browser).toHaveTitle('The Internet')

        // get windows handle
        const originalWindow = await browser.getWindowHandle()

        // create new window
        await browser.newWindow('https://the-internet.herokuapp.com/windows/new')
        await expect(browser).toHaveTitle('New Window')

        // validate that there are now two windows
        const allWindows = await browser.getWindowHandles()
        expect(allWindows.length).toBe(2)

        // switch back via url match
        await browser.switchWindow('the-internet.herokuapp.com/windows')

        // switch back via title
        await browser.switchWindow('New Window')

        // switch back via window handle
        await browser.switchWindow(originalWindow)

        // close active window
        await browser.closeWindow()

    })
})