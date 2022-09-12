function findLongestWordLength(str) {
    let maxLength = -1;
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        const elementLength = words[i].length;
        if (elementLength > maxLength) {
            maxLength = elementLength;
        }
    }

    return maxLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");