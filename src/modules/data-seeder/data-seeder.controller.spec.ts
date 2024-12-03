import { Test, TestingModule } from '@nestjs/testing';
import { DataSeederController } from './data-seeder.controller';
import { DataSeederService } from './data-seeder.service';

describe('DataSeederController', () => {
  let controller: DataSeederController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataSeederController],
      providers: [DataSeederService],
    }).compile();

    controller = module.get<DataSeederController>(DataSeederController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
