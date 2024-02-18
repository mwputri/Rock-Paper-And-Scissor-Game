import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import InsetShadow from "react-native-inset-shadow";
import { useState } from "react";
import RondeModal from "./RondeModal";
import ModalWin from "./ModalWin";
import LoseModal from "./LoseModal";

export default function Main({ navigation }) {
  const [isType, setIsType] = useState("");

  const handlerHands = (type) => {
    setIsType(type);
  };

  const images = {
    Batu: require(`../../assets/Batu.png`),
    Gunting: require(`../../assets/Gunting.png`),
    Kertas: require(`../../assets/Kertas.png`),
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.Logo} source={require("../../assets/Logo.png")} />
        <View style={styles.BattleTitle}>
          <Text style={{ Color: "#1B1A55", fontSize: 24, fontWeight: "bold" }}>
            PERTANDINGAN
          </Text>
        </View>
        <SafeAreaView
          style={[
            styles.Games,
            { marginTop: 40, alignItems: "center", flexDirection: "row" },
          ]}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 18, marginLeft: 110 }}>Aku</Text>
            <View style={[styles.Box, { marginLeft: 70 }]}>
              <InsetShadow>
                <Image
                  style={[styles.fingers, { marginTop: 18, marginLeft: 15 }]}
                  source={images[isType]}
                />
              </InsetShadow>
            </View>
            <View style={[styles.Score, { marginLeft: 85 }]}></View>
          </View>
          <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 50 }}>
            VS
          </Text>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 18, marginLeft: 60 }}>Komputer</Text>
            <View style={[styles.Box, { marginLeft: 30 }]}>
              <InsetShadow />
            </View>
            <View style={styles.Score}></View>
          </View>
        </SafeAreaView>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 50 }}>
          <TouchableOpacity
            style={styles.boxbgk}
            onPress={() => handlerHands("Batu")}
          >
            <View style={styles.boxbgk2}>
              <Image
                style={styles.fingers}
                source={require("../../assets/Batu.png")}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 18,
                  color: "#1B1A55",
                  fontWeight: "400",
                }}
              >
                Batu
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxbgk}
            onPress={() => handlerHands("Kertas")}
          >
            <View style={styles.boxbgk2}>
              <Image
                style={styles.fingers}
                source={require("../../assets/Kertas.png")}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 18,
                  color: "#1B1A55",
                  fontWeight: "400",
                }}
              >
                Kertas
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxbgk}
            onPress={() => handlerHands("Gunting")}
          >
            <View style={styles.boxbgk2}>
              <Image
                style={styles.fingers}
                source={require("../../assets/Gunting.png")}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 18,
                  color: "#1B1A55",
                  fontWeight: "400",
                }}
              >
                Gunting
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.ButtonBerhenti}
          onPress={() => navigation.navigate("RondeModal")}
        >
          <Text style={styles.textButton}>Berhenti</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ModalWin")}>
          <Text style={styles.ButtonBerhenti}>Tes Win</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("LoseModal")}>
          <Text style={styles.ButtonBerhenti}>Tes Lose</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  Logo: {
    alignSelf: "center",
    width: 65,
    height: 65,
    marginTop: 60,
  },
  BattleTitle: {
    width: 300,
    height: 70,
    backgroundColor: "#FFB996",
    marginTop: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  Games: {
    flexDirection: "row",
  },
  Box: {
    width: 120,
    height: 120,
    backgroundColor: "#FEF6E1",
    marginTop: 10,
  },

  Score: {
    width: 80,
    height: 40,
    backgroundColor: "#F6B17A",
    borderRadius: 30,
    marginHorizontal: 70,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
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
    borderRadius: 40,
    alignItems: "center",
    margin: 4,
  },
  fingers: {
    width: 80,
    height: 80,
  },
  ButtonBerhenti: {
    width: 200,
    height: 60,
    backgroundColor: "#FFE4C9",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 50,
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
    color: "#858484",
    fontWeight: "600",
    fontSize: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
