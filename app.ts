const Inputnum1 = document.querySelector("#input1");
const Inputnum2 = document.querySelector("#input2");
const SubmitButton = document.querySelector("button");

function addNumbers(num1 : number , num2 : number) {
    return num1 + num2;
}

SubmitButton === null || SubmitButton === void 0 ? void 0 : SubmitButton.addEventListener("click", ()=> {
    console.log('Total $(addNumbers(+Inputnum1.value, +Inputnum2.value))');
     });

