import {
  Controller,
  Get,
  Post,
  Request,
  Query,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private girlService: GirlService) {}
  //this.girlService = new GirlService();
  @Get()
  getGirls(): any {
    return this.girlService.getGirls();
  }

  @Post('/add')
  addGirls(): any {
    return this.girlService.addGirl();
  }

  @Get('/getGirlById')
  getGirlById(@Request() req): any {
    console.log(req);

    //因为通过Get方式传递过来的是字符串，所有我们需要用parseInt转化为数字
    const id: number = parseInt(req.query.id);
    return this.girlService.getGirlById(id);
  }

  @Get('/findGirlById/:id/:name')
  findGirlById(@Param() params, @Headers() header): any {
    console.log(params);
    console.log(header);
    const id: number = parseInt(params.id);
    return this.girlService.getGirlById(id);
  }
}
