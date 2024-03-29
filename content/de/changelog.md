---
layout: layouts/docs.njk
eleventyNavigation:
  key: Änderungshistorie
  order: 12
---
# Änderungshistorie / Changelog von offiziellen Versionen

Beta- oder "Pre"-Releases werden hier nicht aufgeführt und können stattdessen direkt auf [Github](https://github.com/RaceHorology/RaceHorology/releases) eingesehen werden.

## 0.9.3

**Datum:** 18.09.2022

Achtung: Ab dieser Version gibt es einen Versionssprung. Die Zwischenversionen existieren nicht.

**Neue Features und Verbesserungen**

- Zeitmessung von Parallelslalom möglich (ALGE Programm 5 - Parallel Netto)
- Übernahme der Renndaten (Streckendaten, Schiedrichter, ...) aus anderen Bewerben
- Unterstützung der Zeitmessanlage Alpenhunde
- Die Spalten in Tabellenansichten sind konfigurierbar
- Anzeige von Disqualifikationsgründen auf rennmeldung.de
- Export (Excel, CSV) enthält jetzt Totalzeit und Platzierung
- Anzeige der aktiven Startnummer am ALGE Zeitmessgerät in der Software

**DSV / FIS**

- Standardwerte für die Punkteberechnung für DSV Schülerrennen
- Punkteberechnung mit Adder korrigiert
- Rundungsfehler bei Punkteberechnung behoben

**Sonstige Bugfixes**

- Bei Teilnehmer ändern wurden nicht immer alle Wert übernommen
- kleinere Bugfixes bei der Startnummernzuweisung

Die Detaillierte Liste der Änderungen ist hier: [Link](https://github.com/RaceHorology/RaceHorology/issues?q=closed%3A2022-01-21..2022-09-17+sort%3Aupdated-desc+is%3Aissue+)

## 0.4.6

**Datum:** 20.01.2022

Folgende Änderungen sind in dieser Version seit der Version 0.4.5 enthalten:

**Neue Features**

- Classement Empfang der ALGE TdC8000/8001
- Bewerbe erstellt mit RaceHorology können in DSVAlpinX bzw. DSVAlpin geöffnet werden

**User Interface Verbesserungen**

- Hauptfenster wird im Vollbildmodus gestartet bzw. die letzte Fensterposition wird gespeichert
- Einschränkung der Suche in DSV/FIS Listen nach Feld
- Hinweise / Warnung falls Zeitnahme online geht und vorheriger Durchgang nicht abgeschlossen wurde
- kleiner UI Verbesserungen im Zeitnahme / Livetiming Tab
- Livetiming Konfiguration kann gespeichert werden ohne Livetiming zu starten

**DSV / FIS**

- Korrektur der FIS Konfiguration Templates

**Sonstige Bugfixes**

- Livetiming für rennmeldung.de benötigt keine DSVAlpinX Lizenz mehr
- Verbesserung der Kompatibilität mit DSVAlpin wenn Bewerbe in Race Horology angelegt werden

  Hierbei: Einführung einer globalen Konfiguration
- Auslosungsbuttons sind bei kleinem Bildschirm nicht sichtbar
- Rennpunkte erscheinen auf Ergebnisliste nicht, wenn Bewerb frisch geladen wurde
- Listentitel erscheint manchmal nicht komplett (i.B. bei mehr als zwei Zeilen)
- Rennkonfiguration usw. werden in der Datenbank direkt gespeichert (keine separaten Files mehr)
- Startreihenfolge bei DSV Schülerrennen für die 2. und nachfolgende Gruppe war komplett falsch
- Korrektur der Startreihenfolge im 2. Durchgang bei gleicher Platzierung im 1. DG

Die Detaillierte Liste der Änderungen ist hier: [Link](https://github.com/RaceHorology/RaceHorology/issues?q=closed%3A2021-11-19..2022-01-20+sort%3Aupdated-desc+is%3Aissue+)

## 0.4.5

**Datum:** 18.11.2021

**User Interface Verbesserungen**

Abfragen ob gespeichert werden soll

Feedback beim Speichern

STRG-S als Shortcut zum Speichern

Diverse Platzoptimierungen

Rennpunkte sind in Teilnehmerliste einzusehen und änderbar

**DSV / FIS**

Punkteberechnung korrigiert

Punktlose Läufer werden am Ende einer Gruppe gelost

FIS Live Timing überarbeitet

**Sonstige Bugfixes**

Sprecheransicht geht mit Firefox

kleiner Bugfixes in der Startnummernverlosung

Die Detaillierte Liste der Änderungen ist hier: [Link](https://github.com/RaceHorology/RaceHorology/issues?q=closed%3A2021-11-10..2021-11-18+sort%3Aupdated-desc+is%3Aissue+)

## 0.4.4

**Datum:** 10.11.2021

Bugfix release mit Verbesserungen im Bereich Zeitnahme und FIS Live Timing.

Detailierte Liste der solved Issues: [Gefixt seit 0.4.2 (24. Oktober 2021)](https://github.com/RaceHorology/RaceHorology/issues?q=closed%3A2021-10-24..2021-11-10+sort%3Aupdated-desc+is%3Aissue+)

## 0.4.2

**Datum:** 23.10.2021

GEÄNDERT: Optimierung der Online-Zeitnahme
BUGFIX: Update/Upgrade Installationen funktionierten nicht

[Gefixt seit 0.4.0-alpha4 (Juli 2021)](https://github.com/RaceHorology/RaceHorology/issues?q=closed%3A2021-07-15..2021-10-23+sort%3Aupdated-desc+is%3Aissue+)

## 0.4.0-alpha.5

**Datum:** 15.07.2021

NEU: Eine erste Version, die FIS Punktelisten importieren kann und das FIS Livetiming unterstützt.

## 0.4.0-alpha.4

**Datum:** 15.07.2021

NEU: Startreihenfolge 2. Durchgang "nach Zeit, alle gedreht"

GEÄNDERT: Bedienungsverbesserungen auf dem Handzeit-Dialog

GEÄNDERT: Kleinere weitere Verbesserungen (Layout, Platz, ...)

## 0.4.0-alpha.3

**Datum:** 13.07.2021

NEU: "Start frei!" - Sound Countdown

NEU: Alge Log im Datenverzeichnis speichern (optional)

BUGFIX: Einige Abstürze behoben

[Detaillierte Liste der Änderungen (seit 0.4.0-alpha.2)](https://github.com/RaceHorology/RaceHorology/issues?q=closed%3A2021-05-11..2021-07-13+sort%3Aupdated-desc+is%3Aissue)

## 0.4.0-alpha.2

**Datum:** 27.02.2021

**Zeitnahme:**

GEÄNDERT: Zeitnahmebildschirm: Startliste sollte vorherige Laufzeit anzeigen enhancement

GEÄNDERT: Sortierung der Listen auf dem Zeitnahmebildschirm enhancement

NEU: Zeitnahmebildschirm: Schnellauscheidung in Liste "Auf der Strecke" enhancement

GEÄNDERT: Zeitnahme: "In Ziel" Liste soll mitscrollen

GEÄNDERT: Zeitnahmebildschirm: "In Ziel" Liste ist manchmal nicht richtig sortiert

BUGFIX: Abstürze in ALGE Kommunikation bug minor

NEU: Unbekannter Läufer automatisch hinzufügen enhancement

**Import & Export**

NEU: Export eines Rennens nach CSV oder Excel

GEÄNDERT: DSV Import: Teilnehmer rot markieren, wenn eine Eigenschaft des Teilnehmers nicht der DSV Liste entspricht

BUGFIX: Minor DSV Issues

GEÄNDERT: Letzte Dateien Menu: Gelöschte Dateien sollen nicht angezeigt werden

GEÄNDERT: Anzeigeprobleme auf kleinen Monitoren

GEÄNDERT: Neues Rennen => Neue Disziplin und Eindeutschen

[Detaillierte Liste der Änderungen (seit 0.4.0-alpha.1)](https://github.com/RaceHorology/RaceHorology/issues?q=closed%3A2021-02-28..2021-05-11+sort%3Aupdated-desc+is%3Aissue)

## 0.4.0-alpha.1

**Datum:** 27.02.2021

**Zeitnahme**

NEU: Unterstützen einer beliebigen Anzahl von Durchgängen (inkl. neuer Wertung "sum of best two"))

NEU: Berechnung der Zeitdifferenz zu Platz 1 in Prozent

NEU: Zeiten können gelöscht werden

GEÄNDERT: Zeitnahme zeigt unten jetzt die Läufer im Ziel (nicht mehr das Ergebnis, das ist auf der rechten Bildschirmhälfte zu sehen)

GEÄNDERT: Disqualifikationseingabe verbessert, u.a. vordefinierte Gründe, Tornummer separat

GEÄNDERT: Erneuter Start eines vermeintlich ausgeschiedenen Teilnehmers führt zur Löschung der Ausscheidung

GEÄNDERT: Manuelle Zeiteingabe unterstützt auch Sekundenangaben größer als 60s

GEÄNDERT: Allgemeine Verbesserungen bei manueller Zeiteingabe / Zeitmessung

**Import & Export**

GEÄNDERT: DSV Import - Hinzufügen von Teilnehmern mit Doppelklick möglich

GEÄNDERT: Falls DSV Import gemacht wurde, werden Teilnehmer die nicht in der DSV Liste sind, farbig markiert

GEÄNDERT: DSV XML Export - Vorname und Nachname werden korrekt exportiert

BUGFIX: Teilnehmer nicht richtig gelöscht

[Detaillierte Liste der Änderungen (seit 0.3.0-beta.1)](https://github.com/svenflossmann/RaceHorology/issues?q=closed%3A2020-12-31..2021-02-27+sort%3Aupdated-desc+)

## 0.3.0-beta.1

**Datum:** 31.12.2020

NEU: DSV Listen Import komplett überarbeitet

NEU: Selektive Übernahme von Teilnehmern aus Importlisten (z.B. DSV-Liste)

NEU: Markierung in Teilnehmerliste, wenn Teilnehmer nicht in Importliste (z.B. DSV-Liste) vorhanden

BUGFIX: Klassen-, Gruppen- und Kategorie-Editor enthielt einige Bugs

GEÄNDERT: DSV-XML-Export: Konform zur DSV Spezifikation

GEÄNDERT: DSV-XML-Export: Bei Fehlern (z.B. fehlende Infos) wird Benutzer darauf hingewiesen.

GEÄNDERT: Zuletzt geöffnete Dateien enthalten Verzeichnisnamen zur besseren Unterscheidung

BUGFIX: Absturz, wenn Datei nicht existierte

GEÄNDERT: verbesserte Geschwindigkeit beim Import (aber immer noch verbesserungswürdig)

Detaillierte Liste der Änderungen (seit 0.3.0-alpha.2): [Link](https://github.com/RaceHorology/RaceHorology/issues?q=closed%3A2020-12-08..2020-12-31+sort%3Aupdated-desc)

Detaillierte Liste der Änderungen (seit 0.2.0): [Link](https://github.com/RaceHorology/RaceHorology/issues?q=closed%3A2020-02-24..2020-12-31+sort%3Aupdated-desc)

## 0.3.0-alpha.2

**Datum:** 07.12.2020

NEU: Ersatz- / Handzeitberechnung

NEU: Laden der Handzeit via

- ALGE Timy
- Tag Heuer PocketPro

NEU: DSV Listen Import und Übernehmen von Teilnehmern in den Bewerb

GEÄNDERT: Geschlecht nach Kategorie umbenannt

## 0.3.0-alpha.1

**Datum:** 21.09.2020

NEU: Installer zur einfacheren Installation

NEU: Erstellen von Bewerbsdateien

NEU: Anlegen / Löschen von Bewerben (z.B. Slalom, Riesenslalom)

NEU: Editieren (und Importieren) von Klassen und Gruppen

NEU: Unterstützung von Kategorien

NEU: Hinzufügen / Entfernen / Editieren von Teilnehmern

NEU: Editieren mehrerer Teilnehmer gleichzeitig

NEU: Importieren von Teilnehmern via

- CSV
- Excel

NEU: Startnummernvergabe

NEU: (DSV) Update der Punkte aus den Rennlisten (auch online)

BUGFIX: viele Fehlerkorrekturen

## 0.2.0

**Datum:** 24.02.2020

NEU: DSV Punkteberechnung inkl. Zuschlag

## 0.1.0

**Datum:** unbekannt

Erste öffentliche Beta Version
