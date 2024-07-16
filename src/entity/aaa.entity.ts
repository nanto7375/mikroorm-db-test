import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Aaa {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;
}
