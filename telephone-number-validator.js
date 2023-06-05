function telephoneCheck(str) {
    let str2=str.replace(/[^a-z0-9]/gi,"").replace("1","");
    console.log(str2);
    let str2Int= parseInt(str2);
    console.log(typeof str2Int);
    console.log(str.length);
    console.log(str[9]);
    if ( typeof str2Int === "number" && str2.length === 10) {
      if (str.length === 10) {
        return true;
      } else if (str[3]==="-" && str[7]==="-") {
        return true;
      } else if (str[0]==="(" && str[4]===")" && str[9] !== "?") {
        return true;
      } else if (str[0]==="1" && str[1]!=="1") {
        if (str[1]===" " && str[5]===")") {
          return false;
        }
        return true;
      } 
      
    }
    
    return false;
  } 
  
  
  // console.log(telephoneCheck("555-555-5555"));
  // console.log(telephoneCheck("1 555)555-5555"));
  console.log(telephoneCheck("(555)5(55?)-5555"));