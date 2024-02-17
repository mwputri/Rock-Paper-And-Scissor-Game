import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Leaderboard from "./src/screens/Leaderboard";
import RondeModal from "./src/screens/RondeModal";
import Main from "./src/screens/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="RondeModal"
        component={RondeModal}
        options={{ headerShown: false }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

