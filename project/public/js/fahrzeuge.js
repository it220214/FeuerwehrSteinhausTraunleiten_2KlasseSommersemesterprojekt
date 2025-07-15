
ScrollReveal().reveal('#rlf', {delay: 10,duration: 500, reset: true});
ScrollReveal().reveal('#tlf', {delay: 20,duration: 500, reset: true});
ScrollReveal().reveal('#klf', {delay: 30,duration: 500, reset: true});
ScrollReveal().reveal('#kdo', {delay: 40,duration: 500, reset: true});
ScrollReveal().reveal('#tunnenluefter', {delay: 50,duration: 500, reset: true});

/*RLF*/
function Rrlf(){
    let rlf = "";
    rlf = `
    <div><img src="./img/rlf.jpeg" width="56%"></div>
    <div id="rlfTXT" onclick="RrlfTXT()"></div>
    <div id="rlfInnen" onclick="RrlfInnen()"></div>`;
    cclick.style.display="flex";

    document.getElementById('rlf').innerHTML += rlf;
    document.getElementById('rlf').style.color="white";
    document.getElementById('tlf').style.color="white";
    document.getElementById('klf').style.color="white";  
    document.getElementById('kdo').style.color="white";
    document.getElementById('tunnenluefter').style.color="white";
}
let rlfInnen ="";

function RrlfInnen(){
    cclick.style.display="none";
    rlfInnen = `<div><img src="./img/rlf links offen.jpeg" width="120%"></div>`;

    document.getElementById('rlfInnen').innerHTML += rlfInnen;
}

function RrlfTXT(){
    cclick.style.display="none";
    //document.getElementById('rlfTXT').style.display='none';
    let rlfTXTV = "";
    rlfTXTV += `
    <h2>Kombination aus
     Brandbekämpfung und technischer Rettung</h2>
    <p>Das RLF ist bekannt dafür,
    sowohl Brände zu löschen als auch bei Verkehrsunfällen und technischen Rettungseinsätzen effektive Hilfe zu leisten</p>`;
    document.getElementById('rlfTXT').innerHTML = rlfTXTV;

}

/*TLF*/
let tlf = "";
let tlfInnen ="";
let tlfTXT = "";
function Ttlf(){
    cclick.style.display="flex";
    tlf = `
    <div id="tlfIMG"><img src="./img/tlf.jpg" width="49%"></div>
    <div id="tlfTXT" onclick="TtlfTXT()"></div>
    <div id="tlfInnen" onclick="TtlfInnen()"></div>`;
    document.getElementById('tlf').innerHTML += tlf;
    document.getElementById('rlf').style.color="white";
    document.getElementById('tlf').style.color="white";
    document.getElementById('klf').style.color="white";  
    document.getElementById('kdo').style.color="white";
    document.getElementById('tunnenluefter').style.color="white";

}
function TtlfTXT() {
    cclick.style.display="none";
    tlfTXT = `
    <h2>Große Wassermenge</h2>
    <p>FDas TLF ist besonders bekannt für seine Fähigkeit,
    große Mengen Wasser schnell zur Brandbekämpfung an Einsatzstellen zu bringen.</p>`;
    document.getElementById('tlfTXT').innerHTML = tlfTXT;
}
function TtlfInnen(){
    cclick.style.display="none";
    tlfInnen = `<div><img src="./img/tfl_linksHinten.jpeg" width="135%"></div>`;
    document.getElementById('tlfInnen').innerHTML += tlfInnen;
}
/*KLF*/
let klf = "";
let klfInnen ="";
let klfTXT = "";
function Kklf(){
    cclick.style.display="flex";
    klf = `
    <div id="klfIMG"><img src="./img/klfZU.jpg" width="50%"></div>
    <div id="klfTXT" onclick="KklfTXT()"></div>
    <div id="klfInnen" onclick="KklfInnen()"></div>`;
    document.getElementById('klf').innerHTML += klf;
    document.getElementById('rlf').style.color="white";
    document.getElementById('tlf').style.color="white";
    document.getElementById('klf').style.color="white";  
    document.getElementById('kdo').style.color="white";
    document.getElementById('tunnenluefter').style.color="white";

}
function KklfTXT() {
    cclick.style.display="none";
    klfTXT = `
    <h2>Schneller Erstangriff</h2>
    <p>Das KLF ist bekannt für seine Wendigkeit und die Fähigkeit,
    schnell vor Ort zu sein und den Erstangriff bei kleineren Bränden durchzuführen.</p>`;
    document.getElementById('klfTXT').innerHTML = klfTXT;
}
function KklfInnen(){
    cclick.style.display="none";
    klfInnen = `<div><img src="./img/klfOffen.jpg" width="120%"></div>`;
    document.getElementById('klfInnen').innerHTML += klfInnen;
}
/*KDO*/

let kdo = "";
let kdoInnen ="";
let kdoTXT = "";
function Kkdo(){
    cclickk.style.display="flex";
    kdo = `
    <div id="kdoIMG"><img src="./img/kdo.jpg" width="50%"></div>
    <div id="kdoTXT" onclick="KkdoTXT()"></div>`;
    document.getElementById('kdo').innerHTML += kdo;
    document.getElementById('rlf').style.color="white";
    document.getElementById('tlf').style.color="white";
    document.getElementById('klf').style.color="white";  
    document.getElementById('kdo').style.color="white";
    document.getElementById('tunnenluefter').style.color="white";

}
function KkdoTXT() {
    cclickk.style.display="none";
    kdoTXT = `
    <h2>Schneller Erstangriff</h2>
    <p>Das KLF ist bekannt für seine Wendigkeit und die Fähigkeit,
    schnell vor Ort zu sein und den Erstangriff bei kleineren Bränden durchzuführen.</p>`;
    document.getElementById('kdoTXT').innerHTML = kdoTXT;
}


/*tunnenluefter*/
let tunnenluefter = "";
let tunnenluefterTXT = "";
function Ttunnenluefter(){
    cclickk.style.display="flex";
    tunnenluefter = `
    <div><img src="./img/tunnellüfter1.jpeg" width="50%"></div>
    <div id="tunnenluefterTXT" onclick="TtunnenluefterTXT()"></div>`;
    document.getElementById('tunnenluefter').innerHTML += tunnenluefter;
    document.getElementById('rlf').style.color="white";
    document.getElementById('tlf').style.color="white";
    document.getElementById('klf').style.color="white";  
    document.getElementById('kdo').style.color="white";
    document.getElementById('tunnenluefter').style.color="white";
}
function TtunnenluefterTXT() {
    cclickk.style.display="none";
    tunnenluefterTXT = `
    <h2>Rauch- und Wärmeabzug in Tunneln</h2>
    <p> Der Tunnellüfter ist speziell bekannt für seine Fähigkeit, 
    Rauch und Hitze aus Tunneln schnell zu entfernen, um die Sicht und Sicherheit für Rettungskräfte und betroffene Personen zu verbessern.</p>`;
    document.getElementById('tunnenluefterTXT').innerHTML = tunnenluefterTXT;
}

