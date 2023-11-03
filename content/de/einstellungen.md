---
layout: layouts/docs.njk
eleventyNavigation:
  key: Einstellungen
  parent: Installation
  order: 1
---

# Einstellungen

Über das Menü *Optionen* -> *Einstellungen* können Disziplinübergreifende Konfigurationen vorgenommen werden. 

##	Zeitmessgerät

Folgende Zeitmessgeräte werden derzeit unterstützt: 

- Alge TdC 8000/8001
- Alge Timy (via USB oder RS232)
- Microgate Rei 2
- Microgate Rei Pro
- Microgate RT Pro
- Microgate Racetime 2
- Alpenhunde

**Wichtig:**{.badge .badge-danger .text-uppercase} RS232 Zeitmessgeräte müssen mit 9600 Baud konfiguriert werden. {.alert .alert-warning}

Die Schnittstellen werden automatisch erkannt. Sollte keine Schnittstelle angezeigt werden, kann im Gerätemanager von Windows überprüft werden ob eine Schnittstelle erkannt wird.

### Debug Funktionen

Diese Einstellungen sind nur auf anraten der Entwickler zu aktivieren und werden für den normalen Betrieb nicht benötigt.

## Zeitnahme

### Zeit bis Läufer automatisch als NIZ gewertet wird

Sollte ein Teilnehmer nach der eingestellten Zeit (in Sekunden) noch nicht im Ziel sein wird dieser automatisiert als **Nicht im Ziel** gekennzeichnet. 

### Anzahl Start bis ein nichtgestarteter Läufer als NaS gewertet wird

Sollten die Anzahl Teilnehmer nach der Startliste ausgelassen werden, so wird der nicht gestartete Teilnehmer automatisch als **Nicht am Start** gekennzeichnet.

### Startinvervall

RaceHorology kann als Hilfe für den Zeitnehmer eine Startuhrfunktion imitieren. Der Zeitnehmer kann so z.B. über Funk dem Starter ein Signal geben und mit dieser Hilfe im "Takt" bleiben. Das Intervall wird durch Töne und Farbwechsel im Zeitnahmebereich des Programms signalisiert.

### Unbekannte Teilnehmer

Sollte eine Datenübertragung vom Zeitmessgerät mit einer Startnummer eingehen, welche derzeit nicht erfasst ist, so wird automatisch ein Teilnehmer generiert. 

## Standardwerte

### Nicht zu vergebene Startnummern

Sollte eine Startnummer nicht vorhanden sein, so ist es möglich diese automatisch für alle Bewerbe und Disziplinen auszuschliessen. Die Startnummer wird bei der Verlosung dann nicht vergeben. 

## Update

Nähere Informationen unter ![Update](../../de/installation.html#programm-aktualisieren-(update))
