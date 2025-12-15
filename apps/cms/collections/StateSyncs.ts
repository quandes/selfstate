import { CollectionConfig } from 'payload/types';

const StateSyncs: CollectionConfig = {
  slug: 'state-syncs',
  admin: { useAsTitle: 'date' },
  access: { read: () => true },
  fields: [
    { name: 'user', type: 'relationship', relationTo: 'users' },
    { name: 'microScript', type: 'relationship', relationTo: 'micro-scripts' },
    { name: 'date', type: 'date' },
    { name: 'rating', type: 'number' },
    { name: 'notes', type: 'textarea' },
    { name: 'coachFeedback', type: 'textarea' },
  ],
};

export default StateSyncs;
