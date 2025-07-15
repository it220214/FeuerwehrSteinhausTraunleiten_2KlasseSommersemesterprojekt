ScrollReveal().reveal('#alter', {delay: 20,duration: 500, reset: true});
ScrollReveal().reveal('#ausbildung', {delay: 50,duration: 500, reset: true});
ScrollReveal().reveal('#wissenstestTXT', {delay: 80,duration: 500, reset: true});
ScrollReveal().reveal('#wissenstestIMG', {delay: 110,duration: 500, reset: true});
ScrollReveal().reveal('#bewerb', {delay: 130,duration: 500, reset: true});
ScrollReveal().reveal('#bewerbIMG', {delay: 160,duration: 500, reset: true});
ScrollReveal().reveal('#bewerbTXT', {delay: 190,duration: 500, reset: true});


let alter ="";
let wissenstest ="";
let bewerb ="";

Aalter();
function Aalter(){
    alter = `<h4>Man darf ab 10 Jahren zur Jugendfeuerwehr und ab 16 Jahren in den Aktivstand</h4>`;
    document.getElementById('alter').innerHTML += alter;
}
Wwissenstest();
function Wwissenstest(){
    wissenstest =`
    <div id="wissenstestTXT"><h4>Als ersters lernt man  jedes Jahr von Herbst bis März am Wissenstest, dieser beinnhaltet Theorie Fragen, die Im Einsatz wichtig sind.</h4>
    <h4>Im Februar gibt es Erprobung im eigenen Feuerwehrhaus, wo die Fragen abgeprüft werden und man Feedback und einen Dienstgrad bekommt, welches Thema man sich nochmals genauer lernen muss.</h4>
    <h4>Im März fährt man an den Bezirk wo höhergestelle Personen prüfen ob man das Wissen beherrscht. Wenn ja bekommt man ein Abzeichen</h4>
    <h4>Die Erprobung findet 5 mal statt, jeweils in Broze, Silber und Gold kann man sich dan die Abzeichen verdienen</h4></div>
    <div id="wissenstestIMG"><img src="./img/wissenstest.jpg" width="30%"></div>`;
    document.getElementById('wissenstest').innerHTML += wissenstest;
}
Bbewerb();
function Bbewerb(){
    bewerb =`
    <div id="bewerbIMG"><img src="./img/csm_ooelfv_fla-bs_05_776f48c915.jpg" width="40%"></div>
    <div id="bewerbTXT"><div id="hindernis"><h3>Hindernisübung</h3>
    <h4>Die Jugendlichen müssen eine Hindernisstrecke bewältigen, die verschiedene feuerwehrspezifische Aufgaben beinhaltet.
    Dabei geht es um Geschicklichkeit, Koordination und Schnelligkeit.</h4></div>
    <h3>400-Meter-Staffellauf mit Hindernissen</h3>
    <h4>Die Jugendgruppen treten in einem Staffellauf an, bei dem sie 400 Meter zurücklegen und dabei Hindernisse überwinden müssen.
    Hierbei ist Teamarbeit gefragt, und die Jugendlichen zeigen ihre Fitness und Ausdauer.</h4></div>`;
    document.getElementById('bewerb').innerHTML+=bewerb;
}




