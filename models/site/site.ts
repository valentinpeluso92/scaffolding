import ISite from './site.interface';

class Site implements ISite {
    id: string;
    description: string;
    domain: string;
    staticContentUrl: string;

    constructor(options: ISite) {
        this.id = options.id;
        this.description = options.description;
        this.domain = options.domain;
        this.staticContentUrl = options.staticContentUrl;
    }
}
export default Site;
