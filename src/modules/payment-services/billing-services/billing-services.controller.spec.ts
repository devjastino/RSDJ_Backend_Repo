import { Test, TestingModule } from '@nestjs/testing';
import { BillingServicesController } from './billing-services.controller';
import { BillingServicesService } from './billing-services.service';

describe('BillingServicesController', () => {
  let controller: BillingServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillingServicesController],
      providers: [BillingServicesService],
    }).compile();

    controller = module.get<BillingServicesController>(BillingServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
