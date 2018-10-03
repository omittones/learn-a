import { UrlGenerator } from 'generators'
import { DashService } from './dashboard.service';

export class DashApp {
    private generator: UrlGenerator;
    private service: DashService;

    constructor() {
        this.generator = new UrlGenerator();
        this.service = new DashService();
        this.generator.build(1);
        this.service.sayHello(2);
    }
}