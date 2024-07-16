import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Aaa } from './aaa.entity';

@Entity()
export class Bbb {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @ManyToOne(() => Aaa, {
    nullable: true,
    // deleteRule: 'set null',
  })
  parent: Aaa;
}
