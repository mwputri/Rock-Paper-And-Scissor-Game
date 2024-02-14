import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./Login";

export default function Home({ navigation }) {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <View style={styles.imageCountainer}>
          <Image
            style={styles.mainImage}
            source={require("../../assets/mainlogo.jpeg")}
          />
        </View>

        <View style={styles.deskripsiGroup}>
          <Text style={styles.title}>Welcome to </Text>
          <Text style={styles.bakegu}>BAKEGU</Text>
          <Text style={styles.deskripsi}>
            Mainkan Game ini dan dapatkan kesempatan undian berhadiah menarik!
          </Text>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.buttonMain}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.textButton}>Main yu!</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.buttonSignup} onPress={""}>
              <Text style={styles.textButton}>Sign Up</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF6E1",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageCountainer: {
    width: "100%",
    alignContent: "center",
    flex: 1,
    paddingTop: 80,
  },
  mainImage: {
    alignSelf: "center",
    width: "95%",
    height: "95%",
  },
  title: {
    fontFamily: "Helvetica",
    fontSize: 50,
    fontWeight: "800",
    textAlign: "center",
  },
  bakegu: {
    fontFamily: "Helvetica",
    fontSize: 50,
    fontWeight: "400",
    textAlign: "center",
    color: "#F6B17A",
  },
  deskripsiGroup: {
    padding: 32,
    width: "100%",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
  deskripsi: {
    textAlign: "center",
    fontWeight: "700",
    marginTop: 30,
    fontSize: 16,
  },
  buttonGroup: {
    marginTop: 40,
    flexDirection: "row",
  },
  textButton: {
    fontWeight: "600",
    fontSize: 24,
    color: "#fff",
  },
  buttonMain: {
    padding: 15,
    paddingHorizontal: 80,
    borderWidth: 0,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#FFB996",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonSignup: {
    padding: 15,
    paddingHorizontal: 40,
    borderWidth: 0,
    margin: 10,
    borderRadius: 16,
    backgroundColor: "#FFE4C9",
  },
});
