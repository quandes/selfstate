"use client";

import React, { useState } from 'react';
import Button from '../../../packages/ui/src/Button';

export type SyncEntry = { id: string; microScriptId?: string; rating?: number; notes?: string; date: string };

export default function StateSyncModal({ onCreate, onClose, defaultScript }:
  { onCreate: (e: SyncEntry) => void; onClose: () => void; defaultScript?: string }) {
  const [rating, setRating] = useState<number>(4);
  const [notes, setNotes] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const entry: SyncEntry = { id: `ss-${Date.now()}`, microScriptId: defaultScript, rating, notes, date: new Date().toISOString() };
    onCreate(entry);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h3 className="text-lg font-semibold mb-3">State Sync</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm mb-1">Wie fühlst du dich?</label>
            <input type="range" min={1} max={5} value={rating} onChange={(e) => setRating(Number(e.target.value))} />
            <div className="text-sm text-slate-500">Rating: {rating}</div>
          </div>
          <div>
            <label className="block text-sm mb-1">Notiz (optional)</label>
            <textarea className="w-full border p-2 rounded" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="ghost" type="button" onClick={onClose}>Abbrechen</Button>
            <Button type="submit">Speichern</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
