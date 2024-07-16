import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  setRecord() {
    return this.appService.setRecord();
  }

  @Get('delete-bbb/:id')
  deleteBbb(@Param('id') id) {
    return this.appService.deleteBbb(id);
  }
  @Get('delete-aaa/:id')
  deleteAaa(@Param('id') id) {
    return this.appService.deleteAaa(id);
  }

  @Get('change/:id')
  change(@Param('id') id) {
    return this.appService.change(id);
  }

  @Get('delete/:id')
  delete(@Param('id') id) {
    return this.appService.delete(id);
  }
}
