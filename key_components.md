# DFFB Motionplan - Schlüsselkomponenten

## Implementierte Komponenten

### Grundlegende Struktur
- [x] Datenbankschema (vollständig definiert in schema.ts)
- [x] Systemarchitektur (Next.js, Cloudflare D1, Tailwind CSS)
- [x] Benutzerrollen und -berechtigungen (definiert in workflow.tsx)

### Benutzeroberfläche
- [x] Startseite (implementiert in app/page.tsx)
- [x] Login- und Registrierungsseiten (implementiert in app/login/page.tsx und app/register/page.tsx)
- [x] Dashboard (implementiert in app/dashboard/page.tsx)
- [x] Projektanmeldung (implementiert in app/projects/new/page.tsx)

### Kernfunktionen
- [x] Workflow-Management (implementiert in lib/workflow.tsx)
- [x] Dokumententypen und -status (definiert in lib/documents.tsx)
- [x] Datenbankzugriffsmethoden (implementiert in lib/db/index.ts)

## Zu implementierende Komponenten (basierend auf Nutzerpriorität)

### Projektmonitoring
- [ ] Vollständige Projektverwaltung mit Statusübergängen
- [ ] Projektübersicht mit Filterfunktionen
- [ ] Benachrichtigungssystem für Statusänderungen
- [ ] Visualisierung des Projektfortschritts

### Dokumentenerstellung
- [ ] Vollständige Dokumentenverwaltung mit Upload/Download
- [ ] Versionierung von Dokumenten
- [ ] Vertragsvorlagen-System
- [ ] Generierung von Dokumenten aus Vorlagen
- [ ] Verwaltung unterschriebener Dokumente

### V-Geld Antrag und Abrechnung
- [ ] Beantragung von Vorkosten (250€ nach Projektfreigabe)
- [ ] Beantragung von Verrechnungsgeld
- [ ] Abrechnung von Ausgaben
- [ ] Budgetverwaltung
- [ ] Finanzberichte

### Admin-Interface
- [ ] Benutzerverwaltung
- [ ] Rollenmanagement
- [ ] Systemeinstellungen
- [ ] Anpassung von Workflow-Regeln
- [ ] Verwaltung von Vertragsvorlagen

### Flexibilität und Erweiterbarkeit
- [ ] API-Endpunkte für alle Funktionen
- [ ] Modulare Komponenten
- [ ] Konfigurierbare Workflow-Regeln
- [ ] Erweiterbare Dokumententypen
- [ ] Anpassbare Benutzeroberfläche

## Technische Anforderungen
- [ ] Datenbank initialisieren
- [ ] Authentifizierung implementieren
- [ ] API-Routen für alle Funktionen
- [ ] Fehlerbehandlung und Validierung
- [ ] Responsive Design für alle Geräte
- [ ] DSGVO-konforme Datenspeicherung
