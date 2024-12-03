import { Test, TestingModule } from '@nestjs/testing';
import { LoginServiceController } from './login-service.controller';

describe('LoginServiceController', () => {
  let controller: LoginServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginServiceController],
    }).compile();

    controller = module.get<LoginServiceController>(LoginServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
