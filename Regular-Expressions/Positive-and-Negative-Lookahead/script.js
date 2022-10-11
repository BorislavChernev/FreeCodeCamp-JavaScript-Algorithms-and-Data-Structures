let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);