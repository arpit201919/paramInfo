import React from "react";
import { Text, ImageBackground, KeyboardAvoidingView, View, TouchableOpacity } from "react-native";
import { styles } from "./createRecipe.styles";
import { welcome } from "../../../assets/assets";
import { InputField } from "../../../components/Input-field/inputField";

interface createRecipeProps {
    recipeName: string;
    onChangeRecipeText: (text: string) => void;
    recipeDescription: string;
    onChangeRecipeDescription: (text: string) => void
    timeRequired: string;
    onChangeTimeReqText: (text: string) => void;
    onSubmitPress: () => void;
}

export const CreateRecipeView = (props: createRecipeProps) => {
    const {
        recipeName,
        onChangeRecipeText,
        recipeDescription,
        onChangeRecipeDescription,
        timeRequired,
        onChangeTimeReqText,
        onSubmitPress
    } = props;

    return (
        <ImageBackground resizeMode={"cover"} source={welcome} style={styles.container}>
            <KeyboardAvoidingView contentContainerStyle={styles.viewStyle}>
                <View style={styles.mainView}>
                    <Text style={styles.title}>Add your</Text>
                    <Text style={styles.title}>Own Recipe</Text>
                    <InputField
                        title="Recipe Name"
                        placeholder="Recipe Name"
                        value={recipeName}
                        onChangeText={(text) => onChangeRecipeText(text)}
                    />
                    <InputField
                        title="Recipe Description"
                        placeholder="Recipe Description"
                        value={recipeDescription}
                        onChangeText={(text) => onChangeRecipeDescription(text)}
                    />
                    <InputField
                        title="Time Required"
                        placeholder="Time Required"
                        value={timeRequired}
                        onChangeText={(text) => onChangeTimeReqText(text)}
                    />
                    <TouchableOpacity onPress={() => onSubmitPress()} style={styles.buttonCont}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}