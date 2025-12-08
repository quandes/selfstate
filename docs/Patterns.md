# Patterns

| id                               | title                                   | pillar(s)             | moment         | complexity | intendedOutcome (primär) | levels (aktiv) | featured |
| -------------------------------- | --------------------------------------- | --------------------- | -------------- | ---------- | ------------------------ | -------------- | -------- |
| self_morning_self_check          | Morning Self Check                      | SELF                  | morning        | S          | energy                   | L1–L2          | true     |
| self_post_meeting_body_scan      | Post-Meeting Body Scan                  | SELF                  | after_meeting  | M          | energy                   | L1–L3          | false    |
| self_recovery_window_afternoon   | Self Recovery Window                    | SELF                  | afternoon      | M          | energy                   | L1–L3          | true     |
| create_one_line_next_step        | One-Line Next Step                      | CREATE                | session_end    | S          | clarity                  | L1–L3          | true     |
| create_weekly_strategic_checkin  | Weekly Strategic Check-in               | CREATE                | week_start     | M          | clarity                  | L1–L3          | true     |
| create_daily_impact_sprint       | Daily Impact Sprint                     | CREATE                | fixed_slot_day | M–L        | output                   | L1–L3          | false    |
| connect_pre_conversation_empathy | Pre-Conversation Empathy Check          | CONNECT               | pre_meeting    | S          | connection               | L1–L3          | true     |
| connect_three_sentence_closure   | Three-Sentence Meeting Closure          | CONNECT               | post_meeting   | M          | clarity                  | L1–L3          | false    |
| connect_weekly_team_flow_check   | Weekly Team Flow Check                  | CONNECT               | week_end       | M–L        | connection               | L1–L3          | true     |
| selfstate_morning_alignment      | Morning Alignment (SELF–CREATE–CONNECT) | SELF, CREATE, CONNECT | morning        | M          | clarity                  | L1–L3          | true     |
| selfstate_evening_shutdown       | Evening Shutdown                        | SELF, CREATE, CONNECT | evening        | M          | energy                   | L1–L3          | true     |

## Pattern 1 – Morning Self Check

### Pattern

- `id`: `self_morning_self_check`

- `title`: Morning Self Check (Atem & Energie-Scan)

- `trigger`:
  Wenn du morgens das Handy in die Hand nimmst – bevor du die erste App öffnest.

- `action`:
  Halte das Handy kurz still, schließe für 1–2 Atemzüge die Augen und frage dich:
  _„Wie geht’s mir gerade auf einer Skala von 1–5?“_
  Zahl innerlich merken (optional in SelfState loggen).

- `rewardHint`:
  Mini-Klarheit über deinen Zustand, bevor externe Reize übernehmen; Gefühl von „Ich sehe mich selbst zuerst“.

- `identityId`: `self_resilient_changemaker`

- `category` (tags):
  `["SELF", "energy-check", "morning", "nano", "nervous-system", "pre-input"]`

- `levels`:

  - **L1 (Nano):** 1 bewusster Atemzug, Zahl nur innerlich merken.
  - **L2:** 2–3 Atemzüge und Energie-Skala (1–5) kurz in SelfState tippen.
  - **L3–L5:** reserviert für spätere Erweiterungen (z. B. Mini-Journal).

- `clones`: `0` (Startwert)

- `contributorName`: `Quandes Projects (Social Impact Camp)`

### PatternMetadata

- `featured`: `true`

- `editorialNote`:
  Sehr niedrige Einstiegshürde, ideal als Standard-Pattern für SELF. Funktioniert auch bei Leuten, die „kein Morgenritual“ wollen.

- `complexity`: `S`

- `prerequisites`:
  Handy oder anderes Gerät, das du morgens fast immer in die Hand nimmst.

- `intendedOutcome`: `energy`

- `metricHint`:
  „Anzahl der Tage pro Woche mit bewusstem Energie-Check vor dem ersten Scrollen.“

- `taxonomySlugs` (Beispiel):
  `["pillar:self", "moment:morning", "state:pre_digital_input", "intensity:L1", "goal:energy_awareness"]`

