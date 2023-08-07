const Inputnum1 = document.querySelector("#input1");
const Inputnum2 = document.querySelector("#input2");
const SubmitButton = document.querySelector("button");

function addnumbers(num1 : number , num2 : number) {
    return num1 + num2;
}

SubmitButton?.addEventListener("click", ()=> {
    console.log(`The sum is ${addnumbers(+Inputnum1.value, +Inputnum2.value)}`);
     }
     );


     






