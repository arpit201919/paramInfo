import React from "react";
import { RecipeDetailsView } from "./component/recipeDetails.view";
import { useRecipeDetailsHooks } from "./component/recipeDetails.hooks";

export const RecipeDetailsScreen = () => {
    const {
        params,
        navigation
    } = useRecipeDetailsHooks()

    return <RecipeDetailsView
        params={params}
        navigation={navigation}
    />
}