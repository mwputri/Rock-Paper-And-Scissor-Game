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
      <Stack.Navigator initialRouteName="Main">

        <Stack.Screen
        name="RondeModal"
        component={RondeModal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="Main"
      component={Main}
      options={{ headerShown: false }}
    />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

