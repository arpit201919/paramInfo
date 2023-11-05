import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SaveRecipeScreen } from '../screens/save-recipe/saveRecipe.screen';
import { EditProfileScreen } from '../screens/edit-profile/editProfile.screen';

const Stack = createNativeStackNavigator();

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"EditProfile"} screenOptions={{ headerShown: false }} >
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
            <Stack.Screen name="SaveRecipe" component={SaveRecipeScreen} />
        </Stack.Navigator>
    );
}