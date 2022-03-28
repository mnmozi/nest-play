import { Injectable } from '@nestjs/common';
import { CreateCatDto } from 'src/controllers/cats.controller';

@Injectable()
export class CatsService {
  getHello(): string {
    const x: string = 'Hey cat';
    return x + '!';
  }
  create(createCatDto: CreateCatDto): string {
    return 'this method creates a cat which is called ' + createCatDto.name;
  }
}
