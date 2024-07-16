import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Aaa } from './entity/aaa.entity';
import { EntityRepository } from './mikro-orm.config';
import { Bbb } from './entity/bbb.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Aaa)
    private readonly aaaRepository: EntityRepository<Aaa>,
    @InjectRepository(Bbb)
    private readonly bbbRepository: EntityRepository<Bbb>,
  ) {}

  async setRecord() {
    const aaa = this.aaaRepository.create({
      name: Math.floor(Math.random() * 1000) + '',
    });
    const bbb = this.bbbRepository.create({
      name: Math.floor(Math.random() * 1000) + '',
    });
    bbb.parent = aaa;
    await this.aaaRepository.persistAndFlush(aaa);
    await this.bbbRepository.persistAndFlush(bbb);
    return true;
  }

  async deleteBbb(id) {
    const bbb = await this.bbbRepository.findOne({ id });
    console.log(bbb);
    await this.bbbRepository.removeAndFlush(bbb);
    return true;
  }

  async deleteAaa(id) {
    const aaa = await this.aaaRepository.findOne({ id });
    console.log(aaa);
    await this.aaaRepository.removeAndFlush(aaa);
    return true;
  }
}
