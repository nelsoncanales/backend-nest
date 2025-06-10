import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  let service: OperacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperacionesService],
    }).compile();

    service = module.get<OperacionesService>(OperacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
 it('operacione deberia sumar',() => {
 let a : any = 10;
 let b = 30;

 	expect(service.operar('suma',a,b)).toBe(40);

    a = -10;
    b=50;
    	expect(service.operar('suma',a,b)).tobe(40);

	    a = -10;
    b=-50;
        expect(service.operar('suma',a,b)).not.tobe(-100);

	    a = Math.PI;
        expect(service.operar('suma',a,b)).tobecloseto(33.14,2);

    a = null;
    b=50;
        expect(() => { service.operar('suma',a,b;)}).toThrow('No se puede llamar con numeros indefinidos.');
 });
});
