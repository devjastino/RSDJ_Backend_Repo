import { Test, TestingModule } from '@nestjs/testing';
import { CarServicesService } from './car-services.service';

describe('CarServicesService', () => {
  let service: CarServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarServicesService],
    }).compile();

    service = module.get<CarServicesService>(CarServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
