import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import MessageScreen from "../screens/MessageScreen";
const Stack=createStackNavigator();
export default function StackNavigator(){
 return(  <Stack.Navigator screenOptions={{headerShown:false,}}>
        <Stack.Screen name="login"component={LoginScreen}/>
        <Stack.Screen name="home"component={HomeScreen}/>
        <Stack.Screen name="chat"component={ChatScreen}/>
        <Stack.Screen name="message"component={MessageScreen}/>
    </Stack.Navigator>
 );

};