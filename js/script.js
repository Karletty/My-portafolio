const loadingPage = document.querySelector(".loading-page");
const menuBtn = document.getElementsByClassName("menu-btn");
const sideBar = document.querySelector(".navigation");
const navItems = document.getElementsByClassName("nav-item");
const submitBtn = document.querySelector(".submit-btn");
const inputs = document.getElementsByClassName("input");
const errorMessage = document.getElementsByClassName("error");

window.addEventListener("load", function () {
    this.setTimeout(() => {
        loadingPage.classList.toggle("loaderhide");
    }, 500);
});
for (let j = 0; j < menuBtn.length; j++) {
    menuBtn[j].addEventListener("click", () => {
        menuBtn[j].classList.toggle("active");
        j === 0 ? menuBtn[1].classList.toggle("hide") : menuBtn[0].classList.toggle("hide")
        sideBar.classList.toggle("active");
    });
}
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", () => {
        for (let k = 0; k < menuBtn.length; k++) {
            menuBtn[k].classList.toggle("active");
            menuBtn[k].classList.remove("hide");
        }
        sideBar.classList.toggle("active");
    });
}
const getValues = () => {
    let inputsValues = [];
    for (let i = 0; i < (inputs.length - 1); i++) {
        inputsValues[i] = inputs[i].value;
    }
    return inputsValues;
}
const validateForm = (values) => {
    for (let j = 0; j < errorMessage.length; j++) {
        if (values[j]) {
            errorMessage[j].innerText = "";
        } else {
            errorMessage[j].innerText = "Debe completar este campo";
        }
    }
}
submitBtn.addEventListener("click", () => {
    let inputsValues = getValues();
    validateForm(inputsValues);
});
for (let l = 0; l < (inputs.length - 1); l++) {
    inputs[l].addEventListener("keyup", () => {
        let inputsValues = getValues();
        validateForm(inputsValues);
    });
}