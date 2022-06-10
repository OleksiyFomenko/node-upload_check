import {
  Req,
  Res,
  Controller,
  Post
} from '@nestjs/common';
import { AppService } from './app.service';
import fastify = require('fastify');

@Controller('App')
export class AppController {
  constructor(private appService: AppService) {}
  @Post('/uploadFile')
  async uploadFile(@Req() req: fastify.FastifyRequest, @Res() res: fastify.FastifyReply<any>): Promise<any> {
    return await this.appService.uploadFile(req,res)
  }
}