import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
   @Get('Hallo')
   getHallo(): string{
     return this.appService.getHallo();
   }

   @Get('france')
getFrance(): string{
     return this.appService.getFrance();
   }

  
}
