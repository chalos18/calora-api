import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from './users/users.module';
import { MealsModule } from './meals/meals.module';
import { MealItemsModule } from './meal-items/meal-items.module';
import { FoodScanModule } from './food-scan/food-scan.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, MealsModule, MealItemsModule, FoodScanModule, PrismaModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
