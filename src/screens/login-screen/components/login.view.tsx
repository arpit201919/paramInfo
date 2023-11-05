import React from "react"
import { View, Text, ImageBackground, StatusBar, TouchableOpacity } from "react-native"
import { styles } from "./login.styles"
import { background } from "../../../assets/assets"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { colors } from "../../../utils/colors"
import { InputField } from "../../../components/Input-field/inputField"

interface loginProps {
    userName: string;
    password: string;
    onChangeUserNameText: (text: string) => void;
    onChangePasswordText: (text: string) => void;
    isValidUserName: boolean;
    isValidPassword: boolean;
    onLoginPress: () => void;
}

export const LoginView = (props: loginProps) => {
    const {
        userName,
        password,
        onChangeUserNameText,
        onChangePasswordText,
        isValidUserName,
        isValidPassword,
        onLoginPress
    } = props;

    return (
        <ImageBackground source={background} style={styles.container}>
            <StatusBar backgroundColor={colors.black} barStyle={"dark-content"} />
            <KeyboardAwareScrollView contentContainerStyle={styles.keyboardView}>
                <View style={styles.viewStyle}>
                    <Text style={styles.loginText}>Login</Text>
                    <InputField
                        title={"UserName"}
                        placeholder={"Enter Username"}
                        value={userName}
                        onChangeText={(text) => onChangeUserNameText(text)}
                        errorText={"User name is required."}
                        isValid={isValidUserName}
                    />
                    <InputField
                        title={"Password"}
                        placeholder={"Enter Password"}
                        value={password}
                        onChangeText={(text) => onChangePasswordText(text)}
                        errorText={"Password is required."}
                        isValid={isValidPassword}
                    />
                    <TouchableOpacity onPress={() => onLoginPress()} style={styles.buttonCont}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>
    )
}