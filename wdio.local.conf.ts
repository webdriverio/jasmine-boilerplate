import { config as sharedConfig } from './wdio.shared.conf'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            // @ts-expect-error fixed in https://github.com/webdriverio/webdriverio/pull/6473
            'wdio:devtoolsOptions': {
                headless: true
            }
        }]
    }
}
