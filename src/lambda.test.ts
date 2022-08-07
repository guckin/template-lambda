import {handler} from './lambda';

describe('lambda', () => {
    it('returns nothing', () => {
        expect(handler()).toBeFalsy();
    });
});
