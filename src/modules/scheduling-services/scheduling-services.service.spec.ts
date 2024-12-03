import { Test, TestingModule } from '@nestjs/testing';
import { SchedulingServicesService } from './scheduling-services.service';

describe('SchedulingServicesService', () => {
  let service: SchedulingServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchedulingServicesService],
    }).compile();

    service = module.get<SchedulingServicesService>(SchedulingServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
