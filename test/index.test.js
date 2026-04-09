const { toSnakeCase, toKebabCase } = require('../src/index')


describe('toSnakeCase', () => {
    test('converts space-separated words', () => {
        expect(toSnakeCase('Hello World')).toBe('hello_world');
    })

    test('throws error on empty string', () => {
        expect(() => toSnakeCase('')).toThrow('Empty string given');
    })
})

describe('toKebabCase', () => {
    test('converts space-separated words', () => {
        expect(toKebabCase('Hello World')).toBe('hello-world')
    })

    test('throws error on empty string', () => {
        expect(() => toKebabCase('')).toThrow('Empty string given');
    })
})
