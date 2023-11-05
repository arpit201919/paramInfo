import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { itemType } from "./home.view";
import { addNewRecipeList, saveRecipe } from "../../../store/slice";

interface homeHooksProps {
    data: any[];
    onItemPress: (item: itemType) => void
    search: string;
    onChangeSearchText: (text: string) => void
    onAddPress: () => void
    onSavePress: (item: itemType) => void
}


export const useHomeHooks = (): homeHooksProps => {
    const [data, setData] = useState([])
    const [tempData, setTempData] = useState([])
    const [search, setSearch] = useState('')
    const recipeData = useSelector((store) => store.recipeList)
    const { userDetails, currentUser } = recipeData
    const isFocused = useIsFocused()
    const navigation = useNavigation<any>()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isFocused) {
            setData(recipeData.recipeList)
            setTempData(recipeData.recipeList)
        }
    }, [isFocused])

    const onItemPress = (item: itemType) => {
        navigation.navigate("RecipeDetail", { details: item })
    }

    const onChangeSearchText = (text: string) => {
        if (text) {
            const newData = tempData.filter(
                (item: any) => {
                    const itemData = item.strCategory
                        ? item.strCategory.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setData(newData);
            setSearch(text)
        } else {
            setData(tempData);
            setSearch(text)
        }
    }

    const addNewRecipe = (data: itemType) => {
        console.log("data====='''''", data);
        const tempArray: any = [...tempData]
        tempArray.unshift(data)
        dispatch(addNewRecipeList(tempArray))

    }

    const onAddPress = () => {
        navigation.navigate("CreateRecipe", { addNewRecipe: (data: any) => addNewRecipe(data) })
    }

    const onSavePress = (item) => {
        const tempArray = JSON.parse(JSON.stringify([...userDetails]))
        for (let data of tempArray) {
            if (data?.userName === currentUser?.userName && data?.password === currentUser?.password) {
                console.log("pooooop");
                // return
                data.savedRecipe.unshift(item)
            }
        }
        dispatch(saveRecipe(tempArray))
    }


    return {
        data,
        onItemPress,
        search,
        onChangeSearchText,
        onAddPress,
        onSavePress
    }
}