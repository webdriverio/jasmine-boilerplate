import { config as sharedConfig } from './wdio.shared.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        region: 'us',
        services: ['sauce'],
        capabilities: [{
            browserName: 'firefox',
            browserVersion: 'latest',
            platformName: 'Windows 10',
            'wdio:maxInstances': 5,
            'sauce:options': {
                build: `Build ${Math.ceil(Date.now() / 1000)}`
            }
        }]
    }
}
