import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./recipeDetails.styles";
import { colors } from "../../../utils/colors";

interface recipeDetailsProps {
    params: any;
    navigation: any
}
export const RecipeDetailsView = (props: recipeDetailsProps) => {
    const { params, navigation } = props
    console.log("params====", params);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name={"arrowleft"} color={colors.black} size={28} />
            </TouchableOpacity>
            <View style={styles.view}>
                <Image
                    resizeMode={"contain"}
                    source={{ uri: params?.details.strCategoryThumb }}
                    style={styles.imageStyle}
                />
                <Text style={styles.titleText}>Name-{params?.details.strCategory}</Text>
                <Text style={styles.titleText}>Time Required-{params?.details.time}</Text>
                <Text style={styles.titleText}>Likes-{params?.details.likes}</Text>
                <Text style={styles.titleText}>Details:-</Text>
                <Text style={styles.details}>{params?.details.strCategoryDescription}</Text>
            </View>
        </View>
    )
}