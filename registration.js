document.addEventListener('DOMContentLoaded',()=>
{
    let OpenModal1 =document.getElementsByClassName('open-button');
    for (let button of OpenModal1) {
        button.onclick = function (e) {
            e.preventDefault();
            isMenuShow = sessionStorage.getItem("someVarKey");
            if (isMenuShow!=1) {
                modalOverlay.classList.add('modal-overlay');
                modal1.classList.add('modal_active');

            }else
            {
                modalOverlay.classList.add('modal-overlay');
                modal4.classList.add('modal_active');
                setTimeout(function() {
                    modal4.classList.remove('modal_active');
                    modalOverlay.classList.remove('modal-overlay');
                }, 5000)
            }
        }


    }

    let modal1=document.getElementById('modal1');
    let modal3=document.getElementById('modal3');
    let modal4=document.getElementById('modal4');
    let closeButton=document.getElementById('close-button');
    let modalOverlay = document.getElementById('oo');
    let input_1 = document.getElementById("input_1");
    let input_2 = document.getElementById("input_2");
    let input_3 = document.getElementById("input_3");
    let btn = document.getElementById("send");
    const check = () => btn.disabled = input_2.validity.typeMismatch ||  input_1.value.length < 2 || input_2.value.length < 3  || input_3.value.length != 18;
    var isMenuShow = 2
    closeButton.onclick=function (){
        modal1.classList.remove('modal_active');
        modalOverlay.classList.remove('modal-overlay');
    }
    input_1.addEventListener('input', check);
    input_2.addEventListener('input', check);
    input_3.addEventListener('input', check);
    check();


    const applicForm = document.getElementById('mars-once')
    applicForm.addEventListener('submit', handleFormSubmit)
    async function handleFormSubmit(event) {
        event.preventDefault()
        isMenuShow = 1
        sessionStorage.setItem("someVarKey", isMenuShow)
        modal3.classList.add('modal_active');
        modal1.classList.remove('modal_active');
        
        setTimeout(function() {
            modal3.classList.remove('modal_active');
            modalOverlay.classList.remove('modal-overlay');
        }, 5000)
    }

});

window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.inputphone'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+375 (__) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});