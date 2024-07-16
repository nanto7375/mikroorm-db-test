import {
  Cascade,
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Bbb } from './bbb.entity';

@Entity()
export class Aaa {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @OneToMany(() => Bbb, (bbb) => bbb.parent)
  childs = new Collection<Bbb>(this);
}
