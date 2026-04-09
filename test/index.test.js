const { toSnakeCase } = require('../src/index')


describe('toSnakeCase', () => {
    test('converts space-separated words', () => {
        expect(toSnakeCase('Hello World')).toBe('hello_world');
    })

    test('throws error on empty string', () => {
        expect(() => toSnakeCase('')).toThrow('Empty string given');
    })
})
