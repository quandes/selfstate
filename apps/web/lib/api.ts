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

export async function fetchMicroScripts(): Promise<MicroScript[]> {
  const API = typeof window !== 'undefined' ? (process.env.NEXT_PUBLIC_API_URL as string | undefined) : process.env.NEXT_PUBLIC_API_URL;
  if (!API) return MOCK_MICROSCRIPTS;

  try {
    const url = API.replace(/\/$/, '') + '/api/micro-scripts';
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed ${res.status}`);
    const json = await res.json();
    // Assume payload returns docs under `docs` or returns array directly
    if (Array.isArray(json)) return json;
    if (json?.docs && Array.isArray(json.docs)) return json.docs;
    return MOCK_MICROSCRIPTS;
  } catch (e) {
    // fallback to mock data on any error
    return MOCK_MICROSCRIPTS;
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
