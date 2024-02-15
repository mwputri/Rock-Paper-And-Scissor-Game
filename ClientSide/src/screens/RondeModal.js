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

export default function RondeModal({ navigation }) {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <View style={styles.imageCountainer}>
          <Image
            style={styles.mainImage}
            source={require("../../assets/Logo.png")}
          />
          <LinearGradient
            // Button Linear Gradient
            colors={["#FFB996", "#ffff"]}
            style={styles.circle}
          >
            <Text style={styles.string}>Round</Text>
          </LinearGradient>

          <LinearGradient
            // Button Linear Gradient
            colors={["#FFB996", "#ffff"]}
            style={styles.box}
          >
            <Text style={styles.string2}>
              Please select a round to play Bakegu:
            </Text>
          </LinearGradient>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.boxbgk}>
            <View style={styles.boxbgk2}>
              <Image
                style={styles.fingers}
                source={require("../../assets/Batu.png")}
              />
            </View>
          </View>
          <View style={styles.boxbgk}>
            <View style={styles.boxbgk2}>
              <Image
                style={styles.fingers}
                source={require("../../assets/Gunting.png")}
              />
            </View>
          </View>

          <View style={styles.boxbgk}>

            <View style={styles.boxbgk2}>
              <Image
                style={styles.fingers}
                source={require("../../assets/Kertas.png")}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonStart}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textButton}>Start</Text>
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
  imageCountainer: {
    width: "100%",
    alignContent: "center",
    flex: 1,
    paddingTop: 80,
  },
  mainImage: {
    alignSelf: "center",
    width: "20%",
    height: "20%",
  },
  circle: {
    alignContent: "center",
    bottom: 10,
    left: 5,
    backgroundColor: "#FFB996",
    borderRadius: 100,
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    alignContent: "center",
    bottom: 10,
    left: 5,
    backgroundColor: "#FFB996",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    width: 200,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  string: {
    color: "#1B1A55",
    fontWeight: "600",
    fontSize: 32,
    marginTop: -1,
    marginLeft: -1,
  },
  string2: {
    color: "#1B1A55",
    textAlign: "center",
    fontSize: 12,
    marginTop: -1,
    marginLeft: -1,
  },
  boxbgk: {
    width: 90,
    height: 90,
    backgroundColor: "#FFB996",
    margin: 5,
  },
  boxbgk2: {
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
    borderRadius: 20,
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
