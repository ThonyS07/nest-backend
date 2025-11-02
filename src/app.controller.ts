import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { ENV } from './commons/interfaces/env.interface';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService<ENV>,
  ) {}

  @Get()
  getHello(): string {
    const myVar = this.configService.get('PORT', { infer: true });
    const message = this.appService.getHello();
    return ` ${message} - ${myVar}`;
  }
}
