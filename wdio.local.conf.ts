import { config as sharedConfig } from './wdio.shared.conf'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            'wdio:devtoolsOptions': {
                headless: true
            }
        }]
    }
}
