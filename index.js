const moneyInput = document.querySelector('.input-input')
const five = document.querySelector('.five')
let ten = document.querySelector('.ten')
let fifteen = document.querySelector('.fifteen')
let twentyfive = document.querySelector('.twentyfive')
let fifty = document.querySelector('.fifty')
let personInput = document.querySelector('.in-input')
let display1 = document.querySelector('.cc-cc-1')
const display2 = document.querySelector('.cc-cc-2')
let lastbutton = document.querySelector(".ls")
let smallh = document.querySelector(".cant")
let myInput = document.querySelector(".my-2-input")
let answer1
let answer2

document.querySelector('.ls').style.opacity = "0.3"



lastbutton.addEventListener('click', handleSubmit)


function handleSubmit(event) {
    event.preventDefault();
    moneyInput.value = ""
    personInput.value = ""
    display1.innerHTML ="$0.00"
    display2.innerHTML ="$0.00"
    smallh.innerHTML= ""
    myInput.style.border = "none"
  }

function enableBtn(){
    
    document.querySelector('.ls').style.opacity = "1"
}


five.addEventListener('click', ()=>{
 
    if (personInput.value === "" ){
        smallh.innerHTML ="can't be zero"
        personInput.style.borderColor = "red"
        myInput.style.border = "1.5px solid red"
        display1.innerHTML ="$0.00"
        display2.innerHTML ="$0.00"

    }else{
     answer1 = (moneyInput.value * 0.05) / personInput.value 
     answer2 = (parseFloat((moneyInput.value * 0.05)) + parseFloat(moneyInput.value))  / parseFloat(personInput.value)
  
 

     display1.innerHTML ="$" + answer1.toFixed(2)
    display2.innerHTML ="$" + answer2.toFixed(2)
    }
    enableBtn()
    document.querySelector(".tip-div-2").style.marginTop = "5px";
    document.querySelector(".ls").style.marginTop = "20px";
})
ten.addEventListener('click', ()=>{
   
    if (personInput.value === "" ){
        smallh.innerHTML ="can't be zero"
        personInput.style.borderColor = "red"
        myInput.style.border = "1.5px solid red"
        display1.innerHTML ="$0.00"
        display2.innerHTML ="$0.00"
        console.log("hii")
    }else{
     answer1 = (moneyInput.value * 0.10) / personInput.value 
     answer2 = (parseFloat((moneyInput.value * 0.10)) + parseFloat(moneyInput.value))  / parseFloat(personInput.value)
  

     display1.innerHTML ="$" + answer1.toFixed(2)
    display2.innerHTML ="$" + answer2.toFixed(2)
    }
    enableBtn()
    document.querySelector(".tip-div-2").style.marginTop = "5px";
    document.querySelector(".ls").style.marginTop = "20px";
})
fifteen.addEventListener('click', ()=>{
    enableBtn()
    document.querySelector(".tip-div-2").style.marginTop = "5px";
    document.querySelector(".ls").style.marginTop = "20px";
    
    
    if (personInput.value === "" ){
        smallh.innerHTML ="can't be zero"
        personInput.style.borderColor = "red"
        myInput.style.border = "1.5px solid red"
        display1.innerHTML ="$0.00"
        display2.innerHTML ="$0.00"
    }else{
     answer1 = (moneyInput.value * 0.15) / personInput.value 
     answer2 = (parseFloat((moneyInput.value * 0.15)) + parseFloat(moneyInput.value))  / parseFloat(personInput.value)

     display1.innerHTML ="$" + answer1.toFixed(2)
    display2.innerHTML ="$" + answer2.toFixed(2)
    
}})
twentyfive.addEventListener('click', ()=>{
    enableBtn()
    document.querySelector(".tip-div-2").style.marginTop = "5px";
    document.querySelector(".ls").style.marginTop = "20px";
    if (personInput.value === "" ){
        smallh.innerHTML ="can't be zero"
        personInput.style.borderColor = "red"
        myInput.style.border = "1.5px solid red"
        display1.innerHTML ="$0.00"
        display2.innerHTML ="$0.00"
    }else{
     answer1 = (moneyInput.value * 0.25) / personInput.value 
     answer2 = (parseFloat((moneyInput.value * 0.25)) + parseFloat(moneyInput.value))  / parseFloat(personInput.value)
  
     console.log(answer1)
    console.log(answer2)

     display1.innerHTML ="$" + answer1.toFixed(2)
    display2.innerHTML = "$" + answer2.toFixed(2)
   
    }
})
fifty.addEventListener('click', ()=>{
    enableBtn()

    document.querySelector(".tip-div-2").style.marginTop = "5px";
    document.querySelector(".ls").style.marginTop = "20px";
    if (personInput.value === "" ){
        smallh.innerHTML ="can't be zero"
        personInput.style.borderColor = "red"
        myInput.style.border = "1.5px solid red"
        display1.innerHTML ="$0.00"
        display2.innerHTML ="$0.00"
    }else{
     answer1 = (moneyInput.value * 0.50) / personInput.value 
     answer2 = (parseFloat((moneyInput.value * 0.50)) + parseFloat(moneyInput.value))  / parseFloat(personInput.value)
  
    

     display1.innerHTML ="$" + answer1.toFixed(2)
    display2.innerHTML ="$" + answer2.toFixed(2)
    
    }
})