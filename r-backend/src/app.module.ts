import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import dataBaseConfigAttribute from './database/database.config';
import { RecipeModule } from './recipe/recipe.module';
import { DatabaseModule } from './database/database.module';
import { ModelModule } from './model/model.module';


@Module({
  imports: [RecipeModule, DatabaseModule, ModelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
