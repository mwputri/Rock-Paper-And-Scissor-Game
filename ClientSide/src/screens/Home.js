import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
  Alert,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./Login";

const HomeScreen = () => {
  const { width, height } = Dimensions.get("window");
};

export default function Home({ navigation }) {
  return (
    <ImageBackground resizeMode="cover" style={styles.background}>
      <StatusBar barStyle={"dark-content"} />

      <SafeAreaView style={styles.container}>
        <SafeAreaProvider>
          <View style={styles.imageCountainer}>
            <Image
              style={styles.mainImage}
              source={require("../../assets/mainlogo.jpeg")}
            />
          </View>

          <ScrollView>
            <View style={styles.card}>
              <View style={styles.deskripsiGroup}>
                <Text style={styles.title}>Welcome to </Text>
                <Text style={styles.bakegu}>BAKEGU</Text>
                <Text style={styles.deskripsi}>
                  Mainkan Game ini dan dapatkan kesempatan undian berhadiah
                  menarik!
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
          </ScrollView>
        </SafeAreaProvider>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FEF6E1",
    flex: 1,
    justifyContent: "flex-start",
  },
  card: {
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 6,
    // shadowOpacity: 0.26,
    // backgroundColor: "#fff",
    flex: 1,
    // marginVertical: 80,
    borderRadius: 40,
    width: 400,
    height: 800,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageCountainer: {
    width: "100%",
    alignContent: "center",
    flex: 1,
    paddingTop: 40,
  },
  mainImage: {
    alignSelf: "center",
    width: 400,
    height: 400,
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
    paddingVertical: 30,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 40,
    width: "85%",
    height: 400,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  deskripsi: {
    textAlign: "center",
    fontWeight: "700",
    marginTop: 20,
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
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  buttonMain: {
    padding: 15,
    paddingHorizontal: 80,
    borderWidth: 0,
    margin: 10,
    borderRadius: 40,
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
