# 🐉 Project Dragon

# Decision Log

Version: 0.1

Status: In Bearbeitung

Autor: MeDaTech

---
# Decision 001

Titel: Weniger ist mehr

Datum: 03.07.2026

Status: in Bearbeitung

Entscheidung:

Die Webseite soll sich von den anderen Kampfsportwebseiten abheben. Das Design soll schlicht und professionell sein. Weniger ist mehr.

Begründung:

Das Kundenlogo vermittelt Eleganz, Professionalität und Disziplin.

Die Website soll diese Werte widerspiegeln und sich bewusst von aggressiven oder überladenen Kampfsport-Websites unterscheiden.

Ein reduziertes Design lenkt den Fokus auf Inhalte und stärkt den hochwertigen Gesamteindruck.


# Decision 002

Titel: Hero-Konzept der Startseite

Datum 05.07.2026

Autor: MedaTech

Status: In Bearbeitung

Entscheidung: 
Sobald der Besucher von www.saints-workouts.ch auf die Seite gelangt, soll ein zuerst ein Kämpfer im Hintergrund erscheinen. Darauf folgt das Logo und ca 0.5 s später der Markenname. Danach erst kommt direkt die Headline "Meistere deinen Geist – nicht nur deinen Gegner".


Begründung:
"Die Startseite soll sich beim ersten Laden wie der bewusste Eintritt in die Welt von Saints Workouts anfühlen."

# Decision 04

Titel: Preise als Menupunkt in der Navigationsleiste

Datum 05.07.2026

Autor: MedaTech

Status: In Bearbeitung

Entscheidung: Der Menuepunkt "Preise" wird vorerst noch nicht in die Navigationsleiste aufgenommen. Die Navigation beinhaltet bis heute folgendes: 
Home

Trainingsangebot

Trainingsplan

Über uns

Kontakt

Begründung: Kunde soll entscheiden, ob er die Preise in der Navigationsleiste haben möchte.


# Decision 05

Titel: Designe Masse der Frames und Rectangles

Datum 08.07.2026

Autor: MedaTech

Status: Abgeschlossen

Entscheidung:

Für alle Seiten gelten folgende Masse:

-Home Page (Frame)      ← 1440 × ca. 4500
-Navigation (Frame)      1440 × 96
-Hero (Frame + Background Rectangle)            1440 × 928
-Trainingsangebot (Frame + Background Rectangle) 1440 × 700
-Footer (frame + Background Rectangle) 1440 x 200

Begründung:
Um dem Design eine Struktur zu geben.

# Decision 06

Version: 1.0

Status: Genehmigt

Autor: MeDaTech

---

Datum: 08.07.2026

Titel: Standardisierung der Seitenstruktur

## Entscheidung

Für Project Dragon wird eine einheitliche Seitenstruktur verwendet.

### Standardgrößen

#### Seiten-Frame

- Desktop: **1440 × 1024 px**

#### Navigation

- Frame: **1440 × 96 px**

#### Hero

- Frame: **1440 × 928 px**

#### Primary Button

- Frame: **220 × 56 px**

#### Footer

- Frame: **1440 × 220 px**

## Home Page

Die Home Page besteht aus folgenden Bereichen:

- Navigation
- Hero
- Trainingsangebot
- Warum Saints Workouts
- Trainer
- Trainingsplan
- Kontakt / Standort
- Footer

Jeder Hauptbereich wird als eigener **Frame** erstellt und besitzt einen eigenen **Background (Rectangle)**.

## Landing Page

Die Landing Page besteht ausschließlich aus:

- Navigation
- Hero

Sie dient als Einstieg in die Website und enthält keinen Footer.

## Footer

Der Footer wird auf allen vollständigen Seiten identisch aufgebaut und enthält:

- Logo
- Saints Workouts
- Navigation
- Kontaktinformationen
- Öffnungszeiten
- Copyright
- Impressum
- Datenschutz

## Begründung

Durch die einheitliche Seitenstruktur entsteht ein konsistentes Design. Jeder Hauptbereich kann später direkt als eigene React-Komponente umgesetzt werden. Dies erleichtert die Entwicklung, verbessert die Wartbarkeit und sorgt für einen klaren Projektaufbau.