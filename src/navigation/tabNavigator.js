import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import { HomekNavigator } from './homeNavigator';
import { ProfileNavigator } from './profileNavigator';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    const screenOptions = (route, color) => {
        let iconName;

        switch (route.name) {
            case 'Recipe':
                iconName = 'home';
                break;
            case 'Profile':
                iconName = 'appstore-o';
                break;
            default:
                break;
        }

        return <Icon name={iconName} color={color} size={24} />;
    };

    return (
        <Tab.Navigator
            initialRouteName='Recipe'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color }) => screenOptions(route, color),
            })}>
            <Tab.Screen name="Recipe" component={HomekNavigator} />
            <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
    );
};

export const TabNavigator = () => {
    return <BottomTab />
}