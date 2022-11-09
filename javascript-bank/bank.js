/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if ((balance > 0) && (Number.isInteger(balance))) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    // console.log(newAccount);
    newAccount.deposit(balance);
    // console.log(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var accountNum = new Account(number);
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === accountNum.number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var sum = 0;
  for (var j = 0; j < this.accounts.length; j++) {
    sum += this.accounts[j].getBalance();
  }
  return sum;

};
