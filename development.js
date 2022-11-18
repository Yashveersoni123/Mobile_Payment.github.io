function loan() {
    var data = document.getElementById("dollar").value;
    if (data != 0) {
        var balance24 = document.getElementById("real").innerHTML;
        var data = document.getElementById("dollar").value;

        var data34 = parseInt(data) + parseInt(balance24);
        localStorage.setItem("money", data34);
        var test = localStorage.getItem("money");
        var data1 = document.getElementById("real");
        data1.innerHTML = test;
        var div = document.createElement("div");
        div.id = 'block';
        div.style.width = "90%";
        div.style.minWidth = "50%";
        div.style.height = "5rem";
        div.style.background = " #83f3a0";
        div.style.display = "flex";
        div.style.borderRadius = "13px";
        div.style.alignItems = "center";
        div.style.justifyContent = "space-around";
        div.style.justifyItem = "center";
        div.style.marginTop = "10px";
        div.style.color = "black";
        div.innerHTML = '<h1 style=" width:18rem; text-align:start; color: #383838; display:flex; align-items:center; margin-left:11px">Loan Successfully Add</h1><h1 style="display:flex; align-items:center;color: #383838; margin-right:12px;">+' + data + '</h1>';
        var box = document.querySelector('.history1');

        box.appendChild(div);
    }
    else {
        console.log(test);
    }



}

var test = localStorage.getItem("money");

var data1 = document.getElementById("real");
var box = document.querySelector('.history1');
data1.innerHTML = test;


function transfer() {
    var trans = document.getElementById("sendmoney").value;
    if (trans != 0) {
        var balance = document.getElementById("real").innerHTML;
        var data123 = document.getElementById("real");
        var third = balance - trans;
        localStorage.setItem("money", third);
        console.log(third);
        var test1 = localStorage.getItem("money");
        data123.innerHTML = test1;
        console.log(test1);
        var div = document.createElement("div");

        div.id = 'block';
        div.style.width = "90%";
        div.style.minWidth = "50%";
        div.style.height = "5rem";
        div.style.background = " #f98989";
        div.style.display = "flex";
        div.style.borderRadius = "13px";
        div.style.alignItems = "center";
        div.style.justifyContent = "space-around";
        div.style.justifyItem = "center";
        div.style.marginTop = "10px";
        div.style.color = "black";
        div.innerHTML = '<h1 style=" width:18rem; text-align:start;color: #383838; display:flex; align-items:center; margin-left:11px"> Successfull</h1><h1 style="display:flex; align-items:center;color: #383838; margin-right:12px">-' + trans + '</h1>';

        var box = document.querySelector('.history1');
        localStorage.setItem('extra', div.outerHTML);
        var extraa = localStorage.getItem('extra');
        box.appendChild(div);
        console.log(extraa);
    }
    else {
        console.log(box);

    }
}
var box = document.querySelector('.history1');
data1.innerHTML = test;
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


