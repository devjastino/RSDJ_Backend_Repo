import { Test, TestingModule } from '@nestjs/testing';
import { LocationPricingService } from './location-pricing.service';

describe('LocationPricingService', () => {
  let service: LocationPricingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationPricingService],
    }).compile();

    service = module.get<LocationPricingService>(LocationPricingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
