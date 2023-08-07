const openEye=document.getElementById("openEye")
const closeEye=document.getElementById("closeEye")
const inputUsername=document.getElementById("inputUsername")
const inputPassword=document.getElementById("inputPassword")


// >>password feild show-hide functionality start

inputPassword.addEventListener('input',()=>{
if(inputPassword.value.length>0){
    openEye.style.display="block"
}
else{
    openEye.style.display="none"
    closeEye.style.display="none"
}
})

openEye.addEventListener('click',()=>{
closeEye.style.display="block"
inputPassword.type="text"
})

closeEye.addEventListener('click',()=>{
inputPassword.type="password"
closeEye.style.display="none"
})

// >>password feild show-hide functionality END












// form authenticatation functionality START
function redirect(){

    return new Promise((resolve, reject)=>{
    const validUsername="user123";
    const validPassword="pass123"
    
setTimeout(()=>{
    if(inputUsername.value===validUsername && inputPassword.value===validPassword){
       resolve(
        window.location.assign("./index.html") 
       ) 
    }
    else{
        reject(
            alert("Provided Information Is Invalid")
        )
    }



})
    },2000)

}


function accountCreate(){
    window.location.assign("createAccount.html")
}





// form authenticatation functionality END








