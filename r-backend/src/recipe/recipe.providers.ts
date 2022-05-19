import { Recipe } from "src/model/model.entity";


export const recipeProvider = [{
    provide : 'RECIPE_REPOSITRY',
    useValue: Recipe
}]