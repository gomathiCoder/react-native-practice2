import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from '../screens/About';

export default function AboutStack(){
    
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="AboutScreen"
                component={About}
                options={{title:'About Review Details', headerShown: false}}
            />
        </Stack.Navigator>
    )
}