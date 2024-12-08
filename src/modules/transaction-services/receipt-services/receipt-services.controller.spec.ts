import { Test, TestingModule } from '@nestjs/testing';
import { ReceiptServicesController } from './receipt-services.controller';
import { ReceiptServicesService } from './receipt-services.service';

describe('ReceiptServicesController', () => {
  let controller: ReceiptServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceiptServicesController],
      providers: [ReceiptServicesService],
    }).compile();

    controller = module.get<ReceiptServicesController>(ReceiptServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
