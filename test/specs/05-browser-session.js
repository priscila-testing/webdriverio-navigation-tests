describe ('Browser session info', () => {
    it('should show browser session properties', async () => {

        console.log('Browser', browser.capabilities.browserName)   // Prints which browser is being used (e.g. chrome)
        console.log('Session ID', browser.sessionId)   // Prints the current WebDriver session ID

        console.log(browser.isChrome ? 'Running on Chrome' : 'Not Chrome')
        console.log(browser.isMobile ? 'Running on mobile' : 'Running on desktop')

        await browser.url('https://example.com')

        console.log('Old session: ', browser.sessionId)   // Logs the session ID before reloading

        await browser.reloadSession()   // Closes the current session and creates a new one automatically
        console.log('New session: ', browser.sessionId)   // Shows that the session ID changed

        await browser.url('https://example.com')   // Opens the page again using the new session

    })
})