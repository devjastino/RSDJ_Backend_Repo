import { Test, TestingModule } from '@nestjs/testing';
import { TextServicesService } from './text-services.service';

describe('TextServicesService', () => {
  let service: TextServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextServicesService],
    }).compile();

    service = module.get<TextServicesService>(TextServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
