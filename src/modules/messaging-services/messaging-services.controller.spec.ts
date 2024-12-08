import { Test, TestingModule } from '@nestjs/testing';
import { MessagingServicesController } from './messaging-services.controller';
import { MessagingServicesService } from './messaging-services.service';

describe('MessagingServicesController', () => {
  let controller: MessagingServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagingServicesController],
      providers: [MessagingServicesService],
    }).compile();

    controller = module.get<MessagingServicesController>(MessagingServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
