function checkObj(obj, checkProp) {

    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    }
      return "Not Found";
  
  }