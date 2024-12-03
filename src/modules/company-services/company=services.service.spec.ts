import { Test, TestingModule } from '@nestjs/testing';
import { Company=servicesService } from './company=services.service';

describe('Company=servicesService', () => {
  let service: Company=servicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Company=servicesService],
    }).compile();

    service = module.get<Company=servicesService>(Company=servicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
