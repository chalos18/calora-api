import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodScanService } from './food-scan.service';
import { CreateFoodScanDto } from './dto/create-food-scan.dto';
import { UpdateFoodScanDto } from './dto/update-food-scan.dto';

@Controller('food-scan')
export class FoodScanController {
  constructor(private readonly foodScanService: FoodScanService) {}

  @Post()
  create(@Body() createFoodScanDto: CreateFoodScanDto) {
    return this.foodScanService.create(createFoodScanDto);
  }

  @Get()
  findAll() {
    return this.foodScanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodScanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodScanDto: UpdateFoodScanDto) {
    return this.foodScanService.update(+id, updateFoodScanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodScanService.remove(+id);
  }
}
