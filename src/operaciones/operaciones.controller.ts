import { Controller } from '@nestjs/common';
import {OperacionesService} from './operaciones.service'

@Controller('operaciones')
export class OperacionesController {
  constructor(
  private readonly operacionesservice: OperacionesService
  ) {}

   @operar()
   operar(): any {
   return this.operacionesservice.operar(operacion, a,b);
   }



}
