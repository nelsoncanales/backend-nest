import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { DbManagerService } from './db-manager/db-manager.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbManager: DbManagerService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('Hallo')
  getHallo(): string {
    return this.appService.getHallo();
  }

  @Get('france')
  getFrance(): string {
    return this.appService.getFrance();
  }
  @Get('user')
  getUser(@Query('id') id:number){
    return this.dbManager.getUser(id);
  }
}
