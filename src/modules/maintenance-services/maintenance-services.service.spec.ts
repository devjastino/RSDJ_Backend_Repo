import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceServicesService } from './maintenance-services.service';

describe('MaintenanceServicesService', () => {
  let service: MaintenanceServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceServicesService],
    }).compile();

    service = module.get<MaintenanceServicesService>(MaintenanceServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
