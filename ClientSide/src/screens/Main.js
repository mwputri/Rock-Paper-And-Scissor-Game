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
  import InsetShadow from "react-native-inset-shadow";
  
  export default function Main() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Image style={styles.Logo} source={require("../../assets/Logo.png")} />
          <View style={styles.BattleTitle}>
            <Text style={{ Color: "#1B1A55", fontSize: 24, fontWeight: "bold" }}>PERTANDINGAN</Text>
          </View>
          <View style={styles.Games}>
            <View style={styles.Box}>
              <InsetShadow />
            </View>
            <Text style={{ fontSize: 30, marginTop: 90,fontWeight: "bold"}}>VS</Text>
            <View style={styles.Box}>
              <InsetShadow />
            </View>
          </View>
          <View style={styles.Score}>
          <View style={styles.Me}></View>
          <View style={styles.Me}></View>
        </View>
        <View style={{ flex: 1, flexDirection: "row", marginTop:100}}>
        <View style={styles.boxbgk}>
          <View style={styles.boxbgk2}>
            <Image
              style={styles.fingers}
              source={require("../../assets/Batu.png")}
            />
            <Text style={{ marginTop: 10, fontSize:18, color:"#1B1A55",fontWeight: "300"}}>Batu</Text>
          </View>
        </View>
        <View style={styles.boxbgk}>
          <View style={styles.boxbgk2}>
            <Image
              style={styles.fingers}
              source={require("../../assets/Kertas.png")}
            />
            <Text style={{ marginTop: 10, fontSize:18, color:"#1B1A55",fontWeight: "300"}}>Gunting</Text>
          </View>
        </View>
  
        <View style={styles.boxbgk}>
  
          <View style={styles.boxbgk2}>
            <Image
              style={styles.fingers}
              source={require("../../assets/Gunting.png")}
            />
            <Text style={{ marginTop: 10, fontSize:18, color:"#1B1A55",fontWeight: "300"}}>Guntung</Text>
          </View>
        </View>
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
      marginHorizontal: 30,
      marginTop: 40,
    },
    Score : {
      flexDirection: "row",
    },
    Me: {
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
      borderRadius:40,
      alignItems: "center",
      margin: 4,
    },
  
    fingers: {
      width: 80,
      height: 80,
    },
  });