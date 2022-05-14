let elem=document.getElementById(sessionStorage.getItem("Element"));
let pluselem = document.getElementById(sessionStorage.getItem("Plus"));
if (elem!=null){
    elem.className="opened";
    pluselem.className="hidden";
}
var plus1 = document.getElementById("plus1");
let plus2 = document.getElementById("plus2");
let plus3 = document.getElementById("plus3");
let plus4 = document.getElementById("plus4");
plus1.onclick=function(){Open("hidden1", "plus1");}

plus2.onclick=function(){Open("hidden2", "plus2");}
plus3.onclick=function(){Open("hidden3", "plus3");}
plus4.onclick=function(){Open("hidden4", "plus4");}
function Open(n, plus) {
    if (elem!=null){
        elem.className="hidden";
        pluselem.className="plus"
    }
    pluselem=document.getElementById(plus);
    elem=document.getElementById(n);
    elem.className="opened";
    pluselem.className="hidden";
    sessionStorage.setItem("Element", n);
    sessionStorage.setItem("Plus",plus);
}

