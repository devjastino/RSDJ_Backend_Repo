import { Test, TestingModule } from '@nestjs/testing';
import { TextServicesController } from './text-services.controller';
import { TextServicesService } from './text-services.service';

describe('TextServicesController', () => {
  let controller: TextServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextServicesController],
      providers: [TextServicesService],
    }).compile();

    controller = module.get<TextServicesController>(TextServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
