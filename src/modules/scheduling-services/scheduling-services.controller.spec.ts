import { Test, TestingModule } from '@nestjs/testing';
import { SchedulingServicesController } from './scheduling-services.controller';
import { SchedulingServicesService } from './scheduling-services.service';

describe('SchedulingServicesController', () => {
  let controller: SchedulingServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchedulingServicesController],
      providers: [SchedulingServicesService],
    }).compile();

    controller = module.get<SchedulingServicesController>(SchedulingServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
