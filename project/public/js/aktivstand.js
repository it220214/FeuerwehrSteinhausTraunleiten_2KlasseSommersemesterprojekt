
ScrollReveal().reveal('#komandoSteinhaus', {delay: 500,duration: 500, reset: true});

ScrollReveal().reveal('#komandoTraunleiten', {delay: 1000,duration: 500, reset: true});


let komandoSteinhaus = "";
komandoSteinhausfunc();
function komandoSteinhausfunc(){
    komandoSteinhaus = `
    <div><h1>Feuerwehr Steinhaus</h1>
    <h2>Franz Ziegelbäck</h2><h4>Feuerwehrkommandant, Stützpunktleiter Großlüfter</h4>
    <h2>Markus Aumüller</h2><h4>1.Stelvertreter des Komandanten,
    Stützpunktleiter-Stellvertreter</h4>
    <h2>Andreas Achleithner</h2><h4>Stützpunktleiter Tunnel, Zugskommandant</h4>
    <h2>Günther Wiener</h2><h4>Zugskommandant</h4>
    <h2>Werner Fink</h2><h4>LuN-Zugskommandant(BI), Prüfer für 5,5to Berechtigung</h4>
    <h2>Thomas Rothkegel</h2><h4>Schriftführer</h4>
    <h2>Andreas Spatt</h2><h4>Kassenführer</h4>
    </div>`
    document.getElementById("komandoSteinhaus").innerHTML += komandoSteinhaus;
}

let komandoTraunleiten = "";
kommandoTraunleitenfunc();
function kommandoTraunleitenfunc(){
    komandoTraunleiten = `
    <div><h1>Feuerwehr Traunleiten</h1>
    <h2>Georg Lachmair</h2><h4>Feuerwehrkommandant FF Traunleiten</h4>
    <h2>Martin Breitwieser</h2><h4>1.Stv. des Feuerwehrkommandant</h4>
    <h2>Robert Zwidl</h2><h4>Fachbeauftragter Ausbildung, Zugskommandant</h4>
    <h2>Christian Spatt</h2><h4>LuN-Zugskommandant(BI)</h4>
    <h2>Thomas Neuböck</h2><h4>Schriftführer</h4>
    <h2>Wolfgang Waldl</h2><h4>Kassenführer</h4>
    <h2>Roman Ettinger</h2><h4>Ausbilder für 5,5to Berechtigung, Gerätewart</h4>
    </div>`;
    document.getElementById("komandoTraunleiten").innerHTML += komandoTraunleiten;
}