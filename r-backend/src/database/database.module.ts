import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import dataBaseProvider from './database.provider';

@Module({
    providers: [DatabaseService, ...dataBaseProvider],
    exports: [...dataBaseProvider]
})
export class DatabaseModule {}
