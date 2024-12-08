import { Test, TestingModule } from '@nestjs/testing';
import { EmailServicesController } from './email-services.controller';
import { EmailServicesService } from './email-services.service';

describe('EmailServicesController', () => {
  let controller: EmailServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailServicesController],
      providers: [EmailServicesService],
    }).compile();

    controller = module.get<EmailServicesController>(EmailServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
