import { Test, TestingModule } from '@nestjs/testing';
import { BookingServicesController } from './booking-services.controller';

describe('BookingServicesController', () => {
  let controller: BookingServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingServicesController],
    }).compile();

    controller = module.get<BookingServicesController>(BookingServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
