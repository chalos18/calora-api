import { Module } from '@nestjs/common';
import { FoodScanService } from './food-scan.service';
import { FoodScanController } from './food-scan.controller';

@Module({
  controllers: [FoodScanController],
  providers: [FoodScanService],
})
export class FoodScanModule {}
