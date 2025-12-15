import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    { name: 'name', type: 'text' },
    { name: 'roles', type: 'array', fields: [{ name: 'role', type: 'text' }] },
  ],
};

export default Users;
