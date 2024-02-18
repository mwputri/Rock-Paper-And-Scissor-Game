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
import { LinearGradient } from "expo-linear-gradient";
import Main from "./Main";

export default function RondeModal({ navigation }) {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        {/* Header Logo */}
        <Image style={styles.Logo} source={require("../../assets/Logo.png")} />
        {/* Header Title */}
        <View style={styles.ContainerTitle}>
          <LinearGradient
            // Title Linear Gradient install LinearGradient and inport
            colors={["#FFB996", "#ffff"]}
            style={styles.box}
          >
            <Text style={{ fontSize: 18, color: "#1B1A55" }}>
              Pilih babak kamu!
            </Text>
          </LinearGradient>
          <LinearGradient
            // Title Linear Gradient install LinearGradient and inport
            colors={["#FFB996", "#FFE4C9"]}
            style={styles.circle}
          >
            <Text
              style={{ fontSize: 32, color: "#1B1A55", fontWeight: "bold" }}
            >
              BABAK
            </Text>
          </LinearGradient>
        </View>
{/* Body Shape BGK */}
        <View style={{ flex: 1, flexDirection: "row", marginTop: 50 }}>
          <TouchableOpacity style={styles.Rectangle}>
            <View style={styles.Shape}>
              <Image
                style={styles.fingers}
                source={require("../../assets/Batu.png")}
              />
              <Text style={{fontSize:24}}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Rectangle}>
            <View style={styles.Shape}>
              <Image
                style={styles.fingers}
                source={require("../../assets/Gunting.png")}
              />
              <Text style={{fontSize:24}}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Rectangle}>
            <View style={styles.Shape}>
              <Image
                style={styles.fingers}
                source={require("../../assets/Kertas.png")}
              />
              <Text style={{fontSize:24}}>5</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonStart}
          onPress={() => navigation.navigate("RondeModal")}
        >
          <Text style={styles.textButton}>Mulai</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  Logo: {
    alignSelf: "center",
    width: 65,
    height: 65,
    marginTop: 60,
  },
  ContainerTitle: {
    marginVertical: 60,
    flex: 1,
    alignItems: "center",
  },
  circle: {
    alignContent: "center",
    bottom: 10,
    backgroundColor: "#FFB996",
    borderRadius: 100,
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "#FFB996",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: 250,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 120,
  },
  Rectangle: {
    width: 90,
    height: 90,
    backgroundColor: "#FFB996",
    margin: 5,
  },
  Shape: {
    width: 80,
    height: 80,
    backgroundColor: "#FFE4C9",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    margin: 4,
  },

  fingers: {
    width: 80,
    height: 80,
  },

  buttonStart: {
    width: 150,
    height: 60,
    backgroundColor: "#FFB996",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  textButton: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 24,
  },
});
