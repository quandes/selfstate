import { CollectionConfig } from 'payload/types';

const MicroScripts: CollectionConfig = {
  slug: 'micro-scripts',
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'durationSeconds', type: 'number' },
    { name: 'identity', type: 'select', options: [{ label: 'SELF', value: 'SELF' }, { label: 'CREATE', value: 'CREATE' }, { label: 'CONNECT', value: 'CONNECT' }] },
    { name: 'trigger', type: 'text' },
    { name: 'visibility', type: 'select', options: [{ label: 'private', value: 'private' }, { label: 'shared', value: 'shared' }] },
    { name: 'author', type: 'relationship', relationTo: 'users' },
  ],
};

export default MicroScripts;
