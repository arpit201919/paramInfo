import { useIsFocused } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../../store/slice";

interface useEditProfileHookProps {
    currentUserData: any;
    savedRecipe: any[]
    onLogoutPress: () => void

}

export const useEditProfileHooks = (): useEditProfileHookProps => {
    const recipeData = useSelector((store) => store.recipeList)
    const { userDetails, currentUser } = recipeData
    const [currentUserData, setCurrentUser] = useState()
    const isFocused = useIsFocused()
    const [savedRecipe, setSavedRecipe] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        if (isFocused) {
            setCurrentUser(currentUser)
            getSavedData()
        }
    }, [isFocused])

    const getSavedData = () => {
        const tempArray = JSON.parse(JSON.stringify([...userDetails]))
        for (const data of tempArray) {
            if (data?.userName === currentUser?.userName && data?.password === currentUser?.password) {
                setSavedRecipe(data.savedRecipe)
                return
            }
        }
    }

    const onLogoutPress = () => {
        dispatch(logout())
    }

    return {
        currentUserData,
        savedRecipe,
        onLogoutPress
    }
}