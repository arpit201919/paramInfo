import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./editProfile.styles";
import { avatar } from "../../../assets/assets";

interface editProfileProps {
    currentUserData: any
    savedRecipe: any[]
    onLogoutPress: () => void
}

export const EditProfileView = (props: editProfileProps) => {
    const { currentUserData, savedRecipe, onLogoutPress } = props

    return (
        <View style={styles.container}>
            <Image
                source={avatar}
                style={styles.imageStyle}
            />
            <Text style={styles.userName}>{currentUserData?.userName}</Text>
            <TouchableOpacity onPress={() => onLogoutPress()} style={styles.logoutBotton}>
                <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
            <Text style={styles.savedData}>Saved Recipe:-</Text>
            <FlatList
                data={savedRecipe}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.itemCont}>
                            <Text style={styles.userName}>{item.strCategory}</Text>
                            <Text numberOfLines={2} style={styles.desc}>{item.strCategoryDescription}</Text>
                            <Text style={styles.desc}>Time Required-{item.time}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}