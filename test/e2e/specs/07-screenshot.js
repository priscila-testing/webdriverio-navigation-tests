import { expect, browser, $ } from '@wdio/globals'
import 'expect-webdriverio'
import fs from 'fs'
import path from 'path'

const screenshotsDir = path.join(process.cwd(), 'screenshots')

if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir)
}

describe('Screenshot tests', () => {

    it('should take a full page screenshot', async () => {
        await browser.url('/')
        await expect($('h2')).toBeDisplayed()

        await browser.saveScreenshot('./screenshots/fullpage.png')
    })

    it('should take a screenshot of a specific element', async () => {
        await browser.url('/')
        const header = await $('h2')
        await expect(header).toBeDisplayed()

        await header.saveScreenshot('./screenshots/header.png')
    })

})
