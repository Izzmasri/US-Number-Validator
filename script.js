const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const regex = /^1?\s?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/;

const checkInput = () => {
    if (input.value === "") {
        alert("Please provide a phone number");
        return;
    }

    const isValid = (phoneNum) => regex.test(phoneNum);

    if(isValid(input.value)){
        result.innerHTML += `<div>Valid US number: ${input.value}</div>`;
    }else{
        result.innerHTML +=`<div>Invalid US number: ${input.value}</div>`;
    }
};


clearBtn.addEventListener("click",()=>{
    input.value = "";
    result.innerHTML = "";
});

checkBtn.addEventListener("click", checkInput);