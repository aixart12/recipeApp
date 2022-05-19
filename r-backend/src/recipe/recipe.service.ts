import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { error } from 'console';
import RecipeData from 'src/interfaces/recipeData.interface';
import { Recipe } from 'src/model/model.entity';


@Injectable()
export class RecipeService {

  constructor(@Inject('RECIPE_REPOSITRY') private readonly recipeSercive: typeof Recipe){}

 
    public async getAll() :Promise<RecipeData[]>{
        const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: {from: '0', size: '5', tags: 'under_30_minutes'},
            headers: {
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
              'X-RapidAPI-Key': '8c4a82e9a1mshfb1b12cb6a79f1ep1766cajsn9b37a152484b'
            }
          };
          
         const response = (await axios.request(options)).data.results;
          return response;
    }
    public async createRecipe(recipeData : RecipeData) {
      try {
        return await this.recipeSercive.create ({
          name: recipeData.name,
          recipeId: +recipeData.id,
          description: recipeData.description 
        })

      }catch(error) {
            console.log("dataseError",error);
            
      }

    }
    public async showmylist(){
      try {
        const list =await this.recipeSercive.findAll()
        console.log("--list--",list);
        
        return list
      }catch(error){
        console.log("dataseError",error);
      }
    }

}