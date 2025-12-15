# Umsetzungsplan — SelfState (MVP: Web + CMS)

Dieser Umsetzungsplan fasst die vereinbarten Ziele, Meilensteine, Tasks und Rahmenbedingungen für das SelfState‑MVP zusammen. Ziel: Web‑Dashboard + Payload CMS (PostgreSQL), gehostet auf Quandes‑Servern; Mobile folgt später.

## Kurzübersicht
- Scope: Web (Next.js) + Payload CMS (Postgres). Mobile später.
- Primäre Nutzer: Camp‑Teilnehmende (Change Makers). Moderation und Editor‑Rolle für Pattern Library.
- AI: liteLLM‑kompatible Integration (BYOK‑Pattern über `.env`).
- Package manager / CI: `pnpm`, GitHub Actions, E2E mit Antigravity (CI‑Integration als Skeleton).
- Hosting: Eigener Server (Quandes) via Dokploy; DB: PostgreSQL (EU‑Only).

---

## Meilensteine (High Level)

M1 — Repo & Dev Setup (branch: `chore/setup-env`)
- Aufgaben:
  - Monorepo‑Setup prüfen/initialisieren (pnpm workspace), `pnpm install` befehle dokumentieren.
  - `.env.example` mit Platzhaltern (POSTGRES_URL, NEXT_PUBLIC_API_URL, LLM_PROVIDER, LLM_API_KEY, SESSION_SECRET, DOKPLOY_VARS).
  - GitHub Actions skeleton: `ci.yml` (install, lint, test, build) als Basis.
  - Dockerfile‑Beispiele, `dokploy/README.md` mit Deploy‑Checkliste.
- Deliverable: Entwicklungsdokument mit Schnellstartanleitung.

M2 — Payload CMS (Postgres) + Collections (branch: `feat/cms-collections`)
- Aufgaben:
  - Scaffold `/apps/cms` mit Konfiguration für PostgreSQL.
  - Collections anlegen: `Users` (Roles), `MicroScripts`, `StateSyncs`, `Identities`, `Patterns`.
  - RBAC/ACL: Default private; Editor/Moderator Rollen.
  - `pnpm generate:types` Script einrichten.
- Deliverable: Lokale CMS‑Instanz lauffähig (Dokumentation).

M3 — Web Dashboard Core (branch: `feat/web-core`)
- Aufgaben:
  - Scaffold `/apps/web` (Next.js App Router), Tailwind CSS, Design Tokens (Farben, Schrift).
  - `packages/ui` Grundkomponenten (Button, Input, Card, Modal) nach shadcn/ui Patterns.
  - Seiten: Login, Dashboard (Übersicht), Pattern Library, MicroScript Editor, State Sync Form.
  - Einfaches Auth‑Stub (kann später mit Payload Auth ersetzt werden).
- Deliverable: UI Grundfunktionen, responsive Layout.

M4 — Integration CMS ↔ Web (branch: `feat/cms-integration`)
- Aufgaben:
  - Generierte Types nach `/packages/shared` kopieren / synchronisieren.
  - Fetcher/Services implementieren (CRUD für MicroScripts, Patterns, StateSyncs).
  - State Sync Submission Endpoint und Speicherung.
- Deliverable: Vollständige CRUD‑Funktionen zwischen Web und CMS.

M5 — AI Impact Coach (branch: `feat/ai-coach`)
- Aufgaben:
  - Abstraktionsschicht für liteLLM‑Anbindung (konfigurierbar).
  - Server‑seitige Wrapper (secure) für LLM‑Calls, BYOK Handling via `.env`.
  - Beispiel‑Prompt/Flow für Coach‑Antworten (Prototyp).
- Deliverable: Serverendpoint, das LLM‑Aufrufe proxyt.

M6 — Testing & E2E (branch: `chore/testing`)
- Aufgaben:
  - Unit Tests (Jest / Vitest) für `packages/shared` (zod‑Schemata, business logic).
  - E2E Smoke Tests (Antigravity/Playwright) für Login → Create MicroScript → State Sync.
  - GitHub Actions Job für Tests/E2E.
- Deliverable: CI‑Pipeline mit Tests für PRs.

M7 — Dokumentation & Handover (branch: `docs/release`)
- Aufgaben:
  - `README.md`, `GETTING_STARTED.md`, `dokploy/README.md` (Deploy‑Anleitung, Secrets‑Liste).
  - Hinweise zur EU‑Only Hosting Policy.
  - Weiterführende Docs: `docs/SocialImpactCamp.md` (Platzhalter bereits vorhanden).
- Deliverable: Deployfähiges Paket mit Anleitung.

---

## Branch‑ und Commit‑Strategie
- Branch‑Pattern: `<type>/<short-desc>` z. B. `feat/cms-collections`, `chore/setup-ci`.
- Commit‑Konvention: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).
- PR‑Ziel: `concept`. PRs für Review und Merge; keine direkten Änderungen an `main`.

