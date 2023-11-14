const a = document.getElementById("resultText").innerText
console.log("Hello", a);

function getValue() {
    var inputValue1 = document.getElementById("number1").value;
    var inputValue2 = document.getElementById("number2").value;
    globalThis.inputValue1 = inputValue1;
    globalThis.inputValue2 = inputValue2;
}

document.getElementById('submit').onclick = function() {
    var selectedValue = document.querySelector('input[name="operation"]:checked').id;
    console.log(selectedValue);
    if (Number(globalThis.inputValue1) == NaN) {
        document.getElementById("notification").innerText = "'So thu nhat' khong phai la so"
    } else if (Number(globalThis.inputValue2) == NaN) {
        document.getElementById("notification").innerText = "'So thu hai' khong phai la so"
    } else if (globalThis.inputValue1 == null) {
        document.getElementById("notification").innerText = "Chua nhap 'so thu nhat'"
    } else if (globalThis.inputValue2 == null) {
        document.getElementById("notification").innerText = "Chua nhap 'so thu hai'"
    } else if (selectedValue == "Cong") {
        document.getElementById("notification").innerText = "Phep cong sap duoc tinh"
        document.getElementById("resultBox").innerHTML = Number(globalThis.inputValue1) + Number(globalThis.inputValue2)
    } else if (selectedValue == "Tru") {
        document.getElementById("notification").innerText = "Phep tru sap duoc tinh"
        document.getElementById("resultBox").innerHTML = Number(globalThis.inputValue1) - Number(globalThis.inputValue2)
    } else if (selectedValue == "Nhan") {
        document.getElementById("notification").innerText = "Phep nhan sap duoc tinh"
        document.getElementById("resultBox").innerHTML = Number(globalThis.inputValue1) * Number(globalThis.inputValue2)
    } else if (selectedValue == "Chia" && Number(globalThis.inputValue2) != 0) {
        document.getElementById("notification").innerText = "Phep chia sap duoc tinh"
        document.getElementById("resultBox").innerHTML = Number(globalThis.inputValue1) / Number(globalThis.inputValue2)
    } else if (selectedValue == "Chia" && Number(globalThis.inputValue2) == 0) {
        document.getElementById("notification").innerText = "Khong the chia 0"
    } else if (selectedValue == null) {
        document.getElementById("notification").innerText = "Chua nhap phep tinh"
    }
   }
   