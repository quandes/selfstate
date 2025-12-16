export type MicroScript = {
  id: string;
  title: string;
  note?: string;
  identity?: string;
};

const MOCK_MICROSCRIPTS: MicroScript[] = [
  { id: 'ms1', title: '2 Minuten Atemübung', note: 'Kurze Pause, 4–4–4 Atmung', identity: 'SELF' },
  { id: 'ms2', title: 'Kurze Dehnung', note: 'Schulterkreisen & Nackenlockern', identity: 'SELF' },
  { id: 'ms3', title: 'Fokus-Check', note: 'Was ist die wichtigste Aufgabe jetzt?', identity: 'CREATE' },
];

import { MicroScriptArraySchema } from '../../../packages/shared/src/schemas';

export async function fetchMicroScripts(): Promise<MicroScript[]> {
  const API = typeof window !== 'undefined' ? (process.env.NEXT_PUBLIC_API_URL as string | undefined) : process.env.NEXT_PUBLIC_API_URL;
  if (!API) return MOCK_MICROSCRIPTS;

  try {
    const url = API.replace(/\/$/, '') + '/api/micro-scripts';
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed ${res.status}`);
    const json = await res.json();
    const candidate = Array.isArray(json) ? json : (json?.docs ?? json?.items ?? []);
    const parsed = MicroScriptArraySchema.safeParse(candidate);
    if (parsed.success) return parsed.data;
    return MOCK_MICROSCRIPTS;
  } catch (e) {
    return MOCK_MICROSCRIPTS;
  }
}

export async function postMicroScript(payload: Partial<MicroScript>): Promise<MicroScript> {
  const API = typeof window !== 'undefined' ? (process.env.NEXT_PUBLIC_API_URL as string | undefined) : process.env.NEXT_PUBLIC_API_URL;
  const newItem: MicroScript = {
    id: payload.id ?? `ms-${Date.now()}`,
    title: payload.title ?? 'Untitled',
    note: payload.note,
    identity: payload.identity ?? 'SELF',
  };

  if (!API) {
    // No API configured: return created item locally
    return new Promise((res) => setTimeout(() => res(newItem), 200));
  }

  try {
    const url = API.replace(/\/$/, '') + '/api/micro-scripts';
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    if (!res.ok) throw new Error(`Failed ${res.status}`);
    const json = await res.json();
    // assume payload returns created doc
    return json;
  } catch (e) {
    // On error, return local item (optimistic)
    return newItem;
  }
}
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

async function request(path: string, init?: RequestInit) {
  const res = await fetch(`${API_URL}${path}`, { headers: { 'Content-Type': 'application/json' }, ...init });
  if (!res.ok) throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  return res.json();
}

export async function fetchMicroScripts() {
  return request('/api/micro-scripts');
}

export async function createMicroScript(payload: any) {
  return request('/api/micro-scripts', { method: 'POST', body: JSON.stringify(payload) });
}

export async function submitStateSync(payload: any) {
  return request('/api/state-syncs', { method: 'POST', body: JSON.stringify(payload) });
}

export async function fetchPatterns() {
  return request('/api/patterns');
}

export default { fetchMicroScripts, createMicroScript, submitStateSync, fetchPatterns };
