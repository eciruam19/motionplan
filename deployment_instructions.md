# DFFB Motionplan - Deployment-Anleitung

Diese Anleitung beschreibt, wie Sie das DFFB Motionplan-System lokal testen und auf Cloudflare Pages deployen können.

## Lokale Testumgebung einrichten

### Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder pnpm
- Git

### Schritt 1: Repository klonen

```bash
git clone https://github.com/yourusername/dffb-motionplan.git
cd dffb-motionplan
```

Alternativ können Sie das Verzeichnis `/home/ubuntu/dffb-motionplan` direkt verwenden.

### Schritt 2: Abhängigkeiten installieren

```bash
# Mit npm
npm install

# Oder mit pnpm
pnpm install
```

### Schritt 3: Umgebungsvariablen konfigurieren

Erstellen Sie eine Datei `.env.local` im Hauptverzeichnis des Projekts mit folgendem Inhalt:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-at-least-32-characters
```

Ersetzen Sie `your-secret-key-at-least-32-characters` durch einen sicheren Schlüssel.

### Schritt 4: Lokale Datenbank initialisieren

```bash
# Wrangler installieren (falls noch nicht vorhanden)
npm install -g wrangler

# Lokale D1-Datenbank erstellen
wrangler d1 create dffb_motionplan_db

# Datenbank-ID in wrangler.toml aktualisieren
# Ersetzen Sie "local" mit der erhaltenen Datenbank-ID
```

Führen Sie die Migrationsdatei aus:

```bash
wrangler d1 execute dffb_motionplan_db --local --file=./migrations/0001_initial.sql
```

### Schritt 5: Entwicklungsserver starten

```bash
npm run dev
```

Die Anwendung ist nun unter http://localhost:3000 verfügbar.

## Deployment auf Cloudflare Pages

### Voraussetzungen

- Cloudflare-Konto
- Wrangler CLI (installiert in Schritt 4)

### Schritt 1: Bei Cloudflare anmelden

```bash
wrangler login
```

### Schritt 2: D1-Datenbank in Cloudflare erstellen

```bash
# Produktionsdatenbank erstellen
wrangler d1 create dffb_motionplan_db

# Datenbank-ID in wrangler.toml aktualisieren
# Ersetzen Sie die Datenbank-ID im Abschnitt [[d1_databases]]
```

### Schritt 3: Migrationsdatei auf Produktionsdatenbank anwenden

```bash
wrangler d1 execute dffb_motionplan_db --file=./migrations/0001_initial.sql
```

### Schritt 4: Anwendung für Produktion bauen

```bash
npm run build
```

### Schritt 5: Anwendung deployen

```bash
npm run deploy
```

Nach erfolgreichem Deployment erhalten Sie eine URL, unter der die Anwendung erreichbar ist.

## Umgebungsvariablen für Produktion

Folgende Umgebungsvariablen müssen in den Cloudflare Pages-Einstellungen konfiguriert werden:

- `NEXTAUTH_URL`: Die URL Ihrer Anwendung (z.B. https://dffb-motionplan.pages.dev)
- `NEXTAUTH_SECRET`: Ein sicherer Schlüssel für die Authentifizierung

## Wartung und Updates

### Neue Migrationsdateien hinzufügen

Wenn Sie Änderungen am Datenbankschema vornehmen, erstellen Sie eine neue Migrationsdatei:

```bash
# Beispiel: Neue Migrationsdatei erstellen
touch ./migrations/0002_update_schema.sql

# Migrationsdatei lokal anwenden
wrangler d1 execute dffb_motionplan_db --local --file=./migrations/0002_update_schema.sql

# Migrationsdatei auf Produktion anwenden
wrangler d1 execute dffb_motionplan_db --file=./migrations/0002_update_schema.sql
```

### Anwendung aktualisieren

Nach Änderungen am Code:

```bash
# Änderungen bauen
npm run build

# Änderungen deployen
npm run deploy
```

## Fehlerbehebung

### Lokale Entwicklung

- **Problem**: Fehler beim Starten des Entwicklungsservers
  **Lösung**: Überprüfen Sie, ob alle Abhängigkeiten installiert sind und die Umgebungsvariablen korrekt gesetzt sind.

- **Problem**: Datenbank-Fehler
  **Lösung**: Stellen Sie sicher, dass die lokale D1-Datenbank korrekt initialisiert wurde und die Migrationsdatei erfolgreich ausgeführt wurde.

### Deployment

- **Problem**: Fehler beim Deployment
  **Lösung**: Überprüfen Sie die Logs in der Cloudflare-Konsole und stellen Sie sicher, dass alle Umgebungsvariablen korrekt konfiguriert sind.

- **Problem**: Authentifizierungsfehler nach Deployment
  **Lösung**: Überprüfen Sie, ob `NEXTAUTH_URL` und `NEXTAUTH_SECRET` korrekt konfiguriert sind.

## Support

Bei Fragen oder Problemen wenden Sie sich bitte an den Administrator des Systems oder erstellen Sie ein Issue im GitHub-Repository.
