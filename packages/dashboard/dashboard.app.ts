import { UrlGenerator } from '../core/core'

export class DashApp {
    private generator: UrlGenerator;
    constructor() {
        this.generator = new UrlGenerator();
    }
}