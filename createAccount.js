
const openEye=document.getElementById("openEye")
const closeEye=document.getElementById("closeEye")
const InputUsername=document.getElementById("inputUsername")
const InputPassword=document.getElementById("inputPassword")

// >>password feild show-hide functionality start

InputPassword.addEventListener('input',()=>{
    if(InputPassword.value.length>0){
        openEye.style.display="block"
    }
    else{
        openEye.style.display="none"
        closeEye.style.display="none"
    }
    })
    
    openEye.addEventListener('click',()=>{
    closeEye.style.display="block"
    InputPassword.type="text"
    })
    
    closeEye.addEventListener('click',()=>{
    InputPassword.type="password"
    closeEye.style.display="none"
    })
    
//     // >>password feild show-hide functionality END
    
    
function accountCreate(){
const username=[];
const password=[];

if(InputUsername.value==="" || InputPassword.value==="" ){
    alert("Invalid Input")
}
else{
username.push(InputUsername.value)
password.push(InputPassword.value)
alert(`your account has been successfully created ${InputUsername.value}`)
}
}





