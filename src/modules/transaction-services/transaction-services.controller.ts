import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Res,
} from '@nestjs/common';
import { TransactionServicesService } from './transaction-services.service';
import { CreateTransactionServiceDto } from './dto/create-transaction-service.dto';
import { UpdateTransactionServiceDto } from './dto/update-transaction-service.dto';
import { Response } from 'express';
import { ResponseDTO } from 'src/constants/response.dto';

@Controller('transaction-services')
export class TransactionServicesController {
  constructor(
    private readonly transactionServicesService: TransactionServicesService,
  ) {}

  @Post()
  create(@Body() createTransactionServiceDto: CreateTransactionServiceDto) {
    return this.transactionServicesService.create(createTransactionServiceDto);
  }

  @Put('update-success/:id')
  async transactionUpdate(
    @Param() params: any,
    @Body() updateTransactionServiceDto: UpdateTransactionServiceDto,
    @Res() res: Response,
  ) {
    let response = await this.transactionServicesService.transactionUpdate(
      params.id,
      updateTransactionServiceDto,
    );
    res.status(response.status).send(response);
  }

  @Get('get-all-by-user/:user_id')
  async getAllTransactionByUserId(
    @Param() params: any,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.transactionServicesService.getAllTransactionByUserId(
        params.user_id,
      );
    res.status(response.status).send(response);
  }

  @Get()
  findAll() {
    return this.transactionServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionServicesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionServiceDto: UpdateTransactionServiceDto,
  ) {
    return this.transactionServicesService.update(
      +id,
      updateTransactionServiceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionServicesService.remove(+id);
  }
}
