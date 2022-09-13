function quickCheck(arr, elem) {
    return arr.indexOf(elem) < 0 ? false : true;
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));