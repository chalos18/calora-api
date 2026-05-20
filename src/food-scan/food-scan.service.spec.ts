import { Test, TestingModule } from '@nestjs/testing';
import { FoodScanService } from './food-scan.service';

describe('FoodScanService', () => {
  let service: FoodScanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodScanService],
    }).compile();

    service = module.get<FoodScanService>(FoodScanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
