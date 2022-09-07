import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

export default function MyDrawer(){

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: {backgroundColor:'#ddd', height:80},
            headerTitleAlign: 'center'
        }}>
            <Drawer.Screen name='GameZone' component={HomeStack} />
            <Drawer.Screen name='About GameZone' component={AboutStack}
            options={{drawerLabel: 'About'}} />
        </Drawer.Navigator>
    )
}