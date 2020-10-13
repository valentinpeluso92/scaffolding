import IAppConfig from './app-config.interface';

class AppConfig implements IAppConfig {
    basePath: string;
    baseUrl: string;
    clientId: string;

    constructor(options: IAppConfig) {
        this.basePath = options.basePath;
        this.baseUrl = options.baseUrl;
        this.clientId = options.clientId;
    }
}

export default AppConfig;
