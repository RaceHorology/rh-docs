---
layout: layouts/docs.njk
eleventyNavigation:
  key: Teilnehmer
  order: 5
---

# Teilnehmer

Race Horology unterscheidet zwischen Teilnehmer für einen Wettbewerb und Teilnehmern für ein Rennen. Grundsätzlich muss ein Teilnehmer eines Rennens auch ein Teilnehmer des Wettbewerbes sein. Weiterhin werden die Teilnehmer einer Klasse bzw. einer Gruppe zugeordnet. Diese sollten angelegt werden, bevor die Teilnehmer hinzugefügt werden. Es ist aber auch möglich die Klassen später über **Alle Klassen neu zuweisen**{.btn .btn-secondary} noch zu aktualisieren.

##	Teilnehmer verwalten

![Kategorien](../../assets/images/de/teilnehmerdaten.png)

Teilnehmer können in der Tabelle **Teilnehmer & Globale Konfiguration** und Subtabelle **Teilnehmer** verwaltet werden. 

### Teilnehmer hinzufügen

Um einen neuen Teilnehmer hinzuzufügen, drücken Sie **Teilnehmer hinzufügen**{.btn .btn-secondary}. 

**Achtung:**{.badge .badge-danger .text-uppercase} Dem Teilnehmer wird automatisch eine passende Klasse zugewiesen sofern keine selbst gewählt wurde. Es ist möglich, dass diese Klasse nicht der gewünschten Klasse entspricht. {.alert .alert-warning}

### Teilnehmer löschen

**Teilnehmer löschen**{.btn .btn-secondary} löscht alle markierten Teilnehmer nach einer Sicherheitsabfrage. 

**Achtung:**{.badge .badge-danger .text-uppercase} Eventuell vorhandene Zeitdaten werden ebenso gelöscht. {.alert .alert-warning}

### Teilnehmer ändern

Werte eines Teilnehmers können sowohl direkt in der Tabelle (auf ein Feld Doppelklicken, um den Editiermodus zu aktivieren),  sowie in der daneben befindlichen Detailansicht editiert werden. Durch **Speichern**{.btn .btn-secondary} werden die geänderten Daten übernommen. **Zurücksetzen**{.btn .btn-secondary} zeigt die ursprünglichen Werte wieder an. 

Es ist auch möglich, mehrere Teilnehmer gleichzeitig zu ändern. Dies kann hilfreich sein, um z.B. Vereinsnamen oder Nationen zu ändern sowie mehrere Teilnehmer zu einem Rennen hinzuzufügen. Felder, die aktuell unterschiedliche Werte enthalten, werden mit den Hinweis *<verschiedene>* gekennzeichnet.

Um mehrere Teilnehmer zu ändern, sind folgende Schritte notwendig:

-	Selektiere die zu bearbeitenden Teilnehmer in der Tabelle (<Shift> oder <Strg> beim Auswählen halten).

-	Verändere die Felder in der Detailansicht. Durch **Speichern**{.btn .btn-secondary} werden die geänderten Werte bei allen markierten Teilnehmer übernommen.

###	Teilnehmer einem Rennen zuweisen

Die Teilnehmer können einem oder mehreren Rennen zugewiesen sein. Man kann die Rennteilnahme eines Teilnehmers auf drei Arten beeinflussen bzw. verändern:

- Häkchen in der Tabelle Teilnehmerdaten setzen oder entfernen
- Häkchen in der Detailansicht setzen oder entfernen
-	Beim Importieren von Teilnehmern die entsprechenden Rennen angeben.

Durch das Auswählen von mehreren Teilnehmern, kann man mehrere Teilnehmer auf einmal zu einem Rennen hinzufügen oder entfernen. {.alert .alert-success}

##	Teilnehmer importieren

Folgende Importformate werden von Race Horology unterstützt:

-	Textfiles (Komma oder Tab getrennte Datenfelder – CSV, TSV, TXT)
-	Excel (XLS, XLSX)
- DSV Alpin ZIP Import Files

![Daten-Import](../../assets/images/de/datenimport.png)

Der Import-Wizard wird gestartet über **Import**{.btn .btn-secondary} im Tab **Teilnehmer**. Nach dem Auswählen der Datei wird der Import-Wizard angezeigt. 

Im linken Bereich befindet sich die Datenvorschau. Sie zeigt die zu importierenden Daten an. 

Im rechten Bereich befindet sich oben die **Datenfeldzuordnung**. Pro Race Horology Datenfeld kann ein Datenimportfeld ausgewählt werden. Vor dem Import ist es wichtig die korrekte Feldzuordnung sicherzustellen.

Die Datenfeldzuordnung versucht eine sinnvolle Datenzuordnung auf Basis der Feldbezeichnungen zu erraten. {.alert .alert-success}

Im unteren rechten Bereich wird angegeben, zu welchem Rennen die Teilnehmer zugeordnet werden sollen. Standardmäßig sind dies alle, aber durch deaktivieren können nicht gewünschte Rennen übersprüngen werden.

##	Klassen und Gruppen zuweisen

![Kategorien](../../assets/images/de/teilnehmer_aendern.png)

Klassen und Gruppen müssen typischerweise nicht neu zugewiesen werden, da diese durch den Jahrgang festgelegt ist und automatisch zugewiesen werden. Dennoch gibt es folgende Möglichkeiten die Klasse einem Teilnehmer zuzuweisen:

-	Auswahlbox bei Teilnehmer editieren

Mit der <span class="fas fa-square"></span> Auswahlbox bei Teilnehmer editieren kann die Klasse explizit überschrieben werden.

-	Zurücksetzen bei Teilnehmer editieren

**Zurücksetzen**{.btn .btn-secondary} setzt die Klasse für den aktuellen Teilnehmer wieder auf Basis des Jahrgangs des Teilnehmers zurück. 

-	Klassen aller Teilnehmer zurücksetzen

**Klassen neu zuweisen**{.btn .btn-secondary} setzt die Klassen alle Teilnehmer auf Basis des Jahrgangs zurück.

### Automatischer Abgleich mit Punkteliste

Sind Teilnehmer über eine Punkteliste importiert und haben sich Daten geändert, so wird die jeweilige Tabellenzeile orangefarben hinterlegt. Beispiele sind z.b. falscher Name, Vorname oder geänderte Punkte die noch nicht aktualisiert wurden.
