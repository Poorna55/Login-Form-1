const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signUpBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

signUpBtn.addEventListener("click",() => {
    formContainer.classList.add("active");
})

loginBtn.addEventListener("click",() => {
    formContainer.classList.remove("active");
})

pwShowHide.forEach((icon) => {
    icon.addEventListener("click",() =>{
        let getpwInput = icon.parentElement.querySelector("input");
        if(getpwInput.type === "password"){
            getpwInput.type = "text";
            icon.classList.replace("uil-eye-slash","uil-eye");
        }
        else{
            getpwInput.type = "password";
            icon.classList.replace("uil-eye","uil-eye-slash");
        }
    });
    
});