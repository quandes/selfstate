# Ontologie (Entwurf) – SelfState

Ziel: Einheitliche Begriffe für Datenmodell, KI-Prompts und UI in allen Apps (CMS, Web, Mobile). Fokus auf Identität/Flow statt klassischen Habit-Vokabular.

## Kern-Objekte
- **Identity** (SELF / CREATE / CONNECT)  
  - Rolle/Pfeiler, die Verhalten begründet.  
  - Felder: `id`, `name`, `description`, `pillar` (enum: self/create/connect), `icon` (optional).
- **MicroScript**  
  - Kleinste Handlung (< 2 Min), mit Trigger, Action, Reward.  
  - Felder: `id`, `title`, `trigger`, `action`, `rewardHint`, `identityId`, `ownerId`, `level` (L1–L5), `isActive`, `sourcePatternId` (optional), `contextTags` (optional), `availabilityWindows` (optional).
- **Pattern** (Community Library)  
  - Vorlage für MicroScripts, ohne private Owner.  
  - Felder: `id`, `title`, `trigger`, `action`, `rewardHint`, `identityId`, `category` (tags), `levels` (L1–L5 Vorschläge), `clones` (Counter), `contributorName`.
- **TaxonomyGroup** (Filter-Kategorie für Pattern/MicroScripts)  
  - Strukturierte Facetten (z. B. „Kontext“, „Dauer“, „Energie“, „Zielgruppe“, „Modus“).  
  - Felder: `id`, `externalId` (optional, für Import), `slug`, `name`, `order`, `description`.
- **Taxonomy** (Filter-Wert)  
  - Einzelner Filter innerhalb einer Gruppe.  
  - Felder: `id`, `externalId`, `taxonomyGroupId`, `name`, `order`, `description`, `isFeatured` (optional).
- **PatternTaxonomy** (Join)  
  - n:m zwischen Pattern und Taxonomy (für flexible Facetten-Kombinationen).  
  - Felder: `patternId`, `taxonomyId`.
  - Hinweis: Intern für Suche/Filter gern auch eine denormalisierte Spalte `taxonomyIds`/`taxonomySlugs` am Pattern vorhalten.
- **StateSync**  
  - Täglicher Check-in zum Flow einer MicroScript-Instanz.  
  - Felder: `id`, `microScriptId`, `timestamp`, `status` (`flow` | `friction` | `skipped`), `flowRating` (1–5), `effortRating` (optional), `moodDelta` (optional), `frictionTags` (array aus Taxonomie), `frictionNote`, `aiAdjustment` (Text/JSON).
- **UserPattern / SavedPattern** (Relation User↔Pattern)  
  - Felder: `userId`, `patternId`, `pinned` (bool), `rating` (1–5), `usageCount`, `lastUsedAt`.
- **PatternMetadata** (Kuration)  
  - Felder: `featured` (bool), `editorialNote`, `complexity` (S/M/L), `prerequisites` (Text), `intendedOutcome` (energy/clarity/connection/output), `metricHint` (z. B. Schritte, Zeitslot, Kontakt hergestellt).
- **MicroScriptOverrides** (User-spezifisch)  
  - Felder: `microScriptId`, `userId`, `levelOverrides` (JSON für L1–L5), `contextTags` (userbezogen).
- **FlowChain**  
  - Aggregation von StateSyncs für Kontinuität/Trend.  
  - Felder: `microScriptId`, `streakNeutralized` (flow-tolerant continuity), `lastSync`, `frictionRate`, `flowRate`.
- **ImpactCoachConfig**  
  - BYOK/LLM-Provider, Prompt-Profile.  
  - Felder: `userId`, `provider`, `apiKeyRef` (client-side), `promptProfile` (persona), `language` (UI copy).

## Beziehungen
- Identity 1:n MicroScript  
- MicroScript 1:n StateSync  
- Pattern 1:n MicroScript (als Vorlage; optional)  
- Identity 1:n Pattern  
- TaxonomyGroup 1:n Taxonomy  
- Pattern n:m Taxonomy (über PatternTaxonomy)  
- User n:m Pattern (SavedPattern)  
- MicroScript 1:n MicroScriptOverrides (user-spezifisch)  
- User 1:n MicroScript  
- MicroScript 1:1 FlowChain (Aggregation)

## Konzepte für KI/UX
- **Step-down-Path:** Liste vereinfachter Varianten (L1–L5) pro MicroScript/Pattern. Nutzt der Impact Coach, wenn Flow < Ziel.
- **Friction Taxonomy (leichtgewichtig):**  
  - `unclear_trigger`, `too_long`, `wrong_time`, `low_energy`, `context_block`, `missing_reward`, `social_block`.  
  - Dient der KI für Vorschläge und den UIs für schnelle Auswahl.
