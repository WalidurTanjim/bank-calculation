document.getElementById('deposit-btn').addEventListener('click', function(){
     const previousDeposit = getTextElementValueById('deposit-amount');
     const previousBalance = getTextElementValueById('total-balance');
     const newDeposit = getInputValueById('deposit-field');

     const totalDeposit = previousDeposit + newDeposit;
     setValueById('deposit-amount', totalDeposit);

     const totalBalance = previousBalance + newDeposit;
     setValueById('total-balance', totalBalance);
})