---

## Pattern 2 – Post-Meeting Body Scan

### Pattern

- `id`: `self_post_meeting_body_scan`

- `title`: Post-Meeting Body Scan

- `trigger`:
  Direkt nach einem emotional oder mental anstrengenden Meeting (Call beendet / Raum verlassen).

- `action`:
  Stelle einen 2-Minuten-Timer. Scanne kurz deinen Körper (Kopf, Schultern, Brust, Bauch) und logge ein Wort in SelfState:
  _„verspannt / neutral / entspannt“_.

- `rewardHint`:
  Du nimmst Spannungen bewusst wahr und signalisierst dir selbst: „Mein Zustand zählt.“

- `identityId`: `self_resilient_changemaker`

- `category`:
  `["SELF", "regulation", "after-meeting", "standard", "stress", "somatic-awareness"]`

- `levels`:

  - **L1:** 30 Sekunden kurz Schultern und Kiefer checken, ein Wort in SelfState loggen.
  - **L2 (Standard):** Voller 2-Minuten-Scan plus Ein-Wort-Log.
  - **L3:** 5 Minuten inkl. 2–3 Dehnbewegungen; optional kurzer Kommentar, was das Meeting bei dir ausgelöst hat.

- `clones`: `0`

- `contributorName`: `Quandes Projects (Social Impact Camp)`

### PatternMetadata

- `featured`: `false` (eher nachgelagerter Start, perfekt für Fortgeschrittene)

- `editorialNote`:
  Gut für Menschen, die viele „High-Impact-Meetings“ haben und abends erschöpft sind, ohne zu wissen warum.

- `complexity`: `M`

- `prerequisites`:
  Bereitschaft, nach Meetings für 1–2 Minuten nicht sofort ins nächste To-do zu springen.

- `intendedOutcome`: `energy`

- `metricHint`:
  „Anzahl der stressigen Meetings pro Woche, nach denen ein Body-Scan durchgeführt wurde.“

- `taxonomySlugs`:
  `["pillar:self", "context:meeting", "moment:after_work_block", "intensity:L2", "goal:regulation"]`

---

## Pattern 3 – Self Recovery Window

### Pattern

- `id`: `self_recovery_window_afternoon`

- `title`: Self Recovery Window (Nachmittags-Reset)

- `trigger`:
  Wenn du am Nachmittag mehrfach denkst: „Ich kann nicht mehr klar denken.“

- `action`:

  1. Fenster öffnen, Wasser trinken, 2 Minuten nichts tun.
  2. 10 Minuten (Büroflur, Treppe, draußen) gehen – ohne Scrollen.
  3. In SelfState notieren: Energie-Level (1–5) + ein Satz: „Was lasse ich heute bewusst liegen?“

- `rewardHint`:
  Spürbarer mentaler Reset und die Erlaubnis, nicht alles fertig machen zu müssen.

- `identityId`: `self_resilient_changemaker`

- `category`:
  `["SELF", "recovery", "afternoon", "deep", "burnout-prevention"]`

- `levels`:

  - **L1:** Nur Punkt 1 (2 Minuten Luft + Wasser) und kurz in SelfState: Energie (1–5).
  - **L2:** Punkt 1 + 5 Minuten Gehen + 1 Satz „Was lasse ich liegen?“.
  - **L3 (Deep):** Voller 15-Minuten-Reset wie oben beschrieben.
  - **L4–L5:** reserviert (z. B. Team-Variante).

- `clones`: `0`

- `contributorName`: `Quandes Projects (Social Impact Camp)`

### PatternMetadata

- `featured`: `true`

- `editorialNote`:
  Sehr stark für Pilot-User mit hoher mentaler Last; sollte bewusst als „legitimiertes Reset-Ritual“ verkauft werden, nicht als Faulheit.

- `complexity`: `M`

- `prerequisites`:
  Möglichkeit, für 10–15 Minuten den Arbeitsplatz zu verlassen (oder zumindest aufzustehen).

- `intendedOutcome`: `energy`

