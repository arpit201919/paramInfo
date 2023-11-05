import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { welcome } from "../../../assets/assets";

interface createRecipeHooksProps {
    recipeName: string;
    onChangeRecipeText: (text: string) => void;
    recipeDescription: string;
    onChangeRecipeDescription: (text: string) => void
    timeRequired: string;
    onChangeTimeReqText: (text: string) => void;
    onSubmitPress: () => void;
}

export const useCreateRecipeHooks = (): createRecipeHooksProps => {
    const [recipeName, setRecipeName] = useState("")
    const [recipeDescription, setRecipeDescription] = useState("")
    const [timeRequired, setTimeRequired] = useState("")
    const params = useRoute().params
    const navigation = useNavigation()

    console.log("params====>>>>>>", params);


    const onChangeRecipeText = (text: string) => {
        setRecipeName(text)
    }

    const onChangeRecipeDescription = (text: string) => {
        setRecipeDescription(text)
    }

    const onChangeTimeReqText = (text: string) => {
        setTimeRequired(text)
    }

    const onSubmitPress = () => {
        const obj = {
            strCategory: recipeName,
            strCategoryThumb: "https:\/\/www.themealdb.com\/images\/category\/dessert.png",
            strCategoryDescription: recipeDescription,
            time: timeRequired,
            likes: ''
        }
        params?.addNewRecipe(obj)
        navigation.goBack()
    }

    return {
        recipeName,
        onChangeRecipeText,
        recipeDescription,
        onChangeRecipeDescription,
        timeRequired,
        onChangeTimeReqText,
        onSubmitPress
    }
}