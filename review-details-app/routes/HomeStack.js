import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createAppContainer } from 'react-navigation';
import Home from "../screens/Home";
import ReviewDetails from '../screens/ReviewDetails';

export default function HomeStack(){

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator 
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: {backgroundColor:'#ddd', height:80}
        }}>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{title:'Game Zone'}}
            />
            <Stack.Screen 
                name="ReviewDetails" 
                component={ReviewDetails} 
                options={{title:'Review Details'}}    
            />
        </Stack.Navigator>
    )
}