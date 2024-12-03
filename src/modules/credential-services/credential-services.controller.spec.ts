import { Test, TestingModule } from '@nestjs/testing';
import { CredentialServicesController } from './credential-services.controller';
import { CredentialServicesService } from './credential-services.service';

describe('CredentialServicesController', () => {
  let controller: CredentialServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CredentialServicesController],
      providers: [CredentialServicesService],
    }).compile();

    controller = module.get<CredentialServicesController>(CredentialServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
