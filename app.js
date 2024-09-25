let popup = document.getElementById('popup');

function openPopup(){
 popup.classList.add("open-popup");
 console.log("success");
}
function closePopup(){
 popup.classList.remove("open-popup");
}
// function openPopup(){
//  popup.classList.add("open-popup");
// }
// function closePopup(){
//  popup.classList.remove("open-popup");
// }
// function openPopup(){
//  popup.classList.add("open-popup");
// }
// function closePopup(){
//  popup.classList.remove("open-popup");
// }
// function openPopup(){
//  popup.classList.add("open-popup");
// }
// function closePopup(){
//  popup.classList.remove("open-popup");
// }
// function openPopup(){
//  popup.classList.add("open-popup");
// }
// function closePopup(){
//  popup.classList.remove("open-popup");
// }
// function openPopup(){
//  popup.classList.add("open-popup");
// }
// function closePopup(){
//  popup.classList.remove("open-popup");
// }


const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
// const location = document.querySelector("#location");
const budget = document.querySelector("#budget");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm(){

  clearMessage();
  let errorFlag = false;

  if(nameInput.value.length < 1){
    errorNodes[0].innerText = "Name cannot be Blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if(!emailIsValid(email.value)){
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if(message.value.lenght < 1){
    errorNodes[2].innerText = "Please enter message";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if(!errorFlag){
    success.innerText = "Success!";
  }
}

function clearMessage(){
  for(let i = 0; i < errorNodes.length; i++){
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email){
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}