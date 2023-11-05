import React from "react";
import { CreateRecipeView } from "./component/createRecipe.view";
import { useCreateRecipeHooks } from "./component/createRecipe.hooks";

export const CreateRecipeScreen = () => {
    const {
        recipeName,
        onChangeRecipeText,
        recipeDescription,
        onChangeRecipeDescription,
        timeRequired,
        onChangeTimeReqText,
        onSubmitPress
    } = useCreateRecipeHooks()

    return <CreateRecipeView
        recipeName={recipeName}
        onChangeRecipeText={onChangeRecipeText}
        recipeDescription={recipeDescription}
        onChangeRecipeDescription={onChangeRecipeDescription}
        timeRequired={timeRequired}
        onChangeTimeReqText={onChangeTimeReqText}
        onSubmitPress={onSubmitPress}
    />
}