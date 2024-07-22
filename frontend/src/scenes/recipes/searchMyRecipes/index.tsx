import HText from "@/shared/HText";
import React from "react";

interface IRecipes  {
    id: number;
    name: string;
    recipe: string;
    ingredients: string;
}

const SearchMyRecipes = () => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

    const recipes: IRecipes[] = [
    {
        id: 1,
        name: "name 1",
        recipe: "recipe 1",
        ingredients: "ingredients 1"
    },
    {
        id: 2,
        name: "name 2",
        recipe: "recipe 2",
        ingredients: "ingredients 2"
    },];

    const onRenderCell = (recipe : IRecipes) => {
        return <div key={recipe.id} className={inputStyles}>
                    {recipe.name}
                </div> 
    }

    return(
        <div>
            <header className="text-center p-12">
                <HText>Our Users Recipes</HText>
            </header>
            <div>

            </div>
            
            {recipes.map(onRenderCell)}
            
        </div>
    );
}

export default SearchMyRecipes