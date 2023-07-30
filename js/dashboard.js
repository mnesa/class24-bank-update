function getInput(inputId) {
  const inputField = document.getElementById(inputId);
  const inputText = inputField.value;
  const inputAmount = parseFloat(inputText);
  // clear the input
  inputField.value = '';
  return inputAmount;
}


function updateTotal(updateId, newInputAmount) {
  const depositTotal = document.getElementById(updateId);
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  depositTotal.innerText = previousDepositAmount + newInputAmount;
}

//Current balance
function getCurrentBalance() {
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalAmount = parseFloat(balanceTotalText);
  return balanceTotalAmount;
}

// Balance Update
function UpdateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');
 const balanceTotalAmount=getCurrentBalance()

  if (isAdd == true) {
    balanceTotal.innerText = balanceTotalAmount + amount;
  } else {
    balanceTotal.innerText = balanceTotalAmount - amount;
  }
  
}





// deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
  const newDepositAmount = getInput('deposit-input');
  if (newDepositAmount > 0) {
    updateTotal('deposit-total', newDepositAmount);
    UpdateBalance(newDepositAmount, true)
  }
  if (newDepositAmount <0 ) {
    alert(`Mines amount is not allow.`)
  }
})

// withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
  const newWithdrawAmount = getInput('withdraw-input');

  const currentBalance = getCurrentBalance();
  if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
    updateTotal('withdraw-total', newWithdrawAmount);
    UpdateBalance(newWithdrawAmount, false)
  }
  if (newWithdrawAmount > currentBalance) {
    alert(`Don't be dishonest.`)
  }
  
})

