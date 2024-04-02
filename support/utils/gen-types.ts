import { CONFIG } from '../config/env';
import { execSync } from 'node:child_process'

execSync(
    `npx openapi-typescript ${CONFIG.PETSTORE_SWAGGER_URL} --output ./.temp/types.ts`,
    { stdio: "inherit" },
);
