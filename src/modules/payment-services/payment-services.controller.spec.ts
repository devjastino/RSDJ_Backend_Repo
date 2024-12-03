import { Test, TestingModule } from '@nestjs/testing';
import { PaymentServicesController } from './payment-services.controller';
import { PaymentServicesService } from './payment-services.service';

describe('PaymentServicesController', () => {
  let controller: PaymentServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentServicesController],
      providers: [PaymentServicesService],
    }).compile();

    controller = module.get<PaymentServicesController>(PaymentServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
