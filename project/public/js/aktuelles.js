
ScrollReveal().reveal('#atemschutzIMG', {delay: 50,duration: 500, reset: true});
ScrollReveal().reveal('#atemschutzTXT', {delay: 100,duration: 500, reset: true});
ScrollReveal().reveal('#vollversammlungTXT', {delay: 120,duration: 500, reset: true});
ScrollReveal().reveal('#vollversammlungIMG', {delay: 140,duration: 500, reset: true});
ScrollReveal().reveal('#finnentestIMG', {delay: 160,duration: 500, reset: true});
ScrollReveal().reveal('#finnentestTXT', {delay: 180,duration: 500, reset: true});
ScrollReveal().reveal('#jugendwerbungTXT', {delay: 200,duration: 500, reset: true});
ScrollReveal().reveal('#jugendwerbungIMG', {delay: 220,duration: 500, reset: true});


let atemschutzTXT = "";
AatemschutzTXT();
function AatemschutzTXT(){
    atemschutzTXT = `
    <h2>Atemschutz Leistungsabzeichen in Gold</h2>
    <p>Am 27.01.2024 konnten drei Kameraden der Feuerwehr Steinhaus das Leistungsabzeichen in Gold erringen.
    Günther Wiener, Harald Dimmler und unser Atemschutzwart Roman Langlehner konnten nach vielen Stunden der Vorbereitung 
    ihr Können in Wels bei der Abnahme unter Beweis stellen 
    und das Leistungsabzeichen schlussendlich in Empfang nehmen. 
    Die Feuerwehr Steinhaus gratuliert recht herzlich zu der herausragenden Leistung.</p>`;
    document.getElementById('atemschutzTXT').innerHTML += atemschutzTXT;
}
let vollversammlungTXT = "";
VvollversammlungTXT();
function VvollversammlungTXT() {
    vollversammlungTXT = `
    <h2>Vollversammlung am 13.12.2023</h2>
    <p>Am 13.12.2023 fand die jährliche Vollversammlung der Freiwilligen Feuerwehr Steinhaus statt.
    In diesem Bericht möchten wir einen Überblick über die Ereignisse und Aktivitäten dieses wichtigen Treffens geben.
    Die Einführung wurde von unserem Kommandanten durchgeführt.</p>
    <h4>Tätigkeitsberichte</h4>
    <p>Die Vollversammlung begann mit den Tätigkeitsberichten der verschiedenen Funktionsträger. Dabei wurde von den Gruppenkommandanten über Übungen und Schulungen berichtet. Der Zeugwart erklärte die Zustände der Fahrzeuge und der Ausrüstung. Der Kassier berichtete über die finanzielle Situation der Feuerwehr und der Bilanz des Frühschoppens. Der Schriftführer erklärte wichtige Änderungen im Feuerwehrwesen.
    Im Anschluss an die Berichte wurden verdiente Mitglieder der Feuerwehr für ihre langjährige Treue und ihren Einsatz geehrt und Geburtstagsjubilare gefeiert.
    Nach den offiziellen Programmpunkten konnten sich alle Anwesenden bei einer Jause stärken. Dieser gemütliche Teil der Versammlung bot Gelegenheit zum Austausch und zur Pflege der Kameradschaft.
    Wir danken allen Mitgliedern der Freiwilligen Feuerwehr Steinhaus für ihren unermüdlichen Einsatz und freuen uns auf ein weiteres erfolgreiches Jahr!</p>`;
    document.getElementById('vollversammlungTXT').innerHTML += vollversammlungTXT;
}
let finnentestTXT = "";
FfinnentestTXT();
function FfinnentestTXT() {
    finnentestTXT = `
    <h2>Finnentest 2023</h2>
    <p>Am 25. November 2023 wurde der Finnentest, ein Fitnesstest, von den Feuerwehren in Steinhaus und Traunleiten durchgeführt.
    Dieser Test ist eine Methode zur Beurteilung der körperlichen Tauglichkeit für den anspruchsvollen Dienst unter Atemschutz.
    Der Finnentest besteht aus einer Reihe von Aufgaben, die darauf abzielen, die Kraft, Ausdauer, Motorik und Koordination der Atemschutzträger unter Belastung zu bewerten.
    Diese standardisierten Aufgaben werden in voller Schutzausrüstung durchgeführt.
    Es ist erfreulich zu berichten, dass alle teilnehmenden Kameraden aus beiden Feuerwehren die Aufgaben erfolgreich gemeistert haben.</p>`;
    document.getElementById('finnentestTXT').innerHTML += finnentestTXT; 
}
let jugendwerbungTXT = "";
JjugendwerbungTXT();
function JjugendwerbungTXT() {
    jugendwerbungTXT = `
    <h2>Jugendwerbung am 18.11.2023</h2>
    <p>Am 18.11.2023 fand die Jugendwerbung der Feuerwehr Steinhaus/Traunleiten statt.
    Nach einer Präsentation der Tätigkeiten der Feuerwehrjugend wurden die Feuerwehren vorgestellt.
    Anschließend wurde durch einen Rundgang durch das Depot der Feuerwehr Steinhaus die Ausrüstung und Fahrzeuge vorgestellt.
    Zum Abschluss wurde eine Schauübung durchgeführt. Dabei wurde die Herangehensweise bei einem technischen Einsatz zur Schau gestellt.
    Wir hoffen das wir durch die Jugendwerbung den ein oder anderen erreicht haben und neue KameradInnen in naher Zukunft begrüßen zu dürfen.</p>`;
    document.getElementById("jugendwerbungTXT").innerHTML += jugendwerbungTXT;
}

