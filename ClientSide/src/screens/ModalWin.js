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
  import Leaderboard from "./Leaderboard";
  import { useNavigation } from '@react-navigation/native';

  export default function ModalWin({ onCloseModal }) {
    const navigation = useNavigation();

    const handleMainLagi = () => {
      navigation.navigate("Main", { showScreen: false });
      onCloseModal(); // Menutup modal setelah navigasi
    };
  

    return (
      <SafeAreaProvider style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            justifyContent: "center",
            color: "#1B1A55",
            fontWeight: "500",
            marginBottom:50
          }}
        >
          Hasil
        </Text>
        <View style={styles.box}>
          <Image style={styles.img} source={require("../../assets/Winner.png")} />
          <Text style={styles.text}>SELAMAT KAMU MENANG!!!</Text>
          <Text style={styles.text}>Nilai : </Text>
          <View style={{ alignItems: "center", justifyContent:"space-between", flexDirection: "row"}}>
            <TouchableOpacity
              style={styles.Botton}
              onPress={handleMainLagi}
            >
              <Text style={styles.textButton}>Main Lagi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.Botton, { backgroundColor: "#FFB996" }]}
              onPress={() => navigation.navigate("Leaderboard")}
            >
              <Text style={[styles.textButton, { color: "#858484" }]}>
                Berhenti
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      width: 300,
      height: 500,
      backgroundColor: "#FEF6E1",
      borderRadius: 20
    },
    img: {
      width: 150,
      height: 150,
      alignSelf: "center",
      marginVertical: 20
    },
    text: {
      fontWeight: "600",
      textAlign: "center",
      margin: 10,
      fontSize:24,
      fontWeight: "500"
    },
  
    textButton: {
      color: "#fff",
      fontWeight: "500",
      fontSize: 18,
    },
    Botton: {
      width: 130,
      height: 60,
      backgroundColor: "#F6B17A",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 5,
      marginTop:60,
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