# Dokploy Deploy Checklist (SelfState)

Diese Datei beschreibt die minimalen Einstellungen für das Deploy auf Quandes Server via Dokploy.

Erforderliche Umgebungsvariablen (Beispiele):
- `POSTGRES_URL` – z.B. `postgres://user:pass@host:5432/dbname` (EU‑Host)
- `NEXT_PUBLIC_API_URL` – URL der Web‑App
- `SESSION_SECRET` – starkes Geheimnis für Sessions/JWT
- `LLM_PROVIDER` – `liteLLM` oder anderer Provider
- `LLM_API_KEY` – API Key (BYOK)

Empfehlungen:
- Secrets in Dokploy/Server nicht im Repo speichern.
- Datenbank in EU‑Region provisionieren.
- Backup‑Strategie konfigurieren.
