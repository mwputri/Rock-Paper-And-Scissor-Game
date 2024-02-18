import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import LogoutButton from "../components/LogoutButton";
import { useFonts } from "expo-font";

const Leaderboard = ({ route }) => {
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
  const token = route.params.token;
  const email = route.params.email;

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://a77f-114-10-24-1.ngrok-free.app/leaderboards");
      const sorted = response.data.sort(
        (a, b) => parseInt(b.totalScore) - parseInt(a.totalScore)
      );
      setUserData(sorted);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(email);
  console.log(token);

  const navigation = useNavigation();

  const Item = ({ data, index }) => (
    <View style={styles.item}>
      <Text style={[styles.itemText, { marginRight: 10 }]}>
        {index === 0 ? (
          <Image
            source={require("../../assets/Winner.png")}
            style={styles.winnerImage}
          />
        ) : (
          index + 1
        )}
      </Text>
      <Text style={[styles.itemText, { marginRight: 120 }]}>{data.name}</Text>
      <Text style={styles.itemText}>{data.totalScore}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaProvider>
        {/* <ImageBackground resizeMode="cover" style={styles.background}> */}
        {/* <View>
            <TouchableOpacity
              style={[styles.profileButton, { alignItems: "flex-end" }]}
              onPress={() => navigation.navigate("Profile")}
            >
              <Image
                source={require("../assets/Profile.png")}
                style={styles.profileIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => navigation.navigate("Profile")}
            >
              <Text
                style={[
                  styles.buttonText,
                  { fontWeight: "normal", fontSize: "14" },
                ]}
              >
                Logout
              </Text>
            </TouchableOpacity>
            <LogoutButton />
          </View> */}

        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/Leaderboard.png")}
            style={styles.mainImage}
          />
        </View>

        <View style={styles.deskripsiGroup}>
          <Text style={styles.title}>Papan Peringkat</Text>
        </View>

        <View>
          <View style={styles.listScore}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Name</Text>
              <Text style={styles.headerText}>Score</Text>
            </View> 

            <ScrollView style={styles.scrollView}>
              {userData.map((player, index) => (
                <View key={index} style={styles.playerContainer}>
                  <Image
                    source={require("../../assets/Profile.png")}
                    style={styles.winnerImage}
                  />
                  <Text style={styles.playerName}>{player.name}</Text>
                  <Text style={styles.playerScore}>{player.totalScore}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* <FlatList
          data={userData}
          renderItem={({ item, index }) => <Item data={item} index={index} />}
          keyExtractor={item => item._id}
        />         */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.button, { elevation: 5 }]}
              onPress={() => {
                "";
              }}
            >
              <Text
                style={styles.buttonText}
                onPress={() => navigation.navigate("RondeModal", {token,email})}
              >
                Ayo Main!
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonKeluar}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.textButtonKeluar}>Keluar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ImageBackground> */}
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    // backgroundColor: "#fff",
    // flexDirection: "column",
    // alignItems: "center",
    // // justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
  },
  imageContainer: {
    // flex: 1,
    // width: "100%",
    alignSelf: "center",
    padding: 10,
    // backgroundColor: "#000",
  },
  mainImage: {
    alignSelf: "center",
    width: 100,
    height: 100,
  },
  deskripsiGroup: {
    marginBottom: 10,
    padding: 10,
    width: "100%",
    // height: 150,
    // flex: 3,
    flexDirection: "column",
    // backgroundColor: "#FFE4C9",
    alignSelf: "center",
  },
  title: {
    fontFamily: "Roboto-Black",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    // marginTop: 10,
  },

  listScore: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    // marginTop: 200,
    // backgroundColor: "#000",
    // paddingHorizontal: 20,
    paddingHorizontal: 40,
    width: 400,
    maxHeight: "67%",
  },
  scrollView: {
    height: 20,
    alignSelf: "center",
    width: "100%",
    // backgroundColor: "#000",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
    // backgroundColor: "#000",
  },
  headerText: {
    fontFamily: "Roboto-Bold",

    fontSize: 18,
    color: "#333",
    paddingHorizontal: 80,
  },
  playerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    paddingHorizontal: 30,
    backgroundColor: "#FFE4C9",
    borderRadius: 40,
  },
  playerName: {
    fontSize: 16,
    fontFamily: "Roboto-BoldItalic",
  },
  playerScore: {
    fontSize: 18,
    fontFamily: "Roboto-Black",
  },
  logoutButton: {
    width: 80,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    //position:'absolute',
    top: 10,
    right: 10,
  },
  profileIcon: {
    // width: 30,
    // height: 30,
  },
  image: {
    // height: 121,
    // width: 120,
    // marginTop: 142,
  },
  winnerImage: {
    height: 25,
    width: 25,
    // alignItems:'flex-start',
  },

  item: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // paddingHorizontal: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
    // paddingVertical: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  buttonGroup: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    // backgroundColor: "#000",
  },
  button: {
    width: 162,
    height: 58,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#F6B17A",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  buttonText: {
    fontFamily: "Roboto-Medium",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  buttonKeluar: {
    width: 162,
    height: 58,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FFE4C9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  textButtonKeluar: {
    fontFamily: "Roboto-Medium",
    fontWeight: "600",
    fontSize: 20,
    color: "#858484",
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 4 },
    // shadowRadius: 4,
    // shadowOpacity: 0.25,
    textAlign: "center",
  },
});

export default Leaderboard;
