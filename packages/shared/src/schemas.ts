import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().optional(),
  roles: z.array(z.string()).optional(),
  createdAt: z.string().optional(),
});

export const MicroScriptSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  durationSeconds: z.number().optional(),
  identity: z.enum(['SELF', 'CREATE', 'CONNECT']).optional(),
  trigger: z.string().optional(),
  visibility: z.enum(['private', 'shared']).optional(),
  author: z.string().or(UserSchema).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const StateSyncSchema = z.object({
  id: z.string(),
  user: z.string().or(UserSchema).optional(),
  microScript: z.string().or(MicroScriptSchema).optional(),
  date: z.string().optional(),
  rating: z.number().optional(),
  notes: z.string().optional(),
  coachFeedback: z.string().optional(),
  createdAt: z.string().optional(),
});

export const PatternSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string().optional(),
  tags: z.array(z.string()).optional(),
  source: z.string().or(UserSchema).optional(),
  license: z.string().optional(),
  approved: z.boolean().optional(),
  createdAt: z.string().optional(),
});

export const IdentitySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  colorToken: z.string().optional(),
});

export type User = z.infer<typeof UserSchema>;
export type MicroScript = z.infer<typeof MicroScriptSchema>;
export type StateSync = z.infer<typeof StateSyncSchema>;
export type Pattern = z.infer<typeof PatternSchema>;
export type Identity = z.infer<typeof IdentitySchema>;

export default {};
