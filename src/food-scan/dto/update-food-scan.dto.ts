import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodScanDto } from './create-food-scan.dto';

export class UpdateFoodScanDto extends PartialType(CreateFoodScanDto) {}
