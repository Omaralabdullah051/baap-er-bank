//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previusDepositText = depositTotal.innerText;
    const previusDepositAmount = parseFloat(previusDepositText);
    const newDepositTotal = previusDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;
    //clear the deposit input field;
    depositInput.value = '';

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previusBalanceText = balanceTotal.innerText;
    const previusBalanceAmount = parseFloat(previusBalanceText);
    const newBalanceTotal = previusBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

})

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get withdraw input value
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    //update withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    const newWithdrawAmount = withdrawInputAmount + withdrawTotalAmount;
    withdrawTotal.innerText = newWithdrawAmount;

    //clear the withdraw input field
    withdrawInput.value = '';

    //reduce balance for withdraw amount
    const balanceTotal = document.getElementById('balance-total');
    const previusBalanceText = balanceTotal.innerText;
    const previusBalanceAmount = parseFloat(previusBalanceText);
    const newBalanceTotal = previusBalanceAmount - withdrawInputAmount;
    balanceTotal.innerText = newBalanceTotal;

})