import { SequelizeOptions } from "sequelize-typescript"

const dataBaseConfigAttribute : SequelizeOptions = {
    username : "postgres",
    password : "postgres",
    database : "recipe",
    host : "localhost",
    port : 5425,
    dialect: 'postgres' ,
    logging: console.log,


}

export default dataBaseConfigAttribute