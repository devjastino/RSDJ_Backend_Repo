import { Test, TestingModule } from '@nestjs/testing';
import { CredentialServicesService } from './credential-services.service';

describe('CredentialServicesService', () => {
  let service: CredentialServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CredentialServicesService],
    }).compile();

    service = module.get<CredentialServicesService>(CredentialServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
