import { Test, TestingModule } from '@nestjs/testing';
import { FoodScanController } from './food-scan.controller';
import { FoodScanService } from './food-scan.service';

describe('FoodScanController', () => {
  let controller: FoodScanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodScanController],
      providers: [FoodScanService],
    }).compile();

    controller = module.get<FoodScanController>(FoodScanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
