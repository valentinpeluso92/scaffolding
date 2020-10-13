import { isEqual } from 'lodash';

import IEnvironmentConfig from './environment-config.interface';

class EnvironmentConfig implements IEnvironmentConfig {
    name: string;
    secured: boolean;

    constructor(options: IEnvironmentConfig) {
        this.name = options.name;
        this.secured = options.secured;
    }

    isDevelopment(): boolean {
        return isEqual(this.name, 'development');
    }
}

export default EnvironmentConfig;
