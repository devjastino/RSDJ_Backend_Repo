import { Test, TestingModule } from '@nestjs/testing';
import { ReceiptServicesService } from './receipt-services.service';

describe('ReceiptServicesService', () => {
  let service: ReceiptServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceiptServicesService],
    }).compile();

    service = module.get<ReceiptServicesService>(ReceiptServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
