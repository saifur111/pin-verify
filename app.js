/*----------------------------------------------
        Md Saifur Rahman 
----------------------------------------------*/
const generateButton= 'generate_btn';
const generateInput= 'generete_input';
const calKeyPad = 'cal-keypad';
const setInputId = 'typenumbers';
const compBtnId = 'comp-submit';
const wrongBtnId = 'wrong-notify';
const rightBtnId = 'right-notify';
const tryId = 'try';
const deleteId = 'left-delete';

function getElementbyId(id){
    return document.getElementById(id);
}
function getElementByIdValue(id){
    return getElementbyId(id).value;
}

function getPin(){
    const pin =Math.round(Math.random()*10000);
    const pinString = pin+'';
    if(pinString.length== 4 )return pin;
    else return getPin();
}
getElementbyId(generateButton).addEventListener('click',function(){
    const pin =getPin();
    getElementbyId(generateInput).value= pin;
})
getElementbyId(calKeyPad).addEventListener('click',function(event){
    const numberKey = event.target.innerText;
    const  calInput = getElementbyId(setInputId);
    if(isNaN(numberKey)){
        if(numberKey== 'C') calInput.value = '';
        if(numberKey== '<')calInput.value = calInput.value.slice(0, -1);
    }
    else{
        const preNumber = calInput.value;
        const newNumber = preNumber + numberKey;
        calInput.value = newNumber;
    }
})
var count = 3;
getElementbyId(compBtnId).addEventListener('click',function(){
    const pin = getElementbyId(generateInput).value;
    const typePin = getElementbyId(setInputId).value; 
    if(getElementbyId(setInputId).value != '' && getElementbyId(generateInput).value != '' && pin == typePin){
        getElementbyId(rightBtnId).style.display= 'block';
        getElementbyId(wrongBtnId).style.display= 'none';
        getElementbyId(tryId).innerText ='welcome!';
        getElementbyId(setInputId).value ='';
        etElementbyId(generateInput).value='';
    }  
    else if(getElementbyId(setInputId).value != '' && getElementbyId(generateInput).value != '' &&pin != typePin){
        count--
        getElementbyId(wrongBtnId).style.display= 'block';
        getElementbyId(rightBtnId).style.display= 'none';
        getElementbyId(tryId).innerText =count +' try left';
            if(count==0){
                getElementbyId(setInputId).value ='';
                getElementbyId(generateInput).value='';
                count=3;
                getElementbyId(tryId).innerText ='Opps! Please Try Again';
        }
    }
    else getElementbyId(tryId).innerText ='Please fill up input!';  
})