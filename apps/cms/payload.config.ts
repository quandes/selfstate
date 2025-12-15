import { buildConfig } from 'payload/config';
import path from 'path';

import Users from './collections/Users';
import MicroScripts from './collections/MicroScripts';
import StateSyncs from './collections/StateSyncs';
import Identities from './collections/Identities';
import Patterns from './collections/Patterns';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  mongoURL: process.env.POSTGRES_URL || '',
  collections: [Users, MicroScripts, StateSyncs, Identities, Patterns],
  typescript: {
    outputFile: path.resolve(__dirname, './payload-types.ts'),
  },
});
