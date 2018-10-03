import { ISomeDto, SomeEnum } from './interfaces'

export class UrlGenerator {

    public build(v: SomeEnum): string {
        let a : ISomeDto = {
            index: 0,
            word: 'foo'
        };
        return 'some url';
    }

}