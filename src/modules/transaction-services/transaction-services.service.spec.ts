import { Test, TestingModule } from '@nestjs/testing';
import { TransactionServicesService } from './transaction-services.service';

describe('TransactionServicesService', () => {
  let service: TransactionServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionServicesService],
    }).compile();

    service = module.get<TransactionServicesService>(TransactionServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
