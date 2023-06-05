function rot31(str) {
  let aaa=str.split("");
  let aa="ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ab= aa.split("");
  let indice;
  for (let i=0;i<aaa.length;i++) {
    indice=ab.indexOf(aaa[i]);
    if (indice !== -1) {
      aaa[i]=ab[indice+13];
    }
  }
  return aaa.join("");
}

console.log(rot31("SERR PBQR PNZC"));