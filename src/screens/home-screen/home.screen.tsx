import React from "react";
import { HomeView } from "./component/home.view";
import { useHomeHooks } from "./component/home.hooks";

export const HomeScreen = () => {
    const {
        data,
        onItemPress,
        search,
        onChangeSearchText,
        onAddPress,
        onSavePress
    } = useHomeHooks()

    return <HomeView
        data={data}
        onItemPress={onItemPress}
        search={search}
        onChangeSearchText={onChangeSearchText}
        onAddPress={onAddPress}
        onSavePress={onSavePress}
    />
}