import { Test, TestingModule } from '@nestjs/testing';
import { ShuttleServicesController } from './shuttle-services.controller';
import { ShuttleServicesService } from './shuttle-services.service';

describe('ShuttleServicesController', () => {
  let controller: ShuttleServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShuttleServicesController],
      providers: [ShuttleServicesService],
    }).compile();

    controller = module.get<ShuttleServicesController>(ShuttleServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
