import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Recipe extends Model<Recipe>{
    @Column({
        type : DataType.STRING
    })
    public name : string;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    recipeId: number

    @Column({
        type : DataType.STRING
    })
    public description : string
}
