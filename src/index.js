
/**
 * Converts a string to snake_case.
 * @param {string} str - The input string.
 * @returns {string} The snake_case version of the string.
 */
function toSnakeCase(str) {
    if (!str) {
        throw new Error("Empty string given");
    }

    const tokens = str.split(' ');

    let newString = tokens[0].toLowerCase();

    for (let iterator = 1; iterator < tokens.length; iterator++) {
        newString = newString.concat('_', tokens[iterator].toLowerCase());
    }

    return newString;
}

/**
 * Converts a string into kebab-case
 * @param {string} str - The input string.
 * @returns {string} The kebab-case version of the string.
 */
function toKebabCase(str) {
    if (!str) {
        throw new Error("Empty string given");
    }

    const tokens = str.split(' ');

    let newString = tokens[0].toLowerCase();

    for (let iterator = 1; iterator < tokens.length; iterator++) {
        newString = newString.concat('-', tokens[iterator].toLowerCase());
    }

    return newString;
}

module.exports = { toSnakeCase };