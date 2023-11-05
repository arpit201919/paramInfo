import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/login-screen/login.screen';
import { HomeScreen } from '../screens/home-screen/home.screen';
import { RecipeDetailsScreen } from '../screens/recipe-details/recipeDetails.screen';
import { CreateRecipeScreen } from '../screens/create-recipe/createRecipe.screen';
import { TabNavigator } from './tabNavigator';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    const recipeData = useSelector((store) => store.recipeList)
    const { isLoggedIn } = recipeData
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={"Login"} screenOptions={{ headerShown: false }} >
                {!isLoggedIn ? <Stack.Screen name="Login" component={LoginScreen} /> :
                    <Stack.Screen name="TabNav" component={TabNavigator} />}
            </Stack.Navigator>
        </NavigationContainer>
    );
}