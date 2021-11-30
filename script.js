var i = 0;
var txt = "";
var txt2 = ' “Não Inflamável” não é um desafio';
var speed = 50;
var count = 0;

function newScreen() {

    document.getElementById("counter").style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("chalkboard_writing").style.display = "inline";

    var times = document.getElementById("quantity").value;
    var tm = times%11;

    
    writing(tm);
    endScreen(times);

    }

function clear() {
/* faltou fazer essa função */
}

function endScreen(times) {
    document.getElementById("end").style.display = "inline";
    document.getElementById("end2").style.display = "inline";
    console.log(1231);
    var pages = Math.floor(times/11);
    var resto = (times%11);

    document.getElementById("end").innerHTML = 'Quadros apagados: '+pages;
    document.getElementById("end2").innerHTML = 'Linhas restantes no final: ' + resto;
}



function writing(tmp) {
    

    while(count < tmp){

        txt = txt + txt2;
        count = count + 1;
    }


    if (i < txt.length) {

        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(writing, speed);
      }
}

