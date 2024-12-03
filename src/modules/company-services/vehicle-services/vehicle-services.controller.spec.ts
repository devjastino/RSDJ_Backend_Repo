import { Test, TestingModule } from '@nestjs/testing';
import { VehicleServicesController } from './vehicle-services.controller';
import { VehicleServicesService } from './vehicle-services.service';

describe('VehicleServicesController', () => {
  let controller: VehicleServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleServicesController],
      providers: [VehicleServicesService],
    }).compile();

    controller = module.get<VehicleServicesController>(VehicleServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
