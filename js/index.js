"use strict";
class shinywords{
    static counter = 1;
    static start(){
        document.getElementById("start").style.display = "none";
        $.getJSON("./resources/wores.json", function (data) {
            document.getElementById("words").textContent = data.mano;
            document.getElementById(`resultbox${shinywords.counter}`).setAttribute('src', './pic/marubatu/Heart.png');           
            alert(data.mano[0]);
        });
        return;
    }
    static answer(idol){
        shinywords.counter++;
        
    }
    static correctness(){
    }

}

function getID(element) {
    const id = element.id;
    alert(id);
}

document.getElementById("start").addEventListener("click", shinywords.start, false);
document.getElementsByClassName("idolicon")[0].addEventListener("click", getID(this), false);
