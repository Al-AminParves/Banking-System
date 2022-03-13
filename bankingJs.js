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
function getInnerTextValue(fieldId){
    const fieldTag=document.getElementById(fieldId);
    const fieldValueInText=fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

//Update totall

function updateTotal(fieldId,amount){
    // const totalTag =document.getElementById(fieldId);
    // //that value is now in the blance,its use like text
    // const previousTotalInText =totalTag.innerText;
    // //covert text to float
    // const previousTotal=parseFloat(previousTotalInText);
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal+amount;
    //Set new total in input text, that is text so we use inner text.
    document.getElementById(fieldId).innerText=newTotal;
    return newTotal;
}


//update balance

function updateBalance(amount, isAdd){
    // const balanceTag=document.getElementById('balance-total');
    // const balanceInText=balanceTag.innerText;
    // const previousBalance=parseFloat(balanceInText);
    const previousBalance=getInnerTextValue('balance-total');
    let newBalance;
    if(isAdd == true){
        newBalance=previousBalance + amount;
    }
    else{
        newBalance=previousBalance - amount;
    }
    document.getElementById('balance-total').innerText=newBalance;
}

document.getElementById('deposit-button').addEventListener('click',function(){
   const amount= getInputValue('deposit-input');
   if(amount>0){
    updateTotal('deposit-total',amount);
    updateBalance(amount,true);
   }
   

});

//Handle withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount= getInputValue('withdraw-input');
    const balance=getInnerTextValue('balance-total');
    if(amount>0 && amount<=balance){
        updateTotal('withdraw-total',amount);
        updateBalance(amount,false);
    }
    
 });


