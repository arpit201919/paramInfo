import React from "react";
import { EditProfileView } from "./component/editProfile.view";
import { useEditProfileHooks } from "./component/editProfile.hooks";

export const EditProfileScreen = () => {
    const {
        currentUserData,
        savedRecipe,
        onLogoutPress

    } = useEditProfileHooks()

    return <EditProfileView
        currentUserData={currentUserData}
        savedRecipe={savedRecipe}
        onLogoutPress={onLogoutPress}
    />
}