import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
    constructor(private readonly recipeServices:RecipeService){}

    @Get()
    public async getAll(): Promise<any> {
        const recipes =await this.recipeServices.getAll()
        return recipes
           
    }

    @Post('')
    public async createRecipe(@Body() recipeData): Promise<any>{
        const newRecipe = await this.recipeServices.createRecipe(recipeData)
        return "ok"
    }
    @Get('/r')
    public async showmylist(){
        console.log("1");
        
        const mylist = await this.recipeServices.showmylist();
        console.log("---mylist--",mylist);
        
        return mylist
    }
}
