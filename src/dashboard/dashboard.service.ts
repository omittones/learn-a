import * as Interfaces from 'interfaces'

export class DashService {
    constructor() {
    }
    public sayHello(v: Interfaces.SomeEnum) : string {
        let dto : Interfaces.ISomeDto = {
            index: 1,
            word: 'mum'
        };
        return 'hello ' + dto.word;
    }
}