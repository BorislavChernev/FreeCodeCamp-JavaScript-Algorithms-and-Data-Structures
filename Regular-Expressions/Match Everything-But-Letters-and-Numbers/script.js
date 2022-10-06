let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;