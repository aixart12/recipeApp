import { Injectable } from '@nestjs/common';
import dataBaseConfigAttribute from './database.config';

@Injectable()
export class DatabaseService {
    get sequelizeOrmConfig() {
        return dataBaseConfigAttribute;
    }
}
