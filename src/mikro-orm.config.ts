import {
  AnyEntity,
  EntityManager,
  EntityRepository as BasicEntityRepository,
  defineConfig,
} from '@mikro-orm/mysql';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import 'dotenv/config';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
// TODO: TsMorphMetadataProvider 얘가 뭐 하는 거지

export class EntityRepository<
  T extends object,
> extends BasicEntityRepository<T> {
  persist(entity: AnyEntity | AnyEntity[]): EntityManager {
    return this.em.persist(entity);
  }

  async persistAndFlush(entity: AnyEntity | AnyEntity[]): Promise<void> {
    await this.em.persistAndFlush(entity);
  }

  remove(entity: AnyEntity): EntityManager {
    return this.em.remove(entity);
  }

  async removeAndFlush(entity: AnyEntity): Promise<void> {
    await this.em.removeAndFlush(entity);
  }

  async flush(): Promise<void> {
    return this.em.flush();
  }
}

export default defineConfig({
  entities: ['./entity/*'],
  dbName: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entityRepository: EntityRepository,
  debug: true,
  highlighter: new SqlHighlighter(),
  baseDir: __dirname,
  allowGlobalContext: true,
  metadataProvider: TsMorphMetadataProvider,
});
