# Development Setup — SelfState (Kurz)

1) Node & pnpm installieren

  - Node v18+ empfohlen
  - `pnpm` installieren: `npm i -g pnpm`

2) Repo klonen

  - `git clone <repo>`
  - `git switch concept`

3) Abhängigkeiten installieren

  - `pnpm install`

4) Lokales Environment

  - Kopiere `.env.example` nach `.env` und passe Werte an (Postgres URL, LLM Key).

5) CMS (Payload)

  - Wechsel in `/apps/cms` (sofern vorhanden) und starte die Dev‑Instanz:
    - `pnpm --filter @apps/cms dev` (oder in `/apps/cms` `pnpm install` + `pnpm dev`)

6) Web

  - Wechsel in `/apps/web` und starte dev: `pnpm dev`

7) Tests

  - `pnpm -w run test` (wenn Tests vorhanden)

8) Deploy

  - Nutze `dokploy/README.md` als Checkliste; setze Secrets im Deploy‑System.

Wenn etwas fehlt, melde dich — ich erweitere die Anleitung mit konkreten Commands für eure Umgebung.
