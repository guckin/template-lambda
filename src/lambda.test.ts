import {handler} from './lambda';

describe('lambda', () => {
    it('returns nothing', async () => {
        const result = await handler();

        expect(result).toEqual(undefined);
    });
});
