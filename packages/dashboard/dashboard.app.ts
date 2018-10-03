import { UrlGenerator } from 'generators'

export class DashApp {
    private generator: UrlGenerator;
    constructor() {
        this.generator = new UrlGenerator();
        this.generator.build();
    }
}