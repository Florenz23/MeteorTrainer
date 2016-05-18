/* Verzeichnis Fragen & Antworten */
/* ============================================================== */


// Typen von Fragen
var TRAINER_FRAGENTYP_TEXT = false;
var TRAINER_FRAGENTYP_MC = true;


// Fragenkatalog
export const FA = new Array();
FA["1001"] = new Array(
    1,
    0,
    new Array(
        "Was ist zu tun, wenn vor Antritt der Fahrt nicht feststeht, wer Fahrzeugführer ist? "),
    new Array(
        new Array(true,"Der verantwortliche Fahrzeugführer muss bestimmt werden. "),
        new Array(false,"Der verantwortliche Fahrzeugführer muss gewählt werden. "),
        new Array(false,"Ein Inhaber des Sportbootführerscheins muss die Fahrzeugführung übernehmen. "),
        new Array(false,"Ein Inhaber des Sportbootführerscheins muss die Verantwortung übernehmen. ") ));





FA["1002"] = new Array(
    2,
    0,
    new Array(
        "In welchen Fällen darf weder ein Sportboot geführt noch dessen Kurs oder Geschwindigkeit selbstständig bestimmt werden? "),
    new Array(
        new Array(true,"Wenn man infolge körperlicher oder geistiger Mängel oder infolge des Genusses alkoholischer Getränke oder anderer berauschender Mittel in der sicheren Führung behindert ist oder wenn eine Blutalkoholkonzentration von 0,5 &permil; oder mehr im Körper vorhanden ist. "),
        new Array(false,"Wenn man infolge körperlicher oder geistiger Mängel oder infolge des Genusses alkoholischer Getränke oder anderer berauschender Mittel in der sicheren Führung behindert ist oder wenn eine Blutalkoholkonzentration von 0,8 &permil; oder mehr im Körper vorhanden ist. "),
        new Array(false,"Wenn man infolge körperlicher oder geistiger Mängel oder infolge des Genusses alkoholischer Getränke oder anderer berauschender Mittel in der sicheren Führung behindert ist oder wenn eine Blutalkoholkonzentration von 1,0 &permil; oder mehr im Körper vorhanden ist. "),
        new Array(false,"Wenn man infolge körperlicher oder geistiger Mängel oder infolge des Genusses alkoholischer Getränke oder anderer berauschender Mittel in der sicheren Führung behindert ist oder wenn eine Blutalkoholkonzentration von 0,3 &permil; oder mehr im Körper vorhanden ist. ") ));
FA["1003"] = new Array(
    3,
    0,
    new Array(
        "Wann ist ein Fahrzeug in Fahrt? "),
    new Array(
        new Array(true,"Wenn es weder vor Anker liegt noch an Land festgemacht ist noch auf Grund sitzt. "),
        new Array(false,"Wenn es weder vor Anker liegt noch an Land festgemacht ist noch Fahrt über Grund macht. "),
        new Array(false,"Wenn es weder auf Grund sitzt noch vor Anker liegt noch manövrierbehindert oder manövrierunfähig ist. "),
        new Array(false,"Wenn es weder an Land festgemacht ist noch vor Anker liegt noch Fahrt durchs Wasser macht. ") ));
FA["1004"] = new Array(
    4,
    0,
    new Array(
        "Wie lang ist die Dauer eines kurzen Tons (&bull;)? "),
    new Array(
        new Array(true,"Etwa 1 Sekunde. "),
        new Array(false,"Etwa 2 Sekunden. "),
        new Array(false,"Weniger als 1 Sekunde. "),
        new Array(false,"Weniger als 4 Sekunden. ") ));
FA["1005"] = new Array(
    5,
    0,
    new Array(
        "Wie lang ist die Dauer eines langen Tons (&ndash;)? "),
    new Array(
        new Array(true,"Etwa 4 - 6 Sekunden. "),
        new Array(false,"Etwa 2 - 6 Sekunden. "),
        new Array(false,"Etwa 1 - 2 Sekunden. "),
        new Array(false,"Etwa 6 - 8 Sekunden. ") ));
FA["1006"] = new Array(
    6,
    0,
    new Array(
        "Wann gilt ein Fahrzeug unter Segel als Maschinenfahrzeug? "),
    new Array(
        new Array(true,"Wenn es gleichzeitig mit Maschinenkraft fährt. "),
        new Array(false,"Wenn es mit einer Antriebsmaschine ausgerüstet ist. "),
        new Array(false,"Wenn es durch das Segeln keine Fahrt durchs Wasser macht. "),
        new Array(false,"Wenn es durch das Segeln keine Fahrt über Grund macht. ") ));
FA["1007"] = new Array(
    7,
    0,
    new Array(
        "Welches Signal führt ein Fahrzeug unter Segel, das als Maschinenfahrzeug gilt, zusätzlich am Tage? "),
    new Array(
        new Array(true,"Einen schwarzen Kegel, Spitze unten. "),
        new Array(false,"Einen schwarzen Kegel, Spitze oben. "),
        new Array(false,"Einen schwarzen Rhombus. "),
        new Array(false,"Zwei schwarze Bälle senkrecht übereinander. ") ));
FA["1008"] = new Array(
    8,
    0,
    new Array(
        "Welche Seite wird als Luvseite bezeichnet? "),
    new Array(
        new Array(true,"Die dem Wind zugekehrte Seite. "),
        new Array(false,"Die dem Wind abgewandte Seite. "),
        new Array(false,"Die Seite in Fahrtrichtung rechts. "),
        new Array(false,"Die Seite in Fahrtrichtung links. ") ));
FA["1009"] = new Array(
    9,
    0,
    new Array(
        "Welche Seite wird als Leeseite bezeichnet? "),
    new Array(
        new Array(true,"Die dem Wind abgewandte Seite. "),
        new Array(false,"Die dem Wind zugekehrte Seite. "),
        new Array(false,"Die Seite in Fahrtrichtung rechts. "),
        new Array(false,"Die Seite in Fahrtrichtung links. ") ));
FA["1010"] = new Array(
    10,
    0,
    new Array(
        "Wann müssen die Lichter von Fahrzeugen geführt oder gezeigt werden? "),
    new Array(
        new Array(true,"Von Sonnenuntergang bis Sonnenaufgang und bei verminderter Sicht. "),
        new Array(false,"Von Sonnenaufgang bis Sonnenuntergang und bei verminderter Sicht. "),
        new Array(false,"Von abends 18 Uhr bis morgens 06 Uhr und bei verminderter Sicht. "),
        new Array(false,"Bei Dunkelheit, schlechtem Wetter und verminderter Sicht. ") ));
FA["1011"] = new Array(
    11,
    0,
    new Array(
        "Wozu dient die Lichterführung? "),
    new Array(
        new Array(true,"Sie zeigt Fahrtrichtung und Lage eines Fahrzeugs an. "),
        new Array(false,"Sie zeigt Kurs und Geschwindigkeit eines Fahrzeugs an. "),
        new Array(false,"Sie zeigt Fahrtrichtung und Position eines Fahrzeugs an. "),
        new Array(false,"Sie zeigt Fahrtrichtung und Kurs eines Fahrzeugs an. ") ));
FA["1012"] = new Array(
    12,
    0,
    new Array(
        "Was für eine Laterne kann ein Segelfahrzeug von weniger als 20 m Länge anstelle der Seitenlichter und des Hecklichtes führen? "),
    new Array(
        new Array(true,"Eine Dreifarbenlaterne an oder nahe der Mastspitze. "),
        new Array(false,"Eine Zweifarbenlaterne an gut sichtbarer Stelle. "),
        new Array(false,"Eine Dreifarbenlaterne an gut sichtbarer Stelle. "),
        new Array(false,"Eine Zweifarbenlaterne an oder nahe der Mastspitze. ") ));
FA["1013"] = new Array(
    13,
    0,
    new Array(
        "Welche Lichter muss ein Fahrzeug unter Segel, das gleichzeitig mit Maschinenkraft fährt, führen? "),
    new Array(
        new Array(true,"Die für ein Maschinenfahrzeug vorgeschriebenen Lichter. "),
        new Array(false,"Die für ein Segelfahrzeug vorgeschriebenen Lichter. "),
        new Array(false,"Zwei rote Rundumlichter senkrecht übereinander. "),
        new Array(false,"Seitenlichter rot und grün und ein rotes Rundumlicht. ") ));
FA["1014"] = new Array(
    14,
    0,
    new Array(
        "Wie weichen zwei Motorboote aus, die sich auf entgegengesetzten Kursen nähern? "),
    new Array(
        new Array(true,"Jedes Fahrzeug muss seinen Kurs nach Steuerbord ändern. "),
        new Array(false,"Jedes Fahrzeug muss seinen Kurs nach Backbord ändern. "),
        new Array(false,"Es muss das luvwärtige Fahrzeug dem leewärtigen Fahrzeug ausweichen. "),
        new Array(false,"Es muss das leewärtige Fahrzeug dem luvwärtigen Fahrzeug ausweichen. ") ));
FA["1015"] = new Array(
    15,
    0,
    new Array(
        "Zwei Motorboote nähern sich auf kreuzenden Kursen. Es besteht die Gefahr eines Zusammenstoßes. Wer ist ausweichpflichtig? "),
    new Array(
        new Array(true,"Dasjenige Fahrzeug muss ausweichen, welches das Andere an seiner Steuerbordseite hat. "),
        new Array(false,"Dasjenige Fahrzeug muss ausweichen, welches das Andere an seiner Backbordseite hat. "),
        new Array(false,"Es muss das luvwärtige Fahrzeug dem leewärtigen Fahrzeug ausweichen. "),
        new Array(false,"Es muss das leewärtige Fahrzeug dem luvwärtigen Fahrzeug ausweichen. ") ));
FA["1016"] = new Array(
    16,
    0,
    new Array(
        "Welche Bedeutung hat folgendes Schallsignal: (&bull; &ndash; &bull; &ndash; &bull; &ndash; &bull; &ndash; &bull; &ndash;) "),
    new Array(
        new Array(true,"Bleib-weg-Signal, Gefahrenbereich sofort verlassen. "),
        new Array(false,"Allgemeines Gefahr- und Warnsignal. "),
        new Array(false,"Ankerlieger über 100 m Länge. "),
        new Array(false,"Manövrierbehinderter Schleppverband über 200 m Länge. ") ));
FA["1017"] = new Array(
    17,
    0,
    new Array(
        "Welche Bedeutung hat folgendes Tafelzeichen? ",1017),
    new Array(
        new Array(true,"Überholverbot. "),
        new Array(false,"Begegnungsverbot. "),
        new Array(false,"Überholverbot für Fahrzeuge unter 20 m Länge. "),
        new Array(false,"Begegnungsverbot für Fahrzeuge über 20 m Länge. ") ));
FA["1018"] = new Array(
    18,
    0,
    new Array(
        "Welche Bedeutung hat folgendes Tafelzeichen? ",1018),
    new Array(
        new Array(true,"Begegnungsverbot an einer Engstelle. "),
        new Array(false,"Begegnungsverbot für Fahrzeuge über 12 m Länge. "),
        new Array(false,"Überholverbot; mit Gegenverkehr muss gerechnet werden. "),
        new Array(false,"Überholverbot für alle Fahrzeuge. ") ));
FA["1019"] = new Array(
    19,
    0,
    new Array(
        "Welche Bedeutung hat folgendes Tafelzeichen? ",1019),
    new Array(
        new Array(true,"Sog und Wellenschlag vermeiden. "),
        new Array(false,"Gefährdeter Strandbereich, Überspülungsgefahr; Mindestpassierabstand 100 m. "),
        new Array(false,"Wasserstraße, die jederzeit sicher befahren werden kann; keine Gefahr durch Seegang. "),
        new Array(false,"Wasserstraße, die nicht jederzeit sicher befahren werden kann; Gefahr durch Seegang. ") ));
FA["1020"] = new Array(
    20,
    0,
    new Array(
        "Welche Bedeutung hat folgendes Tafelzeichen? ",1020),
    new Array(
        new Array(true,"Mindestabstand in Metern, der in der nachfolgenden Strecke vom Aufstellungsort der Tafel an eingehalten werden muss. "),
        new Array(false,"Maximalgeschwindigkeit in km/h, die auf der in Fahrtrichtung rechten Fahrwasserseite nicht überschritten werden darf. "),
        new Array(false,"Maximalabstand in Metern, der in der nachfolgenden Strecke vom Aufstellungsort der Tafel an eingehalten werden muss. "),
        new Array(false,"Verengung des Fahrwassers auf 40 m. ") ));
FA["1021"] = new Array(
    21,
    0,
    new Array(
        "Welche Bedeutung hat folgendes Tafelzeichen? ",1021),
    new Array(
        new Array(true,"Haltegebot vor beweglichen Brücken, Sperrwerken und Schleusen. "),
        new Array(false,"Dauernde Sperrung einer Teilstrecke der Wasserstraße. "),
        new Array(false,"Gebot zur Abgabe eines langen Signaltons. "),
        new Array(false,"Weiterfahrt für Sportfahrzeuge verboten. ") ));
FA["1022"] = new Array(
    22,
    0,
    new Array(
        "Welche Bedeutung hat folgendes Tafelzeichen? ",1022),
    new Array(
        new Array(true,"Ankern verboten für alle Fahrzeuge. "),
        new Array(false,"Ankern verboten für Kleinfahrzeuge unter 12 m Länge. "),
        new Array(false,"Ankern verboten für Kleinfahrzeuge ab 12 m Länge. "),
        new Array(false,"Ankern und Festmachen verboten. ") ));
FA["1023"] = new Array(
    23,
    0,
    new Array(
        "Welche Bedeutung haben folgende Tafelzeichen? ",1023),
    new Array(
        new Array(true,"Festmache- und Liegeverbot. "),
        new Array(false,"Festmache- und Liegeverbot für Sportboote. "),
        new Array(false,"Festmache- und Liegeverbot für Sportboote über 12 m Länge. "),
        new Array(false,"Festmache- und Liegeverbot für gewerbliche Schiffe. ") ));
FA["1024"] = new Array(
    24,
    0,
    new Array(
        "Welche Bedeutung hat folgendes Tafelzeichen? ",1024),
    new Array(
        new Array(true,"Abgabe eines langen Tons. "),
        new Array(false,"Abgabe eines kurzen Tons. "),
        new Array(false,"Abgabe von zwei langen Tönen. "),
        new Array(false,"Abgabe eines kurzen und eines langen Tons. ") ));
FA["1025"] = new Array(
    25,
    0,
    new Array(
        "Welche Bedeutung haben folgende Tafelzeichen? ",1025),
    new Array(
        new Array(true,"Wasserflächen im Fahrwasser, auf denen mit Wasserski oder Wassermotorrädern gefahren werden darf. "),
        new Array(false,"Wasserflächen außerhalb des Fahrwassers, auf denen mit Wasserski oder Wassermotorrädern gefahren werden darf. "),
        new Array(false,"Fahren mit Wasserski oder Wassermotorrädern erlaubt. Wasserskiläufer und Wassermotorräder haben anderen Fahrzeugen Vorfahrt zu gewähren. "),
        new Array(false,"Genehmigungsfreie Übungsstrecke für das Fahren mit Wasserski oder Wassermotorrädern. ") ));
FA["1026"] = new Array(
    26,
    0,
    new Array(
        "Welche Bedeutung hat folgendes Tafelzeichen? ",1026),
    new Array(
        new Array(true,"Ende einer Gebots- oder Verbotsstrecke. "),
        new Array(false,"Streckenabschnitt für eine nicht frei fahrende Fähre. "),
        new Array(false,"Queren des Fahrwassers ist gestattet. "),
        new Array(false,"Wechseln der Fahrwasserseite ist gestattet. ") ));
FA["1027"] = new Array(
    27,
    0,
    new Array(
        "Welche Bedeutung hat folgendes Tafelzeichen? ",1027),
    new Array(
        new Array(true,"Verbot der Durchfahrt und Sperrung der Schifffahrt. "),
        new Array(false,"Verbot der Durchfahrt und Sperrung für Kleinfahrzeuge. "),
        new Array(false,"Verbot der Durchfahrt, jedoch für Kleinfahrzeuge ohne laufende Antriebsmaschine befahrbar. "),
        new Array(false,"Verbot der Durchfahrt, jedoch für Kleinfahrzeuge ohne Antriebsmaschine befahrbar. ") ));
FA["1028"] = new Array(
    28,
    0,
    new Array(
        "Welche Bedeutung haben folgende Schifffahrtszeichen? ",1028),
    new Array(
        new Array(true,"Brücke, Sperrwerk oder Schleuse geschlossen. "),
        new Array(false,"Anlage dauerhaft gesperrt. "),
        new Array(false,"Stoppsignal für alle Fahrzeuge. "),
        new Array(false,"Außergewöhnliche Schifffahrtsbehinderung. ") ));
FA["1029"] = new Array(
    29,
    0,
    new Array(
        "Welche Bedeutung haben folgende Schifffahrtszeichen? ",1029),
    new Array(
        new Array(true,"Anlage dauerhaft gesperrt. "),
        new Array(false,"Brücke, Sperrwerk oder Schleuse geschlossen. "),
        new Array(false,"Stoppsignal für alle Fahrzeuge. "),
        new Array(false,"Außergewöhnliche Schifffahrtsbehinderung. ") ));
FA["1030"] = new Array(
    30,
    0,
    new Array(
        "Was bedeuten diese Lichter vor einer Schleuse? ",1030),
    new Array(
        new Array(true,"Einfahrt frei, Gegenverkehr gesperrt. "),
        new Array(false,"Einfahrt frei, Schleusentor öffnet. "),
        new Array(false,"Schleuse in Betrieb, auf Einfahrtsignal gemäß Reihenfolge warten. "),
        new Array(false,"Schleuse in Betrieb, auf Ausfahrtsignal gemäß Reihenfolge warten. ") ));
FA["1031"] = new Array(
    31,
    0,
    new Array(
        "Welches Merkblatt enthält Hinweise für das Verhalten zum Schutz seltener Tiere und Pflanzen sowie zur Reinhaltung der Gewässer? "),
    new Array(
        new Array(true,"Die 10 goldenen Regeln für Wassersportler. "),
        new Array(false,"Die 15 goldenen Regeln für Wassersportler. "),
        new Array(false,"Die 10 Grundregeln für Wassersportler. "),
        new Array(false,"Die 15 Verhaltensregeln für Wassersportler. ") ));
FA["1032"] = new Array(
    32,
    0,
    new Array(
        "Wie kann mitgeholfen werden, die Lebensmöglichkeiten der Pflanzen- und Tierwelt in Gewässern und Feuchtgebieten zu bewahren und zu fördern? "),
    new Array(
        new Array(true,"Durch umweltbewusstes Verhalten und Beachtung der &quot;Zehn goldenen Regeln für das Verhalten von Wassersportlern in der Natur&quot;. "),
        new Array(false,"Durch umweltbewusstes Verhalten und Beachtung der &quot;Zehn Grundregeln für den Wassersport&quot;. "),
        new Array(false,"Durch umsichtiges Verhalten und Beachtung der Verkehrsvorschriften. "),
        new Array(false,"Durch vorausschauendes Fahren und Ausweichen entsprechend der Verkehrsvorschriften. ") ));
FA["1033"] = new Array(
    33,
    0,
    new Array(
        "Warum sollte man sich von Schilf- und Röhrichtzonen sowie von dicht bewachsenen Uferzonen möglichst weit fernhalten? "),
    new Array(
        new Array(true,"Weil diese Zonen vielfach Rast- und Brutplätze besonders schutzwürdiger Vögel oder Fischlaichplätze sind. "),
        new Array(false,"Weil in diesen Zonen die Gefahr von Grundberührungen besteht. "),
        new Array(false,"Weil durch die Pflanzen der Propeller blockiert werden könnte. "),
        new Array(false,"Weil in diesen Zonen badende Personen schwer zu erkennen sind. ") ));
FA["1034"] = new Array(
    34,
    0,
    new Array(
        "Warum soll ein kleines Fahrzeug nicht dicht an ein großes in Fahrt befindliches Fahrzeug heranfahren? "),
    new Array(
        new Array(true,"Es kann durch dessen Bug- oder Heckwelle kentern oder durch den Sog mit dem Fahrzeug kollidieren. "),
        new Array(false,"Dichtes Heranfahren ist ein Verstoß gegen die Grundregeln für das Verhalten im Verkehr. "),
        new Array(false,"Da es dem großen in Fahrt befindlichen Fahrzeug sonst nicht ausweichen kann. "),
        new Array(false,"Es kann durch dessen Bug- oder Heckwelle Seeschlag erleiden. ") ));
FA["1035"] = new Array(
    35,
    0,
    new Array(
        "Warum soll man möglichst gegen Strom und Wind anlegen? "),
    new Array(
        new Array(true,"Weil sich das Fahrzeug dabei sicherer manövrieren lässt. "),
        new Array(false,"Weil dadurch Sog und Wellenschlag vermieden wird. "),
        new Array(false,"Weil dadurch Einflüsse von Wellen und Wassertiefe ausgeglichen werden. "),
        new Array(false,"Weil dies die Steuerwirkung der Schraube erhöht. ") ));
FA["1036"] = new Array(
    36,
    0,
    new Array(
        "Wie verhält man sich beim Begegnen mit anderen Fahrzeugen in einem engen Fahrwasser? "),
    new Array(
        new Array(true,"Geschwindigkeit herabsetzen und ausreichenden Passierabstand halten. "),
        new Array(false,"Geschwindigkeit erhöhen, um das Begegnungsmanöver zügig durchzuführen. "),
        new Array(false,"Das gegen den Strom fahrende Fahrzeug ist ausweichpflichtig. "),
        new Array(false,"Das mit dem Strom fahrende Fahrzeug hat aufzustoppen. ") ));
FA["1037"] = new Array(
    37,
    0,
    new Array(
        "Welche Gefahren können entstehen, wenn ein kleines von einem größeren Fahrzeug überholt wird? "),
    new Array(
        new Array(true,"Das kleinere Fahrzeug kann durch Stau, Sog oder Schwell aus dem Kurs laufen und kollidieren oder querschlagen, in flachen Gewässern auf Grund laufen. "),
        new Array(false,"Das größere Fahrzeug kann durch Stau, Sog oder Schwell aus dem Kurs laufen und kollidieren oder querschlagen, in flachen Gewässern auf Grund laufen. "),
        new Array(false,"Das kleinere Fahrzeug kann durch Stau, Sog oder Schwell aus dem Kurs laufen und kollidieren oder kentern, in flachen Gewässern extrem versetzt werden. "),
        new Array(false,"Das größere Fahrzeug kann durch Wellenbildung aus dem Kurs laufen und kollidieren oder querschlagen, in flachen Gewässern auf Grund laufen. ") ));
FA["1038"] = new Array(
    38,
    0,
    new Array(
        "Wie viel Ankerkette bzw. -leine soll man unter günstigen Verhältnissen beim Ankern an einem geschützten Ankerplatz ausstecken? "),
    new Array(
        new Array(true,"Mindestens die dreifache Wassertiefe bei Kette oder die fünffache bei Leine. "),
        new Array(false,"Mindestens die fünffache Wassertiefe bei Kette oder die dreifache bei Leine. "),
        new Array(false,"Mindestens die dreifache Wassertiefe bei Kette oder die vierfache bei Leine. "),
        new Array(false,"Mindestens die vierfache Wassertiefe bei Kette oder die fünffache bei Leine. ") ));
