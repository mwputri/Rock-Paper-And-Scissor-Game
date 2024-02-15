import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Leaderboard = ({ }) => {
    const [userData, setUserData] = useState([]);

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/leaderboards');
    const userData = response.data.sort((a, b) => parseInt(b.totalScore) - parseInt(a.totalScore));
    setUserData(userData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
    const navigation = useNavigation();

    const Item = ({ data, index }) => (
        <View style={styles.item}>
          <Text style={[styles.itemText,{marginRight:10}]}>
            {index === 0 ? <Image source={require('../assets/Winner.png')} style={styles.winnerImage} /> 
            : index + 1}
            </Text>
          <Text style={[styles.itemText,{marginRight:160}]}>{data.nama}</Text>
          <Text style={styles.itemText}>{data.score}</Text>
        </View>
      );  

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={[styles.profileButton, { alignItems: "flex-end" }]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={require("../../assets/Profile.png")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../../assets/Leaderboard.png")}
            style={styles.image}
          />
          <Text style={styles.title}>LEADERBOARD</Text>

          <FlatList
            data={sortedData}
            renderItem={({ item, index }) => <Item data={item} index={index} />}
            keyExtractor={(item) => item.nama}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={[styles.button, { elevation: 5 }]}
            onPress={() => {
              "";
            }}
          >
            <Text style={styles.buttonText}>Let's Play</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  profileButton: {
    // position: 'absolute',
    paddingTop: 60,
    paddingRight: 20,
    padding: 10,
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
  image: {
    height: 121,
    width: 120,
    marginTop: 142,
  },
  winnerImage: {
    height: 25,
    width: 25,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    width: 162,
    height: 58,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
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
    // fontFamily:'Roboto',
    color: "#FFF",
    fontSize: 20,
    fontWeight: 700,
  },
});

export default Leaderboard;
