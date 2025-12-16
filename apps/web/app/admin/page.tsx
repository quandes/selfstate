"use client";

import React, { useEffect, useState } from 'react';
import { fetchMicroScripts, postMicroScript, MicroScript } from '../../lib/api';
import Button from '../../../../packages/ui/src/Button';

export default function AdminPage() {
  const [items, setItems] = useState<MicroScript[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [identity, setIdentity] = useState('SELF');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetchMicroScripts().then((res) => {
      if (mounted) setItems(res);
    }).finally(() => mounted && setLoading(false));
    return () => { mounted = false };
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return alert('Bitte Titel eingeben');
    setSaving(true);
    try {
      const created = await postMicroScript({ title: title.trim(), note: note.trim(), identity });
      setItems((s) => [created, ...s]);
      setTitle(''); setNote(''); setIdentity('SELF');
    } catch (err) {
      alert('Fehler beim Anlegen');
    } finally { setSaving(false) }
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Impact Coach — Micro‑Script Admin</h1>

      <section className="mb-6">
        <form onSubmit={handleCreate} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Titel</label>
            <input className="w-full border px-3 py-2 rounded" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Notiz</label>
            <input className="w-full border px-3 py-2 rounded" value={note} onChange={(e) => setNote(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Identity</label>
            <select className="w-full border px-3 py-2 rounded" value={identity} onChange={(e) => setIdentity(e.target.value)}>
              <option value="SELF">SELF</option>
              <option value="CREATE">CREATE</option>
              <option value="CONNECT">CONNECT</option>
            </select>
          </div>

          <div className="flex space-x-2">
            <Button type="submit" disabled={saving}>{saving ? 'Speichere…' : 'Anlegen'}</Button>
            <Button variant="ghost" type="button" onClick={() => { setTitle(''); setNote(''); setIdentity('SELF') }}>Zurücksetzen</Button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Bestehende Micro‑Scripts</h2>
        {loading && <div className="text-slate-500">Lade…</div>}
        {!loading && items.length === 0 && <div className="text-slate-500">Keine Micro‑Scripts gefunden</div>}
        <ul className="space-y-3">
          {items.map((it) => (
            <li key={it.id} className="p-3 border rounded-md flex items-start justify-between">
              <div>
                <div className="font-medium">{it.title}</div>
                <div className="text-xs text-slate-500">{it.note}</div>
              </div>
              <div className="text-xs text-slate-500">{it.identity}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
