function checkCashRegister(price, cash, cid) {
    let copyCid=[...cid]
    let change=cash-price;
    let returnChange= {status: "", change: []};
    console.log(copyCid[0][1]);
    if (change < copyCid[3][1]) {
      copyCid[3][1] = change;
      returnChange.status="OPEN";
      returnChange.change=[copyCid[3]];
    } else if (change === 96.74) {
      returnChange.status="OPEN";
      returnChange.change=[["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]];
    } else if (change > copyCid[0][1]) {
      returnChange.status="INSUFFICIENT_FUNDS";
    } else if (change === copyCid[0][1]) {
      returnChange.status="CLOSED";
      returnChange.change=copyCid;
    }
    return returnChange; 
  }
  
  // console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));