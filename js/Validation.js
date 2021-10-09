export class Validation {
  constructor() {
    this.inputName = document.getElementById("inputName");
    this.inputEmail = document.getElementById("inputEmail");
    this.inputPhone = document.getElementById("inputPhone");
    this.inputAge = document.getElementById("inputAge");
    this.inputPass = document.getElementById("inputPass");
    this.inputRepass = document.getElementById("inputRepass");
    this.supmitBtn = document.getElementById("supmitBtn");
    this.validParag = document.getElementById("validParag");
    this.regexForName = /^([A-Za-z]{5,10})(\s?[A-Za-z]{5,10})?$/;
    this.regexForEmail = /[a-z0-9]{5,10}@[a-z]{3,8}(\.com)$/;  
    this.regexForPhone = /^(00201|01)[0125][0-9]{8}$/;
    this.regexForAge = /^([1-9][0-9]|100)$/;
    this.regexForPass = /.{5,10}/;
    this.ifCondition();
    this.evevtClick();
    this.eventFocus();
  }
  ifCondition(){
    if(localStorage.getItem("userinfo")==null) {
      this.supmitList =[];
    }
    else {
      this.supmitList = JSON.parse(localStorage.getItem("userinfo"));
    }
  }
  supmit() {
    this.inputValue = {
      nameValue: this.inputName.value ,
      emailValue: this.inputEmail.value ,
      phoneValue: this.inputPhone.value ,
      ageValue: this.inputAge.value ,
      passValue: this.inputPass.value ,
      repassValue: this.inputRepass.value 
    }
    
    if(this.inputName.value == "" || this.inputEmail.value == "" || this.inputPhone.value == "" || this.inputAge.value == "" || this.inputPass.value == "" || this.inputRepass.value == "") {
      this.validParag.innerHTML = "All inputs is required";
    }
    else if(this.regexForName.test(this.inputName.value) == false) {
      this.validParag.innerHTML = "Please Enter from 5 to 10 character in Your Name";
    }
    else if(this.regexForEmail.test(this.inputEmail.value ) == false) {
      this.validParag.innerHTML = "Please Enter a valid email";
    }
    else if(this.regexForPhone.test(this.inputPhone.value) == false) {
      this.validParag.innerHTML = "Please Enter True Phone Number";
    }
    else if(this.regexForAge.test(this.inputAge.value ) == false) {
      this.validParag.innerHTML = "Sorry Your Age is not suitable";
    }
    else if(this.regexForPass.test(this.inputPass.value ) == false) {
      this.validParag.innerHTML = "Please Enter from 5 to 10 any character in Your Password";
    }
    else if(this.inputRepass.value !== this.inputPass.value) {
      this.validParag.innerHTML = "Please enter the password that you entered previously";
    }
    else if(this.alreadyExists) {
      this.alreadyExists();
    }
    else {
      this.validParag.innerHTML = "Success";
      this.validParag.classList.replace("text-danger","text-success");
      this.clearInpute();
      this.supmitList.push(this.inputValue);
  
      let strListOne = JSON.stringify(this.supmitList);
    
      localStorage.setItem( "userinfo" , strListOne);
    }
    console.log(this.supmitList);
    console.log(this.supmitList.length);
  }
  alreadyExists() {
    for(let i = 0 ; i < this.supmitList.length ; i++) {
      if(this.supmitList[i].emailValue == this.inputEmail.value) {
        this.validParag.innerHTML = "Sorry email already exists";
      }
    }
  }
  evevtClick() {
    this.supmitBtn.addEventListener("click" ,this.alreadyExists.bind(this));
    this.supmitBtn.addEventListener("click" ,this.supmit.bind(this));
  }
  clearInpute() {
    this.inputName.value = "";
    this.inputEmail.value = "";
    this.inputPhone.value = "";
    this.inputAge.value = "";
    this.inputPass.value = "";
    this.inputRepass.value = "";
  }
  notAllowed() {
    this.supmitList.pop();
    let strListTwo = JSON.stringify(this.supmitList);
    localStorage.setItem( "userinfo" , strListTwo);
  }
  newSupmit() {
    this.validParag.innerHTML = "";
    this.validParag.classList.replace("text-success","text-danger");
  }
  eventFocus() {
    this.inputName.addEventListener("focus" , this.newSupmit.bind(this));
    this.inputEmail.addEventListener("focus" , this.newSupmit.bind(this));
    this.inputPhone.addEventListener("focus" , this.newSupmit.bind(this));
    this.inputAge.addEventListener("focus" , this.newSupmit.bind(this));
    this.inputPass.addEventListener("focus" , this.newSupmit.bind(this));
    this.inputRepass.addEventListener("focus" , this.newSupmit.bind(this));
  }
}