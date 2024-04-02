import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
import { CONFIG } from './support/config/env';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();
export const config: CodeceptJS.MainConfig = {
  tests: './tests/*.spec.ts',
  output: './output',
  helpers: {
    REST: {
      defaultHeaders:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      endpoint: `${CONFIG.PETSTORE_URL}${CONFIG.PETSTORE_API_PREFIX_PATH}`,
      prettyPrintJson: true,
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file'
  },
  name: 'codecept-api-pet'
}
