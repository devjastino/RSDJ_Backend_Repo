import { Test, TestingModule } from '@nestjs/testing';
import { BillingServicesService } from './billing-services.service';

describe('BillingServicesService', () => {
  let service: BillingServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillingServicesService],
    }).compile();

    service = module.get<BillingServicesService>(BillingServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