FA["1039"] = new Array(
    39,
    0,
    new Array(
        "Woran kann man erkennen, ob der Anker hält? "),
    new Array(
        new Array(true,"Wenn beim Handauflegen auf die Ankerkette oder -leine kein Rucken zu verspüren ist und sich die Ankerpeilung nicht ändert. "),
        new Array(false,"Wenn Ankerkette oder -leine nicht vibrieren und sich der anliegende Magnetkompasskurs nicht verändert. "),
        new Array(false,"Wenn beim Handauflegen auf die Ankerkette oder -leine kein Rucken zu verspüren ist und das Fahrzeug nicht schwojt. "),
        new Array(false,"Wenn beim Handauflegen auf die Ankerkette oder -leine kein Rucken zu verspüren ist und sich die Ankerpeilung ändert. ") ));
FA["1040"] = new Array(
    40,
    0,
    new Array(
        "Welches ist der günstigste Anlaufwinkel beim Anlegen? "),
    new Array(
        new Array(true,"Ein möglichst spitzer Winkel. "),
        new Array(false,"Ein Winkel von 90° bis 100°. "),
        new Array(false,"Ein möglichst stumpfer Winkel. "),
        new Array(false,"Ein Winkel von 60° bis 70°. ") ));
FA["1041"] = new Array(
    41,
    0,
    new Array(
        "Wie verhält sich im Allgemeinen das Schiff im Rückwärtsgang bei einem rechtsdrehenden Propeller? "),
    new Array(
        new Array(true,"Das Heck dreht nach Backbord. "),
        new Array(false,"Das Heck dreht nach Steuerbord. "),
        new Array(false,"Der Kurs des Schiffes ändert sich nicht. "),
        new Array(false,"Der Bug dreht nach Backbord. ") ));
FA["1042"] = new Array(
    42,
    0,
    new Array(
        "Was bewirkt der Quickstopp? "),
    new Array(
        new Array(true,"Unterbrechung von Zündkontakt bzw. Kraftstoffzufuhr. "),
        new Array(false,"Automatisches Anlassen des Motors. "),
        new Array(false,"Kurze Unterbrechung des Motorlaufs. "),
        new Array(false,"Automatische Schubumkehr. ") ));
FA["1043"] = new Array(
    43,
    0,
    new Array(
        "Was ist zu unternehmen, wenn Treibstoff oder Öl in die Bilge gelangt? "),
    new Array(
        new Array(true,"Mit Lappen aufnehmen und umweltgerecht entsorgen. "),
        new Array(false,"Räume lüften und abwarten. "),
        new Array(false,"Gleichmäßig verteilen. "),
        new Array(false,"Mit entsprechendem Mittel neutralisieren. ") ));
FA["1044"] = new Array(
    44,
    0,
    new Array(
        "Was ist unter einem rechtsdrehenden Propeller zu verstehen? "),
    new Array(
        new Array(true,"Von achtern gesehen in Vorausfahrt Drehung des Propellers im Uhrzeigersinn. "),
        new Array(false,"Von vorne gesehen in Vorausfahrt Drehung des Propellers im Uhrzeigersinn. "),
        new Array(false,"Von achtern gesehen in Vorausfahrt Drehung des Propellers gegen den Uhrzeigersinn. "),
        new Array(false,"Von vorne gesehen in Rückwärtsfahrt Drehung des Propellers gegen den Uhrzeigersinn. ") ));
FA["1045"] = new Array(
    45,
    0,
    new Array(
        "Was ist unter einem linksdrehenden Propeller zu verstehen? "),
    new Array(
        new Array(true,"Von achtern gesehen in Vorausfahrt Drehung des Propellers gegen den Uhrzeigersinn. "),
        new Array(false,"Von vorne gesehen in Vorausfahrt Drehung des Propellers gegen den Uhrzeigersinn. "),
        new Array(false,"Von achtern gesehen in Vorausfahrt Drehung des Propellers im Uhrzeigersinn. "),
        new Array(false,"Von vorne gesehen in Rückwärtsfahrt Drehung des Propellers im Uhrzeigersinn. ") ));
FA["1046"] = new Array(
    46,
    0,
    new Array(
        "Was ist unter der indirekten Ruderwirkung (Radeffekt) des Propellers zu verstehen? "),
    new Array(
        new Array(true,"Das seitliche Versetzen des Hecks. "),
        new Array(false,"Das Versetzen nach vorne. "),
        new Array(false,"Das Versetzen nach hinten. "),
        new Array(false,"Das seitliche Versetzen des Bugs. ") ));
FA["1047"] = new Array(
    47,
    0,
    new Array(
        "Weshalb ist die Kenntnis der Propellerdrehrichtung von Bedeutung? "),
    new Array(
        new Array(true,"Sie hilft beim Manövrieren. "),
        new Array(false,"Sie hilft beim Kurshalten. "),
        new Array(false,"Sie hilft beim Überholen. "),
        new Array(false,"Sie hilft beim Begegnen. ") ));
FA["1048"] = new Array(
    48,
    0,
    new Array(
        "Welche Anlegeseite ist mit rechtsdrehendem Propeller empfehlenswert und warum? "),
    new Array(
        new Array(true,"Die Backbordseite - der Radeffekt zieht das Fahrzeug an die Pier. "),
        new Array(false,"Die Steuerbordseite - der Radeffekt zieht das Fahrzeug an die Pier. "),
        new Array(false,"Die Steuerbord- oder Backbordseite je nach Ruderlage. "),
        new Array(false,"Es gibt keine empfehlenswerte Anlegeseite. ") ));
FA["1049"] = new Array(
    49,
    0,
    new Array(
        "Was muss beim Tanken beachtet werden? "),
    new Array(
        new Array(true,"Motor abstellen, keine elektrischen Schalter betätigen, Vorbereitung gegen das Überlaufen von Kraftstoff treffen, kein offenes Feuer. "),
        new Array(false,"Motor in Leerlaufstellung, keine elektrischen Schalter betätigen, Vorbereitung gegen das Überlaufen von Kraftstoff treffen, kein offenes Feuer. "),
        new Array(false,"Fenster schließen, keine elektrischen Schalter betätigen, Vorbereitung gegen das Überlaufen von Kraftstoff treffen, kein offenes Feuer. "),
        new Array(false,"Motor abstellen, Feuerlöscher bereithalten, Vorbereitung gegen das Überlaufen von Kraftstoff treffen, kein offenes Feuer. ") ));
FA["1050"] = new Array(
    50,
    0,
    new Array(
        "Wodurch wird bei einem Fahrzeug mit Außenbordmotor und ohne Ruderanlage die Ruderwirkung erzielt? "),
    new Array(
        new Array(true,"Durch Schraubenstrom und Richtung des Propellers. "),
        new Array(false,"Durch Schraubenstrom und Anstellwinkel des Propellers. "),
        new Array(false,"Durch den Schraubenwiderstand und Anstellwinkel des Propellers. "),
        new Array(false,"Durch den Schraubenwiderstand und Richtung des Propellers. ") ));
FA["1051"] = new Array(
    51,
    0,
    new Array(
        "Weshalb setzt bei einem Fahrzeug mit Einbaumaschine und starrer Welle bei Aufnahme der Rückwärtsfahrt die Ruderwirkung erst relativ spät ein? "),
    new Array(
        new Array(true,"Weil sie erst mit Anströmung des Ruderblattes einsetzt. "),
        new Array(false,"Weil sich durch den Radeffekt ein Unterdruck am Propeller entwickelt. "),
        new Array(false,"Durch den Abstand von Propeller und Ruderblatt. "),
        new Array(false,"Weil sich durch den Radeffekt ein Unterdruck am Ruder entwickelt. ") ));
FA["1052"] = new Array(
    52,
    0,
    new Array(
        "Während der Fahrt sollte die Maschinenanlage ständig überwacht werden. Worauf muss besonders geachtet werden? "),
    new Array(
        new Array(true,"Motortemperatur, Öldruck, Ladekontrolle. "),
        new Array(false,"Kühlwasseraustritt, Drehzahlmesser, Keilriemenspannung. "),
        new Array(false,"Schraubendrehzahl, Getriebeöltemperatur, Öldruck. "),
        new Array(false,"Druck der Einspritzpumpe, Impellerpumpe, Ölpumpe. ") ));
FA["1053"] = new Array(
    53,
    0,
    new Array(
        "Die Temperatur der Antriebsmaschine überschreitet die zulässigen Grenzwerte. Was könnte die mögliche Ursache sein? "),
    new Array(
        new Array(true,"Defektes Thermostat, defekte Impellerpumpe, geschlossenes Seeventil, zu niedriger Kühlwasserstand. "),
        new Array(false,"Zu viel Motoröl, defekte Impellerpumpe, geschlossenes Seeventil, zu niedriger Kühlwasserstand. "),
        new Array(false,"Defektes Thermostat, defekte Impellerpumpe, geschlossenes Seeventil, zu hohe Batteriespannung. "),
        new Array(false,"Defektes Thermostat, defekte Kupplung, geschlossenes Seeventil, zu niedriger Kühlwasserstand. ") ));
FA["1054"] = new Array(
    54,
    0,
    new Array(
        "Die Ladekontrolllampe erlischt nach dem Starten nicht. Was könnte die mögliche Ursache sein? "),
    new Array(
        new Array(true,"Lichtmaschine bzw. Regler der Lichtmaschine defekt. "),
        new Array(false,"Zu hohe Motordrehzahl. "),
        new Array(false,"Keilriemen gerissen und hoher Stromverbrauch. "),
        new Array(false,"Anlasser ist nach dem Starten ausgefallen. ") ));
FA["1055"] = new Array(
    55,
    0,
    new Array(
        "Die Ölkontrollleuchte leuchtet nach dem Starten weiter. Was könnte die mögliche Ursache sein? "),
    new Array(
        new Array(true,"Druckschalter bzw. Öldruckpumpe defekt. "),
        new Array(false,"Zu viel Motoröl im Motor. "),
        new Array(false,"FI-Schalter defekt. "),
        new Array(false,"Zu hohe Motordrehzahl. ") ));
FA["1056"] = new Array(
    56,
    0,
    new Array(
        "Der Motor ist gestartet worden. Was kann die Ursache sein, wenn nach dem Einkuppeln der Antriebswelle der Motor stehenbleibt? "),
    new Array(
        new Array(true,"Blockierter Propeller. "),
        new Array(false,"Blockierte Kraftstoffzufuhr. "),
        new Array(false,"Verschmutzter Ölfilter. "),
        new Array(false,"Verschmutzter Luftfilter. ") ));
FA["1057"] = new Array(
    57,
    0,
    new Array(
        "Ein Außenborder mit gefülltem Tank bleibt während der Fahrt stehen. Was könnten die Ursachen sein? "),
    new Array(
        new Array(true,"Belüftungsschraube geschlossen; verstopfte Kraftstoffleitung. "),
        new Array(false,"Ansaugdüsen zu groß bzw. zu klein. "),
        new Array(false,"Tankdeckel ist offen. "),
        new Array(false,"Schraube an der Welle lose. ") ));
FA["1058"] = new Array(
    58,
    0,
    new Array(
        "Was sollte stets getan werden, bevor nach Ende einer Fahrt der Außenborder hochgekippt oder abgenommen wird? "),
    new Array(
        new Array(true,"Vergaser leerfahren, damit kein Kraftstoff ausläuft. "),
        new Array(false,"Kraftstoff auffüllen, wegen Tankkorrosion. "),
        new Array(false,"Quickstopp ziehen, wegen Verlust des Schlüssels. "),
        new Array(false,"Kraftstoffhahn offen lassen zur besseren Belüftung. ") ));
FA["1059"] = new Array(
    59,
    0,
    new Array(
        "Welche Einstellung führt bei Bootsmotoren zu einem besonders hohen Schadstoffausstoß und sollte unbedingt vermieden werden? "),
    new Array(
        new Array(true,"Verringerter Luftanteil beim Luft-Kraftstoff-Gemisch; erhöhter Ölanteil beim Mischungsverhältnis bei Zweitaktmotoren. "),
        new Array(false,"Erhöhter Luftanteil beim Luft-Kraftstoff-Gemisch; erhöhter Ölanteil beim Mischungsverhältnis bei Zweitaktmotoren. "),
        new Array(false,"Normales Luft-Kraftstoff-Gemisch; normales Mischungsverhältnis bei Zweitaktmotoren. "),
        new Array(false,"Erhöhter Luftanteil beim Luft-Kraftstoff-Gemisch; verringerter Ölanteil beim Mischungsverhältnis bei Zweitaktmotoren. ") ));
FA["1060"] = new Array(
    60,
    0,
    new Array(
        "Welche Vorkehrungen sind für das längere Verlassen des Fahrzeugs zu treffen? "),
    new Array(
        new Array(true,"Alle Seeventile schließen und den Hauptschalter des Bordnetzes ausschalten. "),
        new Array(false,"Kraftstoff- und Wassertank auffüllen und das Bordnetz aufladen. "),
        new Array(false,"Tagestank schließen und Kraftstofffilter entwässern. "),
        new Array(false,"Fahrzeug seefest hinterlassen und den Hafenmeister verständigen. ") ));
FA["1061"] = new Array(
    61,
    0,
    new Array(
        "Wie ist ein enges Gewässer zu befahren, wenn man sich am Ufer festgemachten Fahrzeugen nähert? "),
    new Array(
        new Array(true,"Verringerung der Geschwindigkeit, um schädlichen Sog und Wellenschlag zu vermeiden. "),
        new Array(false,"Beibehaltung der Geschwindigkeit, um durch Gleitfahrt schädlichen Sog und Wellenschlag auszuschließen. "),
        new Array(false,"Verringerung der Geschwindigkeit und nötigenfalls vom Rechtsfahrgebot abweichen. "),
        new Array(false,"Auf Höhe der festgemachten Fahrzeuge aufstoppen und überprüfen, dass kein Dritter behindert oder geschädigt wird. ") ));
FA["1062"] = new Array(
    62,
    0,
    new Array(
        "Wo sollen die Gasbehälter einer Flüssiggasanlage gelagert werden? "),
    new Array(
        new Array(true,"Möglichst an Deck, geschützt vor Sonneneinstrahlung, sonst in einem besonders abgeschlossenen Raum für Gasbehälter, der in Bodenhöhe eine Öffnung nach außenbords hat. "),
        new Array(false,"Möglichst unten im Schiff, geschützt vor Sonneneinstrahlung, sonst in einem besonders abgeschlossenen Raum für Gasbehälter, der in Bodenhöhe eine Öffnung nach außenbords hat. "),
        new Array(false,"Möglichst auf dem Vorschiff, geschützt vor Sonneneinstrahlung, sonst in einem besonders abgeschlossenen Raum für Gasbehälter, der in Bodenhöhe eine Öffnung nach außenbords hat. "),
        new Array(false,"Möglichst an Deck, geschützt vor Sonneneinstrahlung, sonst in einem besonders abgeschlossenen Raum für Gasbehälter, der oben belüftet ist. ") ));
FA["1063"] = new Array(
    63,
    0,
    new Array(
        "Warum sind die Flüssiggase Propan und Butan an Bord besonders gefährlich? "),
    new Array(
        new Array(true,"Beide Gase sind schwerer als Luft und bilden mit Luft ein explosives Gemisch. "),
        new Array(false,"Beide Gase sind leichter als Luft und bilden mit Luft ein explosives Gemisch. "),
        new Array(false,"Beide Gase sind schwerer als Wasser und bilden mit Wasser ein explosives Gemisch. "),
        new Array(false,"Beide Gase sind schwerer als Luft und bilden mit Wasser ein explosives Gemisch. ") ));
FA["1064"] = new Array(
    64,
    0,
    new Array(
        "Was ist zu tun, wenn Flüssiggas in das Innere des Bootes gelangt? "),
    new Array(
        new Array(true,"Gaszuführung absperren und für Lüftung sorgen. Außerdem keine elektrischen Schalter betätigen und keinen Funk und keine Mobiltelefone benutzen. "),
        new Array(false,"Gasleitung entleeren und für Lüftung sorgen. Außerdem keine elektrischen Schalter betätigen und keine Telefone benutzen. "),
        new Array(false,"Gaszuführung absperren und für Lüftung sorgen. Außerdem keine elektrischen Schalter betätigen und per Telefon Hilfe holen. "),
        new Array(false,"Gasleitung entleeren und die Gasfreiheit mit dem Feuerzeug prüfen sowie über Funk oder Mobiltelefon Hilfe anfordern ") ));
FA["1065"] = new Array(
    65,
    0,
    new Array(
        "Was ist vor Inbetriebnahme einer Flüssiggasanlage zu prüfen? "),
    new Array(
        new Array(true,"Die Anlage muss abgenommen sein, Leitungen und Anschlüsse müssen dicht sein. Haupthahn und andere Absperrventile sind zu öffnen. "),
        new Array(false,"Die Anlage muss abgenommen sein, die Inbetriebnahme darf nur durch eine besonders geprüfte Person erfolgen. "),
        new Array(false,"Die Anlage muss abgenommen sein und jährlich überprüft werden. Die Inbetriebnahme darf nur durch eine besonders geprüfte Person erfolgen. "),
        new Array(false,"Die Abnahme der Anlage darf nicht länger als drei Jahre zurückliegen. Haupthahn und andere Absperrventile sind zu öffnen. ") ));
FA["1066"] = new Array(
    66,
    0,
    new Array(
        "Was ist zu beachten, wenn eine Flüssiggasanlage außer Betrieb gesetzt wird? "),
    new Array(
        new Array(true,"Haupthahn und Absperrventile sind zu schließen. "),
        new Array(false,"Die Anlage ist gasfrei zu machen. "),
        new Array(false,"Gasflasche fachgerecht entsorgen. "),
        new Array(false,"Der Flüssiggasbehälter ist vollständig zu entleeren. ") ));
FA["1067"] = new Array(
    67,
    0,
    new Array(
        "Wie oft muss man aufblasbare Rettungsmittel warten lassen? "),
    new Array(
        new Array(true,"Entsprechend der Herstellerangabe, mindestens alle 2 Jahre. "),
        new Array(false,"Jährlich und nach jedem Einsatz oder Übungsgebrauch. "),
        new Array(false,"Entsprechend der Herstellerangabe, mindestens alle 3 Jahre. "),
        new Array(false,"Jährlich, jeweils vor Beginn der Wassersportsaison. ") ));
FA["1068"] = new Array(
    68,
    0,
    new Array(
        "Welcher Feuerlöscher ist für Sportboote zweckmäßig und wie oft muss man einen Feuerlöscher überprüfen lassen? "),
    new Array(
        new Array(true,"ABC-Pulver- und Schaumlöscher, mindestens alle 2 Jahre. "),
        new Array(false,"Feuerlöscher mit Löschschaum, mindestens einmal pro Jahr. "),
        new Array(false,"CO2-Feuerlöscher, mindestens alle zwei Jahre. "),
        new Array(false,"ABC-Pulverlöscher, mindestens einmal pro Jahr. ") ));
FA["1069"] = new Array(
    69,
    0,
    new Array(
        "Welche Maßnahmen muss man ergreifen, um einen Brand mit dem Feuerlöscher wirksam zu bekämpfen? "),
    new Array(
        new Array(true,"Luftzufuhr verhindern, Feuerlöscher erst am Brandherd einsetzen und das Feuer möglichst von unten bekämpfen. "),
        new Array(false,"Rauchabzug sicherstellen und Feuerlöscher rechtzeitig einsetzen, dabei den Löschstrahl möglichst in die lodernden Flammen halten. "),
        new Array(false,"Luftzufuhr verhindern und den Feuerlöscher mit sparsamen Löschstrahlstößen einsetzen, dabei das Feuer möglichst von oben bekämpfen. "),
        new Array(false,"Handhabungshinweise durchlesen und den Feuerlöscher sofort einsetzen, dabei das Feuer möglichst von unten bekämpfen. ") ));
FA["1070"] = new Array(
    70,
    0,
    new Array(
        "Wie hat man sich nach einem Zusammenstoß zu verhalten? "),
    new Array(
        new Array(true,"Hilfe leisten und so lange am Unfallort bleiben, bis ein weiterer Beistand nicht mehr erforderlich ist; alle erforderlichen Daten austauschen. "),
        new Array(false,"Hilfe leisten und so lange am Unfallort bleiben, bis ein weiterer Beistand nicht mehr erforderlich ist; die Wasserschutzpolizei benachrichtigen. "),
        new Array(false,"Hilfe leisten und so lange am Unfallort bleiben, bis ein weiterer Beistand nicht mehr erforderlich ist; Notsignal geben. "),
        new Array(false,"Hilfe leisten und so lange am Unfallort bleiben, bis ein weiterer Beistand nicht mehr erforderlich ist; Verschlusszustand herstellen. ") ));
FA["1071"] = new Array(
    71,
    0,
    new Array(
        "Welche Faktoren sind hauptsächlich für das Wettergeschehen, also für Wind und Niederschläge, ausschlaggebend? "),
    new Array(
        new Array(true,"Luftdruckänderung, Luftfeuchtigkeit und Temperatur. "),
        new Array(false,"Luftdruckänderung, Sonneneinstrahlung und Höhenlage. "),
        new Array(false,"Luftdruckänderung, Luftfeuchtigkeit und Jahreszeit. "),
        new Array(false,"Luftdruckänderung, Tageszeit und Temperatur. ") ));
FA["1072"] = new Array(
    72,
    0,
    new Array(
        "In welcher Situation dürfen Notsignale gegeben werden? "),
    new Array(
        new Array(true,"Wenn Gefahr für Leib oder Leben von Personen besteht und daher Hilfe benötigt wird. "),
        new Array(false,"Wenn Gefahr für Leib oder Leben von Personen besteht oder das Schiff nicht mehr sicher manövriert werden kann. "),
        new Array(false,"Wenn Gefahr für Leib oder Leben von Personen oder erhebliche Sachwerte besteht und daher Hilfe benötigt wird. "),
        new Array(false,"Wenn Gefahr für Leib oder Leben von Personen, erhebliche Sachwerte oder die maritime Umwelt besteht. ") ));
FA["1073"] = new Array(
    73,
    0,
    new Array(
        "Für welche Sportboote ist der Sportbootführerschein-Binnen vorgeschrieben? "),
    new Array(
        new Array(true,"Für Sportboote von mehr als 3,68 kW (5 PS) Motorleistung und weniger als 15 m Länge. "),
        new Array(false,"Für Sportboote von weniger als 3,68 kW (5 PS) Motorleistung und mehr als 15 m Länge. "),
        new Array(false,"Für Sportboote von mehr als 3,68 kW (5 PS) Motorleistung und mehr als 15 m Länge. "),
        new Array(false,"Für Sportboote von weniger als 3,68 kW (5 PS) Motorleistung und weniger als 15 m Länge. ") ));
FA["1074"] = new Array(
    74,
    0,
    new Array(
        "Auf welchen Gewässern gilt der der Sportbootführerschein-Binnen? "),
    new Array(
        new Array(true,"Auf den Binnenschifffahrtsstraßen. "),
        new Array(false,"Auf allen Landesgewässern. "),
        new Array(false,"Auf den Binnenschifffahrtsstraßen und allen Landesgewässern. "),
        new Array(false,"Auf allen Wasserstraßen im Binnenbereich. ") ));
