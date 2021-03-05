let messageDiv = document.getElementById("messageDiv");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let message = "Xin chào!";

button1.addEventListener("click",showMessageAlert);
button2.addEventListener("click",showMessageInner);
button3.addEventListener("click",showMessageWrite);
button4.addEventListener("click",showMessageLog);

function showMessageAlert() {
    alert(message);
}
function showMessageInner() {
    messageDiv.innerHTML=message;
}
function showMessageWrite() {
    document.write(message);
}
function showMessageLog() {
    console.log(message);
}