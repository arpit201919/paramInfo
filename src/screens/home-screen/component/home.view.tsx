import React from "react";
import { View, Text, FlatList, StatusBar, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "./home.styles";
import { colors } from "../../../utils/colors";
import Icon from "react-native-vector-icons/Entypo"

export interface itemType {
    idCategory: string;
    strCategory: string;
    time: string;
    likes: number;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

interface homeProps {
    data: any[];
    onItemPress: (item: itemType) => void;
    search: string;
    onChangeSearchText: (text: string) => void;
    onAddPress: () => void;
    onSavePress: (item: itemType) => void;
}

export const HomeView = (props: homeProps) => {
    const { data, onItemPress, search, onChangeSearchText, onAddPress, onSavePress } = props

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.black} barStyle={"dark-content"} />
            <View style={styles.headerCont}>
                <TouchableOpacity>
                    <Icon name="menu" size={32} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onAddPress()} style={styles.plusCont}>
                    <Icon name="plus" size={32} />
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                placeholderTextColor={colors.grey}
                value={search}
                onChangeText={(text) => onChangeSearchText(text)}
            />
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => onItemPress(item)} style={styles.item}>
                            <View style={styles.itemHeader}>
                                <Text style={styles.titleText}>{item.strCategory}</Text>
                                <TouchableOpacity onPress={() => onSavePress(item)} style={styles.saveCont}>
                                    <Text style={styles.saveText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                            <Image
                                resizeMode={"contain"}
                                source={{ uri: item.strCategoryThumb }}
                                style={styles.imageStyle}
                            />
                            <View style={styles.itemHeader}>
                                <Text style={styles.titleText}>Dutation-{item.time}</Text>
                                <View style={styles.row}>
                                    <Icon name="heart" size={22} color={colors.yellow} />
                                    <Text style={styles.titleText}>{item.likes ?? ''}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}