FA["1075"] = new Array(
    75,
    0,
    new Array(
        "Aus welchen Gründen muss der Sportbootführerschein-Binnen entzogen werden? "),
    new Array(
        new Array(true,"Bei fehlender Tauglichkeit oder fehlender Zuverlässigkeit. "),
        new Array(false,"Bei zweifelhafter Tauglichkeit wegen Alkoholmissbrauch. "),
        new Array(false,"Bei zweifelhafter Zuverlässigkeit aus Altersgründen. "),
        new Array(false,"Bei fehlender Zuverlässigkeit wegen einer Ordnungswidrigkeit. ") ));
FA["1076"] = new Array(
    76,
    0,
    new Array(
        "Was beinhaltet die allgemeine Sorgfaltspflicht? "),
    new Array(
        new Array(true,"Vermeidung der Gefährdung von Menschenleben, von Beschädigungen an Fahrzeugen, Anlagen oder Ufern, Behinderung der Schifffahrt und Beeinträchtigung der Umwelt. "),
        new Array(false,"Gefährdung von Menschenleben, Beschädigungen an Fahrzeugen, Anlagen oder Ufern und Beeinträchtigung der Umwelt. "),
        new Array(false,"Es ist alles zu tun, was zur Vermeidung der Gefährdung von Menschenleben, Behinderung der Schifffahrt und Beeinträchtigung der Umwelt nötig ist. "),
        new Array(false,"Es ist alles zu tun, was zur Vermeidung von Beschädigungen an Fahrzeugen, Anlagen oder Ufern, Behinderung der Schifffahrt und Beeinträchtigung der Umwelt nötig ist. ") ));
FA["1077"] = new Array(
    77,
    0,
    new Array(
        "Unter welchen Umständen darf von den geltenden Bestimmungen über das Verhalten im Verkehr auf den Binnenschifffahrtsstraßen abgewichen werden? "),
    new Array(
        new Array(true,"Bei unmittelbar drohender Gefahr für sich oder andere. "),
        new Array(false,"Bei unmittelbar bevorstehender Begegnung. "),
        new Array(false,"Bei unmittelbar bevorstehendem Überholvorgang. "),
        new Array(false,"Bei mittelbar drohender Gefahr für sich oder andere. ") ));
FA["1078"] = new Array(
    78,
    0,
    new Array(
        "Welche Anforderung neben der körperlichen und geistigen Tauglichkeit und fachlichen Eignung muss der Führer eines Sportbootes auf allen Wasserstraßen erfüllen, wenn die größte Nutzleistung der Antriebsmaschine 3,68 kW oder weniger beträgt? "),
    new Array(
        new Array(true,"Mindestalter 16 Jahre. "),
        new Array(false,"Nachweis der Zuverlässigkeit. "),
        new Array(false,"Mindestalter 14 Jahre. "),
        new Array(false,"Besitz eines Sportbootführerscheins-Binnen oder eines gleichgestellten Befähigungszeugnisses. ") ));
FA["1079"] = new Array(
    79,
    0,
    new Array(
        "Welche Anforderung neben der körperlichen und geistigen Tauglichkeit und fachlichen Eignung muss der Führer eines Sportbootes auf allen Wasserstraßen erfüllen, wenn die Nutzleistung der Antriebsmaschine mehr als 3,68 kW beträgt? "),
    new Array(
        new Array(true,"Besitz eines Sportbootführerscheins-Binnen oder eines gleichgestellten Befähigungszeugnisses. "),
        new Array(false,"Nachweis der Zuverlässigkeit. "),
        new Array(false,"Mindestens 14 Jahre. "),
        new Array(false,"Mindestalter 16 Jahre. ") ));
FA["1080"] = new Array(
    80,
    0,
    new Array(
        "Welche Anforderungen muss der Rudergänger eines Sportbootes mit Antriebsmaschine grundsätzlich auf den Binnenschifffahrtsstraßen erfüllen? "),
    new Array(
        new Array(true,"Er muss mindestens 16 Jahre alt und körperlich, geistig und fachlich geeignet sein. "),
        new Array(false,"Er muss mindestens 18 Jahre alt und körperlich, geistig und fachlich geeignet sein. "),
        new Array(false,"Er muss mindestens 16 Jahre alt und Inhaber des Sportbootführerschein- Binnen sein. "),
        new Array(false,"Er muss mindestens 14 Jahre alt und körperlich, geistig und fachlich geeignet sein. ") ));
FA["1081"] = new Array(
    81,
    0,
    new Array(
        "Wo erhält man Auskünfte über Verkehrsbeschränkungen und aktuelle Information über Binnenschifffahrtsstraßen? "),
    new Array(
        new Array(true,"Bei der Wasser- und Schifffahrtsverwaltung, im Internet unter www.elwis.de und bei der Wasserschutzpolizei. "),
        new Array(false,"Bei einem Wasserwirtschaftsamt und bei der Wasserschutzpolizei. "),
        new Array(false,"In der Binnenschifffahrtsstraßenordnung Teil II. "),
        new Array(false,"In der Binnenschiffsuntersuchungsordnung. ") ));
FA["1082"] = new Array(
    82,
    0,
    new Array(
        "Wozu muss der Rudergänger eines Sportbootes zur sicheren Steuerung in der Lage sein? "),
    new Array(
        new Array(true,"Alle Informationen und Weisungen zu empfangen und zu geben, alle Schallzeichen wahrzunehmen und nach allen Seiten genügend freie Sicht zu haben. "),
        new Array(false,"Alle Informationen und Weisungen zu empfangen und zu geben. "),
        new Array(false,"Alle Schallzeichen wahrnehmen zu können und nach allen Seiten genügend freie Sicht zu haben. "),
        new Array(false,"Alle Informationen und Weisungen zu empfangen und zu geben und nach allen Seiten genügend freie Sicht zu haben. ") ));
FA["1083"] = new Array(
    83,
    0,
    new Array(
        "Bis zu welcher Schiffslänge berechtigt der Sportbootführerschein- Binnen zum Führen eines Sportbootes auf Binnenschifffahrtsstraßen? "),
    new Array(
        new Array(true,"Bis zu einer Länge von weniger als 15 m (ohne Ruder und Bugsprit). "),
        new Array(false,"Bis zu einer Länge von weniger als 25 m (mit Ruder und Bugsprit). "),
        new Array(false,"Bis zu einer Länge von weniger als 25 m (ohne Ruder und Bugsprit). "),
        new Array(false,"Bis zu einer Länge von weniger als 15 m (mit Ruder und Bugsprit). ") ));
FA["1084"] = new Array(
    84,
    0,
    new Array(
        "Wo findet man die allgemeinen Verkehrsregeln für die Binnenschifffahrtsstraßen und den Rhein? "),
    new Array(
        new Array(true,"Binnenschifffahrtsstraßen-Ordnung, Rheinschifffahrtspolizeiverordnung. "),
        new Array(false,"Binnenschiffsuntersuchungs-Ordnung, Rheinschifffahrtspolizeiverordnung. "),
        new Array(false,"Moselschifffahrtspolizeiverordnung, Donauschifffahrtspolizeiverordnung. "),
        new Array(false,"Wassermotorräderverordnung, Wasserskiverordnung. ") ));
FA["1085"] = new Array(
    85,
    0,
    new Array(
        "Wo findet man die allgemeinen Verkehrsregeln für die Mosel und die Donau? "),
    new Array(
        new Array(true,"Moselschifffahrtspolizeiverordnung, Donauschifffahrtspolizeiverordnung. "),
        new Array(false,"Donauschifffahrtspolizeiverordnung, Binnenschifffahrtsstraßen-Ordnung. "),
        new Array(false,"Moselschifffahrtspolizeiverordnung, Binnenschiffsuntersuchungs-Ordnung. "),
        new Array(false,"Wassermotorräderverordnung, Wasserskiverordnung. ") ));
FA["1086"] = new Array(
    86,
    0,
    new Array(
        "Wo findet man Regeln für den Verkehr von Wassermotorrädern und für das Wasserskilaufen? "),
    new Array(
        new Array(true,"Wassermotorräderverordnung, Wasserskiverordnung. "),
        new Array(false,"Moselschifffahrtspolizeiverordnung, Donauschifffahrtspolizeiverordnung. "),
        new Array(false,"Binnenschifffahrtsstraßen-Ordnung, Rheinschifffahrtspolizeiverordnung. "),
        new Array(false,"Moselschifffahrtspolizeiverordnung, Binnenschiffsuntersuchungs-Ordnung. ") ));
FA["1087"] = new Array(
    87,
    0,
    new Array(
        "Welche Maßnahmen sind zu treffen, wenn das Fahrzeug innerhalb des Fahrwassers bzw. der Fahrrinne Grundberührung hat? "),
    new Array(
        new Array(true,"Die Wasser- und Schifffahrtsverwaltung oder die Wasserschutzpolizei ist mit genauer Angabe der Hindernisstelle zu benachrichtigen. "),
        new Array(false,"Die Wasserschutzpolizei oder die Wasser- und Schifffahrtsverwaltung ist mit genauer Angabe der Schiffsdaten zu informieren. "),
        new Array(false,"Das Fahrzeug verbleibt vor Ort bis die Wasserschutzpolizei eintrifft. "),
        new Array(false,"Ein Baggerunternehmen ist zu verständigen, damit das Hindernis beseitigt wird. ") ));
FA["1088"] = new Array(
    88,
    0,
    new Array(
        "Was versteht man unter &bdquo;Fahrwasser&rdquo;? "),
    new Array(
        new Array(true,"Den Teil der Wasserstraße, der den örtlichen Umständen nach vom durchgehenden Schiffsverkehr benutzt wird. "),
        new Array(false,"Es ist der Teil der Wasserstraße, der durch die Ufer begrenzt ist. "),
        new Array(false,"Den Teil der Wasserstraße, in dem für den durchgehenden Schiffsverkehr bestimmte Breiten und Tiefen vorgehalten bzw. angestrebt werden. "),
        new Array(false,"Es ist der Teil der Wasserstraße, deren Tiefe bei 2,50 m und mehr beginnt. ") ));
FA["1089"] = new Array(
    89,
    0,
    new Array(
        "Was versteht man unter &bdquo;Fahrrinne&rdquo;? "),
    new Array(
        new Array(true,"Es ist der Teil der Wasserstraße, in dem für den durchgehenden Schiffsverkehr bestimmte Breiten und Tiefen vorgehalten bzw. angestrebt werden. "),
        new Array(false,"Den Teil der Wasserstraße, der den örtlichen Umständen nach vom durchgehenden Schiffsverkehr benutzt wird. "),
        new Array(false,"Es ist der Teil der Wasserstraße, deren Breite mindestens 150 m und deren Tiefe mindestens 3,00 m beträgt. "),
        new Array(false,"Es ist der Teil der Wasserstraße, deren Breite mindestens 88 m und deren Tiefe mindestens 2,50 m beträgt. ") ));
FA["1090"] = new Array(
    90,
    0,
    new Array(
        "Wie wird die Schifffahrt vom Erreichen bestimmter Wasserstände und Hochwassermarken informiert? "),
    new Array(
        new Array(true,"Durch Nautischen Informationsfunk, Information im Rundfunk, im Fernsehen und im Internet. "),
        new Array(false,"Durch Aushang bei Hafenämtern und Schleusen. "),
        new Array(false,"Durch Aushang bei Wasserschutzpolizei-Stationen. "),
        new Array(false,"Durch Bekanntgaben der Hochwasserschutzzentrale. ") ));
FA["1091"] = new Array(
    91,
    0,
    new Array(
        "Wo kann der Sportbootfahrer vor Ort das Erreichen bestimmter Wasserstände und Hochwassermarken feststellen? "),
    new Array(
        new Array(true,"An den Pegeln und ausgewiesenen Hochwassermarken. "),
        new Array(false,"An den Aushängen bei Hafenämtern und Schleusen. "),
        new Array(false,"An den Aushängen bei Wasserschutzpolizei-Stationen. "),
        new Array(false,"An den Pegeln und den Einsenkungsmarken der Fahrzeuge. ") ));
FA["1092"] = new Array(
    92,
    0,
    new Array(
        "Welche Auswirkungen kann das Erreichen der Hochwassermarke I für die Sportschifffahrt haben? "),
    new Array(
        new Array(true,"Geschwindigkeitsbeschränkung und Fahrverbot für Fahrzeuge ohne Sprechfunk. "),
        new Array(false,"Einstellung der Schifffahrt. "),
        new Array(false,"Verbot der Schifffahrt bei Nacht und unsichtigem Wetter. "),
        new Array(false,"Überholverbot und Fahrverbot für Fahrzeuge ohne Sprechfunk. ") ));
FA["1093"] = new Array(
    93,
    0,
    new Array(
        "Welche Auswirkungen hat das Erreichen der Hochwassermarke II für die Sportschifffahrt? "),
    new Array(
        new Array(true,"Einstellung der Schifffahrt. "),
        new Array(false,"Geschwindigkeitsbeschränkung und Fahrverbot für Fahrzeuge ohne Sprechfunk. "),
        new Array(false,"Überholverbot und Fahrverbot für Fahrzeuge ohne Sprechfunk. "),
        new Array(false,"Verbot der Schifffahrt bei Nacht und unsichtigem Wetter. ") ));
FA["1094"] = new Array(
    94,
    0,
    new Array(
        "In welche Richtung werden bei Flüssen die Uferseiten als rechtes bzw. linkes Ufer bezeichnet? "),
    new Array(
        new Array(true,"Von der Quelle bis zur Mündung. "),
        new Array(false,"Von der Mündung bis zur Quelle. "),
        new Array(false,"Bei der Bergfahrt liegt die rechte Uferseite rechts. "),
        new Array(false,"Bei der Talfahrt liegt die rechte Uferseite links. ") ));
FA["1095"] = new Array(
    95,
    0,
    new Array(
        "Was bedeutet &bdquo;zu Berg&rdquo; oder &bdquo;Bergfahrt&rdquo; auf Flüssen? "),
    new Array(
        new Array(true,"Die Fahrt in Richtung Quelle. "),
        new Array(false,"Die Fahrt über Grund. "),
        new Array(false,"Die Fahrt mit der Strömung. "),
        new Array(false,"Die Fahrt in Richtung Mündung. ") ));
FA["1096"] = new Array(
    96,
    0,
    new Array(
        "Was bedeutet &bdquo;zu Berg&rdquo; oder &bdquo;Bergfahrt&rdquo; auf Kanälen? "),
    new Array(
        new Array(true,"Die Fahrt, die in Teil II der Binnenschifffahrtsstraßen-Ordnung als Fahrt &bdquo;zu Berg&rdquo; oder &bdquo;Bergfahrt&rdquo; festgelegt ist. "),
        new Array(false,"Die Fahrt, die in Teil I der Binnenschifffahrtsstraßen-Ordnung als Fahrt &bdquo;zu Berg&rdquo; oder &bdquo;Bergfahrt&rdquo; festgelegt ist. "),
        new Array(false,"Die Fahrt in Richtung Quelle. "),
        new Array(false,"Die Fahrt gegen die Strömung. ") ));
FA["1097"] = new Array(
    97,
    0,
    new Array(
        "Welche Zeichen begrenzen die Fahrrinne zum rechten Ufer? "),
    new Array(
        new Array(true,"Rote Stumpftonnen oder Schwimmstangen. "),
        new Array(false,"Grüne Spitztonnen oder Schwimmstangen. "),
        new Array(false,"Rote Spierentonnen oder Schwimmstangen. "),
        new Array(false,"Grüne Spierentonnen oder Schwimmstangen. ") ));
FA["1098"] = new Array(
    98,
    0,
    new Array(
        "Welche Zeichen begrenzen die Fahrrinne zum linken Ufer? "),
    new Array(
        new Array(true,"Grüne Spitztonnen oder Schwimmstangen. "),
        new Array(false,"Rote Stumpftonnen oder Schwimmstangen. "),
        new Array(false,"Rote Spierentonnen oder Schwimmstangen. "),
        new Array(false,"Grüne Spierentonnen oder Schwimmstangen. ") ));
FA["1099"] = new Array(
    99,
    0,
    new Array(
        "Welche Fahrrinnenseite hat ein Bergfahrer an seiner Steuerbordseite und wie ist diese gekennzeichnet? "),
    new Array(
        new Array(true,"Die linke Fahrrinnenseite, gekennzeichnet durch grüne Spitztonnen oder Schwimmstangen. "),
        new Array(false,"Die rechte Fahrrinnenseite, gekennzeichnet durch rote Stumpftonnen oder Schwimmstangen. "),
        new Array(false,"Die linke Fahrrinnenseite, gekennzeichnet durch rote Stumpftonnen oder Schwimmstangen. "),
        new Array(false,"Die rechte Fahrrinnenseite, gekennzeichnet durch grüne Spitztonnen oder Schwimmstangen. ") ));
FA["1100"] = new Array(
    100,
    0,
    new Array(
        "Was bedeutet eine rot-grün gestreifte Tonne oder Schwimmstange und was ist zu beachten? "),
    new Array(
        new Array(true,"Fahrrinnenspaltung. Vorbeifahrt an beiden Seiten möglich. "),
        new Array(false,"Fahrrinnenspaltung. In Fahrtrichtung links halten. "),
        new Array(false,"Fahrrinnenspaltung. Vorbeifahrt nur an Steuerbord möglich. "),
        new Array(false,"Fahrrinnenspaltung. In Fahrtrichtung rechts halten. ") ));
FA["1101"] = new Array(
    101,
    0,
    new Array(
        "Mit welchen Zeichen werden Hindernisse wie zum Beispiel Buhnen und Kribben an der rechten Seite der Wasserstraße bezeichnet? "),
    new Array(
        new Array(true,"Stangen mit Toppzeichen: roter Kegel, Spitze nach unten, oder rot-weiß gestreifte Schwimmstange mit rotem Zylinder. "),
        new Array(false,"Stangen mit Toppzeichen: grüner Kegel, Spitze nach oben, oder grünweiß gestreifte Schwimmstange mit grünem Kegel. "),
        new Array(false,"Stangen mit Toppzeichen: roter Kegel, Spitze nach oben, oder rot-weiß gestreifte Schwimmstange mit rotem Zylinder. "),
        new Array(false,"Stangen mit Toppzeichen: grüner Kegel, Spitze nach unten, oder grünweiß gestreifte Schwimmstange mit grünem Kegel. ") ));
FA["1102"] = new Array(
    102,
    0,
    new Array(
        "Was kennzeichnet eine grün-weiß gestreifte Schwimmstange mit grünem Kegel, Spitze nach oben, oder eine grüne Tonne mit grünweiß gestreiftem Aufsatz mit grünem Kegel, Spitze nach oben? "),
    new Array(
        new Array(true,"Hindernis an der linken Seite der Wasserstraße. "),
        new Array(false,"Fahrrinnenrand an der linken Seite der Wasserstraße. "),
        new Array(false,"Hindernis an der rechten Seite der Wasserstraße. "),
        new Array(false,"Fahrrinnenrand an der rechten Seite der Wasserstraße. ") ));
FA["1103"] = new Array(
    103,
    0,
    new Array(
        "Was ist in Kanälen verboten? "),
    new Array(
        new Array(true,"Ankern. "),
        new Array(false,"Wenden. "),
        new Array(false,"Überholen. "),
        new Array(false,"Begegnen. ") ));
FA["1104"] = new Array(
    104,
    0,
    new Array(
        "Was bedeuten auf einem stillliegenden Fahrzeug zwei weiße Lichter übereinander? "),
    new Array(
        new Array(true,"Ein Ankerlieger, dessen Anker die Schifffahrt gefährden kann. "),
        new Array(false,"Ein stillliegender Schubverband. "),
        new Array(false,"Ein Ankerlieger, der zwei Anker ausgelegt hat. "),
        new Array(false,"Ein Fahrzeug über 135 m. ") ));
FA["1105"] = new Array(
    105,
    0,
    new Array(
        "Welches Licht setzt ein stillliegendes Fahrzeug? "),
    new Array(
        new Array(true,"Ein von allen Seiten sichtbares weißes Rundumlicht auf der Fahrwasserseite. "),
        new Array(false,"Ein weißes Topplicht und ein weißes Hecklicht. "),
        new Array(false,"Die Seitenlichter und ein sichtbares weißes Rundumlicht "),
        new Array(false,"Ein von allen Seiten sichtbares weißes Blinklicht auf der Fahrwasserseite. ") ));
FA["1106"] = new Array(
    106,
    0,
    new Array(
        "Wie sind Anker am Tage bezeichnet, die die Schifffahrt behindern können? "),
    new Array(
        new Array(true,"Mit einem gelben Döpper. "),
        new Array(false,"Mit einem weißen Döpper. "),
        new Array(false,"Mit einem grünen Döpper. "),
        new Array(false,"Mit einem roten Döpper. ") ));
FA["1107"] = new Array(
    107,
    0,
    new Array(
        "Was bedeutet dieses Tafelzeichen? ",1107),
    new Array(
        new Array(true,"Liegestelle für Fahrzeuge mit explosiven Stoffen, für Kleinfahrzeuge verboten. "),
        new Array(false,"Liegestelle für Fahrzeuge mit brennbaren Stoffen, für Kleinfahrzeuge verboten. "),
        new Array(false,"Liegestelle für Fahrzeuge mit gesundheitsgefährdeten Stoffen, für Kleinfahrzeuge verboten. "),
        new Array(false,"Liegestelle für alle Fahrzeuge, für Kleinfahrzeuge verboten. ") ));
FA["1108"] = new Array(
    108,
    0,
    new Array(
        "Was bedeuten diese Tafelzeichen? ",1108),
    new Array(
        new Array(true,"Liegestelle für Fahrzeuge ohne gefährliche Güter, auch für Kleinfahrzeuge. "),
        new Array(false,"Liegestelle für Fahrzeuge ohne gefährliche Güter, nicht für Kleinfahrzeuge. "),
        new Array(false,"Liegestelle für Fahrzeuge mit gefährlichen Gütern, auch für Kleinfahrzeuge. "),
        new Array(false,"Liegestelle für Fahrzeuge mit gefährlichen Gütern, nicht für Kleinfahrzeuge. ") ));
FA["1109"] = new Array(
    109,
    0,
    new Array(
        "Wo besteht ohne besondere Bezeichnung der Stellen bzw. Strecken ein allgemeines Liegeverbot? "),
    new Array(
        new Array(true,"Auf Schifffahrtskanälen und Schleusenkanälen. "),
        new Array(false,"Auf Schifffahrtskanälen und vor Schleusenkanälen. "),
        new Array(false,"Vor Brücken und Hochspannungsleitungen. "),
        new Array(false,"Vor Brücken und nach Hochspannungsleitungen. ") ));
FA["1110"] = new Array(
    110,
    0,
    new Array(
        "Welche Bedeutung hat das nachstehende Tafelzeichen? ",1110),
    new Array(
        new Array(true,"Empfohlene Durchfahrtsöffnung, Durchfahrt in beide Richtungen erlaubt. "),
        new Array(false,"Empfohlene Durchfahrt, Durchfahrt in Gegenrichtung verboten. "),
        new Array(false,"Die Durchfahrt ist nur durch diese Brückenöffnung und nur in eine Richtung gestattet. "),
        new Array(false,"Die Durchfahrt ist nur durch diese Brückenöffnung und in beide Richtungen gestattet. ") ));
