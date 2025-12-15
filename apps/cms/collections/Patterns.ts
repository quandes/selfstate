import { CollectionConfig } from 'payload/types';

const Patterns: CollectionConfig = {
  slug: 'patterns',
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'content', type: 'richText' },
    { name: 'tags', type: 'array', fields: [{ name: 'tag', type: 'text' }] },
    { name: 'source', type: 'relationship', relationTo: 'users' },
    { name: 'license', type: 'text' },
    { name: 'approved', type: 'checkbox' },
  ],
};

export default Patterns;
