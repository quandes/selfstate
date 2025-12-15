import { describe, it, expect } from 'vitest';
import { MicroScriptSchema, UserSchema } from '../src/schemas';

describe('shared schemas', () => {
  it('validates a minimal MicroScript', () => {
    const data = { id: '1', title: 'Quick stretch' };
    const parsed = MicroScriptSchema.parse(data);
    expect(parsed.title).toBe('Quick stretch');
  });

  it('validates a User', () => {
    const u = { id: 'u1', email: 'a@b.c' };
    const parsed = UserSchema.parse(u);
    expect(parsed.email).toBe('a@b.c');
  });
});
