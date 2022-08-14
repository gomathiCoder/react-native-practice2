import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Home from "../screens/Home";
import ReviewDetails from '../screens/ReviewDetails';

const screens = {
    Home : {
        screen : Home,
        navigationOptions: {
            title: 'Game Zone'
        }
    },
    ReviewDetails : {
        screen : ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens,
    {
        defaultNavigationOptions:{
            headerTintColor: '#444',
            headerStyle: { backgroundColor: '#ddd', height: 80}
        }
    });

export default createAppContainer(HomeStack);