---
layout: layouts/docs.njk
eleventyNavigation:
  key: Änderungshistorie
  order: 11
---

# Änderungshistorie / Changelog

## 0.4.0-alpha.1

**Datum:** 27.02.2021

**Zeitnahme**

NEU: Unterstützen einer beliebigen Anzahl von Durchgängen (inkl. neuer Wertung "sum of best two"))(issue #17)

NEU: Berechnung der Zeitdifferenz zu Platz 1 in Prozent (issue #132)

NEU: Zeiten können gelöscht werden (issue #92)

GEÄNDERT: Zeitnahme zeigt unten jetzt die Läufer im Ziel (nicht mehr das Ergebnis, das ist auf der rechten Bildschirmhälfte zu sehen)(issue #32)

GEÄNDERT: Disqualifikationseingabe verbessert, u.a. vordefinierte Gründe, Tornummer separat (issue #40)

GEÄNDERT: Erneuter Start eines vermeintlich ausgeschiedenen Teilnehmers führt zur Löschung der Ausscheidung (issue #47)

GEÄNDERT: Manuelle Zeiteingabe unterstützt auch Sekundenangaben größer als 60s (issue #134)

GEÄNDERT: Allgemeine Verbesserungen bei manueller Zeiteingabe / Zeitmessung (issues #135, #133)

**Import & Export**

GEÄNDERT: DSV Import - Hinzufügen von Teilnehmern mit Doppelklick möglich (issue #125)

GEÄNDERT: Falls DSV Import gemacht wurde, werden Teilnehmer die nicht in der DSV Liste sind, farbig markiert (issue #121)

GEÄNDERT: DSV XML Export - Vorname und Nachname werden korrekt exportiert (issue #122)

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
-	ALGE Timy 
-	Tag Heuer PocketPro

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

-	CSV
-	Excel

NEU: Startnummernvergabe

NEU: (DSV) Update der Punkte aus den Rennlisten (auch online)

BUGFIX: viele Fehlerkorrekturen

## 0.2.0

**Datum:** 24.02.2020

NEU: DSV Punkteberechnung inkl. Zuschlag

## 0.1.0

**Datum:** unbekannt

Erste öffentliche Beta Version
