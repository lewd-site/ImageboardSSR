import dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();

export const config = {
  api: {
    host: env.API_HOST || '127.0.0.1',
    port: +(env.API_PORT || 3000),
  },
  http: {
    port: +(env.HTTP_PORT || 3001),
  },
};

export default config;
