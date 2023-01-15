---
layout: layouts/docs.njk
eleventyNavigation:
  key: Häufige Fehler (FAQ)
  order: 14
---

# Häufige Fehler und die Lösung dazu

**Es wird empfohlen, falls unerwartete Ausgaben oder Fehler auftauchen, diese Liste durchzugehen um schnelle Abhilfe zu schaffen bei bekannten Szenarien und das Race Horology Team zu entlasten**

##### In der Punkteberechnung werden für die besten 5 Läufer nur ein Wert von 0 angezeigt - die Punkteberechnung ist deshalb fehlerhaft

Bitte stelle sicher, dass in der Konfiguration (Lokal oder Global) ein Maximalwert eingetragen ist. Sollte hier 0 stehen wird dieser Wert auch 1:1 so in der Punkteberechnung übernommen.

##### Die Externe Anzeige (Sprecheransicht) funktioniert nicht mit dem Safari Webbrowser (z.b. auf Iphone oder Mac)

Hierbei handelt es sich möglicherweise um einen Fehler in älteren Safari-Versionen. Es existiert eine Möglichkeit dieses Problem zu umgehen. Hierfür sind nachfolgende Schritte auszuführen: 

1. Gehe zu "Einstellungen" > "Safari" > "Erweitert" > "Experimentelle Features"
2. Setze die Option "NSURLSession Websocket" auf **aus**. 
3. Starte Safari neu

##### Race Horology stürzt ab

Grundsätzlich kann dieses Problem verschiedene Ursachen haben, eine Ursache und dessen Behebung ist hier aufgeführt:

Sollte es mehrere COM-Ports geben und diese den gleichen Namen haben (z.B.: COM3), kann dies so herausgefunden und korrigiert werden:

1. Öffne den *Geräte-Manager* (dies ist ein Windows Konfigurationstool)
2. Erweitere *Anschlüsse (COM & LPT)*
3. *Rechtsklick* auf eines der Geräte mit dem gleichen Namen
4. im Tab *Anschlusseinstellungen" auf *Erweitert* klicken
5. Hier kann die *COM-Anschlussnummer* geändert werden.
6. Alle Fenster mit *OK* schliessen. 
7. Neuen Namen in Race Horology in den Optionen konfigurieren
