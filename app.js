var Inputnum1 = document.querySelector("#input1");
var Inputnum2 = document.querySelector("#input2");
var SubmitButton = document.querySelector("button");
function addNumbers(num1, num2) {
    return num1 + num2;
}
SubmitButton === null || SubmitButton === void 0 ? void 0 : SubmitButton.addEventListener("click", function () {
    console.log('Total $(addNumbers(+Inputnum1.value, +Inputnum2.value))');
});