- **Reward Cues:** Kurzer Hinweis, welcher Nutzen unmittelbar spürbar ist (Energie, Klarheit, Abschluss, Entlastung).
- **Context Tags:** Wann/wo (Morning, Commute, Desk, Evening); hilft Scheduling/Notifications.
- **Filter-UI (angelehnt an mysuricate):**  
  - Facetten-Sidebar mit Gruppen (TaxonomyGroups), Mehrfachauswahl pro Gruppe.  
  - Chips für aktive Filter, schnelle Entfernung pro Facette.  
  - OR innerhalb einer Gruppe, AND zwischen Gruppen (API-Query: `where.and = [ { taxonomyGroup=X, in:[...ids] }, ... ]`).  
  - „Available“ Marker pro Taxonomy (basierend auf aktuellem Result-Set), damit totes Klicken vermieden wird.
- **Suche/Ranking:**  
  - Freitext (Title/Action/RewardHint) + Facetten-Filter (Taxonomies).  
  - Boost auf Identität-Match (SELF/CREATE/CONNECT), Popularität (Clones, Saves), jüngste Flow-Raten.  
  - Optional: Gewichtung für „Featured“ Taxonomies/Patterns in der ersten Zeile.
- **Localization:** Optional `translations` (title/action/rewardHint) pro Pattern/MicroScript; `language` in ImpactCoachConfig.
- **Outcome/Metrik:** Pattern/MicroScript: `intendedOutcome` (energy/clarity/connection/output), `metricHint` (z. B. Schritte, Zeitslot, Kontakt hergestellt).

## Domain-Events (denkbar)
- `microScript.created|updated|archived`
- `stateSync.recorded`
- `stateSync.aiAdjustmentSuggested`
- `flowChain.updated`
- `pattern.cloned`
- `pattern.saved` (UserPattern)

## UX-Kopiervorlagen (kurz)
- Status (StateSync):  
  - `flow`: „Ging leicht.“  
  - `friction`: „Hat gehakt.“  
  - `skipped`: „Ausgelassen.“  
  - Follow-up bei Friktion: „Was hat’s schwer gemacht?“ (Liste Friction Tags)
- Impact Coach Vorschläge:  
  - „Wollen wir es leichter machen? Versuch L{n}: {short action}.“
  - „Timing ändern?“ (Wechsel Context Tag)
  - „Belohnung klar genug?“ (Reward Cue anpassen)
- Pattern Filter (UI-Text):  
  - Gruppen-Label (z. B. „Kontext“, „Energie“, „Dauer“, „Identität“, „Modus“, „Zielgruppe“).  
  - Taxonomy-Label (z. B. „Morning Commute“, „<2 Minuten“, „Low Energy“, „Connect“).  
  - Empty state: „Wähle 1–2 Filter, um passende Patterns zu finden.“
  
## Weitere Felder/Optionen
- **Visibility/Team:** Pattern/MicroScript: `visibility` (`private` | `team` | `public`), optional `teamId`.
- **Search-Index-Felder:** Pattern/MicroScript: `searchText` (denormalisiert), `synonyms`/`keywords` für „did you mean“.

## Taxonomy-Gruppen (Vorschlag für Pattern Library)
- Kontext (Morning, Commute, Desk, Evening, Offline)
- Dauer (<2 Min, 5 Min, 10 Min)
- Energie (Low, Medium, High)
- Identität (SELF, CREATE, CONNECT)
- Modus (Solo, Pair, Async, Live)
- Zielgruppe (Ich, Team, Kunde, Community)
- Ergebnis (Energie+, Klarheit, Abschluss, Verbindung)

## API-Query-Beispiele (Payload-Style)
- Facetten-Filter (OR innerhalb Gruppe, AND zwischen Gruppen):  
  ```json
  {
    "where": {
      "and": [
        { "taxonomies.id": { "in": ["ctx-commute", "ctx-desk"] } },
        { "taxonomies.id": { "in": ["dur-2min"] } },
        { "taxonomies.id": { "in": ["idn-self"] } }
      ]
    }
  }
  ```
- Freitext + Facetten:  
  ```json
  {
    "where": {
      "and": [
        { "title": { "like": "focus" } },
        { "taxonomies.id": { "in": ["ctx-desk"] } }
      ]
    }
  }
  ```

## Denormalisierte Felder (für schnellere Filterung)
- Pattern: `taxonomyIds: string[]`, `taxonomySlugs: string[]`, `identitySlug`, `featuredTaxonomyIds` (optional).
- MicroScript: `taxonomyIds` abgeleitet vom Source-Pattern (oder user-spezifisch angepasst).
- StateSync: `frictionTags` als schlanke Codes statt nur Freitext.

## Import/Sync (Taxonomies)
- Übernahme externer IDs (externalId) ermöglichen, um alte Daten zu mappen.  
- Idempotenter Import: Updates anhand externalId; Gruppen zuerst, dann Taxonomies, dann PatternTaxonomy-Verknüpfungen.
- Optional: Combined Import-Endpoint (Groups + Taxonomies + PatternTaxonomy) und idempotente Updates.
