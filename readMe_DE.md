# Bestellapp

Eine einfache Single-Page-Bestellapplikation,  
die Daten aus einer lokalen JSON-Datei lädt  
und sie als responsive Karten darstellt.  
Ziel ist es, grundlegende JavaScript-Techniken (Fetch-basierter Datenabruf),  
Template-Funktionen und responsives CSS zu demonstrieren.

---

## 📁 Projektstruktur

bestellapp/
├── index.html # Einstiegspunkt der Anwendung
├── style.css # Basis-Styles und Layout
├── responsive.css # Media Queries für verschiedene Breakpoints
├── script.js # JavaScript-Logik: Datenabruf aus JSON, Template, Rendering
├── Templates.js # JavaScript-Templates für die Darstellung
├── menu.json # JSON-Datei mit Bestelldaten
├── img/ # Verzeichnis für Bilder


## 🚀 Features

- **Lokaler Datenabruf**  
  Lädt Beitragsdaten aus der Datei `data/posts.json` mittels `fetch`.

- **Template-Funktion**  
  `createRowTemplate(data)` generiert für jeden Datensatz einen HTML-String für `.post`-Elemente.

- **DOM-Rendering**  
  Saubere Ausgabe durch Leeren des Containers (`innerHTML = ""`) und nachfolgendes Befüllen.

- **Responsive Design**  
  Mobile-First-Ansatz mit Breakpoints bei 890px, 630px und 290px, 
  um die Darstellung auf verschiedenen Geräten zu optimieren.

- **Einfache Fehlerbehandlung**  
  Basisprüfung des HTTP-Status und Anzeige einer Fehlermeldung bei Problemen beim Laden der JSON-Datei.


## ⚙️ Technologien
HTML5
CSS3 (Flexbox, Media Queries, Reset)
JavaScript (ES6+)
fetch-API zum Laden lokaler JSON-Dateien
Template Literals zur Generierung von HTML
DOM-Methoden (innerHTML, createElement, DocumentFragment)

## ✅ Best Practices

- **Trennung von Logik und Darstellung** 
Template-Funktion liefert nur HTML-Strings, das Rendering geschieht zentral.

- **CSS Reset & Box Model** 
Einheitliches Layout durch

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

- **Mobile-First**
Anpassung der Styles für kleinere Viewports vor größeren Bildschirmen.

## 🛠️ Weiterentwicklung

- **Performance-Optimierung**
Einsatz von DocumentFragment oder Batch-Updates, wenn große Datenmengen geladen werden.

- **Interaktive Funktionen**
Filtern, Sortieren oder Suchen innerhalb der Bestelldaten.

- **Erweiterung um Formular**
Möglichkeit, neue Einträge per Formular hinzuzufügen und in localStorage zu speichern.

- **Tests**
Unit-Tests für die Template-Funktion und Integrationstests mit Cypress.


## 📄 Lizenz
Dieses Projekt ist lizenziert unter der MIT License. Siehe LICENSE für Details.

