/* eslint-disable no-undef */
import multiply from './multiply';

// eslint-disable-next-line no-undef
describe('multiply tests', () => {
    it('multiply 4 * 3 to equal 12', () => {
        expect(multiply(4, 3)).toBe(12);
    });
    
    // it('multiply 4 * -3 to equal -12', () => {
    //     expect(multiply(4, -3)).toBe(-12);
    // });
})