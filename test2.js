var response = {
  "paymentList" : [
    {
    "acctNo": "1",
    "srvNo": "001",
    "tranxId": "Writeoff Payment"
    },
    {
    "acctNo": "2",
    "srvNo": "002",
    "tranxId": "(DO NOT USE)IPS - Payment via MIT"
    },
    {
    "acctNo": "5",
    "srvNo": "003",
    "tranxId": "(DO NOT USE)IPS - Payment via CAD"
    }
]}

var resp = response;
var array = [];
array = resp.paymentList.map(
  e => ({
    acctNo: e.acctNo
  })
);
// resp = JSON.stringify(resp);
console.log(array);

console.log(Array.isArray(array));
