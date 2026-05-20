import { Injectable } from '@nestjs/common';
import { CreateFoodScanDto } from './dto/create-food-scan.dto';
import { UpdateFoodScanDto } from './dto/update-food-scan.dto';

@Injectable()
export class FoodScanService {
  create(createFoodScanDto: CreateFoodScanDto) {
    return 'This action adds a new foodScan';
  }

  findAll() {
    return `This action returns all foodScan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodScan`;
  }

  update(id: number, updateFoodScanDto: UpdateFoodScanDto) {
    return `This action updates a #${id} foodScan`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodScan`;
  }
}
