---
layout: layouts/docs.njk
eleventyNavigation:
  key: Häufige Fehler (FAQ)
  order: 14
---

# Häufige Fehler und die Lösung dazu

**Es wird empfohlen, falls unerwartete Ausgaben oder Fehler auftauchen, diese Liste durchzugehen um schnelle Abhilfe zu schaffen bei bekannten Szenarien und das Race Horology Team zu entlasten**

##### 1. In der Punkteberechnung werden für die besten 5 Läufer nur ein Wert von 0 angezeigt - die Punkteberechnung ist deshalb fehlerhaft

Bitte stelle sicher, dass in der Konfiguration (Lokal oder Global) ein Maximalwert eingetragen ist. Sollte hier 0 stehen wird dieser Wert auch 1:1 so in der Punkteberechnung übernommen.

##### 2. Die Externe Anzeige (Sprecheransicht) funktioniert nicht mit dem Safari Webbrowser (z.b. auf Iphone oder Mac)

Hierbei handelt es sich möglicherweise um einen Fehler in Safari. Es existiert eine Möglichkeit dieses Problem zu umgehen. Hierfür sind nachfolgende Schritte auszuführen: 

1. Gehe zu "Einstellungen" > "Safari" > "Erweitert" > "Experimentelle Features"
2. Setze die Option "NSURLSession Websocket" auf **aus**. 
3. Starte Safari neu