---

## Acceptance Criteria (MVP)
- CMS:
  - Postgres DB: initialisiert; Payload Admin lokal startbar.
  - Collections `MicroScripts`, `StateSyncs`, `Identities`, `Patterns` vorhanden mit Basisfeldern und RBAC.
  - `pnpm generate:types` erzeugt Typen in `/packages/shared`.
- Web:
  - Authentifizierter User kann MicroScripts und Patterns CRUD ausführen.
  - State Sync Form sendet Daten und speichert in CMS.
  - Design Tokens (Farben) sind integriert; responsive Layout.
- CI / Tests:
  - Unit Tests laufen in GH Actions.
  - E2E Smoke Test läuft (Antigravity/Playwright skeleton).
- AI:
  - Server‑Endpoint proxyt LLM‑Aufrufe konfigurierbar via `.env`.
- Docs:
  - README mit Setup & Deploy‑Anleitung vorhanden.

---

## Datenmodell (erster Entwurf)
- User: `id, email, name, roles[], createdAt`
- MicroScript: `id, title, description, durationSeconds, identity, trigger, authorId, visibility, createdAt, updatedAt`
- StateSync: `id, userId, date, microScriptId?, rating, notes, coachFeedback, createdAt`
- Pattern: `id, title, content, tags[], source, license, approved, createdAt`
- Identity: `id, name, description, colorToken`

Später: zod‑Schemata zu jedem Modell und `pnpm generate:types`.

---

## CI / Deploy‑Skeleton (konkret)
- GitHub Actions (`.github/workflows/ci.yml`):
  - Jobs: install, lint, test, build, e2e‑smoke (Antigravity skeleton).
- Dockerfiles: Beispiele für `/apps/cms` und `/apps/web`.
- `dokploy/README.md`: Liste benötigter Umgebungsvariablen (DB_URL, JWT_SECRET, LLM_PROVIDER, LLM_API_KEY).
- `.env.example`: Platzhalter und kurze Hinweise (keine echten Keys committen).

---

## Testing Strategie
- Unit Tests: Jest / Vitest für `packages/shared` und einzelne Komponenten.
- E2E: Antigravity (oder Playwright) Smoke Tests: Login → Create MicroScript → Submit State Sync.
- Coverage Ziel: Basis >70% für shared logic.

---

## Sicherheit & Datenschutz
- EU‑Only Hosting: DB und Server in EU‑Regionen deployen (Dokploy konfigurieren).
- BYOK for LLM: Keys nicht in repo, `.env` mit Platzhaltern; Empfehlung: Secrets in Deploy‑System als verschlüsselte Secrets.
- Default Privacy: User‑Daten privat; Patterns require approval before public listing.

---

## UX / Design
- Design Tokens in `packages/ui`:
  - Primary: `#155252ff`
  - Complementary: `#892323ff`
  - Alternative: `#896723ff`
  - Schrift: Raleway (Fallbacks definieren).
- Komponenten: Button, Input, Card, Modal als Baseline.
- i18n: DE + EN, initial DE‑Texte, keys vorbereitet (z. B. `next-intl`).

---

## Moderation & Pattern Library
- `Patterns` Collection mit `approved` Flag.
- Editor‑Rolle: kann Patterns prüfen, editieren und freigeben.
- Prozess: Einreichung → Editor Review → Freigabe oder Rückfrage.

---

## Grober Zeitplan (orientierend)
- Sprint 0 (1 Woche): M1 — Setup, CI skeleton, `.env.example`.
- Sprint 1–2 (2–3 Wochen): M2 — CMS + Collections.
- Sprint 3–5 (3–4 Wochen): M3 — Web Core UI.
- Sprint 6 (1–2 Wochen): M4 — Integration CMS↔Web.
- Sprint 7 (1–2 Wochen): M5 — AI Coach Grundgerüst.
- Sprint 8 (1–2 Wochen): M6 — Tests & E2E.
- Sprint 9 (1 Woche): M7 — Docs & Handover.

Anmerkung: Da ihr Woche für Woche 1–2 Stunden arbeitet, ist der Plan anpassbar; wir priorisieren M1–M4 zuerst.

---

## Erste konkrete Tasks (ich kann sie jetzt anlegen)
1. Branch `chore/setup-env` — GH Actions skeleton, `.env.example`, `dokploy/README.md`.
2. Branch `feat/cms-collections` — Payload skeleton + Postgres config + leere Collection‑Schemas.
3. Branch `feat/web-core` — Next.js scaffold + Tailwind config + `packages/ui` tokens.
4. `docs/DEVELOPMENT.md` mit lokalen Setup‑Schritten.

Wenn du willst, starte ich mit Task 1 und 2 jetzt: ich erstelle die Branches, lege die Skeleton‑Dateien an, committe und pushe die Branches. Soll ich das tun?"}EOF