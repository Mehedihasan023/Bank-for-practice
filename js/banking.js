
// Handle deposit event 

document.getElementById('deposit-button').addEventListener
('click', function(){
    const depositInput= document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);
    // update deposit value 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDeposittotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDeposittotal;

    // Update Account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText=newBalanceTotal;

    // clear depoasit input field 
    depositInput.value= '';
});

// handle withdraw event 
document.getElementById('Withdraw-button').addEventListener
('click', function(){
    // console.log('clicked');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText= withdrawInput.value;
    const newWithdrawAmount= parseFloat(withdrawAmountText);
    // set withdraw Total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal;
    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;


    // clear withdraw text 
    withdrawInput.value = '';

})