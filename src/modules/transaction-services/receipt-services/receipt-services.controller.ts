import { Controller } from '@nestjs/common';
import { ReceiptServicesService } from './receipt-services.service';

@Controller('receipt-services')
export class ReceiptServicesController {
  constructor(private readonly receiptServicesService: ReceiptServicesService) {}
}
