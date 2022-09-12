function factorialize(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        const element = i;
        result *= element;
        console.log(num);
    }

    return result;
}
  
  factorialize(5);