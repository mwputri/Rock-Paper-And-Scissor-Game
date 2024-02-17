import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Main from "./src/screens/Main";
import Login from "./src/screens/Login";
import Leaderboard from "./src/screens/Leaderboard";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// const App = () => {
//   return <Home />;
// };
// export default App;

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>

    // <Home />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF6E1",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
