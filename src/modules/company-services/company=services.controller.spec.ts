import { Test, TestingModule } from '@nestjs/testing';
import { Company=servicesController } from './company=services.controller';
import { Company=servicesService } from './company=services.service';

describe('Company=servicesController', () => {
  let controller: Company=servicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Company=servicesController],
      providers: [Company=servicesService],
    }).compile();

    controller = module.get<Company=servicesController>(Company=servicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
