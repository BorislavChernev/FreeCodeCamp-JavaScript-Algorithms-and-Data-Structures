function filteredArray(arr, elem) {
    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
      }
    }
  
    return newArr;
  }
  