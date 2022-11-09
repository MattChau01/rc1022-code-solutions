/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if ((amount > 0) && (Number.isInteger(amount))) {
    var type = 'deposit';
    var deposit = new Transaction(type, amount);
    this.transactions.push(deposit);
    // console.log(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if ((amount > 0) && (Number.isInteger(amount))) {
    var type = 'withdrawal';
    var withdraw = new Transaction(type, amount);
    this.transactions.push(withdraw);
    // console.log(withdraw);
    return true;
  } else {
    return false;
  }

};

Account.prototype.getBalance = function () {

  var totalDeposit = 0;
  var totalWithdraw = 0;

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalDeposit += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      totalWithdraw += this.transactions[i].amount;
    }
  }

  var finalBalance = totalDeposit - totalWithdraw;
  return finalBalance;
};
