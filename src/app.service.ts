import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHallo(): string {
    return 'hola aleman';
  }

  getFrance(): string {
    return 'hola frances';
  }
}
