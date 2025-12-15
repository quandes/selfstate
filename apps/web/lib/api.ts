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
