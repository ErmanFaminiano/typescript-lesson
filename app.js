var Inputnum1 = document.querySelector("#input1");
var Inputnum2 = document.querySelector("#input2");
var SubmitButton = document.querySelector("button");
function addnumbers(num1, num2) {
    return num1 + num2;
}
SubmitButton === null || SubmitButton === void 0 ? void 0 : SubmitButton.addEventListener("click", function () {
    console.log("The sum is ".concat(addnumbers(+Inputnum1.value, +Inputnum2.value)));
});
