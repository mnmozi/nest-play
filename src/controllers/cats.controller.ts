import { Controller, Post, Body } from '@nestjs/common';
import { CatsService } from '../services/cats.service';
import { Roles } from '../decorator/roles.decorator';
import { Role } from 'src/interfaces/role.enum';

export class cats {
  constructor(private readonly catsService: CatsService) {}
  @Post()
  @Roles(Role.Admin)
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}

export interface CreateCatDto {
  name: string;
  age: number;
}
