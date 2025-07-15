
ScrollReveal().reveal('#bewwerbIMG', {delay: 50,duration: 500, reset: true});
ScrollReveal().reveal('#cardIMG', {delay: 100,duration: 500, reset: true});
ScrollReveal().reveal('#Jugendgruppe', {delay: 120,duration: 500, reset: true});
ScrollReveal().reveal('#bewerb23IMG', {delay: 140,duration: 500, reset: true});
ScrollReveal().reveal('#jugendgruppeIMG', {delay: 160,duration: 500, reset: true});
ScrollReveal().reveal('#midglieder', {delay: 180,duration: 500, reset: true});


let jugendgruppe = "";
Jugendgruppe();
function Jugendgruppe(){
    jugendgruppe = `
    <p>Unsre Feuerwehr Jungend besteht aus 16 Midgliedern.</p>
            <p>Das FJ-Jahr startete am 13.Jänner mit den Vorbereitungen für den Wissenstest. Am 3. Febuar fand der Erste Hilfe Nachmittag in Sattledt statt, dabei konnten wir unser Wissen über Erste Hilfe auffrischen.</p>
            <p>Eine Woche vor dem Wissenstest wurde die Erprobung im Feuerwehrhaus abgeprüft.</p>
            <p>Wissenstest war am 4.März in Steinerkirchen.</p>
            <p>Nachdem im Jahr 2022 das Bewerbswesen sehr erfolgreich war. Wurde uns am 16.März im Rahmen der Frühjahrstagung des Bezirks- Wels Land der Gesamtsieger Wanderpokal in der zweiten Liga überreicht. Daraufhin stiegen wir in die 1.Liga auf.</p>
            <p>Am 1. April fand die Abnahme des Feuwerjugendleistungsabzeichen in Gold statt.</p>
            <p>Anfang April starteten wir mit dem Bewerbstraining um uns für die kommenden Bewerbe bestens vorzubereiten.</p>
            <p>Der Vorbereitungsbewerb war in Fischlham.</p>
            <p>Am 10.Juni waren wir am Abschnittsbewerb in Eberstazell.</p>
            <p>Daraufhin war am 1.Juli der Bezirksbewerb. Dort gewannen wir den 1.Platz in Silber und den 2.Platz in Broze.</p>
            <p>Am 11.Juli fuhren wir zum Landesbewerb nach Aspach/Wildenau.Danach stärkten wir uns noch ein wenig im Festzelt und verbrachten anschließend noch etwas Zeit am anliegenden Badesee.</p>
            <p>Aufgrund der tollen Leistung stiegen wir in die Bezirksliga auf.</p>
            <p>Wir waren in Wels bei der Rettermesse, dort konnten wir uns die Gerätschaften des Bundesherr, Polizei und der Rettung ansehen.</p>
            <p>Ab September haben wir unser theorie Wissen in die Praxis umgesetzt. Wir lernten den Umgang mit den Feuerlöschern. Wir gingen das Fettbrand Szenario durch, welches wir mit Pulverlöscher besiegten.</p>
            <p>Wir durgen die Feuerwehr Traunleiter näher kennenlernen, und wir durften die TS in Betrieb nehmen und legten eine Löschleitung und machten eine Schuamparty. 
        Ebenfalls haben wir den Umgang mit einen Technischen Unfall ausprobiert. Dazu konnten wir Autoscheinden und auch fachgerecht abzusichern, wurde eine Puppe erfolgreich gerettet.</p>
        <p>Am 8. Dezember veranstalte die Familie Schierl wieder einen Adventmarkt am „Grabnergut“.</p>
        <p>Mit dem eingesammelten Geld fuhren wir ins Aquapulco.</p>
        <p>Am 24.Dezember, fand wie jedes Jahr wieder die Aktion Friedenslicht statt, das Licht holten wir in der Kirche Fischlham ab, anschließend wurde das Licht an die Feuerwehr Kameraden verteilt.</p>
        <p>Insgesammt hatten wir 450 Jugendstunden.</p>`;

        document.getElementById('Jugendgruppe').innerHTML += jugendgruppe;
}

let midglieder = "";
Midglieder();
function Midglieder() {
    midglieder = `
    <h2>Mitglieder der Jugendfeuerwehr:</h3>
            <h3>Neue Mitglieder:</h2>
            <p>Hofinger Jan, Hubauer Gabriel, Mayr Rafael, Tabacchi Matteo</p>
            <h3>Broze:</h3>
            <p>Kriener Simon, Wieser Jonas</p>
            <h3>Silber:</h3>
            <p>Achleithner Manuel, Tabacchi Sandro</p> 
            <h3>Gold:</h3>
            <p>Breitwieser Makus, Krug Dominik, Mühlberger Tobias, Wiener Tobias</p>
            <h3>Zum Aktivstand bereit:</h3>
            <p>Dimmler Carla, Helperstorfer David, Rothkegel Isabel, Schierl Paul</p>
            <h3>FJLA:</h3>
            <p>Krug Sebastian, Schwarz Lukas</p>`;

            document.getElementById('midglieder').innerHTML += midglieder;
}