FA["1111"] = new Array(
    111,
    0,
    new Array(
        "Welche Bedeutung haben die nachstehenden Tafelzeichen? ",1111),
    new Array(
        new Array(true,"Empfohlene Durchfahrt, Durchfahrt in Gegenrichtung verboten. "),
        new Array(false,"Empfohlene Durchfahrtsöffnung, Durchfahrt in beide Richtungen erlaubt. "),
        new Array(false,"Die Durchfahrt ist nur durch diese Brückenöffnung und in beide Richtungen gestattet. "),
        new Array(false,"Die Durchfahrt ist nur durch diese Brückenöffnung und nur in eine Richtung gestattet. ") ));
FA["1112"] = new Array(
    112,
    0,
    new Array(
        "Was bedeuten diese Tafelzeichen an Brücken? ",1112),
    new Array(
        new Array(true,"Durchfahrt nur zwischen den beiden Tafeln erlaubt. "),
        new Array(false,"Durchfahrt nur außerhalb der beiden Tafeln erlaubt. "),
        new Array(false,"Empfohlene Durchfahrt nur zwischen den beiden Tafeln. "),
        new Array(false,"Empfohlene Durchfahrt mit Gegenverkehr. ") ));
FA["1113"] = new Array(
    113,
    0,
    new Array(
        "Was bedeuten diese Tafelzeichen an Brücken? ",1113),
    new Array(
        new Array(true,"Empfohlene Durchfahrt nur zwischen den beiden Tafeln. "),
        new Array(false,"Durchfahrt nur zwischen den beiden Tafeln erlaubt. "),
        new Array(false,"Durchfahrt nur außerhalb der beiden Tafeln erlaubt. "),
        new Array(false,"Empfohlene Durchfahrt mit Gegenverkehr. ") ));
FA["1114"] = new Array(
    114,
    0,
    new Array(
        "Was bedeutet dieses Tafelzeichen an Brücken? ",1114),
    new Array(
        new Array(true,"Empfohlene Durchfahrt mit Gegenverkehr. "),
        new Array(false,"Empfohlene Durchfahrt ohne Gegenverkehr. "),
        new Array(false,"Empfohlene Durchfahrt nur in eine Richtung. "),
        new Array(false,"Durchfahrt nur neben der Tafel erlaubt. ") ));
FA["1115"] = new Array(
    115,
    0,
    new Array(
        "Was bedeuten diese Tafelzeichen an Brücken? ",1115),
    new Array(
        new Array(true,"Empfohlene Durchfahrt ohne Gegenverkehr. "),
        new Array(false,"Empfohlene Durchfahrt mit Gegenverkehr. "),
        new Array(false,"Empfohlene Durchfahrt in beide Richtungen. "),
        new Array(false,"Durchfahrt nur außerhalb der beiden Tafeln erlaubt. ") ));
FA["1116"] = new Array(
    116,
    0,
    new Array(
        "Was bedeutet dieses Tafelzeichen im Bereich eines Wehres? ",1116),
    new Array(
        new Array(true,"Verbot der Durchfahrt und Sperrung der Schifffahrt. "),
        new Array(false,"Gesperrte Wasserfläche, jedoch für Kleinfahrzeuge mit Antriebsmaschine befahrbar. "),
        new Array(false,"Gesperrte Wasserfläche, jedoch für Kleinfahrzeuge ohne Antriebsmaschine befahrbar. "),
        new Array(false,"Schutzbedürftige Anlage. ") ));
FA["1117"] = new Array(
    117,
    0,
    new Array(
        "Welche Bedeutung haben vor einer Schleuse ein rotes oder ein rotes und ein grünes Licht? "),
    new Array(
        new Array(true,"Einfahrt verboten, Öffnen der Schleuse wird vorbereitet. "),
        new Array(false,"Einfahrt verboten, schließen der Schleuse wird vorbereitet. "),
        new Array(false,"Ausfahrt verboten, Öffnen der Schleuse wird vorbereitet. "),
        new Array(false,"Ausfahrt verboten, schließen der Schleuse wird vorbereitet. ") ));
FA["1118"] = new Array(
    118,
    0,
    new Array(
        "In welcher Reihenfolge fahren Fahrzeuge, die nicht Kleinfahrzeuge sind, und Kleinfahrzeuge, die gemeinsam geschleust werden sollen, in die Schleuse ein? "),
    new Array(
        new Array(true,"Kleinfahrzeuge fahren erst nach den Fahrzeugen, die nicht Kleinfahrzeuge sind und nach Aufforderung durch die Schleusenaufsicht in die Schleuse ein. "),
        new Array(false,"Kleinfahrzeuge fahren vor den Fahrzeugen, die nicht Kleinfahrzeuge sind und vor Aufforderung durch die Schleusenaufsicht in die Schleuse ein. "),
        new Array(false,"Kleinfahrzeuge fahren vor den Fahrzeugen, die nicht Kleinfahrzeuge sind und ohne Aufforderung durch die Schleusenaufsicht in die Schleuse ein. "),
        new Array(false,"Kleinfahrzeuge fahren nach den Fahrzeugen, die nicht Kleinfahrzeuge sind und ohne Aufforderung durch die Schleusenaufsicht in die Schleuse ein. ") ));
FA["1119"] = new Array(
    119,
    0,
    new Array(
        "Mehrere Kleinfahrzeuge sollen gemeinsam vom Oberwasser in das Unterwasser geschleust werden. Worauf ist bei deren Einfahrt in die Schleuse und während des Schleusens besonders zu achten? "),
    new Array(
        new Array(true,"Das letzte Kleinfahrzeug muss so weit einfahren, dass es beim Leeren der Schleuse nicht auf den Drempel aufsetzen kann. Die Festmacherleinen sind so zu bedienen, dass Stöße gegen Schleusenwände, Schleusentore, andere Fahrzeuge vermieden werden und ein sicheres Fieren der Leinen möglich ist. "),
        new Array(false,"Das erste Kleinfahrzeug muss so weit einfahren, dass es beim Leeren der Schleuse nicht auf den Drempel aufsetzen kann. Die Festmacherleinen sind so zu bedienen, dass Stöße gegen Schleusenwände, Schleusentore, andere Fahrzeuge vermieden werden und ein sicheres Fieren der Leinen möglich ist. "),
        new Array(false,"Das erste Kleinfahrzeug muss so weit einfahren, dass es beim Füllen der Schleuse nicht auf den Drempel aufsetzen kann. Die Festmacherleinen sind so zu bedienen, dass Stöße gegen Schleusenwände, Schleusentore, andere Fahrzeuge vermieden werden und ein sicheres Fieren der Leinen möglich ist. "),
        new Array(false,"Das letzte Kleinfahrzeug muss so weit einfahren, dass es beim Füllen der Schleuse nicht auf den Drempel aufsetzen kann. Die Festmacherleinen sind so zu bedienen, dass Stöße gegen Schleusenwände, Schleusentore, andere Fahrzeuge vermieden werden und ein sicheres Fieren der Leinen möglich ist. ") ));
FA["1120"] = new Array(
    120,
    0,
    new Array(
        "Was bedeuten diese Lichter? ",1120),
    new Array(
        new Array(true,"Fahrzeug mit Maschinenantrieb länger als 110 m. "),
        new Array(false,"Schubverband kürzer als 110 m. "),
        new Array(false,"Schubverband länger als 110 m. "),
        new Array(false,"Fahrzeug ohne Maschinenantrieb länger als 110 m. ") ));
FA["1121"] = new Array(
    121,
    0,
    new Array(
        "Was bedeutet dieses Sichtzeichen? ",1121),
    new Array(
        new Array(true,"Schleppfahrzeug an der Spitze eines Schleppverbandes. "),
        new Array(false,"Fahrzeug, das vor Anker liegt. "),
        new Array(false,"Fahrzeuge mit Vorrang an einer Schleuse. "),
        new Array(false,"Fahrzeug eines Schleppverbandes. ") ));
FA["1122"] = new Array(
    122,
    0,
    new Array(
        "Was bedeutet dieses Sichtzeichen? ",1122),
    new Array(
        new Array(true,"Fahrzeug eines Schleppverbandes. "),
        new Array(false,"Fahrzeug, das vor Anker liegt. "),
        new Array(false,"Fahrzeuge mit Vorrang an einer Schleuse. "),
        new Array(false,"Schleppfahrzeug an der Spitze eines Schleppverbandes. ") ));
FA["1123"] = new Array(
    123,
    0,
    new Array(
        "Was bedeuten diese Lichter? ",1123),
    new Array(
        new Array(true,"Schubverband in Fahrt von vorne. "),
        new Array(false,"Schubverband in Fahrt von achtern. "),
        new Array(false,"Schubverband vor Anker liegend. "),
        new Array(false,"Schubverband unter 110 m Länge. ") ));
FA["1124"] = new Array(
    124,
    0,
    new Array(
        "Was bedeuten diese Lichter? ",1124),
    new Array(
        new Array(true,"Nicht frei fahrende Fähre. "),
        new Array(false,"Frei fahrende Fähre. "),
        new Array(false,"Schubverband von achtern. "),
        new Array(false,"Schubverband von Steuerbordseite. ") ));
FA["1125"] = new Array(
    125,
    0,
    new Array(
        "Was bedeuten diese Lichter? ",1125),
    new Array(
        new Array(true,"Frei fahrende Fähre. "),
        new Array(false,"Nicht frei fahrende Fähre. "),
        new Array(false,"Schubverband von achtern. "),
        new Array(false,"Schubverband von Steuerbordseite. ") ));
FA["1126"] = new Array(
    126,
    0,
    new Array(
        "Was bedeutet auf einem Fahrzeug ein blaues Licht? "),
    new Array(
        new Array(true,"Fahrzeug hat brennbare Stoffe geladen, Abstand beim Stillliegen 10 m. "),
        new Array(false,"Fahrzeug hat gesundheitsschädliche Stoffe geladen, Abstand beim Stillliegen 50 m. "),
        new Array(false,"Fahrzeug hat explosive Stoffe geladen, Abstand beim Stillliegen 100 m. "),
        new Array(false,"Fahrzeug der Überwachungsbehörden im Einsatz. ") ));
FA["1127"] = new Array(
    127,
    0,
    new Array(
        "Was bedeutet dieses Sichtzeichen? ",1127),
    new Array(
        new Array(true,"Fahrzeug hat brennbare Stoffe geladen, Abstand beim Stillliegen 10 m. "),
        new Array(false,"Fahrzeug hat gesundheitsschädliche Stoffe geladen, Abstand beim Stillliegen 50 m. "),
        new Array(false,"Fahrzeug hat explosive Stoffe geladen, Abstand beim Stillliegen 100 m. "),
        new Array(false,"Fahrzeug der Überwachungsbehörden im Einsatz. ") ));
FA["1128"] = new Array(
    128,
    0,
    new Array(
        "Was bedeuten auf einem Fahrzeug zwei blaue Lichter übereinander? "),
    new Array(
        new Array(true,"Fahrzeug hat gesundheitsschädliche Stoffe geladen, Abstand beim Stillliegen 50 m. "),
        new Array(false,"Fahrzeug hat explosive Stoffe geladen, Abstand beim Stillliegen 100 m. "),
        new Array(false,"Fahrzeug hat brennbare Stoffe geladen, Abstand beim Stillliegen 10 m. "),
        new Array(false,"Fahrzeug der Überwachungsbehörden im Einsatz. ") ));
FA["1129"] = new Array(
    129,
    0,
    new Array(
        "Was bedeutet dieses Sichtzeichen? ",1129),
    new Array(
        new Array(true,"Fahrzeug hat gesundheitsschädliche Stoffe geladen, Abstand beim Stillliegen 50 m. "),
        new Array(false,"Fahrzeug hat explosive Stoffe geladen, Abstand beim Stillliegen 100 m. "),
        new Array(false,"Fahrzeug hat brennbare Stoffe geladen, Abstand beim Stillliegen 10 m. "),
        new Array(false,"Fahrzeug der Überwachungsbehörden im Einsatz. ") ));
FA["1130"] = new Array(
    130,
    0,
    new Array(
        "Was bedeuten auf einem Fahrzeug drei blaue Lichter übereinander? "),
    new Array(
        new Array(true,"Fahrzeug hat explosive Stoffe geladen, Abstand beim Stillliegen 100 m. "),
        new Array(false,"Fahrzeug hat gesundheitsschädliche Stoffe geladen, Abstand beim Stillliegen 50 m. "),
        new Array(false,"Fahrzeug hat brennbare Stoffe geladen, Abstand beim Stillliegen 10 m. "),
        new Array(false,"Fahrzeug der Überwachungsbehörden im Einsatz. ") ));
FA["1131"] = new Array(
    131,
    0,
    new Array(
        "Was bedeutet dieses Sichtzeichen? ",1131),
    new Array(
        new Array(true,"Fahrzeug hat explosive Stoffe geladen, Abstand beim Stillliegen 100 m. "),
        new Array(false,"Fahrzeug hat gesundheitsschädliche Stoffe geladen, Abstand beim Stillliegen 50 m "),
        new Array(false,"Fahrzeug hat brennbare Stoffe geladen, Abstand beim Stillliegen 10 m. "),
        new Array(false,"Fahrzeug der Überwachungsbehörden im Einsatz. ") ));
FA["1132"] = new Array(
    132,
    0,
    new Array(
        "Welches Fahrzeug führt die nachstehende Tagbezeichnung? ",1132),
    new Array(
        new Array(true,"Ein Fahrzeug, dem die zuständige Behörde einen Vorrang zur Durchfahrt durch Stellen an denen eine bestimmte Reihenfolge gilt eingeräumt hat. "),
        new Array(false,"Fahrzeug unter 20 m Länge, für mehr als 12 Fahrgäste zugelassen. "),
        new Array(false,"Geschlepptes Fahrzeug eines Schleppverbandes. "),
        new Array(false,"Festgefahrenes Fahrzeug, das einseitig nicht passierbar ist. ") ));
FA["1133"] = new Array(
    133,
    0,
    new Array(
        "Ein Kleinfahrzeug unter Segel fährt nachts auf einer Binnenschifffahrtsstraße und führt ein weißes Rundumlicht im Topp. Wie wird zweckmäßigerweise die weiße Handlampe, die bei Annäherung anderer Fahrzeuge gezeigt werden muss, benutzt? "),
    new Array(
        new Array(true,"Die eigenen Segel anleuchten. "),
        new Array(false,"Das Wasser anleuchten. "),
        new Array(false,"Das heranfahrende Fahrzeug anleuchten. "),
        new Array(false,"Die Handlampe nach oben halten. ") ));
FA["1134"] = new Array(
    134,
    0,
    new Array(
        "Ein Kleinfahrzeug unter Segel fährt nachts auf einer Binnenschifffahrtsstraße und führt ein weißes Rundumlicht im Topp. Welche zusätzlichen Lichter müssen gesetzt werden, wenn der Motor angeworfen wird? "),
    new Array(
        new Array(true,"Seitenlichter unmittelbar nebeneinander oder in einer einzigen Laterne. "),
        new Array(false,"Es muss ein weißes Funkellicht geführt werden. "),
        new Array(false,"Es muss kein weiteres Licht geführt werden. "),
        new Array(false,"Es muss ein zweites weißes Topplicht geführt werden. ") ));
FA["1135"] = new Array(
    135,
    0,
    new Array(
        "Welche Lichter muss ein Kleinfahrzeug unter Motor führen, wenn es ein anderes Kleinfahrzeug ohne Maschinenantrieb schleppt? "),
    new Array(
        new Array(true,"Lichter eines Kleinfahrzeugs mit Maschinenantrieb. "),
        new Array(false,"Zwei weiße Lichter übereinander. "),
        new Array(false,"Weißes Rundumlicht. "),
        new Array(false,"Lichter eines Kleinfahrzeugs mit Maschinenantrieb und ein zweites weißes Topplicht. ") ));
FA["1136"] = new Array(
    136,
    0,
    new Array(
        "Welche Lichter muss ein geschlepptes Kleinfahrzeug führen? "),
    new Array(
        new Array(true,"Weißes Rundumlicht. "),
        new Array(false,"Lichter eines Kleinfahrzeugs mit Maschinenantrieb. "),
        new Array(false,"Zwei weiße Lichter übereinander. "),
        new Array(false,"Weißes Funkellicht. ") ));
FA["1137"] = new Array(
    137,
    0,
    new Array(
        "Wann gilt ein Sportboot auf den Binnenschifffahrtsstraßen nicht mehr als Kleinfahrzeug? "),
    new Array(
        new Array(true,"Wenn es 20 m oder länger ist. "),
        new Array(false,"Wenn es 15 m oder länger ist. "),
        new Array(false,"Wenn es 10 m oder länger ist. "),
        new Array(false,"Wenn es 18 m oder länger ist. ") ));
FA["1138"] = new Array(
    138,
    0,
    new Array(
        "Welchen Sichtwinkel und welche Farben haben die vorgeschriebenen Lichter an Bord? "),
    new Array(
        new Array(true,"Topplicht: weiß 225°, Hecklicht 135° weiß, Seitenlichter: Backbord rot und Steuerbord grün, jeweils 112,5°. "),
        new Array(false,"Topplicht: weiß 135°, Hecklicht 225° weiß, Seitenlichter: Backbord rot und Steuerbord grün, jeweils 112,5°. "),
        new Array(false,"Topplicht: weiß 225°, Hecklicht 112,5° weiß, Seitenlichter: Backbord rot und Steuerbord grün, jeweils 135°. "),
        new Array(false,"Topplicht: weiß 112,5°, Hecklicht 225° weiß, Seitenlichter: Backbord rot und Steuerbord grün, jeweils 112,5°. ") ));
FA["1139"] = new Array(
    139,
    0,
    new Array(
        "Welches Licht muss ein Kleinfahrzeug ohne Maschinenantrieb mindestens führen? "),
    new Array(
        new Array(true,"Ein von allen Seiten sichtbares weißes Licht. "),
        new Array(false,"Dreifarbenlaterne im Topp. "),
        new Array(false,"Seitenlichter. "),
        new Array(false,"Topp- und Hecklicht. ") ));
FA["1140"] = new Array(
    140,
    0,
    new Array(
        "Wie muss sich ein Segelfahrzeug auf einer Binnenschifffahrtsstraße, welches sich auf Kollisionskurs mit einem Kleinfahrzeug mit Maschinenantrieb befindet, verhalten? "),
    new Array(
        new Array(true,"Es hält Kurs und Geschwindigkeit bei. "),
        new Array(false,"Es wechselt den Kurs nach steuerbord und reduziert die Geschwindigkeit. "),
        new Array(false,"Es hält Kurs und reduziert die Geschwindigkeit. "),
        new Array(false,"Es wechselt den Kurs nach steuerbord und hält die Geschwindigkeit. ") ));
FA["1141"] = new Array(
    141,
    0,
    new Array(
        "Wie muss sich ein Fahrzeug mit Topplicht und Seitenlichtern gegenüber einem Kleinfahrzeug mit Seitenlichtern, welches sich auf Kollisionskurs befindet, verhalten? "),
    new Array(
        new Array(true,"Es hält Kurs und Geschwindigkeit bei. "),
        new Array(false,"Es wechselt den Kurs nach steuerbord und reduziert die Geschwindigkeit. "),
        new Array(false,"Es hält Kurs und reduziert die Geschwindigkeit. "),
        new Array(false,"Es muss ausweichen. ") ));
FA["1142"] = new Array(
    142,
    0,
    new Array(
        "Wie muss sich ein Kleinfahrzeug mit Maschinenantrieb gegenüber einem Segelsurfer, der auf Kollisionskurs liegt, verhalten? "),
    new Array(
        new Array(true,"Es muss ausweichen. "),
        new Array(false,"Es hält Kurs und Geschwindigkeit bei. "),
        new Array(false,"Es hält Kurs und reduziert die Geschwindigkeit. "),
        new Array(false,"Es muss nicht ausweichen. ") ));
FA["1143"] = new Array(
    143,
    0,
    new Array(
        "Wer ist ausweichpflichtig, wenn ein Segler mit Wind von Backbord einer Segelyacht, mit Wind von Steuerbord und einem schwarzen Kegel, auf Kollisionskurs begegnet? "),
    new Array(
        new Array(true,"Die Segelyacht mit Wind von Steuerbord, weil sie als Kleinfahrzeug mit Maschinenantrieb gilt. "),
        new Array(false,"Die Segelyacht mit Wind von Backbord, weil sie als Kleinfahrzeug unter Segel gilt. "),
        new Array(false,"Die Segelyacht mit Wind von Steuerbord, weil sie als Kleinfahrzeug unter Segel gilt. "),
        new Array(false,"Beide Segelyachten, weil eines als Kleinfahrzeug mit Maschinenantrieb gilt und das andere den Wind von Backbord hat. ") ));
FA["1144"] = new Array(
    144,
    0,
    new Array(
        "Wie lautet eine der drei Grundregeln der Binnenschifffahrtsstraßen- Ordnung, nach denen Kleinfahrzeuge unter Segel einander ausweichen? "),
    new Array(
        new Array(true,"Wenn sie den Wind nicht von derselben Seite haben, muss das Segelfahrzeug mit Wind von Backbord dem Segelfahrzeug mit Wind von Steuerbord ausweichen. "),
        new Array(false,"Wenn sie den Wind nicht von derselben Seite haben, muss das Segelfahrzeug mit Wind von Steuerbord dem Segelfahrzeug mit Wind von Backbord ausweichen. "),
        new Array(false,"Wenn sie den Wind von derselben Seite haben, muss das leeseitige dem luvseitigen ausweichen. "),
        new Array(false,"Wenn sie den Wind von derselben Seite haben, müssen beide Fahrzeuge ausweichen. ") ));
