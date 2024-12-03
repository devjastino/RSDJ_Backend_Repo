import { Test, TestingModule } from '@nestjs/testing';
import { PricingServicesService } from './pricing-services.service';

describe('PricingServicesService', () => {
  let service: PricingServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PricingServicesService],
    }).compile();

    service = module.get<PricingServicesService>(PricingServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
