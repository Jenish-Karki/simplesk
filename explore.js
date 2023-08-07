const inputforImage=document.getElementById("inputforImage")
const imgWrapper=document.getElementById("img-wrapper")

const inputForheading=document.getElementById("inputForheading")
const saleHeading=document.getElementById("saleHeading")
const information=document.getElementById("information")
const paragraphTextarea=document.getElementById("paragraph-textarea")
const submitBtn=document.getElementById("submitBtn")
const popupContainer=document.getElementById("popup-container")
const textWrapper=document.getElementById("textWrapper")
const overlay=document.getElementById("overlay")
const closepopUp=document.getElementById("closepopUp")
const successMesssage=document.getElementById("success-messsage")
const zIndex=document.getElementById("zIndex")
inputforImage.addEventListener("change",uploadImage)

function uploadImage(){
  let imglink=URL.createObjectURL(inputforImage.files[0])
  imgWrapper.style.backgroundImage=`url(${imglink})`
}
inputforImage.addEventListener("dragover",(e)=>{
  e.preventDefault();
  })
 inputforImage.addEventListener("drop",(e)=>{
     inputforImage.files=e.dataTransfer.files;
      uploadImage()
  })
  
paragraphTextarea.addEventListener("keyup",e =>{
  let scrollHeight=e.target.scrollHeight;
  paragraphTextarea.style.height=`75px`;
  paragraphTextarea.style.height=`${scrollHeight}px`;
  if(paragraphTextarea.value.length<=0){
      paragraphTextarea.style.height="70px"
       paragraphTextarea.style.transition="0.3s ease-in-out"
        
  }
  })
  

submitBtn.addEventListener('click',(e)=>{
saleHeading.innerText=inputForheading.value
information.innerText=paragraphTextarea.value
saleHeading.style.color="#fff"
information.style.color="#fff"
information.textAlign="justify"
saleHeading.textAlign="justify"
  popupContainer.style.visibility="visible"
  popupContainer.style.opacity="1"
  overlay.classList.add("overlay")
  closepopUp.style.display="block"
  zIndex.style.zIndex="99999999"
})
closepopUp.addEventListener('click',()=>{
  overlay.classList.remove("overlay")
  popupContainer.style.visibility="hidden"
  popupContainer.style.opacity="0"
  closepopUp.style.display="none"
  successMesssage.style.display="block"
  successMesssage.style.textAlign="center"
  successMesssage.style.border="1px dashed #000"
})


