// Shared TypeScript types (first draft) — keep in sync with Payload collections

export * from './schemas';

export type User = {
  id: string;
  email: string;
  name?: string;
  roles?: string[];
  createdAt?: string;
};

export type MicroScript = {
  id: string;
  title: string;
  description?: string;
  durationSeconds?: number;
  identity?: 'SELF' | 'CREATE' | 'CONNECT';
  trigger?: string;
  visibility?: 'private' | 'shared';
  author?: string | User;
  createdAt?: string;
  updatedAt?: string;
};

export type StateSync = {
  id: string;
  user?: string | User;
  microScript?: string | MicroScript;
  date?: string;
  rating?: number;
  notes?: string;
  coachFeedback?: string;
  createdAt?: string;
};

export type Pattern = {
  id: string;
  title: string;
  content?: string;
  tags?: string[];
  source?: string | User;
  license?: string;
  approved?: boolean;
  createdAt?: string;
};

export type Identity = {
  id: string;
  name: string;
  description?: string;
  colorToken?: string;
};

export default {};
