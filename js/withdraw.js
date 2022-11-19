document.getElementById('withdraw-btn').addEventListener('click', function(){
     const previousWithdraw = getTextElementValueById('withdraw-amount');
     const previousBalance = getTextElementValueById('total-balance');
     const newWithdraw = getInputValueById('withdraw-field');

     const totalWithdraw = previousWithdraw + newWithdraw;
     setValueById('withdraw-amount', totalWithdraw);

     const totalBalance = previousBalance - newWithdraw;
     setValueById('total-balance', totalBalance);
})