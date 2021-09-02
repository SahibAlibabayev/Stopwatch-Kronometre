var saniye = 0;
var dakika = 0;
var saat = 0;
var interval;


function kronometre() {
    var kronometres = document.getElementById("krono");
    if (dakika == 59 && saniye == 59) {
        dakika = 0;
        saniye = -1;
        saat += 1;
    }
    if (saniye == 59) {
        saniye = -1;
        dakika += 1;
    }

    console.clear();
    saniye++;
    // document.write(saat+":"+dakika+":"+saniye);
    kronometres.innerHTML = saat + ":" + dakika + ":" + saniye;

}

function baslat() {
    interval = setInterval("kronometre()", 1000);
}

function sifirla() {
    var kronometres = document.getElementById("krono");
    saniye = 0;
    dakika = 0;
    saat = 0;
    kronometres.innerHTML = saat + ":" + dakika + ":" + saniye;
    clearInterval(interval);
}

function durdur() {
    clearInterval(interval);
}