- `metricHint`:
  „Anzahl der Nachmittage pro Woche, an denen ein Recovery Window genutzt wurde.“

- `taxonomySlugs`:
  `["pillar:self", "moment:afternoon", "state:mental_fatigue", "intensity:L2-L3", "goal:recovery"]`

---

## Pattern 4 – One-Line Next Step

### Pattern

- `id`: `create_one_line_next_step`

- `title`: One-Line Next Step

- `trigger`:
  Direkt nach jeder Fokus- oder Projekt-Session (egal wie lang).

- `action`:
  In SelfState eine Zeile ausfüllen:
  \_„Nächster kleinstmöglicher Schritt für dieses Projekt ist: \_\_\__.“_

- `rewardHint`:
  Einstiegshürde beim nächsten Mal sinkt massiv; kein „Wo war ich gleich?“.

- `identityId`: `create_strategic_innovator`

- `category`:
  `["CREATE", "focus", "transition", "nano", "project-clarity"]`

- `levels`:

  - **L1:** Nur ein Stichwort als nächster Schritt.
  - **L2:** Ein kurzer Satz + grobe Zeitidee („< 15 Minuten“ oder „größerer Block“).
  - **L3:** Ein Satz + Tag (z. B. „Mittwoch Vormittag“) + grobe Priorität (H/M/L).

- `clones`: `0`

- `contributorName`: `Quandes Projects (Social Impact Camp)`

### PatternMetadata

- `featured`: `true`

- `editorialNote`:
  Exzellentes Startpattern für CREATE. Passt in fast jede Wissensarbeitssituation.

- `complexity`: `S`

- `prerequisites`:
  Mindestens ein Projekt oder Thema, an dem regelmäßig gearbeitet wird.

- `intendedOutcome`: `clarity`

- `metricHint`:
  „Anteil der Fokus-Sessions, die mit einem One-Line-Next-Step enden.“

- `taxonomySlugs`:
  `["pillar:create", "context:project_work", "moment:session_end", "intensity:L1", "goal:clarity"]`

---

## Pattern 5 – Weekly Strategic Check-in

### Pattern

- `id`: `create_weekly_strategic_checkin`

- `title`: Weekly Strategic Check-in (5-Minuten-Wochenfokus)

- `trigger`:
  Montagmorgen nach dem ersten Kaffee, bevor Mails/Messenger geöffnet werden.

- `action`:
  In SelfState 3 Fragen beantworten:

  1. „Was ist diese Woche mein wichtigstes CREATE-Ziel (1 Satz)?“
  2. „Welche 2 Micro-Scripts sichern das minimal ab?“
  3. „Was darf explizit ‘nur okay’ statt perfekt sein?“

- `rewardHint`:
  Klarer Kompass für die Woche; Entlastung von Perfektionsdruck.

- `identityId`: `create_strategic_innovator`

- `category`:
  `["CREATE", "weekly", "strategy", "planning", "standard"]`

- `levels`:

  - **L1:** Nur Frage 1 beantworten.
  - **L2 (Standard):** Alle 3 Fragen, max. 5 Minuten.
  - **L3:** Zusätzlich 1 konkreten Kalender-Slot für das wichtigste Ziel blocken.

- `clones`: `0`

- `contributorName`: `Quandes Projects (Social Impact Camp)`

### PatternMetadata

- `featured`: `true`

- `editorialNote`:
  Sollte als „Default-Weekly-Pattern“ für Pilot-User vorgeschlagen werden. Gibt der Woche eine narrative Linie.

- `complexity`: `M`

- `prerequisites`:
  Bereitschaft, Mails/Chats für 5 Minuten zu ignorieren.

- `intendedOutcome`: `clarity`

- `metricHint`:
  „Anzahl der Wochen im Monat mit abgeschlossenem Strategic Check-in vor dem ersten Mailcheck.“

- `taxonomySlugs`:
  `["pillar:create", "moment:week_start", "ritual:weekly_review", "intensity:L2", "goal:strategic_focus"]`

---

## Pattern 6 – Impact Sprint

### Pattern

- `id`: `create_daily_impact_sprint`

