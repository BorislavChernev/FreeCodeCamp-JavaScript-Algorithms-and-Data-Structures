function testLogicalAnd(val) {
  
    if (val <= 50 && val >= 25) {
      return "Yes";
    }
  
    return "No";
  }
  
  testLogicalAnd(10);