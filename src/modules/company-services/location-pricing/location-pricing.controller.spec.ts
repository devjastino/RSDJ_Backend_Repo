import { Test, TestingModule } from '@nestjs/testing';
import { LocationPricingController } from './location-pricing.controller';
import { LocationPricingService } from './location-pricing.service';

describe('LocationPricingController', () => {
  let controller: LocationPricingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationPricingController],
      providers: [LocationPricingService],
    }).compile();

    controller = module.get<LocationPricingController>(LocationPricingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
