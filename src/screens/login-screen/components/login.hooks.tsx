import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../../../store/slice";

interface loginHooksProps {
    userName: string;
    password: string;
    onChangeUserNameText: (text: string) => void;
    onChangePasswordText: (text: string) => void;
    isValidUserName: boolean;
    isValidPassword: boolean;
    onLoginPress: () => void
}

export const useLoginHooks = (): loginHooksProps => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isValidUserName, setValidUserName] = useState(true)
    const [isValidPassword, setValidPassword] = useState(true)
    const navigation = useNavigation<any>()
    const dispatch = useDispatch()

    const onChangeUserNameText = (text: string) => {
        setUserName(text)
        if (text.length > 1) {
            setValidUserName(true)
        } else {
            setValidUserName(false)
        }
    }

    const onChangePasswordText = (text: string) => {
        setPassword(text)
        if (text.length > 1) {
            setValidPassword(true)
        } else {
            setValidPassword(false)
        }
    }

    const onLoginPress = () => {
        onChangeUserNameText(userName)
        onChangePasswordText(password)
        if (isValidPassword && isValidUserName && userName !== "" && password !== "") {
            const obj = {
                userName: userName,
                password: password,
                savedRecipe: []
            }
            dispatch(addUser(obj))
            navigation.navigate("TabNav")
        }
    }

    return {
        userName,
        password,
        onChangeUserNameText,
        onChangePasswordText,
        isValidUserName,
        isValidPassword,
        onLoginPress
    }
}