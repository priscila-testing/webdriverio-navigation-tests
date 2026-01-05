import { expect, browser, $ } from '@wdio/globals'
import 'expect-webdriverio'

describe('Alerts tests', () => {
    
    const inputText = 'Hello world'

    const waitForAlert = async () => {
        await browser.waitUntil(async () => await browser.isAlertOpen(), { timeout: 5000 })
    }

    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
        await expect($('h3')).toBeDisplayed()
        await expect($('h3')).toHaveText('JavaScript Alerts')
    })

    it('handles JS alert', async () => {
        await $('button=Click for JS Alert').click()
        await waitForAlert()
        await expect(await browser.getAlertText()).toBe('I am a JS Alert')
        await browser.acceptAlert()
        await expect($('#result')).toHaveText('You successfully clicked an alert')
    })

    it('handles JS Confirm - OK', async () => {
        await $('button=Click for JS Confirm').click()
        await waitForAlert()
        await expect(await browser.getAlertText()).toBe('I am a JS Confirm')
        await browser.acceptAlert()
        await expect($('#result')).toHaveText('You clicked: Ok')
    })

    it('handles JS Confirm - Cancel', async () => {
        await $('button=Click for JS Confirm').click()
        await waitForAlert()
        await expect(await browser.getAlertText()).toBe('I am a JS Confirm')
        await browser.dismissAlert()
        await expect($('#result')).toHaveText('You clicked: Cancel')
    })

    it('handles JS Prompt - OK', async () => {
        await $('button=Click for JS Prompt').click()
        await waitForAlert()
        await expect(await browser.getAlertText()).toBe('I am a JS prompt')
        await browser.sendAlertText(inputText)
        await browser.acceptAlert()
        await expect($('#result')).toHaveText(`You entered: ${inputText}`)
    })

    it('handles JS Prompt - Cancel', async () => {
        await $('button=Click for JS Prompt').click()
        await waitForAlert()
        await expect(await browser.getAlertText()).toBe('I am a JS prompt')
        await browser.dismissAlert()
        await expect($('#result')).toHaveText('You entered: null')
    })
    
})