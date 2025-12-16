"use client";

import React, { useEffect, useState } from 'react';
import Button from '../../../packages/ui/src/Button';
import { colors } from '../../../packages/ui/src/tokens';
import { fetchMicroScripts, MicroScript } from '../lib/api';

export default function Page() {
  const [items, setItems] = useState<MicroScript[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSync, setShowSync] = useState(false);
  const [syncEntries, setSyncEntries] = useState<Array<any>>([]);

  useEffect(() => {
    let mounted = true;
    fetchMicroScripts()
      .then((res) => {
        if (mounted) setItems(res);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">SelfState</h1>
          <p className="text-slate-600">Identity-first Micro‑Scripts & State Sync — Dev Preview</p>
        </div>
        <div className="space-x-3">
          <Button onClick={() => setShowSync(true)}>State Sync</Button>
          <Button variant="ghost" onClick={() => alert('Neues Micro‑Script (Platzhalter)')}>Neu</Button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading && <div className="text-slate-500">Lade Micro‑Scripts…</div>}
        {!loading && items.map((m) => (
          <article key={m.id} className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-1">{m.title}</h3>
            <p className="text-sm text-slate-600 mb-3">{m.note}</p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-500">Identity: {m.identity ?? 'SELF'}</div>
              <div className="flex items-center gap-2">
                <Button variant="primary" onClick={() => { setShowSync(true); }}>
                  Start
                </Button>
                <Button variant="ghost" onClick={() => { navigator.clipboard?.writeText(m.title); alert('Kopiert'); }}>Teilen</Button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="mt-8 text-sm text-slate-500">
        <p>
          Entwickler‑Hinweis: Farben und Komponenten stammen aus `packages/ui`. Primärfarbe:
          <span className="ml-2 font-mono" style={{ color: colors.primary }}>{colors.primary}</span>
        </p>
      </footer>
      {showSync && (
        // lazy import to keep bundle small
        (() => {
          const StateSyncModal = require('../components/StateSyncModal').default;
          return (
            <StateSyncModal
              onClose={() => setShowSync(false)}
              onCreate={(entry: any) => setSyncEntries((s) => [entry, ...s])}
            />
          );
        })()
      )}
      {syncEntries.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Letzte State Syncs</h4>
          <ul className="space-y-2 text-sm">
            {syncEntries.map((e, i) => (
              <li key={e.id || i} className="p-2 border rounded">{new Date(e.date).toLocaleString()} — Rating: {e.rating} — {e.notes}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
