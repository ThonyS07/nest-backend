export interface ENV {
  PORT: string;
  DB_TYPE: 'postgres' | 'mysql' | 'sqlite' | 'mariadb' | 'mongodb';
  POSTGRES_HOST: string;
  POSTGRES_PORT: number;
  POSTGRES_DB: string;
  POSTGRES_USERNAME: string;
  POSTGRES_PASSWORD: string;
  JWT_SECRET: string;
}
