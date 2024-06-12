let button =  document.getElementById("button");
let pass  = document.getElementById("password")
let cnfmpass = document.getElementById("confirm-password")

button.addEventListener("click", () =>{
    if(pass.value != cnfmpass.value){
      pass.style.borderColor = "red" 
      cnfmpass.style.borderColor = "red"
      window.alert("The passwords doesn't match!")
    }
    else{
      window.alert("Welcome to odin!")
    }
})