- `title`: Daily Impact Sprint (20-Minuten-Fokusblock)

- `trigger`:
  Feste Uhrzeit an 3–4 Tagen pro Woche (z. B. 10:10 Uhr).

- `action`:

  1. SelfState öffnen, Impact-Sprint-Project wählen.
  2. 15 Minuten nur an einem Impact-Thema arbeiten (Strategie, Angebot, Positionierung, Funding etc.).
  3. 3 Minuten: „Was ist heute entstanden?“ + „Was ist der nächste kleinste Schritt?“ loggen.

- `rewardHint`:
  Spürbarer täglicher Hebelblock; Identität „Ich arbeite am System, nicht nur im System“ wird gestärkt.

- `identityId`: `create_strategic_innovator`

- `category`:
  `["CREATE", "deep-work", "impact", "daily", "focus-block"]`

- `levels`:

  - **L1:** Nur 5 Minuten „Impact-Starter“ + One-Line-Next-Step (falls Energie knapp).
  - **L2:** 10-Minuten-Sprint + 2-Minuten-Log.
  - **L3 (Deep):** Voller 20-Minuten-Block.
  - **L4–L5:** spätere Erweiterungen (z. B. Team-Sprint).

- `clones`: `0`

- `contributorName`: `Quandes Projects (Social Impact Camp)`

### PatternMetadata

- `featured`: `false` (für Nutzer mit etwas Übung)

- `editorialNote`:
  Ideal, wenn strategische Themen regelmäßig „untergehen“. Braucht bewusstes Commitment und ggf. Kalender-Block.

- `complexity`: `M-L`

- `prerequisites`:
  Zeitfenster von mindestens 10 Minuten, in dem du nicht gestört wirst.

- `intendedOutcome`: `output`

- `metricHint`:
  „Anzahl der Impact Sprints pro Woche, die durchgeführt wurden.“

- `taxonomySlugs`:
  `["pillar:create", "context:deep_work", "frequency:3x_per_week", "intensity:L2-L3", "goal:impact_output"]`

---

## Pattern 7 – Pre-Conversation Empathy

### Pattern

- `id`: `connect_pre_conversation_empathy`

- `title`: Pre-Conversation Empathy Check

- `trigger`:
  Direkt bevor du auf „Join“ in einem 1:1 oder Konfliktgespräch klickst.

- `action`:
  In SelfState (oder mental) eine Frage beantworten:
  _„Wie könnte sich die andere Person heute fühlen (1 Wort)?“_

- `rewardHint`:
  Du kommst spürbar empathischer ins Gespräch; oft bessere Gesprächsatmosphäre.

- `identityId`: `connect_caring_leader`

- `category`:
  `["CONNECT", "empathy", "pre-meeting", "nano", "leadership"]`

- `levels`:

  - **L1:** 1 Wort innerlich denken.
  - **L2:** 1 Wort + 1 Satz Intention („Was will ich der Person heute ermöglichen?“).
  - **L3:** Nach dem Gespräch kurz notieren, ob deine Vermutung passte.

- `clones`: `0`

- `contributorName`: `Quandes Projects (Social Impact Camp)`

### PatternMetadata

- `featured`: `true`

- `editorialNote`:
  Ultra-niedrigschwellig, hoher Effekt. Eignet sich hervorragend als Standard für Führungskräfte.

- `complexity`: `S`

- `prerequisites`:
  Bereitschaft, 5–10 Sekunden _nicht_ sofort in den Call zu springen.

- `intendedOutcome`: `connection`

- `metricHint`:
  „Anteil der 1:1-Gespräche, in die du mit einem bewussten Empathie-Wort gehst.“

- `taxonomySlugs`:
  `["pillar:connect", "context:1on1", "moment:pre_meeting", "intensity:L1", "goal:empathy"]`

---

## Pattern 8 – Three-Sentence Meeting Closure

### Pattern

- `id`: `connect_three_sentence_closure`

- `title`: Three-Sentence Meeting Closure

- `trigger`:
  Direkt nach einem wichtigen Meeting (Team, Partner, Fördergeber).

