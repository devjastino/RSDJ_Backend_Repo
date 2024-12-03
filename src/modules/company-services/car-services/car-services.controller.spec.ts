import { Test, TestingModule } from '@nestjs/testing';
import { CarServicesController } from './car-services.controller';
import { CarServicesService } from './car-services.service';

describe('CarServicesController', () => {
  let controller: CarServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarServicesController],
      providers: [CarServicesService],
    }).compile();

    controller = module.get<CarServicesController>(CarServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
