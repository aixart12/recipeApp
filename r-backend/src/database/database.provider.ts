import { Sequelize } from "sequelize-typescript";
import { Recipe } from "src/model/model.entity";
import dataBaseConfigAttribute from "./database.config";


const  dataBaseProvider = [{
    provide:'SequelizeInstance',
    useFactory : async () =>{
        let config = dataBaseConfigAttribute;
        const sequelize = new Sequelize(config);
        sequelize.addModels([Recipe]);
        await sequelize.sync();
        return sequelize;
    }
}]

export default dataBaseProvider ;