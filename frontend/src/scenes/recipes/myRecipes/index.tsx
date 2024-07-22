import HText from "@/shared/HText";
import React from "react";
import { useForm } from "react-hook-form";


const MyRecipes = () => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
    return(
    
        <div className=" shadow-lg shadow-slate-500 w-1/2 h-4/5 absolute top-1/2 -translate-y-1/2 left-1/4">
           <header className="bg-primary-100 h-24 flex justify-center items-center text-center">
             <HText>Make Your Recipe</HText>
           </header>
           <div className="mt-4 justify-between md:flex mx-1">
            <form>
           <textarea
                className={inputStyles}
                placeholder="Dish Name"
                rows={1}
                cols={1}
                {...register("dishName", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
              <textarea
                className={inputStyles}
                placeholder="Recipe"
                rows={8}
                cols={50}
                {...register("recipe", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
              <textarea
                className={inputStyles}
                placeholder="Ingredients"
                rows={8}
                cols={50}
                {...register("ingredients", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Share
              </button>
           </form>
           </div>
        </div>
    
    )
}

export default MyRecipes