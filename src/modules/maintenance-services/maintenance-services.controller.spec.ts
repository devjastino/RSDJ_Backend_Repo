import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceServicesController } from './maintenance-services.controller';
import { MaintenanceServicesService } from './maintenance-services.service';

describe('MaintenanceServicesController', () => {
  let controller: MaintenanceServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceServicesController],
      providers: [MaintenanceServicesService],
    }).compile();

    controller = module.get<MaintenanceServicesController>(MaintenanceServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
