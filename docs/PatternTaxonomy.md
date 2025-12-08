## Pattern-Taxonomy-Facetten

Damit `PatternTaxonomy` später sauber funktioniert, könntest du z. B. folgende **Taxonomie-Familien** anlegen (jeweils viele Einträge):

- **`pillar:*`**

  - `pillar:self`
  - `pillar:create`
  - `pillar:connect`

- **`moment:*`** (Zeit im Tages-/Wochenrhythmus)

  - `moment:morning`
  - `moment:afternoon`
  - `moment:evening`
  - `moment:week_start`
  - `moment:week_end`

- **`context:*`**

  - `context:meeting`
  - `context:1on1`
  - `context:project_work`
  - `context:team_leadership`
  - `context:deep_work`

- **`goal:*`** (nahe an `intendedOutcome`, granularer)

  - `goal:energy_awareness`
  - `goal:recovery`
  - `goal:clarity`
  - `goal:impact_output`
  - `goal:empathy`
  - `goal:closure_clarity`
  - `goal:team_connection`

- **`intensity:*`** (Mapping auf L1–L5)

  - `intensity:L1` (Nano)
  - `intensity:L2` (Standard)
  - `intensity:L3` (Deep)
  - `intensity:L4`, `intensity:L5` für spätere Power-User-Varianten

- **`ritual:*`**

  - `ritual:daily_start`
  - `ritual:daily_end`
  - `ritual:weekly_review`

Diese Slugs kannst du dann intern über `PatternTaxonomy` verknüpfen und gleichzeitig als denormalisierte `taxonomySlugs`-Liste am Pattern mitführen (für Suche/Filter).
