import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetails from '../screens/ReviewDetails';

export default function HomeStack(){

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="HomeScreen" 
                component={Home} 
                options={{title:'Game Zone', headerShown: false}}
            />
            <Stack.Screen 
                name="ReviewDetailsScreen" 
                component={ReviewDetails} 
                options={{title:'Review Details'}}    
            />
        </Stack.Navigator>
    )
}