- `action`:
  In SelfState drei Sätze ausfüllen:

  1. „Klarheit: Die eine klare Vereinbarung/Entscheidung ist …“
  2. „Gefühl: Das Meeting fühlt sich für mich an wie … (1 Wort).“
  3. „Nächster Kontakt: Wer braucht jetzt ein Follow-up und in welcher Form?“

- `rewardHint`:
  Mentale Loops schließen sich; weniger Grübeln und Nachträgliches „Was war da nochmal?“.

- `identityId`: `connect_caring_leader`

- `category`:
  `["CONNECT", "meeting", "closure", "standard", "clarity", "relationship"]`

- `levels`:

  - **L1:** Nur Punkt 1 (eine Entscheidung/Vereinbarung).
  - **L2 (Standard):** Alle 3 Sätze ausfüllen (2–3 Minuten).
  - **L3:** Zusätzlich Follow-up direkt im Kalender/Tool eintragen.

- `clones`: `0`

- `contributorName`: `Quandes Projects (Social Impact Camp)`

### PatternMetadata

- `featured`: `false`

- `editorialNote`:
  Besonders hilfreich für Führungskräfte mit vielen Meetings; reduziert „Meeting Hangover“.

- `complexity`: `M`

- `prerequisites`:
  2–3 Minuten Puffer nach Meetings, keine back-to-back-Kultur.

- `intendedOutcome`: `clarity`

- `metricHint`:
  „Anteil der wichtigen Meetings, die mit einem Three-Sentence Closure abgeschlossen werden.“

- `taxonomySlugs`:
  `["pillar:connect", "context:meeting", "moment:post_meeting", "intensity:L2", "goal:closure_clarity"]`

---

## Pattern 9 – Weekly Team Flow Check

### Pattern

- `id`: `connect_weekly_team_flow_check`

- `title`: Weekly Team Flow Check

- `trigger`:
  Einmal pro Woche, z. B. Freitag 14:00 Uhr.

- `action`:

  1. Liste der wichtigsten Teammitglieder in SelfState aufrufen.
  2. Für jede Person:

     - geschätztes Energielevel (1–5),
     - offene Spannung / Missverständnis? (ja/nein),
     - Braucht eher Info, Anerkennung oder Klarheit?

  3. 1–2 kleine Gesten für nächste Woche auswählen (Voice, kurze Nachricht, Check-in).

- `rewardHint`:
  Führung wird proaktiv; frühere Klärung, weniger „plötzliche“ Konflikte.

- `identityId`: `connect_caring_leader`

- `category`:
  `["CONNECT", "leadership", "weekly", "team", "flow-check"]`

- `levels`:

  - **L1:** Nur 1 Person pro Woche reflektieren und eine Geste planen.
  - **L2:** 3–5 Personen in 10–15 Minuten.
  - **L3:** Ganzes Kernteam (z. B. 7–10 Personen) reflektieren und gezielt Micro-Gesten planen.

- `clones`: `0`

- `contributorName`: `Quandes Projects (Social Impact Camp)`

### PatternMetadata

- `featured`: `true`

- `editorialNote`:
  High-Leverage-Pattern für Führungskräfte mit Teams > 3 Personen; sollte explizit im CONNECT-Bereich hervorgehoben werden.

- `complexity`: `M-L`

- `prerequisites`:
  Überblick über das Team, Bereitschaft zu bewusster Beziehungspflege.

- `intendedOutcome`: `connection`

- `metricHint`:
  „Anzahl der Wochen, in denen mindestens eine bewusste Teamgeste aus dem Flow Check resultiert hat.“

- `taxonomySlugs`:
  `["pillar:connect", "moment:week_end", "context:team_leadership", "intensity:L2-L3", "goal:team_connection"]`

---

## Pattern 10 – Morning Alignment (3-Minuten-Start)

### Pattern

- `id`: `selfstate_morning_alignment`

- `title`: Morning Alignment (SELF–CREATE–CONNECT)

- `trigger`:
  Kurz nach Ankommen am Arbeitsplatz.

