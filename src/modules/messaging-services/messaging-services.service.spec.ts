import { Test, TestingModule } from '@nestjs/testing';
import { MessagingServicesService } from './messaging-services.service';

describe('MessagingServicesService', () => {
  let service: MessagingServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagingServicesService],
    }).compile();

    service = module.get<MessagingServicesService>(MessagingServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
