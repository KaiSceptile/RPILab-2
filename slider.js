let slideIndex;
let IsRefresh=sessionStorage.getItem("IsRefresh");
    if(IsRefresh != null && IsRefresh !=""){
        slideIndex=sessionStorage.getItem("ind");
        sessionStorage.clear()
    }
    else{
        slideIndex=1;
        sessionStorage.setItem("IsRefresh","true");
    }

showSlides(slideIndex);

function plusSlide(){
    showSlides(slideIndex+=1);
}

function minusSlide(){
    showSlides(slideIndex-=1);
}

function eventKey(e){
    let slides=document.getElementsByClassName("slide");
    switch(e.keyCode){
        case 37:
            showSlides(slideIndex-=1);
            break;

        case 39:
            showSlides(slideIndex+=1);
            break;
    }
}

function showSlides(n){
   let i;
   let slides=document.getElementsByClassName("slide");
    if(n>=slides.length){
       slideIndex=slides.length;
   }
   if(n<=1){
       slideIndex=1;
   }
    sessionStorage.setItem("ind", slideIndex);

   for(i=0; i<slides.length;i++){
       slides[i].style.display="none";
   }
   slides[slideIndex-1].style.display="block";
}

addEventListener("keydown", eventKey);
