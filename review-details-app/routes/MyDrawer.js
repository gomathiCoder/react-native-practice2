import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

export default function MyDrawer(){

    const Drawer = createDrawerNavigator();

    function TitleLogo({title}){
        return (
            <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/heart_logo.png')} style={styles.logo} />
                <Text style={{fontSize:20}}>{title}</Text>
            </View>
        )
    }

    return (
        <Drawer.Navigator
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: {backgroundColor:'#ddd', height:90},
            headerTitleAlign: 'center',
            headerBackground: () =>
            <ImageBackground style={StyleSheet.absoluteFill} source={require('../assets/game_bg.png')}></ImageBackground>
        }}>
            <Drawer.Screen name='GameZone' component={HomeStack} 
            options={{ 
                headerTitle: () => <TitleLogo title='GameZone'/>
            }}
            />
            <Drawer.Screen name='About GameZone' component={AboutStack}
            options={{drawerLabel: 'About',
            headerTitle: () => <TitleLogo title='About GameZone' />
            }} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:26,
        height:26,
        marginRight:10
    }
})