- `action`:

  1. **SELF (30 Sek):** Energie (1–5) + ein Wort dazu loggen.
  2. **CREATE (1,5 Min):**

     - „Wenn nur eine Sache heute passiert, bin ich zufrieden. Welche?“

  3. **CONNECT (1 Min):**

     - „Wem will ich heute bewusst ein gutes Gefühl geben? (Name + Mini-Geste)“

- `rewardHint`:
  Du startest den Tag mit dir selbst, deinem Fokus und einer Beziehung – statt im Chaos.

- `identityId`: `selfstate_integrated_changemaker`

- `category`:
  `["SELF", "CREATE", "CONNECT", "morning", "alignment", "integrated"]`

- `levels`:

  - **L1:** Nur SELF + CREATE (Energie + wichtigste Sache).
  - **L2:** Alle 3 Fragen, max. 3 Minuten.
  - **L3:** Zusätzlich 1 kurzer Kalender-Slot für die wichtigste CREATE-Sache blocken.

- `clones`: `0`

- `contributorName`: `Quandes Projects (Social Impact Camp)`

### PatternMetadata

- `featured`: `true`

- `editorialNote`:
  Gutes Signature-Pattern für SelfState, weil alle drei Säulen sichtbar werden. Ideal für Pilotkommunikation.

- `complexity`: `M`

- `prerequisites`:
  3 Minuten ungestörter Start ins Arbeiten.

- `intendedOutcome`: `clarity`

- `metricHint`:
  „Anzahl der Arbeitstage, die mit einem bewussten Morning Alignment gestartet werden.“

- `taxonomySlugs`:
  `["pillar:self", "pillar:create", "pillar:connect", "moment:morning", "ritual:daily_start", "intensity:L2"]`

---

## Pattern 11 – Evening Shutdown (5-Minuten-Abschluss)

### Pattern

- `id`: `selfstate_evening_shutdown`

- `title`: Evening Shutdown (Kein Grübelkater)

- `trigger`:
  Letzter bewusster Arbeitsmoment, bevor du den Laptop schließt.

- `action`:

  1. **SELF:** „Wofür bin ich mir heute dankbar?“ (1 Satz).
  2. **CREATE:** „Was habe ich heute bewegt, das zu unserer Wirkung beiträgt?“ (3 Stichworte).
  3. **CONNECT:** „Gab es eine Begegnung, die ich morgen vertiefen möchte?“ (Name + 1 Schritt).
  4. Optional: SelfState erzeugt einen Satz wie: „Heute warst du als \_\_\_ sichtbar in…“

- `rewardHint`:
  Der Tag wird symbolisch zugemacht; weniger Grübeln am Abend, besseres Abschalten.

- `identityId`: `selfstate_integrated_changemaker`

- `category`:
  `["SELF", "CREATE", "CONNECT", "evening", "reflection", "shutdown"]`

- `levels`:

  - **L1:** Nur ein SELF-Satz (Dankbarkeit für dich selbst).
  - **L2:** SELF + CREATE (Dankbarkeit + 3 Wirkungs-Stichworte).
  - **L3:** Voller 5-Minuten-Flow inkl. CONNECT und optionalem Identity-Satz.

- `clones`: `0`

- `contributorName`: `Quandes Projects (Social Impact Camp)`

### PatternMetadata

- `featured`: `true`

- `editorialNote`:
  Ideales Gegenstück zum Morning Alignment. Kann als „Anti-Grübel-Ritual“ vermarktet werden.

- `complexity`: `M`

- `prerequisites`:
  3–5 Minuten Puffer am Tagesende, keine „Laptop zuklappen im Sprint zur U-Bahn“-Mentalität.

- `intendedOutcome`: `energy` (Regeneration) + `clarity` (Tag abschließen) – primärer Fokus: `energy`.

- `metricHint`:
  „Anteil der Arbeitstage, die mit einem Evening Shutdown enden.“

- `taxonomySlugs`:
  `["pillar:self", "pillar:create", "pillar:connect", "moment:evening", "ritual:daily_end", "intensity:L2-L3"]`

---
