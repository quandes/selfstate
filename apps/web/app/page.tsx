"use client";

import React, { useEffect, useState } from 'react';
import Button from '../../../packages/ui/src/Button';
import { colors } from '../../../packages/ui/src/tokens';
import { fetchMicroScripts, MicroScript } from '../lib/api';

export default function Page() {
  const [items, setItems] = useState<MicroScript[]>([]);
  const [loading, setLoading] = useState(true);

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
          <Button onClick={() => alert('State Sync starten (Platzhalter)')}>State Sync</Button>
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
              <Button variant="primary" onClick={() => alert(`Start ${m.title}`)}>
                Start
              </Button>
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
    </div>
  );
}
