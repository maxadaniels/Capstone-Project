// assertIsDefined.test.ts
import { assertIsDefined } from './assertIsDefined';

describe('assertIsDefined', () => {
    it('should not throw an error if the value is defined', () => {
        expect(() => assertIsDefined(42)).not.toThrow();
        expect(() => assertIsDefined('Hello')).not.toThrow();
        expect(() => assertIsDefined({ prop: 'value' })).not.toThrow();
    });

    it('should throw an error if the value is undefined', () => {
        expect(() => assertIsDefined(undefined)).toThrowError("Expected 'val' to be defined, but received undefined");
        expect(() => assertIsDefined(null)).toThrowError("Expected 'val' to be defined, but received null");
    });
});