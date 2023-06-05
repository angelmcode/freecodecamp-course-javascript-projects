function convertToRoman(num) {
  num=num.toString();
  let a=num.split("");
  let reverse=[];
  let numerosromanos=[];
  for (let i=a.length-1;i>-1;i--) {
    reverse.push(a[i]);
  }

  
    if (parseInt(reverse[0]) <= 3 ) {
      for(let k=0;k<parseInt(reverse[0]);k++) {
        numerosromanos.push("I");
      } 
    } else if (parseInt(reverse[0]) === 4 ) {
        numerosromanos.push("IV"); 
    } else if (parseInt(reverse[0]) === 5 ) {
        numerosromanos.push("V"); 
    } else if (parseInt(reverse[0]) > 5 && parseInt(reverse[0]) < 9 ) {
      numerosromanos[0]="V"
      for(let k=5;k<parseInt(reverse[0]);k++) {
        numerosromanos.push("I");
      } 
    } else if (parseInt(reverse[0]) === 9 ) {
        numerosromanos.push("IX"); 
    } 
    if (parseInt(reverse[1]) <= 3 ) { 
      for(let l=0;l<parseInt(reverse[1]);l++) {
        numerosromanos.unshift("X");
      }
    } else if (parseInt(reverse[1]) === 4 ) {
        numerosromanos.unshift("XL");
    } else if (parseInt(reverse[1]) === 5 ) {
        numerosromanos.unshift("L");
    } else if (parseInt(reverse[1]) > 5 && parseInt(reverse[1]) < 9 ) {

      for(let k=5;k<parseInt(reverse[1]);k++) {
        numerosromanos.unshift("X");
      }
      numerosromanos.unshift("L");

    } else if (parseInt(reverse[1]) === 9 ) {
        numerosromanos.unshift("XC");
    } 
    if (parseInt(reverse[2]) <= 3 ) { 
      for(let m=0;m<parseInt(reverse[2]);m++) {
        numerosromanos.unshift("C");
      }
    } else if (parseInt(reverse[2]) === 4 ) {
        numerosromanos.unshift("CD");
    } else if (parseInt(reverse[2]) === 5 ) {
        numerosromanos.unshift("D");
    } else if (parseInt(reverse[2]) > 5 && parseInt(reverse[2]) < 9 ) {

      for(let n=5;n<parseInt(reverse[2]);n++) {
        numerosromanos.unshift("C");
      }
      numerosromanos.unshift("D");

    } else if (parseInt(reverse[2]) === 9 ) {
        numerosromanos.unshift("CM");
    } 
    if (parseInt(reverse[3]) <= 3 ) { 
      for(let y=0;y<parseInt(reverse[3]);y++) {
        numerosromanos.unshift("M");
      }
    }
  return numerosromanos.join(""); 
} 


console.log(convertToRoman(2023));