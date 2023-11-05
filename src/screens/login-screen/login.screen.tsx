import React from "react"
import { LoginView } from "./components/login.view"
import { useLoginHooks } from "./components/login.hooks"

export const LoginScreen = () => {
    const {
        userName,
        password,
        onChangeUserNameText,
        onChangePasswordText,
        isValidUserName,
        isValidPassword,
        onLoginPress
    } = useLoginHooks()
    return <LoginView
        userName={userName}
        password={password}
        onChangeUserNameText={onChangeUserNameText}
        onChangePasswordText={onChangePasswordText}
        isValidUserName={isValidUserName}
        isValidPassword={isValidPassword}
        onLoginPress={onLoginPress}
    />
}