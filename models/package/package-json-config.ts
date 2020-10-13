import IPackageJsonConfig from './package-json-config.interface';

class PackageJsonConfig implements IPackageJsonConfig {
    name: string;
    version: string;
    private: boolean;
    description: string;

    constructor(options: IPackageJsonConfig) {
        this.name = options.name;
        this.version = options.version;
        this.private = options.private;
        this.description = options.description;
    }
}

export default PackageJsonConfig;
