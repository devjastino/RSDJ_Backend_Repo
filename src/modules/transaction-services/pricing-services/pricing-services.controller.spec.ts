import { Test, TestingModule } from '@nestjs/testing';
import { PricingServicesController } from './pricing-services.controller';
import { PricingServicesService } from './pricing-services.service';

describe('PricingServicesController', () => {
  let controller: PricingServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PricingServicesController],
      providers: [PricingServicesService],
    }).compile();

    controller = module.get<PricingServicesController>(PricingServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