FA["1145"] = new Array(
    145,
    0,
    new Array(
        "Was bedeuten diese Lichter? ",1145),
    new Array(
        new Array(true,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an jeder Seite gestattet. Sog und Wellenschlag vermeiden "),
        new Array(false,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt nicht gestattet. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Steuerbordseite gestattet. Sog und Wellenschlag vermeiden. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet. ") ));
FA["1146"] = new Array(
    146,
    0,
    new Array(
        "Was bedeuten diese Sichtzeichen? ",1146),
    new Array(
        new Array(true,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an jeder Seite gestattet. Sog und Wellenschlag vermeiden. "),
        new Array(false,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt nicht gestattet. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Steuerbordseite gestattet. Sog und Wellenschlag vermeiden. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet. ") ));
FA["1147"] = new Array(
    147,
    0,
    new Array(
        "Was bedeuten diese Lichter? ",1147),
    new Array(
        new Array(true,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der rot-weißen Seite gestattet; rote Seite gesperrt. Sog und Wellenschlag vermeiden. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der rot-weißen Seite gestattet; rote Seite gesperrt. Vorbeifahrt mit unverminderter Geschwindigkeit möglich. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der roten Seite gestattet; rot-weiße Seite gesperrt. Vorbeifahrt mit unverminderter Geschwindigkeit möglich. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der roten Seite gestattet; rot-weiße Seite gesperrt. Sog und Wellenschlag vermeiden. ") ));
FA["1148"] = new Array(
    148,
    0,
    new Array(
        "Was bedeuten diese Sichtzeichen? ",1148),
    new Array(
        new Array(true,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der rot-weißen Seite gestattet; rote Seite gesperrt. Sog und Wellenschlag vermeiden. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der rot-weißen Seite gestattet; rote Seite gesperrt. Vorbeifahrt mit unverminderter Geschwindigkeit möglich. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der roten Seite gestattet; rot-weiße Seite gesperrt. Vorbeifahrt mit unverminderter Geschwindigkeit möglich. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der rote Seite gestattet; rot-weiße Seite gesperrt. Sog und Wellenschlag vermeiden. ") ));
FA["1149"] = new Array(
    149,
    0,
    new Array(
        "Was bedeuten diese Lichter? ",1149),
    new Array(
        new Array(true,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der grünen Seite gestattet; rote Seite gesperrt. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der grünen Seite gestattet; rote Seite gesperrt. Sog und Wellenschlag vermeiden. "),
        new Array(false,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an der grünen Seite gestattet. Vorbeifahrt an der roten Seite mit unverminderter Geschwindigkeit möglich. "),
        new Array(false,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an der roten Seite gestattet; grüne Seite gesperrt. ") ));
FA["1150"] = new Array(
    150,
    0,
    new Array(
        "Was bedeuten diese Sichtzeichen? ",1150),
    new Array(
        new Array(true,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der grünen Seite gestattet; rote Seite gesperrt. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der grünen Seite gestattet; rote Seite gesperrt. Sog und Wellenschlag vermeiden. "),
        new Array(false,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an der grünen Seite gestattet. Vorbeifahrt an der roten Seite mit unverminderter Geschwindigkeit möglich. "),
        new Array(false,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an der roten Seite gestattet; grüne Seite gesperrt. ") ));
FA["1151"] = new Array(
    151,
    0,
    new Array(
        "Was bedeuten im Fahrwasser nachstehende Zeichen? ",1151),
    new Array(
        new Array(true,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an der Seite mit dem grün-weiß-grünen Tafelzeichen gestattet; rot-weiß-rote Seite gesperrt. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Seite mit dem grün-weiß-grünen Tafelzeichen gestattet; rot-weiß-rote Seite gesperrt. Sog und Wellenschlag vermeiden. "),
        new Array(false,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an der Seite mit dem grün-weiß-grünen Tafelzeichen gestattet; rot-weiß-rote Seite gesperrt. Sog und Wellenschlag vermeiden. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Seite mit dem rot-weiß-roten Tafelzeichen gestattet; grün-weiß-grüne Seite gesperrt. ") ));
FA["1152"] = new Array(
    152,
    0,
    new Array(
        "Was bedeuten diese Lichter? ",1152),
    new Array(
        new Array(true,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an jeder Seite gestattet. "),
        new Array(false,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt nicht gestattet. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Steuerbordseite gestattet. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet. ") ));
FA["1153"] = new Array(
    153,
    0,
    new Array(
        "Was bedeuten diese Sichtzeichen? ",1153),
    new Array(
        new Array(true,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an jeder Seite gestattet. "),
        new Array(false,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt nicht gestattet. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Steuerbordseite gestattet. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet. ") ));
FA["1154"] = new Array(
    154,
    0,
    new Array(
        "Was bedeuten diese Sichtzeichen? ",1154),
    new Array(
        new Array(true,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an jeder Seite gestattet. "),
        new Array(false,"Schwimmendes Gerät bei der Arbeit. Vorbeifahrt nicht gestattet. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Steuerbordseite gestattet. Sog und Wellenschlag vermeiden. "),
        new Array(false,"Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet. ") ));
FA["1155"] = new Array(
    155,
    0,
    new Array(
        "Was bedeutet diese Tag- und Nachtbezeichnung? ",1155),
    new Array(
        new Array(true,"Schutzbedürftiges Fahrzeug, Vorbeifahrt in möglichst weitem Abstand, Geschwindigkeit vermindern, Sog und Wellenschlag vermeiden. "),
        new Array(false,"Ein festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet. "),
        new Array(false,"Ein festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an jeder Seite mit unverminderter Geschwindigkeit gestattet. "),
        new Array(false,"Schwimmende Anlage / Schwimmkörper. Vorbeifahrt in möglichst weitem Abstand, Geschwindigkeit vermindern, Sog und Wellenschlag vermeiden. ") ));
FA["1156"] = new Array(
    156,
    0,
    new Array(
        "Was bedeutet dieses Tafelzeichen? ",1156),
    new Array(
        new Array(true,"Gesperrte Wasserfläche, jedoch für Kleinfahrzeuge ohne Antriebsmaschine befahrbar. "),
        new Array(false,"Gesperrte Wasserfläche, jedoch für Kleinfahrzeuge ohne laufende Antriebsmaschine befahrbar. "),
        new Array(false,"Gesperrte Wasserfläche, für Kleinfahrzege nicht befahrbar. "),
        new Array(false,"Gesperrte Wasserfläche, Verbot der Durchfahrt und Sperrung der Schifffahrt. ") ));
FA["1157"] = new Array(
    157,
    0,
    new Array(
        "Was bedeutet dieses Tafelzeichen? ",1157),
    new Array(
        new Array(true,"Fahrverbot für Fahrzeuge mit Maschinenantrieb. "),
        new Array(false,"Fahrverbot für Kleinfahrzeuge mit Maschinenantrieb. "),
        new Array(false,"Fahrverbot für Fahrzeuge mit laufender Antriebsmaschine. "),
        new Array(false,"Fahrverbot für Kleinfahrzeuge mit laufender Antriebsmaschine. ") ));
FA["1158"] = new Array(
    158,
    0,
    new Array(
        "Wie ist eine geschützte Badezone gekennzeichnet? "),
    new Array(
        new Array(true,"Durch gelbe Tonnen. "),
        new Array(false,"Durch grüne Tonnen. "),
        new Array(false,"Durch rote Tonnen. "),
        new Array(false,"Durch rot-grün gestreifte Tonnen. ") ));
FA["1159"] = new Array(
    159,
    0,
    new Array(
        "Was bedeutet ein langer Ton? "),
    new Array(
        new Array(true,"Achtung! "),
        new Array(false,"Maschine geht rückwärts. "),
        new Array(false,"Fahrzeug ist manövrierunfähig. "),
        new Array(false,"Überholen nicht möglich. ") ));
FA["1160"] = new Array(
    160,
    0,
    new Array(
        "Was bedeuten vier kurze Töne? "),
    new Array(
        new Array(true,"Fahrzeug ist manövrierunfähig. "),
        new Array(false,"Maschine geht rückwärts. "),
        new Array(false,"Achtung! "),
        new Array(false,"Überholen nicht möglich. ") ));
FA["1161"] = new Array(
    161,
    0,
    new Array(
        "Was bedeuten fünf kurze Töne? "),
    new Array(
        new Array(true,"Überholen nicht möglich. "),
        new Array(false,"Maschine geht rückwärts. "),
        new Array(false,"Fahrzeug ist manövrierunfähig. "),
        new Array(false,"Achtung! ") ));
FA["1162"] = new Array(
    162,
    0,
    new Array(
        "Was bedeutet dieses Schallsignal? ",1162),
    new Array(
        new Array(true,"Wenden über Steuerbord. "),
        new Array(false,"Kursänderung über Steuerbord. "),
        new Array(false,"Kursänderung nach Backbord. "),
        new Array(false,"Wenden über Backbord. ") ));
FA["1163"] = new Array(
    163,
    0,
    new Array(
        "Was bedeutet dieses Schallsignal? ",1163),
    new Array(
        new Array(true,"Wenden über Backbord. "),
        new Array(false,"Wenden über Steuerbord. "),
        new Array(false,"Kursänderung nach Backbord. "),
        new Array(false,"Kursänderung nach Steuerbord. ") ));
FA["1164"] = new Array(
    164,
    0,
    new Array(
        "Was bedeutet dieses Schallsignal? ",1164),
    new Array(
        new Array(true,"Überholen an der Steuerbordseite des Vorausfahrenden. "),
        new Array(false,"Überholen an der Backbordseite des Vorausfahrenden. "),
        new Array(false,"Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Steuerbord. "),
        new Array(false,"Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Backbord. ") ));
FA["1165"] = new Array(
    165,
    0,
    new Array(
        "Was bedeutet dieses Schallsignal? ",1165),
    new Array(
        new Array(true,"Überholen an der Backbordseite des Vorausfahrenden. "),
        new Array(false,"Überholen an der Steuerbordseite des Vorausfahrenden. "),
        new Array(false,"Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Steuerbord. "),
        new Array(false,"Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Backbord. ") ));
FA["1166"] = new Array(
    166,
    0,
    new Array(
        "Was bedeutet dieses Schallsignal? ",1166),
    new Array(
        new Array(true,"Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Steuerbord. "),
        new Array(false,"Überholen an der Backbordseite des Vorausfahrenden. "),
        new Array(false,"Überholen an der Steuerbordseite des Vorausfahrenden. "),
        new Array(false,"Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Backbord. ") ));
FA["1167"] = new Array(
    167,
    0,
    new Array(
        "Was bedeutet dieses Schallsignal? ",1167),
    new Array(
        new Array(true,"Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Backbord. "),
        new Array(false,"Überholen an der Backbordseite des Vorausfahrenden. "),
        new Array(false,"Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Steuerbord. "),
        new Array(false,"Überholen an der Steuerbordseite des Vorausfahrenden. ") ));
FA["1168"] = new Array(
    168,
    0,
    new Array(
        "Was ist eine Folge sehr kurzer Töne? "),
    new Array(
        new Array(true,"Eine Folge von mindestens 6 Tönen, von je etwa einer viertel Sekunde Dauer und mit je einer viertel Sekunde Pause. "),
        new Array(false,"Eine Folge von mindestens 4 Tönen von je etwa einer viertel Sekunde Dauer und mit je einer viertel Sekunde Pause. "),
        new Array(false,"Eine Folge von mindestens 2 Tönen von je etwa einer viertel Sekunde Dauer und mit je einer viertel Sekunde Pause. "),
        new Array(false,"Eine Folge von mindestens 8 Tönen von je etwa einer viertel Sekunde Dauer und mit je einer viertel Sekunde Pause. ") ));
FA["1169"] = new Array(
    169,
    0,
    new Array(
        "Was bedeutet eine Folge sehr kurzer Töne? "),
    new Array(
        new Array(true,"Gefahr eines Zusammenstoßes. "),
        new Array(false,"Achtung! "),
        new Array(false,"Fahrzeug ist manövrierunfähig. "),
        new Array(false,"Überholen nicht möglich. ") ));
FA["1170"] = new Array(
    170,
    0,
    new Array(
        "Welche Schallsignale bzw. Zeichen sind zu geben, wenn das Boot manövrierunfähig geworden ist? "),
    new Array(
        new Array(true,"Vier kurze Töne. Bei Tag eine rote Flagge, bei Nacht ein rotes Licht im unteren Halbkreis schwenken. "),
        new Array(false,"Fünf kurze Töne. Bei Tag eine rote Flagge, bei Nacht ein rotes Licht im oberen Halbkreis. "),
        new Array(false,"Ein lang, vier kurze Töne. Bei Tag eine rote Flagge, bei Nacht ein rotes Licht setzen. "),
        new Array(false,"Eine Gruppe von kurzen und langen Tönen im Intervall geben. Bei Nacht ein rotes Blinklicht einschalten. ") ));
FA["1171"] = new Array(
    171,
    0,
    new Array(
        "Ein Fahrzeug zeigt an der Steuerbordseite seines Ruderhauses eine blaue Tafel mit weißem Funkellicht. Welche Bedeutung hat dieses Zeichen? "),
    new Array(
        new Array(true,"Fahrzeuge begegnen sich an Steuerbord. Dieses Zeichen gilt nicht für Kleinfahrzeuge, verpflichtet aber zu erhöhter Aufmerksamkeit. "),
        new Array(false,"Fahrzeuge begegnen sich an Steuerbord. Dieses Zeichen gilt nur für Kleinfahrzeuge. "),
        new Array(false,"Fahrzeuge begegnen sich an Steuerbord. Dieses Zeichen braucht gar nicht beachtet zu werden. "),
        new Array(false,"Fahrzeuge begegnen sich an Steuerbord. Dieses Zeichen gilt auch für alle Kleinfahrzeuge. ") ));
FA["1172"] = new Array(
    172,
    0,
    new Array(
        "Ein Sportfahrzeug fährt hinter einem Fahrzeug, das nicht Kleinfahrzeug ist, in den Schleusenvorhafen ein. Aus der Schleusenkammer kommt ein Fahrzeug, das an Steuerbord eine blaue Tafel mit einem weißen Funkellicht zeigt. Was bedeutet dieses Zeichen? "),
    new Array(
        new Array(true,"Das aus- und die einfahrenden Fahrzeuge passieren sich an der Steuerbordseite, das Kleinfahrzeug ist nur zu erhöhter Aufmerksamkeit verpflichtet. "),
        new Array(false,"Das aus- und die einfahrenden Fahrzeuge passieren sich an der Backbordseite, das Kleinfahrzeug ist nur zu erhöhter Aufmerksamkeit verpflichtet. "),
        new Array(false,"Das aus- und die einfahrenden Fahrzeuge passieren sich an der Steuerbordseite, das Kleinfahrzeug ist wartepflichtig. "),
        new Array(false,"Das aus- und die einfahrenden Fahrzeuge passieren sich an der Backbordseite, das Kleinfahrzeug hat Vorrang. ") ));
FA["1173"] = new Array(
    173,
    0,
    new Array(
        "Wo kann man von bestehenden Höchstgeschwindigkeiten auf den Binnenschifffahrtsstraßen Kenntnis erhalten? "),
    new Array(
        new Array(true,"In der Binnenschifffahrtsstraßen-Ordnung, bei der Wasser- und Schifffahrtsverwaltung und der Wasserschutzpolizei. "),
        new Array(false,"In der Binnenschiffsuntersuchungs-Ordnung, bei der Wasser- und Schifffahrtsverwaltung und der Wasserschutzpolizei. "),
        new Array(false,"In der Sportbootführerscheinverordnung-Binnen, bei der Wasser- und Schifffahrtsverwaltung und der Wasserschutzpolizei. "),
        new Array(false,"In der Binnenschifferpatentverordnung, bei der Wasser- und Schifffahrtsverwaltung und der Wasserschutzpolizei. ") ));
FA["1174"] = new Array(
    174,
    0,
    new Array(
        "Wie ist ein Überholmanöver durchzuführen? "),
    new Array(
        new Array(true,"Zügig überholen. Beteiligte Fahrzeuge nicht behindern. Verkehrslage und eventuelle Schallzeichen beachten. Ausreichend Abstand halten. "),
        new Array(false,"Zügig überholen. Gegebenenfalls das Fahrzeug stark beschleunigen, um schnell passieren zu können. "),
        new Array(false,"Zügig überholen; überholen nur auf der Steuerbordseite erlaubt, ausreichend Abstand halten. "),
        new Array(false,"Zügig überholen. Dicht am Ufer entlang fahren, eventuelle Schallzeichen müssen von Kleinfahrzeugen beachtet werden. ") ));
FA["1175"] = new Array(
    175,
    0,
    new Array(
        "Wann besteht die Gefahr eines Zusammenstoßes? "),
    new Array(
        new Array(true,"Wenn sich zwei Fahrzeuge bei gleichbleibender Peilung einander nähern. "),
        new Array(false,"Wenn sich zwei Fahrzeuge einander nähern und sich der Kurs der Fahrzeuge nicht ändert. "),
        new Array(false,"Wenn sich zwei Fahrzeuge einander nähern und sich der Kurs eines Fahrzeuges ändert. "),
        new Array(false,"Wenn sich zwei Fahrzeuge einander nähern und beide Fahrzeuge ihren Kurs nach steuerbord ändern. ") ));
FA["1176"] = new Array(
    176,
    0,
    new Array(
        "Wie müssen Ausweichmanöver durchgeführt werden? "),
    new Array(
        new Array(true,"Rechtzeitig, klar erkennbar und entschlossen. "),
        new Array(false,"Rechtzeitig, klar erkennbar und nach Steuerbord. "),
        new Array(false,"Rechtzeitig, klar erkennbar und nach Backbord. "),
        new Array(false,"Rechtzeitig, klar erkennbar und vorsichtig. ") ));
FA["1177"] = new Array(
    177,
    0,
    new Array(
        "Ein Kleinfahrzeug und ein Fahrzeug über 20 m Länge nähern sich auf kreuzenden Kursen. Es besteht die Gefahr eines Zusammenstoßes. Wer ist ausweichpflichtig? "),
    new Array(
        new Array(true,"Ausweichpflichtig ist das Kleinfahrzeug. "),
        new Array(false,"Ausweichpflichtig ist das Fahrzeug über 20 m Länge. "),
        new Array(false,"Ausweichpflichtig ist das Fahrzeug, welches das andere an seiner Steuerbordseite sieht. "),
        new Array(false,"Ausweichpflichtig ist das Fahrzeug, welches das andere an seiner Backbordseite sieht. ") ));
FA["1178"] = new Array(
    178,
    0,
    new Array(
        "Welche Fahrzeuge in Fahrt führen nachts nur ein weißes Rundumlicht? "),
    new Array(
        new Array(true,"Längsseits gekuppelte Kleinfahrzeuge. "),
        new Array(false,"Kleinfahrzeuge mit Maschinenantrieb unter 15 m Länge. "),
        new Array(false,"Kleinfahrzeuge ohne Maschinenantrieb und geschleppte Fahrzeuge. "),
        new Array(false,"Fahrzeuge die geschoben werden. ") ));
FA["1179"] = new Array(
    179,
    0,
    new Array(
        "Wie muss sich ein kreuzendes Kleinfahrzeug unter Segel am Wind in der Nähe eines Ufers gegenüber anderen verhalten? "),
    new Array(
        new Array(true,"Es darf ein anderes Kleinfahrzeug, das sein steuerbordseitiges Ufer anhält, nicht zum Ausweichen zwingen. "),
        new Array(false,"Es darf ein anderes Kleinfahrzeug, das sein steuerbordseitiges Ufer verlässt, nicht zum Ausweichen zwingen. "),
        new Array(false,"Es darf ein anderes Kleinfahrzeug, das sein backbordseitiges Ufer verlässt, zum Ausweichen zwingen. "),
        new Array(false,"Es darf ein anderes Kleinfahrzeug, das sein steuerbordseitiges Ufer anhält, zum Ausweichen zwingen. ") ));
FA["1180"] = new Array(
    180,
    0,
    new Array(
        "Wer ist ausweichpflichtig bzw. wer ist nicht ausweichpflichtig? ",1180),
    new Array(
        new Array(true,"Das Fahrzeug unter Segel ist ausweichpflichtig. "),
        new Array(false,"Das Fahrzeug unter Segel ist nicht ausweichpflichtig. "),
        new Array(false,"Das Fahrzeug unter Maschinenantrieb ist ausweichpflichtig. "),
        new Array(false,"Beide Fahrzeuge sind ausweichpflichtig. ") ));
FA["1181"] = new Array(
    181,
    0,
    new Array(
        "Was hat der Schiffsführer eines Kleinfahrzeugs beim Begegnen mit Fahrzeugen, die nicht Kleinfahrzeuge sind, zu beachten? "),
    new Array(
        new Array(true,"Kleinfahrzeuge sind gegenüber Fahrzeugen, die nicht Kleinfahrzeuge sind, ausweichpflichtig. Sie müssen für deren Kurs und zum Manövrieren notwendigen Raum lassen. "),
        new Array(false,"Kleinfahrzeuge sind gegenüber anderen Fahrzeugen, die nicht Kleinfahrzeuge sind, nicht ausweichpflichtig. "),
        new Array(false,"Kleinfahrzeuge sind gegenüber Fahrzeugen, die nicht Kleinfahrzeuge sind bei der Begegnung gleichgestellt. "),
        new Array(false,"Kleinfahrzeuge sind gegenüber Fahrzeugen, die nicht Kleinfahrzeuge sind ausweichpflichtig. Sie brauchen aber keinen besonderen Raum zum Manövrieren frei zu geben. ") ));
FA["1182"] = new Array(
    182,
    0,
    new Array(
        "Von Backbord kommend kreuzt ein Fahrzeug unter Segel mit einem schwarzen Kegel, Spitze nach unten, den Kurs eines Fahrzeuges mit Maschinenantrieb. Wer ist ausweichpflichtig? "),
    new Array(
        new Array(true,"Das Fahrzeug unter Segel mit einem schwarzen Kegel ist ausweichpflichtig. "),
        new Array(false,"Das Fahrzeug ohne Segel ist ausweichpflichtig. "),
        new Array(false,"Das Fahrzeug unter Segel mit einem schwarzen Kegel ist nicht ausweichpflichtig. "),
        new Array(false,"Beide Fahrzeuge sind ausweichpflichtig. ") ));
FA["1183"] = new Array(
    183,
    0,
    new Array(
        "Zwei Kleinfahrzeuge unter Segel A und B liegen auf Kollisionskurs; A führt einen schwarzen Kegel. Wer ist ausweichpflichtig? ",1183),
    new Array(
        new Array(true,"Fahrzeug A ist ausweichpflichtig. "),
        new Array(false,"Fahrzeug B ist ausweichpflichtig. "),
        new Array(false,"Ausweichpflichtig ist das Fahrzeug, welches das Andere an seiner Backbordseite sieht. "),
        new Array(false,"Ausweichpflichtig ist das Fahrzeug, welches den Wind von Backbord hat. ") ));
FA["1184"] = new Array(
    184,
    0,
    new Array(
        "Ein Fahrzeug unter Segel kreuzt eine Binnenschifffahrtsstraße. In der Fahwassermitte kommt ihm ein Fahrzeug mit Maschinenantrieb zu Berg entgegen. Wer ist ausweichpflichtig? "),
    new Array(
        new Array(true,"Fahrzeug mit Maschinenantrieb. "),
        new Array(false,"Fahrzeug in der Talfahrt. "),
        new Array(false,"Fahrzeug unter Segel. "),
        new Array(false,"Beide sind ausweichpflichtig. ") ));
FA["1185"] = new Array(
    185,
    0,
    new Array(
        "Zwei Kleinfahrzeuge A und B unter Segel liegen auf Kollisionskurs (Skizze). Wer ist ausweichpflichtig?# ",1185),
    new Array(
        new Array(true,"A ist ausweichpflichtig. Segelfahrzeuge mit Wind von Backbord müssen Segelfahrzeugen mit Wind von Steuerbord ausweichen. "),
        new Array(false,"B ist ausweichpflichtig. Segelfahrzeuge mit Wind von Backbord müssen Segelfahrzeugen mit Wind von Steuerbord ausweichen. "),
        new Array(false,"A ist ausweichpflichtig. Segelfahrzeuge mit Wind von Steuerbord müssen Segelfahrzeugen mit Wind von Backbord ausweichen. "),
        new Array(false,"B ist ausweichpflichtig. Segelfahrzeuge mit Wind von Steuerbord müssen Segelfahrzeugen mit Wind von Backbord ausweichen. ") ));
FA["1186"] = new Array(
    186,
    0,
    new Array(
        "Zwei Kleinfahrzeuge unter Segel liegen auf Kollisionskurs. Wer ist ausweichpflichtig? ",1186),
    new Array(
        new Array(true,"B ist ausweichpflichtig. Das luvseitige Boot muss dem leeseitigen ausweichen. "),
        new Array(false,"A ist ausweichpflichtig. Das luvseitige Boot muss dem leeseitigen ausweichen. "),
        new Array(false,"A ist ausweichpflichtig. Das leeseitige Boot muss dem luvseitigen ausweichen. "),
        new Array(false,"B ist ausweichpflichtig. Das leeseitige Boot muss dem luvseitigen ausweichen. ") ));
FA["1187"] = new Array(
    187,
    0,
    new Array(
        "Ein Kleinfahrzeug A segelt nachts auf Vorwindkurs stromab, Großsegel an Steuerbord. Backbord querab kommt ein grünes Seitenlicht eines Bootes B immer näher, das kein Topplicht führt. Wer ist ausweichpflichtig? "),
    new Array(
        new Array(true,"Das Kleinfahrzeug A ist ausweichpflichtig. Ein Boot mit Wind von Backbord muss ausweichen, wenn es nicht klar ausmachen kann, ob das luvseitige Boot den Wind von Steuerbord hat. "),
        new Array(false,"Das Kleinfahrzeug A ist ausweichpflichtig. Ein Boot mit Wind von Steuerbord muss ausweichen, wenn es nicht klar ausmachen kann, ob das luvseitige Boot den Wind von Backbord hat. "),
        new Array(false,"Boot B ist ausweichpflichtig, weil es sich bei Fahrzeug A um ein Kleinfahrzeug unter Segel handelt, das den Wind von Backbord hat. "),
        new Array(false,"Boot B ist ausweichpflichtig, weil es sich um ein Kleinfahrzeug handelt und Kleinfahrzeuge anderen Kleinfahrzeugen unter Segel ausweichen müssen. ") ));
FA["1188"] = new Array(
    188,
    0,
    new Array(
        "Der seitliche Abstand zwischen den Booten A, B und C verringert sich ständig. Welches Boot kann seinen Kurs beibehalten? ",1188),
    new Array(
        new Array(true,"Boot A, weil leeseitig. "),
        new Array(false,"Boot A, weil luvseitig. "),
        new Array(false,"Boot B, weil leeseitig. "),
        new Array(false,"Boot C, weil leeseitig. ") ));
FA["1189"] = new Array(
    189,
    0,
    new Array(
        "Wer ist wem gegenüber kurshaltepflichtig? ",1189),
    new Array(
        new Array(true,"A gegenüber B und C, B gegenüber C. "),
        new Array(false,"C gegenüber A und B, B gegenüber A. "),
        new Array(false,"B gegenüber C und A, A gegenüber C. "),
        new Array(false,"A gegenüber B und C, C gegenüber B. ") ));
FA["1190"] = new Array(
    190,
    0,
    new Array(
        "Was ist vorrangig zu beachten, wenn eine Jolle gekentert ist und sie nicht wieder aufgerichtet werden kann? "),
    new Array(
        new Array(true,"Vollständigkeit der Crew überprüfen, gegebenenfalls Hilfe leisten. Am Boot festhalten oder gegebenenfalls aufs Boot legen, Hilfe abwarten. "),
        new Array(false,"Sofort vorgeschriebene Notsignale geben, mit allen Mitteln versuchen, das Fahrzeug aus dem Fahrwasser zu bringen. "),
        new Array(false,"Auf das gekenterte Boot steigen und sich ruhig verhalten, um Wärmeverlust zu minimieren. Sollte das nicht möglich sein, ans benachbarte Ufer schwimmen und Hilfe holen. "),
        new Array(false,"Rettungswesten anlegen und mit geeigneten Mitteln Hilfe herbeiholen. Gegebenenfalls Segel bergen. ") ));
FA["1191"] = new Array(
    191,
    0,
    new Array(
        "Ein Segelboot gerät in das Feld einer Segelregatta, ohne selbst Teilnehmer zu sein. Welche Ausweichregeln sind zu beachten? "),
    new Array(
        new Array(true,"Die der Binnenschifffahrtsstraßen-Ordnung. "),
        new Array(false,"Die der Wettsegelbestimmungen. "),
        new Array(false,"Gegenüber Regattateilnehmern, die der Wettfahrtregeln, gegenüber anderen Fahrzeugen die der Binnenschifffahrtsstraßenordnung. "),
        new Array(false,"Fahrzeuge, die an einer Regatta teilnehmen, müssen unbeteiligten Fahrzeugen ausweichen. ") ));
FA["1192"] = new Array(
    192,
    0,
    new Array(
        "Ein Kleinfahrzeug unter Segel kreuzt nachts das Fahrwasser. An Backbord tauchen die nachstehenden Lichter eines Fahrzeugs auf, das in spitzem Winkel den Kurs des Kleinfahrzeugs unter Segel kreuzen will. Was bedeuten diese Lichter? ",1192),
    new Array(
        new Array(true,"Kleinfahrzeug mit Maschinenantrieb. "),
        new Array(false,"Frei fahrende Fähre. "),
        new Array(false,"Schubverband von vorne. "),
        new Array(false,"Geschlepptes Kleinfahrzeug. ") ));
FA["1193"] = new Array(
    193,
    0,
    new Array(
        "Ein Kleinfahrzeug unter Segel kreuzt nachts das Fahrwasser. An Backbord tauchen die nachstehenden Lichter eines Fahrzeugs auf, das in spitzem Winkel den Kurs des Kleinfahrzeugs unter Segel kreuzen will. Wer ist ausweichpflichtig? ",1193),
    new Array(
        new Array(true,"Kleinfahrzeug mit Maschinenantrieb. "),
        new Array(false,"Kleinfahrzeug unter Segel. "),
        new Array(false,"Kleinfahrzeug, welches das Andere auf der Backbordseite hat. "),
        new Array(false,"Beide sind ausweichpflichtig. ") ));
FA["1194"] = new Array(
    194,
    0,
    new Array(
        "Ein Kleinfahrzeug unter Segel und mit Maschinenantrieb kreuzt nachts stromauf. Ein Fahrzeug kommt entgegen, das nur ein weißes Licht führt. Was bedeutet dieses Licht? "),
    new Array(
        new Array(true,"Kleinfahrzeug ohne Maschinenantrieb. "),
        new Array(false,"Kleinfahrzeug mit Maschinenantrieb. "),
        new Array(false,"Kleinfahrzeug unter Segel. "),
        new Array(false,"Kleinfahrzeug unter Segel mit Maschinenantrieb. ") ));
FA["1195"] = new Array(
    195,
    0,
    new Array(
        "Ein Kleinfahrzeug unter Segel kreuzt nachts im Fahrwasser. Von achtern kommt ein Fahrzeug auf das eine Zweifarbenlaterne und ein Topplicht führt. Was bedeuten diese Lichter? "),
    new Array(
        new Array(true,"Kleinfahrzeug mit Maschinenantrieb. "),
        new Array(false,"Kleinfahrzeug ohne Maschinenantrieb. "),
        new Array(false,"Kleinfahrzeug unter Segel. "),
        new Array(false,"Kleinfahrzeug unter Segel mit Maschinenantrieb. ") ));
FA["1196"] = new Array(
    196,
    0,
    new Array(
        "Was bedeuten nachts auf einer Binnenschifffahrtsstraße die nachstehenden Lichter? ",1196),
    new Array(
        new Array(true,"Sog und Wellenschlag vermeiden. "),
        new Array(false,"Keine Durchfahrt für Kleinfahrzeuge. "),
        new Array(false,"Sperrung der Schifffahrt. "),
        new Array(false,"Durchfahrt für Kleinfahrzeuge. ") ));
FA["1197"] = new Array(
    197,
    0,
    new Array(
        "Wo ist die Geschwindigkeit zu vermindern, um Sog und Wellenschlag zu vermeiden? "),
    new Array(
        new Array(true,"Vor Hafenmündungen, an Lade-, Lösch- und Liegeplätzen, in der Nähe nicht frei fahrender Fähren, auf gekennzeichneten Strecken, in der Nähe schwimmender Geräte bei der Arbeit. "),
        new Array(false,"Vor Einmündungen, an Lade-, Lösch- und Liegeplätzen, in der Nähe nicht frei fahrender Fähren, auf gekennzeichneten Strecken, in der Nähe schwimmender Geräte bei der Arbeit. "),
        new Array(false,"Vor Hafenmündungen, an Lade-, Lösch- und Liegeplätzen, in der Nähe frei fahrender Fähren, auf gekennzeichneten Strecken, in der Nähe schwimmender Geräte bei der Arbeit. "),
        new Array(false,"Vor Hafenmündungen, an Lade-, Lösch- und Liegeplätzen, in der Nähe nicht frei fahrender Fähren, auf gekennzeichneten Strecken, in der Nähe schwimmender Schifffahrtszeichen. ") ));
FA["1198"] = new Array(
    198,
    0,
    new Array(
        "Was bedeutet dieses Tafelzeichen? ",1198),
    new Array(
        new Array(true,"Vorgeschriebene Fahrtrichtung. "),
        new Array(false,"Fahrtrichtung nach links verboten. "),
        new Array(false,"Vorgeschriebene Fahrtrichtung nur für Kleinfahrzeuge. "),
        new Array(false,"Empfohlene Fahrtrichtung. ") ));
FA["1199"] = new Array(
    199,
    0,
    new Array(
        "Welche Bedeutung hat das nachstehende Tafelzeichen, wenn das rote Licht leuchtet? ",1199),
    new Array(
        new Array(true,"Verbot der Einfahrt in einen Hafen oder eine Nebenwasserstraße. "),
        new Array(false,"Verbot des Überholens auf dem Streckenabschnitt. "),
        new Array(false,"Achtung Doppelschleuse, linke Kammer gesperrt. "),
        new Array(false,"Achtung Ausfahrt aus Hafen oder Nebenfahrwasser. ") ));
FA["1200"] = new Array(
    200,
    0,
    new Array(
        "Was bedeutet dieses Tafelzeichen? ",1200),
    new Array(
        new Array(true,"10 km/h Höchstgeschwindigkeit gegenüber dem Ufer. "),
        new Array(false,"10 km/h Höchstgeschwindigkeit gegenüber der Strömung. "),
        new Array(false,"10 km/h Höchstgeschwindigkeit für Kleinfahrzeuge. "),
        new Array(false,"10 km/h für größere Fahrzeuge. ") ));
FA["1201"] = new Array(
    201,
    0,
    new Array(
        "Was bedeutet dieses Tafelzeichen? ",1201),
    new Array(
        new Array(true,"Gebot: Besondere Vorsicht walten lassen. "),
        new Array(false,"Gebot: Geradeaus zu fahren. "),
        new Array(false,"Gebot: Achtungssignal geben. "),
        new Array(false,"Gebot: Vor dem Schild anhalten. ") ));
FA["1202"] = new Array(
    202,
    0,
    new Array(
        "Was bedeutet dieses Tafelzeichen? ",1202),
    new Array(
        new Array(true,"Wendeverbot. "),
        new Array(false,"Verbotene Fahrtrichtung rechts oder links. "),
        new Array(false,"Verbote in beiden angezeigten Richtungen zu fahren. "),
        new Array(false,"Wendeverbot in der Mitte des Fahrwassers. ") ));
FA["1203"] = new Array(
    203,
    0,
    new Array(
        "Was bedeutet dieses Tafelzeichen? ",1203),
    new Array(
        new Array(true,"Empfohlener Wendeplatz. Stillliegen für alle Fahrzeuge verboten. "),
        new Array(false,"Empfohlener Wendeplatz. Stillliegen von Kleinfahrzeugen erlaubt. "),
        new Array(false,"Vorgeschriebener Wendeplatz. Stillliegen für alle Fahrzeuge verboten. "),
        new Array(false,"Vorgeschriebener Wendeplatz. Stillliegen von Kleinfahrzeugen erlaubt. ") ));
FA["1204"] = new Array(
    204,
    0,
    new Array(
        "Was bedeutet dieses Tafelzeichen? ",1204),
    new Array(
        new Array(true,"Wehr. "),
        new Array(false,"Hubbrücke. "),
        new Array(false,"Schleuse. "),
        new Array(false,"Sicherheitstor. ") ));
FA["1205"] = new Array(
    205,
    0,
    new Array(
        "Welche Sichtbeeinträchtigungen führen zu unsichtigem Wetter? "),
    new Array(
        new Array(true,"Nebel, Schneefall, starker Regen. "),
        new Array(false,"Dunkelheit, Nebel, Schneefall, starker Regen. "),
        new Array(false,"Nacht, Schneefall, starker Regen. "),
        new Array(false,"Dämmerung, Nebel, Schneefall, starker Regen. ") ));
FA["1206"] = new Array(
    206,
    0,
    new Array(
        "Wie muss ein Fahrzeug ausgerüstet sein, um bei unsichtigem Wetter zu fahren? "),
    new Array(
        new Array(true,"Mit einer für die Binnenschifffahrt zugelassenen funktionsfähigen Radaranlage und einer Sprechfunkanlage für den Binnenschifffahrtsfunk. "),
        new Array(false,"Mit einer für die Binnenschifffahrt zugelassenen funktionsfähigen Radaranlage und einer Sprechfunkanlage ohne ATIS. "),
        new Array(false,"Mit einer für die Binnenschifffahrt zugelassenen funktionsfähigen Radaranlage und einer Sprechfunkanlage für den Seefunkdienst. "),
        new Array(false,"Mit einer Radaranlage ohne Wendeanzeiger und einer Sprechfunkanlage für den Binnenschifffahrtsfunk. ") ));
FA["1207"] = new Array(
    207,
    0,
    new Array(
        "Was ist zu beachten, wenn während der Fahrt unsichtiges Wetter eintritt? "),
    new Array(
        new Array(true,"Auf bestimmten Wasserstraßen ist ohne Radar und Sprechfunk die Fahrt unverzüglich einzustellen. "),
        new Array(false,"Auf allen Wasserstraßen ist ohne Radar und Sprechfunk die Fahrt unverzüglich einzustellen. "),
        new Array(false,"Auf bestimmten Wasserstraßen ist ohne Radar und AIS die Fahrt unverzüglich einzustellen. "),
        new Array(false,"Auf allen Wasserstraßen ist ohne Radar und ECDIS die Fahrt unverzüglich einzustellen. ") ));
FA["1208"] = new Array(
    208,
    0,
    new Array(
        "Welchen Vorteil bietet ein Radarreflektor auf einem Sportboot? "),
    new Array(
        new Array(true,"Bessere Erkennbarkeit des Sportbootes auf Radarbildschirmen. "),
        new Array(false,"Bessere Erkennbarkeit des Sportbootes bei Nacht. "),
        new Array(false,"Bessere Erkennbarkeit des Sportbootes bei Taglicht. "),
        new Array(false,"Bessere Erkennbarkeit des Sportbootes bei unsichtigem Wetter. ") ));
FA["1209"] = new Array(
    209,
    0,
    new Array(
        "Welche technische Einrichtung gegen einen Stromschlag muss in der Landstromversorgung unbedingt installiert sein? "),
    new Array(
        new Array(true,"Ein Fehlerstromschutzschalter. "),
        new Array(false,"Ein geringer Ladungsstrom ist ungefährlich. "),
        new Array(false,"Ein Überspannungsschutz. "),
        new Array(false,"Ein Schutzkleinspannungsschalter. ") ));
FA["1210"] = new Array(
    210,
    0,
    new Array(
        "Welches Schallsignal ist zu geben, wenn in einer Notsituation Hilfe gebraucht wird? "),
    new Array(
        new Array(true,"Wiederholte lange Töne geben oder Gruppen von Glockenschlägen. "),
        new Array(false,"Wiederholte kurze Töne geben, keine Glockenschläge. "),
        new Array(false,"Einen langen Ton geben, vereinzelt Glockenschläge. "),
        new Array(false,"Drei kurze Töne geben, keine Glockenschläge. ") ));
FA["1211"] = new Array(
    211,
    0,
    new Array(
        "Welche Bedeutung hat am Tag das Kreisen einer roten Flagge auf einem Wasserfahrzeug? "),
    new Array(
        new Array(true,"Ein in Not befindliches Fahrzeug, dass durch Sichtzeichen Hilfe herbeirufen will. "),
        new Array(false,"Ein manövrierbehindertes Fahrzeug, dass durch Sichtzeichen Hilfe herbeirufen will. "),
        new Array(false,"Keine Bedeutung für den durchgehenden Schiffsverkehr. "),
        new Array(false,"Schützenswertes Fahrzeug, Vermeidung von Sog und Wellenschlag. ") ));
FA["1212"] = new Array(
    212,
    0,
    new Array(
        "Welche Notsignale kann ein Segelsurfer auf Binnenschifffahrtsstraßen geben? "),
    new Array(
        new Array(true,"Kreisförmiges Schwenken der Arme oder eines Gegenstandes, lange Töne mit einer Pfeife oder langsames Heben und Senken der seitlich ausgestreckten Arme. "),
        new Array(false,"Kreisförmiges Schwenken einer grünen Flagge, die mit anderen Zeichen nicht verwechselt werden kann. "),
        new Array(false,"Wiederholt lange Gruppen von Glockenschlägen. "),
        new Array(false,"Kreisförmiges Schwenken der Arme ist zu vermeiden, das Surfsegel ist möglichst senkrecht zu stellen. ") ));
FA["1213"] = new Array(
    213,
    0,
    new Array(
        "Was ist mit Abfällen jeglicher Art zu tun, die an Bord anfallen? "),
    new Array(
        new Array(true,"An Bord sammeln und an Land in den entsprechenden Abfallsammelbehältern umweltgerecht entsorgen. "),
        new Array(false,"An Bord sammeln und bei einer Liegestelle an Land stellen. "),
        new Array(false,"An Bord sammeln und nur in geschlossenen Behältern über Bord werfen. "),
        new Array(false,"An Bord sammeln. Die Abgabe ist an jeder Schleuse möglich. ") ));
FA["1214"] = new Array(
    214,
    0,
    new Array(
        "Wem darf der Schiffsführer das Ruder eines motorisierten Sportbootes überlassen? "),
    new Array(
        new Array(true,"Einer Person, die mindestens 16 Jahre alt, sowie körperlich und geistig geeignet ist. "),
        new Array(false,"Einer Person, die mindestens 18 Jahre alt, sowie körperlich und geistig geeignet ist. "),
        new Array(false,"Einer Person, die mindestens 14 Jahre alt, sowie körperlich und geistig geeignet ist. "),
        new Array(false,"Einer Person jeden Alters, die körperlich und geistig geeignet ist. ") ));
FA["1215"] = new Array(
    215,
    0,
    new Array(
        "Wie müssen Abfälle entsorgt werden? "),
    new Array(
        new Array(true,"Es dürfen keinerlei Abfälle ins Wasser gelangen, Fäkalien und Öle sind an Land zu entsorgen. "),
        new Array(false,"Nur Abfälle, die die Umwelt nicht gefährden, dürfen 300 m vom Ufer ins Wasser eingeleitet werden. "),
        new Array(false,"Auf Seen dürfen keine Abfälle ins Wasser gelangen, auf Binnenschifffahrtsstraßen gibt es Sonderregelungen. "),
        new Array(false,"Alle Schiffe müssen mit Fäkalientanks ausgerüstet sein und geeignete Behältnisse für die getrennte Aufnahme von Abfällen an Bord haben. ") ));
FA["1216"] = new Array(
    216,
    0,
    new Array(
        "Was ist beim Neuanstrich des Unterwasserschiffs und bei der Entfernung des alten Anstrichs zu beachten? "),
    new Array(
        new Array(true,"Der Arbeitsbereich ist großzügig abzudecken und der anfallende Abfall ist als Sondermüll zu behandeln und entsprechend zu entsorgen. "),
        new Array(false,"Es dürfen nur Unterwasseranstriche verwendet werden, deren Umweltverträglichkeit an der EU-Kennzeichnung erkenntlich ist. "),
        new Array(false,"Es sind bei Arbeiten mit Unterwasseranstrichen die Richtlinien der Schiffsuntersuchungskommission zu beachten. "),
        new Array(false,"Unterwasserarbeiten dürfen nur von zertifizierten Fachbetrieben, nach den Bestimmungen des Umweltschutzes ausgeführt werden. ") ));
FA["1217"] = new Array(
    217,
    0,
    new Array(
        "Was ist bei Sturmwarnung vom Schiffsführer eines Sportbootes unter Segel auf einem größeren Gewässer zu veranlassen? "),
    new Array(
        new Array(true,"Rettungsweste anlegen. Segel bergen, versuchen einen Hafen oder eine geschützte Bucht anzulaufen. "),
        new Array(false,"Rettungsweste anlegen. Alle Segel setzen, versuchen, einen Hafen oder eine geschützte Bucht anzulaufen. "),
        new Array(false,"Rettungsweste bereit halten. Segel bergen, versuchen, einen Hafen oder eine geschützte Bucht anzulaufen. "),
        new Array(false,"Rettungsweste anlegen. Segel setzen, versuchen die Gewässermitte anzulaufen. ") ));
FA["1218"] = new Array(
    218,
    0,
    new Array(
        "Welche Fahrrinnenseite hat ein Talfahrer an seiner Backbordseite? "),
    new Array(
        new Array(true,"Die linke Fahrrinnenseite, gekennzeichnet durch grüne Spitztonnen oder Schwimmstangen. "),
        new Array(false,"Die rechte Fahrrinnenseite, gekennzeichnet durch rote Stumpftonnen oder Schwimmstangen. "),
        new Array(false,"Die linke Fahrrinnenseite, gekennzeichnet durch rote Stumpftonnen oder Schwimmstangen. "),
        new Array(false,"Die rechte Fahrrinnenseite, gekennzeichnet durch grüne Spitztonnen oder Schwimmstangen. ") ));
FA["1219"] = new Array(
    219,
    0,
    new Array(
        "Mit welcher Wetterentwicklung ist bei schnellem und stetig fallendem Luftdruck zu rechnen? "),
    new Array(
        new Array(true,"Schlechtes Wetter, Starkwind oder Sturm. "),
        new Array(false,"Besseres Wetter, steigende Temperatur. "),
        new Array(false,"Schlechtes Wetter ist nicht zu erwarten. "),
        new Array(false,"Besseres Wetter, Sonne. ") ));
FA["1220"] = new Array(
    220,
    0,
    new Array(
        "Welches Wetter ist zu erwarten, wenn der Luftdruck langsam, aber stetig steigt? "),
    new Array(
        new Array(true,"Besseres Wetter, Sonne. "),
        new Array(false,"Besseres Wetter, steigende Temperatur. "),
        new Array(false,"Schlechtes Wetter ist nicht zu erwarten. "),
        new Array(false,"Schlechtes Wetter, Starkwind oder Sturm. ") ));
FA["1221"] = new Array(
    221,
    0,
    new Array(
        "Wo darf auf Binnenschifffahrtsstraßen Wasserski gelaufen werden? "),
    new Array(
        new Array(true,"Nur in durch Tafelzeichen freigegebenen Bereichen. "),
        new Array(false,"Außerhalb des Fahrwassers. "),
        new Array(false,"Außerhalb der Fahrrinne. "),
        new Array(false,"Überall, ohne die Schifffahrt zu gefährden. ") ));
FA["1222"] = new Array(
    222,
    0,
    new Array(
        "Zu welcher Tageszeit und bei welchen Sichtweiten darf auf den erlaubten Gewässerabschnitten Wasserski gelaufen werden? "),
    new Array(
        new Array(true,"Sonnenaufgang bis - untergang, Sicht 1000 m und mehr. "),
        new Array(false,"Sonnenaufgang bis - untergang, Sicht 1500 m und mehr. "),
        new Array(false,"Sonnenaufgang bis - untergang, Sicht 500 m und mehr. "),
        new Array(false,"Sonnenaufgang bis - untergang, Sicht 300 m und mehr. ") ));
FA["1223"] = new Array(
    223,
    0,
    new Array(
        "Wie muss sich der Wasserskiläufer bei der Vorbeifahrt an Fahrzeugen, Schwimmkörpern oder Badenden verhalten? "),
    new Array(
        new Array(true,"Er muss im Kielwasser des Zugbootes bleiben. "),
        new Array(false,"Er darf bis zu 10 m beiderseits außerhalb des Kielwassers fahren. "),
        new Array(false,"Er darf bis zu 5 m beiderseits außerhalb des Kielwassers fahren. "),
        new Array(false,"Er muss uferseitig des Kielwassers fahren. ") ));
FA["1224"] = new Array(
    224,
    0,
    new Array(
        "Unter welchen Voraussetzungen darf außerhalb der ausgewiesenen Strecken/Wasserflächen Wassermotorrad gefahren werden? "),
    new Array(
        new Array(true,"Bei Touren- und Wanderfahrten mit klarem Geradeauskurs. "),
        new Array(false,"Bei großen Sonderveranstaltungen außerhalb der Fahrrinne. "),
        new Array(false,"Wenn kein anderer Verkehrsteilnehmer behindert wird. "),
        new Array(false,"Ab Hochwassermarke I nur im Fahrwasser. ") ));
FA["1225"] = new Array(
    225,
    0,
    new Array(
        "Wie hat sich der Führer eines Wassermotorrades außerhalb der ausgewiesenen Strecken/Wasserflächen zu verhalten? "),
    new Array(
        new Array(true,"Klaren Geradeauskurs fahren. "),
        new Array(false,"Im Abstand von 10 m zum Ufer fahren. "),
        new Array(false,"Im Abstand von 10 m außerhalb des Tonnenstrichs fahren. "),
        new Array(false,"Am Rande der Fahrrinne fahren. ") ));
FA["1226"] = new Array(
    226,
    0,
    new Array(
        "Auf welchen Gewässern ist die Fahrerlaubnis für Sportboote unter Segeln erforderlich? "),
    new Array(
        new Array(true,"Auf bestimmten Wasserstraßen in Berlin und Brandenburg. "),
        new Array(false,"Auf allen Landesgewässern. "),
        new Array(false,"Auf den Binnenschifffahrtsstraßen und allen Landesgewässern. "),
        new Array(false,"Auf allen deutschen Wasserstraßen. ") ));
FA["1227"] = new Array(
    227,
    0,
    new Array(
        "Weshalb muss sich der Schiffsführer vor dem Befahren fremder Gewässer über die dort geltenden Vorschriften informieren? "),
    new Array(
        new Array(true,"Um die jeweils geltenden Vorschriften einhalten zu können. "),
        new Array(false,"Da diese auf Landesgewässern grundsätzlich inhaltlich abweichen. "),
        new Array(false,"Da diese auf Bundesgewässern grundsätzlich inhaltlich abweichen "),
        new Array(false,"Weil die jeweils geltenden Vorschriften wichtige Informationen über die Brückendurchfahrtshöhen enthalten. ") ));
FA["1228"] = new Array(
    228,
    0,
    new Array(
        "Welcher Befähigungsnachweis berechtigt zum Führen eines Sportbootes mit einer Länge von 15 m bis 25 m auf dem Rhein? "),
    new Array(
        new Array(true,"Das Sportpatent. "),
        new Array(false,"Das Sportschifferzeugnis. "),
        new Array(false,"Der Sportbootführerschein Binnen. "),
        new Array(false,"Der Sportbootführerschein See. ") ));
FA["1229"] = new Array(
    229,
    0,
    new Array(
        "Welcher Befähigungsnachweis berechtigt zum Führen eines Sportbootes mit einer Länge von 15 m bis 25 m auf den Binnenschifffahrtsstraßen? "),
    new Array(
        new Array(true,"Das Sportschifferzeugnis oder das Sportpatent. "),
        new Array(false,"Der Sportbootführerschein Binnen. "),
        new Array(false,"Der Sportbootführerschein See. "),
        new Array(false,"Der Sportbootführerschein Binnen oder das Sportpatent. ") ));
FA["1230"] = new Array(
    230,
    0,
    new Array(
        "Wo sind umfangreiche Hinweise auf die Binnenschifffahrtsstraßen und deren Grenzen zu finden? "),
    new Array(
        new Array(true,"Im Teil II der Binnenschifffahrtsstraßen-Ordnung. "),
        new Array(false,"Im Teil I der Binnenschifffahrtsstraßen-Ordnung. "),
        new Array(false,"In der Binnenschiffsuntersuchungsordnung. "),
        new Array(false,"In der Kleinfahrzeugkennzeichenverordnung. ") ));
FA["1231"] = new Array(
    231,
    0,
    new Array(
        "Was ist bei der der Ausübung des Wassersports auf Gewässern außerhalb der Bundeswasserstraßen (Landeswasserstraßen, kommunale und private Gewässer) zu beachten? "),
    new Array(
        new Array(true,"Es ist gegebenenfalls die Genehmigung des Eigentümers einzuholen sowie die jeweilige Befahrensordnung zu beachten. "),
        new Array(false,"Es ist immer die Genehmigung des Eigentümers einzuholen sowie die jeweilige Befahrensordnung zu beachten. "),
        new Array(false,"Es ist immer die Genehmigung des Wasser- und Schifffahrtsamtes einzuholen sowie die jeweilige Befahrensordnung zu beachten. "),
        new Array(false,"Es ist gegebenenfalls die Genehmigung des Eigentümers einzuholen sowie die Binnenschifffahrtsstraßenordnung zu beachten. ") ));
FA["1232"] = new Array(
    232,
    0,
    new Array(
        "Welche Kennzeichnungsarten für Sportboote gibt es? "),
    new Array(
        new Array(true,"Amtliche Kennzeichen und amtlich anerkannte Kennzeichen. "),
        new Array(false,"Nur amtliche Kennzeichen. "),
        new Array(false,"Nur amtlich anerkannte Kennzeichen. "),
        new Array(false,"Kennzeichen gemäß Konformitätserklärung (CE-Zeichen). ") ));
FA["1233"] = new Array(
    233,
    0,
    new Array(
        "Welche Stelle ist für die Zuteilung eines amtlichen Kennzeichens für Sportboote zuständig? "),
    new Array(
        new Array(true,"Jedes Wasser- und Schifffahrtsamt. "),
        new Array(false,"Der Deutsche Motoryachtverband. "),
        new Array(false,"Der Deutsche Seglerverband. "),
        new Array(false,"Der Allgemeine Deutsche Automobilclub. ") ));
FA["1234"] = new Array(
    234,
    0,
    new Array(
        "Woraus bestehen die amtlich anerkannten Kennzeichen? "),
    new Array(
        new Array(true,"Nummer des Internationalen Bootsscheins, gefolgt vom Kennbuchstaben für die ausstellende Organisation. "),
        new Array(false,"Nummer des Binnenschiffsregisters, gefolgt vom Kennbuchstaben für die ausstellende Organisation. "),
        new Array(false,"Nummer des Seeschiffsregisters, gefolgt vom Kennbuchstaben für die ausstellende Organisation. "),
        new Array(false,"Die europäische Schiffsnummer, gefolgt vom Kennbuchstaben für die ausstellende Organisation. ") ));
FA["1235"] = new Array(
    235,
    0,
    new Array(
        "Welche Stellen sind für die Zuteilung eines amtlich anerkannten Kennzeichens zuständig? "),
    new Array(
        new Array(true,"Der Deutsche Motoryachtverband, der Deutsche Seglerverband, der Allgemeine Deutsche Automobilclub. "),
        new Array(false,"Die Wasser- und Schifffahrtsämter. "),
        new Array(false,"Die Wasserschutzpolizei. "),
        new Array(false,"Amtsgerichte, bei denen ein Schiffsregister geführt wird. ") ));
FA["1236"] = new Array(
    236,
    0,
    new Array(
        "Wann muss ein Wassersportfahrzeug in das Binnenschiffsregister eingetragen werden? "),
    new Array(
        new Array(true,"Ab 10 cbm Wasserverdrängung. "),
        new Array(false,"Ab 15 cbm Wasserverdrängung. "),
        new Array(false,"Ab 10 m Schiffslänge. "),
        new Array(false,"Ab 15 m Schiffslänge. ") ));
FA["1237"] = new Array(
    237,
    0,
    new Array(
        "Wie hat sich ein Schiffsführer bei Hochwasser zu verhalten? "),
    new Array(
        new Array(true,"Er muss die Geschwindigkeit anpassen und soweit wie möglich in der Fahrwassermitte bleiben, gegebenenfalls besondere Geschwindigkeitsbegrenzungen und Fahrtbeschränkungen beachten. "),
        new Array(false,"Er muss die Geschwindigkeit anpassen und soweit wie möglich in seiner Fahrtrichtung rechts fahren, gegebenenfalls besondere Geschwindigkeitsbegrenzungen und Fahrtbeschränkungen beachten. "),
        new Array(false,"Er muss die Geschwindigkeit anpassen und soweit wie möglich in seiner Fahrtrichtung links fahren, gegebenenfalls besondere Geschwindigkeitsbegrenzungen und Fahrtbeschränkungen beachten. "),
        new Array(false,"Er muss die Geschwindigkeit anpassen und soweit wie möglich in der Fahrwassermitte bleiben, besondere Geschwindigkeitsbegrenzungen und Fahrtbeschränkungen sind nicht zu beachten. ") ));
FA["1238"] = new Array(
    238,
    0,
    new Array(
        "Wie hat sich ein Schiffsführer bei Erreichen der Hochwassermarke II zu verhalten? "),
    new Array(
        new Array(true,"Er hat die Fahrt unverzüglich einzustellen. "),
        new Array(false,"Er hat die Geschwindigkeit anzupassen. "),
        new Array(false,"Er hat das Fahrverbot für Fahrzeuge ohne Sprechfunk zu beachten. "),
        new Array(false,"Er hat das Verbot der Schifffahrt bei Nacht zu beachten. ") ));
FA["1239"] = new Array(
    239,
    0,
    new Array(
        "Ein Fahrzeug fährt zu Tal. Voraus liegt eine rote Tonne. Auf welcher Fahrrinnenseite befindet sich diese Tonne und an welcher Schiffsseite muss diese Tonne passiert werden? "),
    new Array(
        new Array(true,"Sie befindet sich auf der rechten Fahrrinnenseite und muss an der Steuerbordseite des Schiffes passiert werden. "),
        new Array(false,"Sie befindet sich auf der rechten Fahrrinnenseite und muss an der Backbordseite des Schiffes passiert werden. "),
        new Array(false,"Sie befindet sich auf der linken Fahrrinnenseite und muss an der Steuerbordseite des Schiffes passiert werden. "),
        new Array(false,"Sie befindet sich auf der linken Fahrrinnenseite und muss an Backbordseite des Schiffes passiert werden. ") ));
FA["1240"] = new Array(
    240,
    0,
    new Array(
        "Ein Fahrzeug fährt zu Berg. Voraus liegt eine rote Tonne. Auf welcher Fahrrinnenseite befindet sich diese Tonne und an welcher Schiffsseite muss diese Tonne passiert werden? "),
    new Array(
        new Array(true,"Sie befindet sich auf der rechten Fahrrinnenseite und muss an der Backbordseite des Schiffes passiert werden. "),
        new Array(false,"Sie befindet sich auf der rechten Fahrrinnenseite und muss an der Steuerbordseite des Schiffes passiert werden. "),
        new Array(false,"Sie befindet sich auf der linken Fahrrinnenseite und muss an der Backbordseite des Schiffes passiert werden. "),
        new Array(false,"Sie befindet sich auf der linken Fahrrinnenseite und muss an der Steuerbordseite des Schiffes passiert werden. ") ));
FA["1241"] = new Array(
    241,
    0,
    new Array(
        "Ein Fahrzeug fährt in der Fahrrinne gegen den Strom. Voraus liegt eine grüne Tonne. Auf welcher Fahrrinnenseite befindet sich diese Tonne und an welcher Schiffsseite muss diese Tonne passiert werden? "),
    new Array(
        new Array(true,"Sie befindet sich auf der linken Fahrrinnenseite und muss an der Steuerbordseite des Schiffes passiert werden. "),
        new Array(false,"Sie befindet sich auf der rechten Fahrrinnenseite und muss an der Steuerbordseite des Schiffes passiert werden. "),
        new Array(false,"Sie befindet sich auf der linken Fahrrinnenseite und muss an der Backbordseite des Schiffes passiert werden. "),
        new Array(false,"Sie befindet sich auf der rechten Fahrrinnenseite und muss an der Backbordseite des Schiffes passiert werden. ") ));
FA["1242"] = new Array(
    242,
    0,
    new Array(
        "Welche Funktion haben gelbe Tonnen mit einem Radarreflektor vor Brückenpfeiler? "),
    new Array(
        new Array(true,"Kenntlichmachung der Brückenpfeiler auf dem Radarschirm. "),
        new Array(false,"Kenntlichmachung der Höhe der Brückenpfeiler. "),
        new Array(false,"Kenntlichmachung einer gesperrten Brückendurchfahrt. "),
        new Array(false,"Kenntlichmachung einer Untiefe im Brückenbereich. ") ));
FA["1243"] = new Array(
    243,
    0,
    new Array(
        "Welche Bedeutung haben diese Tafeln an der nachstehenden gekennzeichneten Brücke? ",1243),
    new Array(
        new Array(true,"Empfohlene Durchfahrt mit Gegenverkehr und seitlicher Begrenzung der erlaubten Brückendurchfahrt. "),
        new Array(false,"Empfohlene Durchfahrt ohne Gegenverkehr und seitlicher Begrenzung der erlaubten Brückendurchfahrt. "),
        new Array(false,"Vorgeschriebene Durchfahrt mit Gegenverkehr und seitlicher Begrenzung der erlaubten Brückendurchfahrt. "),
        new Array(false,"Empfohlene Durchfahrt mit Gegenverkehr ohne seitliche Begrenzung der erlaubten Brückendurchfahrt. ") ));
FA["1244"] = new Array(
    244,
    0,
    new Array(
        "Was bedeutet dieses Tafelzeichen an einer Brückendurchfahrt? ",1244),
    new Array(
        new Array(true,"Verbot der Durchfahrt und Sperrung der Schifffahrt. "),
        new Array(false,"Gesperrte Durchfahrt, jedoch für Kleinfahrzeuge mit Antriebsmaschine befahrbar. "),
        new Array(false,"Gesperrte Durchfahrt, jedoch für Kleinfahrzeuge ohne Antriebsmaschine befahrbar. "),
        new Array(false,"Schutzbedürftige Anlage. ") ));
FA["1245"] = new Array(
    245,
    0,
    new Array(
        "Warum ist es bei der Schleusendurchfahrt verboten, Autoreifen als Fender zu benutzen? "),
    new Array(
        new Array(true,"Autoreifen sind nicht schwimmfähig und können in den Schleusen zu erheblichen Störungen führen. "),
        new Array(false,"Autoreifen erzeugen eine zu hohe Reibung. "),
        new Array(false,"Autoreifen erzeugen schwarze Farbspuren am Boot und an der Schleusenmauer. "),
        new Array(false,"Autoreifen sind schwimmfähig und können in der Schleuse zu erheblichen Störungen führen. ") ));
FA["1246"] = new Array(
    246,
    0,
    new Array(
        "Welche Lichter führt ein Schubverband? "),
    new Array(
        new Array(true,"Drei weiße Topplichter in einem Dreieck angebracht, die Seitenlichter und drei weiße Hecklichter waagerecht nebeneinander. "),
        new Array(false,"Drei weiße Topplichter senkrecht untereinander angebracht, die Seitenlichter und drei weiße Hecklichter waagerecht nebeneinander. "),
        new Array(false,"Drei weiße Topplichter in einem Dreieck angebracht, die Seitenlichter und zwei weiße Hecklichter waagerecht nebeneinander. "),
        new Array(false,"Drei weiße Topplichter waagerecht nebeneinander, die Seitenlichter und drei weiße Hecklichter waagerecht nebeneinander. ") ));
FA["1247"] = new Array(
    247,
    0,
    new Array(
        "Welches Fahrzeug führt am Bug einen roten Wimpel? "),
    new Array(
        new Array(true,"Ein Fahrzeug mit Vorrang beim Schleusen. "),
        new Array(false,"Ein Fahrzeug mit Vorrang beim Be- und Entladen. "),
        new Array(false,"Ein Fahrzeug, das explosive Stoffe geladen hat. "),
        new Array(false,"Ein Fahrzeug, das brennbare Stoffe geladen hat. ") ));
FA["1248"] = new Array(
    248,
    0,
    new Array(
        "Wann gilt ein Sportboot auf den Binnenschifffahrtsstraßen als Kleinfahrzeug? "),
    new Array(
        new Array(true,"Wenn das Fahrzeug eine Länge von weniger als 20 m hat. "),
        new Array(false,"Wenn das Fahrzeug eine Länge von 20 m hat. "),
        new Array(false,"Wenn das Fahrzeug eine Länge von 25 m hat. "),
        new Array(false,"Wenn das Fahrzeug eine Länge von mehr als 20 m hat. ") ));
FA["1249"] = new Array(
    249,
    0,
    new Array(
        "Welche Bedeutung hat die Bezeichnung eines Fahrzeuges mit einer rot-weißen Flagge und was ist zu beachten? "),
    new Array(
        new Array(true,"Schutzbedürftiges Fahrzeug, Geschwindigkeit vermindern und Sog und Wellenschlag vermeiden. "),
        new Array(false,"Schutzbedürftiges Fahrzeug, Geschwindigkeit beibehalten und Sog und Wellenschlag vermeiden. "),
        new Array(false,"Schutzbedürftiges Fahrzeug, Geschwindigkeit vermindern. "),
        new Array(false,"Schutzbedürftiges Fahrzeug, Sog und Wellenschlag vermeiden. ") ));
FA["1250"] = new Array(
    250,
    0,
    new Array(
        "Welches optische Zeichen kann am Tage anstelle von vier kurzen Tönen gegeben werden? "),
    new Array(
        new Array(true,"Eine rote Flagge im unteren Halbkreis schwenken. "),
        new Array(false,"Eine rote Flagge im oberen Halbkreis schwenken "),
        new Array(false,"Eine rote Flagge im Kreis schwenken. "),
        new Array(false,"Eine rote Flagge zeigen. ") ));
FA["1251"] = new Array(
    251,
    0,
    new Array(
        "Welches optische Zeichen kann in der Nacht oder bei verminderter Sicht anstelle von vier kurzen Tönen gegeben werden? "),
    new Array(
        new Array(true,"Ein rotes Licht im unteren Halbkreis schwenken. "),
        new Array(false,"Ein rotes Licht im oberen Halbkreis schwenken. "),
        new Array(false,"Ein rotes Licht im Kreis schwenken. "),
        new Array(false,"Ein rotes Licht zeigen. ") ));
FA["1252"] = new Array(
    252,
    0,
    new Array(
        "Welcher Befähigungsnachweis ist zur Teilnahme am Binnenschifffahrtsfunk erforderlich? "),
    new Array(
        new Array(true,"Das UKW-Sprechfunkzeugnis für den Binnenschifffahrtsfunk. "),
        new Array(false,"Das CB-Sprechfunkzeugnis für den Binnenschifffahrtsfunk. "),
        new Array(false,"Das Seefunkzeugnis für den Binnenschifffahrtsfunk. "),
        new Array(false,"Das SRC-Sprechfunkzeugnis für den Binnenschifffahrtsfunk. ") ));
FA["1253"] = new Array(
    253,
    0,
    new Array(
        "Was bedeutet Radarfahrt? "),
    new Array(
        new Array(true,"Eine Fahrt bei unsichtigem Wetter mit Radar. "),
        new Array(false,"Eine Fahrt bei Nacht mit Radar. "),
        new Array(false,"Eine Fahrt mit Radar. "),
        new Array(false,"Eine Fahrt am Tage mit Radar. ") ));
FA["1254"] = new Array(
    254,
    0,
    new Array(
        "Was wird unter einem &quot;Kimmkieler&quot; verstanden? "),
    new Array(
        new Array(true,"Eine Yacht mit zwei Seitenkielen. "),
        new Array(false,"Eine Yacht mit zwei Seitenschwertern. "),
        new Array(false,"Eine Yacht mit einem Kielschwert. "),
        new Array(false,"Eine Yacht mit zwei Kielen hintereinander. ") ));
FA["1255"] = new Array(
    255,
    0,
    new Array(
        "Worin besteht der Vorteil eines Kimmkielers gegenüber anderen Kielbooten? "),
    new Array(
        new Array(true,"Er kann problemlos aufrecht trocken fallen. "),
        new Array(false,"Sein Tiefgang ist größer. "),
        new Array(false,"Die Abdrifft ist geringer als bei anderen Kielbooten. "),
        new Array(false,"Der Kiel lässt sich aufholen. ") ));
FA["1256"] = new Array(
    256,
    0,
    new Array(
        "Was wird unter einer &bdquo;Kielschwertyacht&rdquo; verstanden? "),
    new Array(
        new Array(true,"Eine Yacht mit flach gehendem Ballastkiel und zusätzlichem aufholbarem Schwert. "),
        new Array(false,"Eine Yacht mit einem Ballastkiel und einem zusätzlichem Schwert. "),
        new Array(false,"Ein Yacht mit einem aufholbaren Ballastkiel. "),
        new Array(false,"Eine Yacht mit zwei Seitenkielen. ") ));
FA["1257"] = new Array(
    257,
    0,
    new Array(
        "Wodurch wirken die Bodenlenzventile einer Jolle, die unterhalb der Wasserlinie liegen? "),
    new Array(
        new Array(true,"Durch den Sog, der bei Fahrt durchs Wasser entsteht. "),
        new Array(false,"Durch die Schwerkraft fließt das Wasser außenbords. Spezifische Fragen Segeln "),
        new Array(false,"Durch die Massenträgheit, die das Boot besitzt. "),
        new Array(false,"Durch das Druckgefälle zwischen Luft- und Wasserdruck. ") ));
FA["1258"] = new Array(
    258,
    0,
    new Array(
        "Was wird unter &bdquo;Formstabilität&rdquo; verstanden? "),
    new Array(
        new Array(true,"Die Fähigkeit eines Schiffes, durch seine Rumpfform der Krängung entgegenzuwirken. "),
        new Array(false,"Die Fähigkeit eines Schiffes, sich nach einer Kenterung wieder von selbst aufzurichten. "),
        new Array(false,"Die Fähigkeit eines Schiffes beim Loslassen der Pinne den Kurs beizubehalten. "),
        new Array(false,"Die Fähigkeit eines Schiffes über Jahre die Rumpfform auch bei starker Beanspruchung beizubehalten. ") ));
FA["1259"] = new Array(
    259,
    0,
    new Array(
        "Was wird unter &bdquo;Gewichtsstabilität&rdquo; verstanden? "),
    new Array(
        new Array(true,"Die Fähigkeit eines Schiffes, durch seinen tief liegenden Ballast der Krängung entgegenzuwirken. "),
        new Array(false,"Die Möglichkeit durch zusätzlichen Innenballast die Krängung zu verringern. "),
        new Array(false,"Die Möglichkeit durch ein hohes Crewgewicht der Krängung entgegenzuwirken. "),
        new Array(false,"Die Fähigkeit eines Schiffes, durch seine Rumpfform der Krängung entgegenzuwirken. ") ));
FA["1260"] = new Array(
    260,
    0,
    new Array(
        "Welche Boote sind vorwiegend &bdquo;gewichtsstabil&rdquo;? "),
    new Array(
        new Array(true,"Kielyachten sind vorwiegend &bdquo;gewichtsstabil&rdquo;. "),
        new Array(false,"Jollen sind vorwiegend &bdquo;gewichtsstabil&rdquo;. "),
        new Array(false,"Katamarane sind vorwiegend &bdquo;gewichtsstabil&rdquo;. "),
        new Array(false,"Trimarane sind vorwiegend &bdquo;gewichtsstabil&rdquo;. ") ));
FA["1261"] = new Array(
    261,
    0,
    new Array(
        "Welche Boote sind vorwiegend &bdquo;formstabil&rdquo;? "),
    new Array(
        new Array(true,"Jollen sind vorwiegend &bdquo;formstabil&rdquo;. "),
        new Array(false,"Kielyachten sind vorwiegend &bdquo;formstabil&rdquo;. "),
        new Array(false,"Kimmkieler sind vorwiegend &bdquo;formstabil&rdquo;. "),
        new Array(false,"Kielschwertyachten sind vorwiegend &bdquo;formstabil&rdquo;. ") ));
FA["1262"] = new Array(
    262,
    0,
    new Array(
        "Wodurch kann bei formstabilen Booten bei viel Wind die Stabilität erhöht werden? "),
    new Array(
        new Array(true,"Durch Ausreiten bzw. durch Benutzung der Trapezeinrichtung. "),
        new Array(false,"Durch Verlagerung von Innenballast. "),
        new Array(false,"Durch Umpumpen von Wasserballast. "),
        new Array(false,"Durch Ausfahren von sogenannten Trimmklappen oder eines Zusatzschwertes. ") ));
FA["1263"] = new Array(
    263,
    0,
    new Array(
        "Wie verändert sich das aufrichtende Kraftmoment einer Jolle bei ständiger Krängung? "),
    new Array(
        new Array(true,"Es nimmt anfangs zu bis zum Erreichen eines kritischen Winkels, von da an immer schneller ab bis zur Kenterung. "),
        new Array(false,"Es nimmt anfangs ab bis zum Erreichen des kritischen Winkels, von da an immer schneller zu bis zur Kenterung. "),
        new Array(false,"Es nimmt anfangs langsam ab bis zum Erreichen des kritischen Winkels, von da an immer schneller ab bis zur Kenterung. "),
        new Array(false,"Es nimmt linear bis zur Kenterung ab. ") ));
FA["1264"] = new Array(
    264,
    0,
    new Array(
        "Wie verändert sich das aufrichtende Kraftmoment einer Kielyacht bei stetig zunehmender Krängung? "),
    new Array(
        new Array(true,"Es nimmt zu und erreicht nach Überschreitung des Maximums seinen kritischen Winkel erst bei über 90°. "),
        new Array(false,"Es nimmt bis zum Erreichen des kritischen Winkels zu, der bei etwa 70° liegt. "),
        new Array(false,"Es nimmt bis zum Erreichen des kritischen Winkels von 90° ab. "),
        new Array(false,"Es nimmt bis 90° Krängung ab und dann stetig zu. ") ));
FA["1265"] = new Array(
    265,
    0,
    new Array(
        "Welche Maßnahme ist bei Ruderbruch auf einer Jolle zu treffen? "),
    new Array(
        new Array(true,"Notruder oder Paddel als Ersatz nehmen, Fahrwasser verlassen, sich als manövrierunfähig zu erkennen geben. "),
        new Array(false,"Sofort ankern und einen Notruf absetzen, Signalkörper (blauer Kegel) setzen. "),
        new Array(false,"Rote Flagge kreisförmig schwenken, Schleppleine bereithalten. "),
        new Array(false,"Segel bergen, Motor starten und in Rückwärtsfahrt das Ufer ansteuern. ") ));
FA["1266"] = new Array(
    266,
    0,
    new Array(
        "Wodurch kann eine Pinnensteuerung auch bei Krängung des Bootes sicher erreicht und bedient werden? "),
    new Array(
        new Array(true,"Durch einen Pinnenausleger. "),
        new Array(false,"Durch Verstellen des Travellers. "),
        new Array(false,"Durch das Ausreiten mit Hilfe des Trapezes. "),
        new Array(false,"Durch Ersetzen der Pinne durch ein Rad. ") ));
FA["1267"] = new Array(
    267,
    0,
    new Array(
        "Warum sollte Tauwerk an Bord stets ordentlich aufgeschossen werden? "),
    new Array(
        new Array(true,"Damit es im Gebrauchsfall klar liegt. "),
        new Array(false,"Damit es trocknen kann und nicht verrottet. "),
        new Array(false,"Damit die Reißfestigkeit erhalten bleibt. "),
        new Array(false,"Damit es nicht durch UV-Strahlung beschädigt wird. ") ));
FA["1268"] = new Array(
    268,
    0,
    new Array(
        "Warum sollten Fallen stets ordentlich aufgeschossen werden? "),
    new Array(
        new Array(true,"Damit sie im Gebrauchsfall schnell und sicher gefiert werden können. "),
        new Array(false,"Damit sie trocknen können und nicht verrotten. "),
        new Array(false,"Damit sie nicht durch UV-Strahlung beschädigt werden. "),
        new Array(false,"Damit sie nicht mit den Schoten verwechselt werden können. ") ));
FA["1269"] = new Array(
    269,
    0,
    new Array(
        "Wie heißen die Ecken eines Segels? "),
    new Array(
        new Array(true,"Kopf, Hals, Schothorn. "),
        new Array(false,"Kopf, Hals, Nock. "),
        new Array(false,"Vorliek, Unterliek, Achterliek. "),
        new Array(false,"Vorstag, Unterwant, Achterstag. ") ));
FA["1270"] = new Array(
    270,
    0,
    new Array(
        "Wie heißen die Kanten eines Segels? "),
    new Array(
        new Array(true,"Vorliek, Unterliek, Achterliek. "),
        new Array(false,"Kopf, Hals, Nock. "),
        new Array(false,"Vorstag, Unterwant, Achterstag. "),
        new Array(false,"Kopf, Hals, Schothorn. ") ));
FA["1271"] = new Array(
    271,
    0,
    new Array(
        "Wozu dienen Segellatten? "),
    new Array(
        new Array(true,"Der Formgebung und Aussteifung des Segels. "),
        new Array(false,"Der Erleichterung des Reffens. "),
        new Array(false,"Der Verhinderung des Killens von Segeln. "),
        new Array(false,"Der Möglichkeit das Segel auch bei Starkwind nutzen zu können. ") ));
FA["1272"] = new Array(
    272,
    0,
    new Array(
        "Weshalb dürfen Segel nicht über einen längeren Zeitraum killen? "),
    new Array(
        new Array(true,"Killen schädigt das Tuch und lässt Nähte aufgehen. "),
        new Array(false,"Killen lässt das Boot bei stärkerem Wind kentern. "),
        new Array(false,"Killen führt zu Verletzungen der Besatzung. "),
        new Array(false,"Killen führt zu Beschädigungen an nebeneinander liegenden Schiffen. ") ));
FA["1273"] = new Array(
    273,
    0,
    new Array(
        "Warum müssen auch kleine Schäden an den Segeln sofort repariert werden? "),
    new Array(
        new Array(true,"Weil unter Winddruck daraus schnell große Schäden werden. "),
        new Array(false,"Weil dadurch der Vortrieb des Segels leidet. "),
        new Array(false,"Weil es nur noch bei Flaute eingesetzt werden kann. "),
        new Array(false,"Weil Feuchtigkeit in das Segel eindringen kann. ") ));
FA["1274"] = new Array(
    274,
    0,
    new Array(
        "Woran kann während der Fahrt die Richtung des wahren Windes erkannt werden? "),
    new Array(
        new Array(true,"An Flaggen oder anderen Anzeichen an Land. "),
        new Array(false,"An der Zugrichtung von Wolken. "),
        new Array(false,"An der Nationalflagge am Heck. "),
        new Array(false,"An den Trimmfäden im Großsegel. ") ));
FA["1275"] = new Array(
    275,
    0,
    new Array(
        "Welcher Wind wird in Fahrt von Standern bzw. Verklickern angezeigt? "),
    new Array(
        new Array(true,"Der scheinbare Wind. "),
        new Array(false,"Der Fahrtwind. "),
        new Array(false,"Der wahre Wind. "),
        new Array(false,"Die Windrichtung. ") ));
FA["1276"] = new Array(
    276,
    0,
    new Array(
        "Wann kommen wahrer Wind und scheinbarer Wind auf einem segelnden Boot aus der gleichen Richtung? "),
    new Array(
        new Array(true,"Auf Vorwindkurs. "),
        new Array(false,"Auf Halbwindkurs. "),
        new Array(false,"Auf Amwindkurs. "),
        new Array(false,"Auf Raumschotkurs. ") ));
FA["1277"] = new Array(
    277,
    0,
    new Array(
        "Warum ist der scheinbare Wind auf einem Vorwindkurs schwächer als der wahre Wind? "),
    new Array(
        new Array(true,"Der wahre Wind vermindert sich um den entgegenstehenden Fahrtwind. "),
        new Array(false,"Der wahre Wind wird durch den Fahrtwind abgebremst. "),
        new Array(false,"Der scheinbare Wind wird durch den Unterdruck am Segel entlang abgebremst. "),
        new Array(false,"Der scheinbare Wind ist unabhängig von der Windrichtung immer schwächer als der wahre Wind. ") ));
FA["1278"] = new Array(
    278,
    0,
    new Array(
        "Warum ist der scheinbare Wind auf einem Kurs hoch am Wind stärker als der wahre Wind? "),
    new Array(
        new Array(true,"Da sich auf diesem Kurs der wahre Wind und der Fahrtwind in Richtung und Stärke addieren. "),
        new Array(false,"Da sich auf diesem Kurs eine Düse zwischen Fock- und Großsegel bildet, die den Wind verstärkt. "),
        new Array(false,"Da der wahre Wind beim Amwindkurs stärker ist als bei raumen Kursen. "),
        new Array(false,"Da der scheinbare Wind unabhängig von der Windrichtung immer stärker als der wahre Wind ist. ") ));
FA["1279"] = new Array(
    279,
    0,
    new Array(
        "Auf einem Amwindkurs wurde gerefft. Ein entgegenkommendes Boot gleichen Typs segelt ungerefft. Wie lässt sich das erklären? "),
    new Array(
        new Array(true,"Der scheinbare Wind ist auf Amwindkursen stärker, auf Raumschot- und Vorwindkursen schwächer als der wahre Wind. "),
        new Array(false,"Boote sind stabiler, wenn der Wind achterlicher einfällt. "),
        new Array(false,"Der wahre Wind staut sich am Segel bei Raumschotkurs und ist deshalb schwächer. "),
        new Array(false,"Bei Amwindkurs streicht der Wind am tragflächenartig gewölbten Segel entlang und wird dadurch beschleunigt. ") ));
FA["1280"] = new Array(
    280,
    0,
    new Array(
        "Warum raumt beim Einfallen einer Bö auf Amwindkurs der scheinbare Wind? "),
    new Array(
        new Array(true,"Da der Fahrtwind zunächst gleich bleibt, der wahre Wind jedoch zunimmt, kommt der daraus resultierende scheinbare Wind raumer. "),
        new Array(false,"Da durch die Koreoliskraft der Wind auch seine Richtung ändert, wenn er stärker wird. "),
        new Array(false,"Da durch den Trimm des Bootes sich der Kurs automatisch ändert, wenn der Wind zunimmt. "),
        new Array(false,"Da die Windrichtung durch die Segelstellung beeinflusst wird, verändert sich auch der scheinbare Wind. ") ));
FA["1281"] = new Array(
    281,
    0,
    new Array(
        "Beim Einfallen einer Bö auf Amwindkurs raumt der scheinbare Wind. Welchen Nutzen kann auf der Kreuz daraus gezogen werden? "),
    new Array(
        new Array(true,"Mitluven, um weitere Höhe zu gewinnen. "),
        new Array(false,"Abfallen, um maximale Höhe zu segeln. "),
        new Array(false,"Segel etwas fieren, um die Bö in Krängung umzusetzen. "),
        new Array(false,"Ein Spinnacker kann gesetzt werden. ") ));
FA["1282"] = new Array(
    282,
    0,
    new Array(
        "Wie sollte das Schwert einer Jolle auf Vorwindkurs gefahren werden und warum? "),
    new Array(
        new Array(true,"Es sollte aufgeholt werden. Dadurch vermindert sich der Reibungswiderstand, aber auch die Gefahr der Kenterung bei einer unfreiwilligen Halse. "),
        new Array(false,"Es sollte gefiert werden. Dadurch wird das Boot stabiler und die Gefahr der Kenterung bei einer unfreiwilligen Halse reduziert. "),
        new Array(false,"Es sollte nie ganz aufgeholt werden, da es sonst bei einer Kenterung zum Aufrichten der Jolle nicht mehr greifbar ist. "),
        new Array(false,"Es sollte bei stärkerem Wind ganz aufgeholt werden, um die Steuerfähigkeit der Jolle zu verbessern. ") ));
FA["1283"] = new Array(
    283,
    0,
    new Array(
        "Wie verändern sich Abdrift und Krängung, wenn das Schwert einer Jolle auf einem Amwindkurs etwas aufgeholt wird? "),
    new Array(
        new Array(true,"Die Abdrift wird größer, die Krängung nimmt ab. "),
        new Array(false,"Die Abdrift wird größer, die Krängung nimmt zu. "),
        new Array(false,"Die Abdrift nimmt ab, das Boot wird aufgrund des geringeren Wasserwiderstandes schneller. "),
        new Array(false,"Die Abdrift wird kleiner, die Krängung nimmt ab. ") ));
FA["1284"] = new Array(
    284,
    0,
    new Array(
        "Mit welcher Krängung sollte eine Jolle üblicherweise gesegelt werden und weshalb? "),
    new Array(
        new Array(true,"Möglichst aufrecht, da sonst Abdrift und Luvgierigkeit zunehmen. "),
        new Array(false,"Möglichst aufrecht, weil sonst Abdrift und Leegierigkeit zunehmen. "),
        new Array(false,"Leicht nach Lee geneigt, da sonst die Segel leicht nach Luv überkommen können. "),
        new Array(false,"Möglichst nach Luv geneigt, weil dadurch die Abdrift und die Luvgierigkeit abnehmen. ") ));
FA["1285"] = new Array(
    285,
    0,
    new Array(
        "Wie wirkt sich auf einem Halbwindkurs ein zu dicht geholtes Großsegel auf die Geschwindigkeit des Bootes aus? "),
    new Array(
        new Array(true,"Die Krängung nimmt zu, die Geschwindigkeit nimmt ab.  "),
        new Array(false,"Die Krängung und die Geschwindigkeit nehmen bis zum kritischen Punkt zu, darüber hinaus schnell ab. "),
        new Array(false,"Die Geschwindigkeit nimmt zu, da dadurch die Windkräfte optimaler genutzt werden. "),
        new Array(false,"Das Boot bleibt stehen, da die Strömung abreißt. ") ));
FA["1286"] = new Array(
    286,
    0,
    new Array(
        "Wie wirkt sich ein Holepunkt, der zu weit vorne liegt, auf Stand und Beanspruchung des Vorsegels aus? "),
    new Array(
        new Array(true,"Das Unterliek killt, das Achterliek wird übermäßig gereckt. "),
        new Array(false,"Das Achterliek killt, das Vorliek wird übermäßig gereckt "),
        new Array(false,"Das Vorliek killt, das Unterliek wird übermäßig gereckt. "),
        new Array(false,"Das Vorliek killt, das Achterliek wird übermäßig gereckt. ") ));
FA["1287"] = new Array(
    287,
    0,
    new Array(
        "Wie wirkt sich ein Holepunkt, der zu weit achtern liegt, auf Stand und Beanspruchung des Vorsegels aus? "),
    new Array(
        new Array(true,"Das Achterliek killt, das Unterliek wird übermäßig gereckt. "),
        new Array(false,"Das Vorliek killt, das Unterliek wird übermäßig gereckt. "),
        new Array(false,"Das Unterliek killt, das Achterliek wird übermäßig gereckt. "),
        new Array(false,"Das Achterliek killt, das Vorliek wird übermäßig gereckt. ") ));
FA["1288"] = new Array(
    288,
    0,
    new Array(
        "Wie muss ein Segel bei leichtem Wind getrimmt werden? "),
    new Array(
        new Array(true,"Das Segel soll bauchig stehen. "),
        new Array(false,"Das Segel soll flach getrimmt werden. "),
        new Array(false,"Die Schoten müssen gefiert werden. "),
        new Array(false,"Die Schoten müssen dicht geholt werden. ") ));
FA["1289"] = new Array(
    289,
    0,
    new Array(
        "Wie muss ein Segel bei starkem Wind getrimmt werden? "),
    new Array(
        new Array(true,"Das Segel soll flach getrimmt werden. "),
        new Array(false,"Es soll bauchig getrimmt werden. "),
        new Array(false,"Die Schoten müssen dicht geholt werden. "),
        new Array(false,"Die Schoten müssen gefiert werden. ") ));
FA["1290"] = new Array(
    290,
    0,
    new Array(
        "Wie beeinflusst ein Unterliekstrecker den Trimm des Segels? "),
    new Array(
        new Array(true,"Je nach Zugkraft wird der untere Teil des Großsegels bauchiger oder flacher. "),
        new Array(false,"Je nach Zugkraft wird der untere Teil des Vorsegels bauchiger oder flacher. "),
        new Array(false,"Je nach Zugkraft wird der achtere Teil des Vorsegels bauchiger oder flacher. "),
        new Array(false,"Je nach Zugkraft wird der achtere Teil des Großsegels bauchiger oder flacher. ") ));
FA["1291"] = new Array(
    291,
    0,
    new Array(
        "Um auf Amwindkursen eine Jolle auf Kurs zu halten, muss die Pinne stets stark von der Seite der Segel weggezogen werden. Wie kann der Trimmfehler behoben werden? "),
    new Array(
        new Array(true,"Großsegel flacher trimmen; Gewichtsverlagerung nach achtern. "),
        new Array(false,"Großsegel flacher trimmen; Gewichtsverlagerung nach vorne. "),
        new Array(false,"Vorsegel flacher trimmen; Gewichtsverlagerung nach achtern. "),
        new Array(false,"Vorsegel flacher trimmen; Gewichtsverlagerung nach achtern. ") ));
FA["1292"] = new Array(
    292,
    0,
    new Array(
        "Um auf Amwindkursen eine Jolle auf Kurs zu halten, muss die Pinne stets stark zur Seite der Segel hingedrückt werden. Wie kann der Trimmfehler behoben werden? "),
    new Array(
        new Array(true,"Großsegel bauchiger trimmen, Gewichtsverlagerung nach vorn. "),
        new Array(false,"Großsegel flacher trimmen, Gewichtsverlagerung nach vorn. "),
        new Array(false,"Großsegel bauchiger trimmen, Gewichtsverlagerung nach hinten. "),
        new Array(false,"Großsegel flacher trimmen, Gewichtsverlagerung nach hinten. ") ));
FA["1293"] = new Array(
    293,
    0,
    new Array(
        "Warum soll ein gut getrimmtes Segelboot leicht luvgierig sein? "),
    new Array(
        new Array(true,"Weil es im Notfall von selbst in den Wind schießt. "),
        new Array(false,"Weil es sich so anspruchsvoller steuern lässt. "),
        new Array(false,"Weil es so weniger Höhe läuft. "),
        new Array(false,"Weil es auf Raumschotkurs mehr Geschwindigkeit läuft. ") ));
FA["1294"] = new Array(
    294,
    0,
    new Array(
        "Welchen Einfluss hat zunehmende Krängung auf den Trimm des Bootes? "),
    new Array(
        new Array(true,"Die Luvgierigkeit nimmt zu. "),
        new Array(false,"Die Leegierigkeit nimmt zu. "),
        new Array(false,"Keinen. "),
        new Array(false,"Bis 45° Krängung nimmt die Luvgierigkeit zu, dann wieder ab. ") ));
FA["1295"] = new Array(
    295,
    0,
    new Array(
        "Welche Manöver hat das Boot auf dem eingezeichneten Kurs an den Punkten 1, 2 und 3 gefahren? ",1295),
    new Array(
        new Array(true,"1 Wende, 2 Halse, 3 Q-Wende. "),
        new Array(false,"1 Q-Wende, 2 Halse, C Wende. "),
        new Array(false,"1 Halse, 2 Wende 3, Q-Wende. "),
        new Array(false,"1 Wende, 2 Q-Wende, 3 Halse. ") ));
FA["1296"] = new Array(
    296,
    0,
    new Array(
        "Was ist mit Schwert und Ruder einer Jolle zu tun, wenn das Boot an einer Boje liegen gelassen wird? "),
    new Array(
        new Array(true,"Schwert und Ruderblatt aufholen, damit das Boot frei schwojen kann. "),
        new Array(false,"Schwert absenken, Ruder aufholen, damit das Boot frei schwojen kann. "),
        new Array(false,"Schwert aufholen, Ruder absenken, damit das Boot frei schwojen kann. "),
        new Array(false,"Schwert und Ruder absenken, damit das Boot frei schwojen kann. ") ));
FA["1297"] = new Array(
    297,
    0,
    new Array(
        "Warum ist eine Patenthalse gefährlich? "),
    new Array(
        new Array(true,"Es kann zu Verletzungen der Crew, zu Riggschäden und zur Kenterung führen. "),
        new Array(false,"Es kann zur plötzlichen Änderung der Ausweichpflicht kommen. "),
        new Array(false,"Es kann zum Verlust der Steuerfähigkeit des Fahrzeuges führen. "),
        new Array(false,"Es kann erneut eine Patenthalse folgen, wenn nicht sofort abgefallen wird. ") ));
FA["1298"] = new Array(
    298,
    0,
    new Array(
        "Ein Segelboot segelt am Wind, plötzlich bricht das Luvwant. Welches Manöver ist sinnvoll? "),
    new Array(
        new Array(true,"Wende. "),
        new Array(false,"Halse. "),
        new Array(false,"Q-Wende. "),
        new Array(false,"Aufschießer. ") ));
FA["1299"] = new Array(
    299,
    0,
    new Array(
        "Ein Segelboot segelt bei starkem Wind nur unter Großsegel auf Amwindkurs. Plötzlich bricht das Vorstag. Was ist sofort zu unternehmen? "),
    new Array(
        new Array(true,"Abfallen auf Vorwindkurs. "),
        new Array(false,"Dichtholen und Anluven. "),
        new Array(false,"Einen Aufschießer fahren. "),
        new Array(false,"Eine Halse fahren. ") ));
FA["1300"] = new Array(
    300,
    0,
    new Array(
        "Ein Segelboot segelt bei starkem Wind nur unter Großsegel auf Amwindkurs. Plötzlich bricht das Vorstag. Womit kann das gebrochene Vorstag schnell provisorisch ersetzt werden? "),
    new Array(
        new Array(true,"Durch die Fock oder ein Fall. "),
        new Array(false,"Durch die Fockschot oder das Großfall. "),
        new Array(false,"Durch die Vor- oder die Achterleine. "),
        new Array(false,"Durch die Fockschot oder eine Reffleine. ") ));
