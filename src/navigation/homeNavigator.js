import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/login-screen/login.screen';
import { HomeScreen } from '../screens/home-screen/home.screen';
import { RecipeDetailsScreen } from '../screens/recipe-details/recipeDetails.screen';
import { CreateRecipeScreen } from '../screens/create-recipe/createRecipe.screen';


const Stack = createNativeStackNavigator();

export const HomekNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="RecipeDetail" component={RecipeDetailsScreen} />
            <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
        </Stack.Navigator>
    );
}