import { Test, TestingModule } from '@nestjs/testing';
import { TransactionServicesController } from './transaction-services.controller';
import { TransactionServicesService } from './transaction-services.service';

describe('TransactionServicesController', () => {
  let controller: TransactionServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionServicesController],
      providers: [TransactionServicesService],
    }).compile();

    controller = module.get<TransactionServicesController>(TransactionServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
