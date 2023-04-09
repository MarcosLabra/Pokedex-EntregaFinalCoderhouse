import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../tab/TabNavigator';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={TabNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigator