const ShowLinksBtn=document.getElementById("show-Links")
const HideLinksBtn=document.getElementById("hide-Links")
const showORHide=document.getElementById("show-hide-hrefs")
const ShowHideLinks=document.getElementById("ShowHideLinks")
const userProfile=document.getElementById("user-profile")
const ahrefs=document.querySelectorAll(".ahref")


ShowLinksBtn.addEventListener('click',()=>{
ShowHideLinks.classList.remove("hrefs-container-wrapper")
ShowHideLinks.classList.add("hrefs-container-wrapper-show")
HideLinksBtn.style.display="block"
ShowLinksBtn.style.display="none" 
for (let i = 0; i < ahrefs.length; i++) {
    ahrefs[i].style.marginTop="1rem";
  }
})
HideLinksBtn.addEventListener('click',()=>{
    ShowHideLinks.classList.remove("hrefs-container-wrapper-show")
    ShowHideLinks.classList.add("hrefs-container-wrapper")
    ShowLinksBtn.style.display="block"
    HideLinksBtn.style.display="none"
})




function backToLoginPage(){
window.location.assign("./form.html")
  }
  
const settingsBtn=document.getElementById("settingsBtn")
const closeUserProfileBtn=document.getElementById("closeUserProfileBtn")
const userCredentials=document.getElementById("userCredentials")
const overlay=document.getElementById("overlay")
const userprofileEdit=document.getElementById("userprofileEdit")
const changeSave=document.getElementById("changeSave")
const editEmail=document.getElementById("editEmail")
const editPhone=document.getElementById("editPhone")
const inputForMail=document.getElementById("inputForMail")
const inputForPhone=document.getElementById("inputForPhone")
const imageWrapper=document.getElementById("imageWrapper")
const uploadWrapper=document.getElementById("uploadWrapper")
const dropImage=document.getElementById("dropImage")
const staticImage=document.getElementById("staticImage")



  
dropImage.addEventListener("change",uploadImage)

function uploadImage(){
  let imglink=URL.createObjectURL(dropImage.files[0])
  staticImage.style.backgroundImage=`url(${imglink})`
 staticImage.src =`url(${imglink})`;
 staticImage.classList.remove("userImage")
 staticImage.classList.add("showuserImage")
}

dropImage.addEventListener("dragover",(e)=>{
e.preventDefault();
})
dropImage.addEventListener("drop",(e)=>{
    dropImage.files=e.dataTransfer.files;
    uploadImage()
})



function save(){

  const validEmail="eg@gmail.com"
  const validphoneNumber=977+9885
  if(inputForMail.value.length>1 || inputForPhone.value.length>1){
    editEmail.innerText=inputForMail.value;
    editPhone.innerText=inputForPhone.value;
    alert("Succesfully updated your profile")
}
if(inputForMail.value=="" && inputForPhone.value==""){
  alert("Nothing to save")
}
if(inputForMail.value==""){
  editEmail.innerText=validEmail
}
if(inputForPhone.value==""){
  editPhone.innerText=validphoneNumber
}
}







const editProfileBtn=document.getElementById("editProfileBtn")


function editprofilePage(){
 userprofileEdit.classList.add("user-profile-edit-show")
 userCredentials.classList.remove("user-credentials-show")
 closeUserProfileBtn.style.visibility="hidden"
}

  settingsBtn.addEventListener('click',()=>{
    userCredentials.classList.add("user-credentials-show")
      settingsBtn.style.display="none"
      closeUserProfileBtn.style.display="block"
      closeUserProfileBtn.style.zIndex="99999"
      closeUserProfileBtn.style.color="#fff"
      overlay.classList.add("overlay")
  })
  closeUserProfileBtn.addEventListener('click',()=>{
  userCredentials.classList.remove("user-credentials-show")
  settingsBtn.style.display="block"
  closeUserProfileBtn.style.display="none"
  overlay.classList.remove("overlay")
  })

const backBtn=document.getElementById("backBtn")
backBtn.addEventListener('click',()=>{
   userprofileEdit.classList.remove("user-profile-edit-show")
 userCredentials.classList.add("user-credentials-show")
 closeUserProfileBtn.style.visibility="visible"
 if(inputForMail.value.length>1 || inputForPhone.value.length>1){
  inputForMail.value=""
  inputForPhone.value=""
 }
})

const buttonForlocation=document.getElementById("buttonForlocation")
const editlocation=document.getElementById("editlocation")






// updating location of user did this with the help of youtube



buttonForlocation.addEventListener('click',()=>{
  const success=(position)=>{
  console.log(position)
  const latitude=position.coords.latitude;
  const longitude=position.coords.longitude;
  const geoApiUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
  fetch(geoApiUrl).then(res=>res.json())
  .then(data=>{
  editlocation.textContent=data.city
  })
  }
  const error=()=>{
    alert("Enable Location")
  }
navigator.geolocation.getCurrentPosition(success,error);
})













const buttons=document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button=>{
  button.addEventListener('click',()=>{
    const offset=button.dataset.carouselButton==="next"? 1:-1
    const  slides=button.closest("[data-carousel]").querySelector("[data-slides]")

const activeSlide=slides.querySelector("[data-active]")
var newIndex=[...slides.children].indexOf(activeSlide)+offset

if(newIndex<0) newIndex=slides.children.length - 1
if(newIndex>=slides.children.length) newIndex = 0

slides.children[newIndex].dataset.active=true
delete activeSlide.dataset.active
  })
})

const scrollTop=document.getElementById("goTop")
scrollTop.addEventListener('click',()=>{
    window.scrollTo({
      top:0,
      left:0,
      behaviour:"smooth"
     })

})

const showData=document.getElementById("showData")
showData.addEventListener('click',()=>{
  window.location.assign("explore.html")
})

const orderBtn=document.getElementById("orderBtn")
orderBtn.addEventListener('click',()=>{
window.location.assign("orderForm.html")
})


