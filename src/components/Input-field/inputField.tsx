import React from "react"
import { View, Text, TextInput } from "react-native"
import { styles } from "./inputField.style";
import { colors } from "../../utils/colors";

interface inputFieldProps {
    title: string;
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    errorText: string
    isValid?: boolean
}

export const InputField = (props: inputFieldProps) => {
    const {
        title,
        value,
        placeholder,
        onChangeText,
        errorText,
        isValid
    } = props

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.grey}
                value={value}
                onChangeText={(text: string) => onChangeText(text)}
            />
            {!isValid && <Text style={styles.errorText}>{errorText}</Text>}
        </View>
    )
}