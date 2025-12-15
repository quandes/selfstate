import { CollectionConfig } from 'payload/types';

const Identities: CollectionConfig = {
  slug: 'identities',
  admin: { useAsTitle: 'name' },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'colorToken', type: 'text' },
  ],
};

export default Identities;
