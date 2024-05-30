import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mysql: {
      dbName: 'db',
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      host: process.env.DB_HOST,
    },
  };
});
