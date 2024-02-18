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
import { useFonts } from "expo-font";

export default function Home({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    "Roboto-Black": require("../../assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("../../assets/fonts/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("../../assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Light": require("../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("../../assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../../assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("../../assets/fonts/Roboto-ThinItalic.ttf"),
  });

  // Function to handle font not loaded
  if (!fontsLoaded && !fontError) {
    return null;
  }

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
                <Text style={styles.title}>Ayo Bermain</Text>
                <Text style={styles.bakegu}>BAKEGU</Text>
                <Text style={styles.deskripsi}>
                  Mainkan Game ini dan dapatkan kesempatan undian berhadiah
                  menarik!
                </Text>

                <View style={styles.buttonGroup}>
                  <TouchableOpacity
                    style={styles.buttonMain}
                    onPress={() => navigation.navigate("Main", {showScreen : false})}
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
    // width: 400,
    // height: 400,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
    // paddingVertical: 90,
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
    paddingTop: 0,
    // backgroundColor: "#00",
  },
  mainImage: {
    alignSelf: "center",
    width: 400,
    height: 400,
    // backgroundColor: "#000",
  },
  title: {
    fontFamily: "Roboto-Black",
    fontSize: 44,
    fontWeight: "800",
    textAlign: "center",
  },
  bakegu: {
    fontFamily: "Roboto-Regular",
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
    // height: 400,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  deskripsi: {
    fontFamily: "Roboto-Medium",
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
    fontSize: 22,
    color: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    fontFamily: "Roboto-Medium",
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
