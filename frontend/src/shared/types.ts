export enum SelectedPage {
    Home = "home",
    Recipes = "recipes",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  }

  export interface RecipesType {
    icon: JSX.Element;
    title: string;
    description: string;
    sidePage: (value: RecipesSidePage) => void;
  }

  export interface ClassType {
    name: string;
    description: string;
    image: string;
  }

export type UserProfileToken = {
  userName: string;
  email: string;
  token: string;
}

export type UserProfile = {
  userName: string;
  email: string;
}

export enum RecipesSidePage {
  SearchPage = "searchPage",
  MyRecipes = "myRecipes",
  SearchMyRecipes = "searchMyRecipes"
}

