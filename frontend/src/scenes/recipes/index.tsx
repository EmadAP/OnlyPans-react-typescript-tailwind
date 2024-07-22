import HText from "@/shared/HText";
import { RecipesSidePage, RecipesType, SelectedPage } from "@/shared/types"
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Recipe from "./Recipe";
import ActionButton from "@/shared/ActionButton";
import RecipesPageGraphic from "@/assets/RecipesPageGraphic.png"

const recipes: Array<RecipesType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "100's of homemade recipes",
        description: "Try our famous recipes from every country and that can be cooked just with 1 PAN",
        sidePage: () => sidePage(RecipesSidePage.SearchPage)
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Share your recipes",
        description: "Show your home made dishes to others and see their recipes, try other peoples dishes and give them your opinion",
        sidePage: () => sidePage(RecipesSidePage.MyRecipes)
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Recipes that are made by our users",
        description: "Try the recipes that you and other people are made in our website",
        sidePage: () => sidePage(RecipesSidePage.SearchMyRecipes)
    },
];

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2 }
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    sidePage: (value: RecipesSidePage) => void;
}

const Recipes = ({setSelectedPage, sidePage}: Props) => {
  return (
    <section
    id="recipes"
    className="mx-auto min-h-full w-5/6 py-20"
    >
    <motion.div
     onViewportEnter={() => setSelectedPage(SelectedPage.Recipes)}
    >
        {/*HEADER*/}
        <motion.div 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{  duration: 0.5}}
         variants={{
             hidden: { opacity: 0, x: -50},
             visible: { opacity: 1, x: 0 }
         }}
        className="md:my-5 md:w-3/5">
           <HText>MAKE YOUR OWN RECIPES.</HText>
           <p className="my-5 text-sm">
            We provide the option to make your own recipes and share it here with other ONLY PANS users,
            try new dishes that are made by other users and share your opinion about them here.
           </p>
        </motion.div>

        {/* RECIPES */}
        <motion.div 
        className="md:flex items-center justify-between gap-8 mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}>
            {recipes.map((recipe: RecipesType) => (
                <Recipe
                    key={recipe.title}
                    icon={recipe.icon}
                    title={recipe.title}
                    description={recipe.description}
                    sidePage={recipe.sidePage}
                />
            ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt28 md:flex">
            {/* GRAPHIC */}
            <img
                className="mx-auto"
                alt="recipes-page-graphic"
                src={RecipesPageGraphic}
            />

            {/* DESCRIPTION */}
            <div>
                {/* TITLE */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{  duration: 0.5}}
                        variants={{
                            hidden: { opacity: 0, x: 50},
                            visible: { opacity: 1, x: 0 }
                        }}
                        >
                            <HText>
                                MILLIONS OF RECIPES FOR YOU TO{" "}
                                <span className="text-primary-500">COOK</span>
                            </HText>
                        </motion.div>
                    </div>
                </div>
                {/* DESCRIPTION */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: 50},
                    visible: { opacity: 1, x: 0 }
                }}
                >
                    <p className="my-5">
                    Our mission at ONLY PANS is to make everyday cooking fun, because we believe that cooking is key to a happier and healthier life for people, communities and the planet. We empower homecooks all over the world to help each other by sharing recipes and cooking tips.
                    </p>
                    <p className="mb-5">
                    Spend less time washing up pots and pans with our selection of easy one pot recipes that taste as good as they look! From the wildly popular one pot Greek Chicken and Lemon Rice, to a Sausage Bake with Potatoes and Gravy, to Creamy Baked Risotto with Lemon Pepper Chicken, these recipes prove you don't need to compromise flavour for the convenience of cooking in one pot.
                    </p>
                </motion.div>
                {/*BUTTON */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                       <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton> 
                    </div>
                </div>
            </div>
        </div>
            
        </motion.div>    
    </section>

  )
}


export default Recipes


function sidePage(SearchPage: RecipesSidePage): void {
    throw new Error("Function not implemented.");
}

