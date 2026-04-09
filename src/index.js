
export function toSnakeCase(str) {
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

