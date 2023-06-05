// solucion 1
function palindrome(str) {
  str=str.toString();
  let a=str.replace(/[^a-z0-9]/gi,"").split("");
  
  let reverse=[]
  for (let i=a.length-1;i>-1;i--) {
    reverse.push(a[i]);
  }
  
  a=a.join("").toLowerCase();
  reverse=reverse.join("").toLowerCase();
  console.log(a);
  if (reverse===a) {
    return true
  } 
  return false

  // return reverse;
}

palindrome("not a palindrome");
palindrome("0_0 (: /-\ :) 0-0");