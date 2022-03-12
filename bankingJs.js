// get value form input field:
function getInputValue(fieldId){
    const inputField =document.getElementById(fieldId);
    //convart the input text text to value.
    //if we take any paragraph we write inner text
    const valueInText =  inputField.value;
    // conert string to float
    const value = parseFloat(valueInText);
    //reset input field,clean field
    inputField.value='';
    return  value;
}

//Update totall

function updateTotal(fieldId,amount){
    const totalTag =document.getElementById(fieldId);
    //that value is now in the blance,its use like text
    const previousTotalInText =totalTag.innerText;
    //covert text to float
    const previousTotal=parseFloat(previousTotalInText);
    const newTotal = previousTotal+amount;
    //Set new total in input text, that is text so we use inner text.
    totalTag.innerText=newTotal;
    return newTotal;
}


//update balance

function updateBalance(amount, isAdd){
    const balanceTag=document.getElementById('balance-total');
    const balanceInText=balanceTag.innerText;
    const previousBalance=parseFloat(balanceInText);
    let newBalance;
    if(isAdd == true){
        newBalance=previousBalance + amount;
    }
    else{
        newBalance=previousBalance - amount;
    }
    balanceTag.innerText=newBalance;
}

document.getElementById('deposit-button').addEventListener('click',function(){
   const amount= getInputValue('deposit-input');
   updateTotal('deposit-total',amount);
   updateBalance(amount,true);

});

//Handle withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount= getInputValue('withdraw-input');
    updateTotal('withdraw-total',amount);
    updateBalance(amount,false);
 });


