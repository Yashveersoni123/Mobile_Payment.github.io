function loan() {
    var data = document.getElementById("dollar").value;
    var balance24 = document.getElementById("real").innerHTML;
    var data34 = parseInt(data) + parseInt(balance24);
    console.log(data34);
    localStorage.setItem("money", data34);
    var test = localStorage.getItem("money");
    var data1 = document.getElementById("real");
    data1.innerHTML = test;
    console.log(test);
}
var test = localStorage.getItem("money");
var data1 = document.getElementById("real");
data1.innerHTML = test;
function transfer() {
    var balance = document.getElementById("real").innerHTML;
    var data123 = document.getElementById("real");
    var trans = document.getElementById("sendmoney").value;
    var third = balance - trans;
    localStorage.setItem("money", third);
    console.log(third);
    var test1 = localStorage.getItem("money");
    data123.innerHTML = test1;
    console.log(test1);
}
var data123 = document.getElementById("real");
if (data123.innerHTML < 1) {
    var one = (data123.innerHTML = "0");
    localStorage.setItem("drop", one);
    var two = localStorage.getItem("drop");
    data123.innerHTML = two;
} else {
    var test1 = localStorage.getItem("money");
    data123.innerHTML = test1;
} //////////////////// 