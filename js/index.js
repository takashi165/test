"use strict";
class shinywords{
    static counter = 1;
    correctness = "";
    static start(){
        document.getElementById("start").style.display = "none";
        $.getJSON("./resources/wores.json", function (data) {
            document.getElementById("words").textContent = data.mano[0];
        });
        console.log(data[0]);
        alert(data[0]);
        return;
    }
    static answer(idol){
        sw.counter++;
        if(correctness === idol ){
            document.getElementById(`resultbox${sw.counter}`).setAttribute('src', './pic/marubatu/Heart.png');           
        }else{
            document.getElementById(`resultbox${sw.counter}`).setAttribute('src', './pic/marubatu/batu.png'); 
        }
    }
    static correctness(){
    }
    static getID(idol) {
    }
}

const sw = new shinywords();
document.getElementById("start").addEventListener("click", sw.start, false);
document.getElementById("mano").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("hiori").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("meguru").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("kogane").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("mamimi").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("sakuya").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("yuika").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("kiriko").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("amana").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("tenka").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("tiyuki").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("kaho").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("tiyoko").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("juri").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("rinze").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("natsuha").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("asahi").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("fuyuko").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("mei").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("tooru").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("madoka").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("koito").addEventListener("click",function(){sw.answer(this)}, false);
document.getElementById("hinana").addEventListener("click",function(){sw.answer(this)}, false);