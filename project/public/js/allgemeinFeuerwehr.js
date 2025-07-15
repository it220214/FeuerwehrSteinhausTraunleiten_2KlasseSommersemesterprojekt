ScrollReveal().reveal('#laumat', {delay: 20,duration: 500, reset: true});
ScrollReveal().reveal('#aufgabenbereicheDerFeuerwehr', {delay: 40,duration: 500, reset: true});
ScrollReveal().reveal('#textAllgemein', {delay: 60,duration: 500, reset: true});
ScrollReveal().reveal('#sos', {delay: 80,duration: 500, reset: true});
ScrollReveal().reveal('#wichtigeAufgaben', {delay: 100,duration: 500, reset: true});
ScrollReveal().reveal('#vorbeugenderBrandschutzText', {delay: 120,duration: 500, reset: true});
ScrollReveal().reveal('#branddreieck', {delay: 140,duration: 500, reset: true});
ScrollReveal().reveal('#loeschmittelText', {delay: 160,duration: 500, reset: true});
ScrollReveal().reveal('#loeschenWie', {delay: 180,duration: 500, reset: true});
ScrollReveal().reveal('#feuerloescher', {delay: 200,duration: 500, reset: true});
ScrollReveal().reveal('#nachrichtenuebermittlung', {delay: 220,duration: 500, reset: true});
ScrollReveal().reveal('#einsatzMelden', {delay: 240,duration: 500, reset: true});
ScrollReveal().reveal('#sidefacts', {delay: 260,duration: 500, reset: true});




let aufgabenbereich = "";
let allgemein = "";
let wichtigeAufgaben = "";
let sidefacts = "";
let vorbeugenderBrandschutzText = "";
let loeschmittel ="";
let loeschenWie = "";
let einsatzMelden = "";

content();
function content(){

aufgabenbereich = `
    <h2>Aufgabenbereiche der Feuerwehr</h2>
    <h4>der Brandeinsatz</h3>
    <h4>der technische Feuerwehreinsatz</h4>
    <h4>der Katastrophenschutz</h4>`;
document.getElementById('aufgabenbereicheDerFeuerwehr').innerHTML += aufgabenbereich;


allgemein = 
    `<h2>Feuerwehr setzen sich ein bei Vermeidungen,
    Beiseitigung oder Minimierung von Schäden im Falle von Bränden,
    Unfällen,
    technischen Gebrechen,
    Elementarereignisssen und im Katastrophenfall.</h2>`;
document.getElementById('textAllgemein').innerHTML += allgemein;

wichtigeAufgaben = `
    <h2>die wichtigsten Aufgaben der Feuerwehr</h2>
    <h3>Retten:</h3>
        <h4>Vorallem Menschenleben, die in Gefahr sind, sei es durch Brände, Unfälle oder andere Notfälle</h4>
    <h3>Löschen:</h3>
        <h4>Brandbekämpfung und Verhinderung von Ausbreitungen von Feuer und Rauch</h4>
    <h3>Schützen:</h3>
        <h4>präventieve Maßnahmen ergreifen, überwachung und Aufrechterhalung der Sicherheit der Gemeinde, aber auch Brandschutzerziehung und -aufklärung</h4>
        
`;
document.getElementById('wichtigeAufgaben').innerHTML += wichtigeAufgaben;

vorbeugenderBrandschutzText = `
    <h4>ein wichtiges Kapitel in der Feuerwehr ist der Vorbeugender Brandschutz, dabei geht es wie wann Brände so gut wie möglich verhindert</h4>
    <h4>das wichtige ist das Branddreieck, ein Feuer besteht aus diesen 3 Komponenten, wenn man einen Stoff entzieht, kann nichts zu brennen anfangen, aber auch löschen</h4>
`;
document.getElementById('vorbeugenderBrandschutzText').innerHTML += vorbeugenderBrandschutzText;


loeschmittel = `

   <h2>Arten von Feuerlöschern</h2>
   <h4>Wasserlöscher</h4>
   <h4>Schaumlöscher</h4>
   <h4>Pulverlöscher</h4>
   <h4>Pulverlöscher</h4> `;
document.getElementById('loeschmittelText').innerHTML += loeschmittel;   

loeschenWie =`
    <ul>
        <li>In Windrichtung</li>
        <li>Von vorne nach hinten</li>
        <li>Von unten nach oben</li>
        <li>Tropf - Fließbrände von oben nach unten</li>
        <li>mehrere Feuerlöscher gleichzeitig verwenden</li>
        <li>Glutnester mit Wasser nach löschen</li>
        <li>Feuerlöscher sofort nachfüllen</li>
    </ul>`;
document.getElementById('loeschenWie').innerHTML += loeschenWie;

einsatzMelden = `
    <h2>Wie melde ich einen Einsatz?</h2>
    <ul>
        <li>WER bin ich ?</li>
        <li>WO bin ich?</li>
        <li>WAS ist passiert</li>
        <li>WIE viele Personen sind verletzt/vorhanden?</li>
    </ul>
    <h3>Die Zentrale legt auf!, nicht der Anrufer</h3>`;
    document.getElementById('einsatzMelden').innerHTML += einsatzMelden;


sidefacts= `
    <h2>weitere Informationen</h2>
    <h4>Man darf erst mit dem vollendetem 16. Lebensjahr in den Aktivstand gehen</h4>
    <h4>Die kleinste taktische selbstständige einsetzbare Feuerwehreinheit ist die Löschgruppe mit 9 Personen, diese ist gegliedert in Gruppenkommandant, Melder, Machinist, Angriffstrupp, Wassertrupp, Schlauchtrupp</h4>`;
document.getElementById('sidefacts').innerHTML += sidefacts;
}





