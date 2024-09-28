 var inputform=document.getElementById("input-form");
 var formsubmit=document.getElementById("formsubmit");
 var newsletter_content=document.querySelector(".newsletter_content");
 var signupformend=document.querySelector(".sign-up-form-end");
 var subscribe=document.getElementById("subscribe");
 var message=document.getElementById("message");
 var dismiss=document.getElementById("dismiss");
 formsubmit.addEventListener("submit",(e)=>{
    validmessage();
    e.preventDefault();
 })
 function validmessage(){
    if(inputform.value.indexOf("@gamil") !=-1){
        newsletter_content.classList.add("active");
        signupformend.classList.add("active");
        inputform.value=" ";
        inputform.setAttribute("placeholder","email@company.com")
    }else{
        message.innerHTML="valid email required ";
        inputform.style.borderColor="hsl(4, 100%, 67%)";
        inputform.value=" ";
        inputform.setAttribute("placeholder","sh#loremcompany.com")
    }
 }
 dismiss.addEventListener("click",()=>{
    signupformend.classList.remove("active");
    newsletter_content.classList.remove("active");
 })
 
 