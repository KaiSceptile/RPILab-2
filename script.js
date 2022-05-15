let elem=document.getElementById(sessionStorage.getItem("Element"));
let pluselem = document.getElementById(sessionStorage.getItem("Plus"));
let faqrect = document.getElementById(sessionStorage.getItem("faqrect"));
let ques = document.getElementById(sessionStorage.getItem("ques"));
if (elem!=null){
    elem.className="answ";
    pluselem.className="hidden";
    faqrect.className="faq1rect";
    ques.className="queshead";
}
var plus1 = document.getElementById("plus1");
let plus2 = document.getElementById("plus2");
let plus3 = document.getElementById("plus3");
let plus4 = document.getElementById("plus4");
let plus5 = document.getElementById("plus5");
plus1.onclick=function(){Open("hidden1", "plus1", "faqrect1", "ques1");}
plus2.onclick=function(){Open("hidden2", "plus2", "faqrect2", "ques2");}
plus3.onclick=function(){Open("hidden3", "plus3", "faqrect3", "ques3");}
plus4.onclick=function(){Open("hidden4", "plus4", "faqrect4", "ques4");}
plus5.onclick=function(){Open("hidden5", "plus5", "faqrect5", "ques5");}
function Open(n, plus, faq, queshead) {
    if (elem!=null){
        elem.className="hidden";
        pluselem.className="plus";
        faqrect.className="faqrect";
        ques.className="queshead2";
    }
    pluselem=document.getElementById(plus);
    elem=document.getElementById(n);
    ques=document.getElementById(queshead);
    console.log(ques);
    faqrect=document.getElementById(faq);
    faqrect.className="faq1rect";
    ques.className="queshead";
    elem.className="answ";
    pluselem.className="hidden";
    sessionStorage.setItem("Element", n);
    sessionStorage.setItem("Plus",plus);
    sessionStorage.setItem("ques", queshead);
    sessionStorage.setItem("faqrect", faq);
}

