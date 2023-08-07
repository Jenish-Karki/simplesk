const submitBtn=document.getElementById("submitBtn")
const checkOne=document.getElementById("checkOne")
const checkTwo=document.getElementById("checkTwo")
const checkThree=document.getElementById("checkThree")
const checkFour=document.getElementById("checkFour")
const checkFive=document.getElementById("checkFive")
const checkSix=document.getElementById("checkSix")
const checkSeven=document.getElementById("checkSeven")
const checkEight=document.getElementById("checkEight")
const checkNine=document.getElementById("checkNine")
const checkTen=document.getElementById("checkTen")
const checkEleven=document.getElementById("checkEleven")
const checkTwelve=document.getElementById("checkTwelve")
const checkThirteen=document.getElementById("checkThirteen")
submitBtn.addEventListener('click',()=>{

if(
checkOne.value.length>1 &&
checkTwo.value.length>1 &&
checkThree.value.length>1 &&
checkFour.value.length>1 &&
checkFive.value.length>1 &&
checkSix.value.length>1 &&
checkSeven.value.length>1 &&
checkEight.value.length>1 &&
checkNine.value.length>1 &&
checkTen.value.length>1 &&
checkEleven.value.length>1 &&
checkTwelve.value.length>1 &&
checkThirteen.value.length>1 
) {
    alert("Successfully submitted the form")
}
else{
    alert("Please fill up the form")
}
})
function backTohome(){
    window.location.assign("index.html")
}