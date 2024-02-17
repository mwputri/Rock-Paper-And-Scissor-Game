import React, { useState, useEffect }  from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import LogoutButton from '../components/LogoutButton';

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
            {index === 0 ? <Image source={require('../../assets/Winner.png')} style={styles.winnerImage} /> 
            : index + 1}
            </Text>
          <Text style={[styles.itemText,{marginRight:120}]}>{data.name}</Text>
          <Text style={styles.itemText}>{data.totalScore}</Text>
        </View>
      );  

    return (
    <ScrollView >
      <View>
 {/* <TouchableOpacity style={[styles.profileButton, {alignItems:'flex-end'}]} onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../assets/Profile.png')} style={styles.profileIcon} />
      </TouchableOpacity> */}
      {/* <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Profile')}>
        <Text style={ [styles.buttonText, {fontWeight:'normal', fontSize:'14'}] }>Logout</Text>
      </TouchableOpacity> */}
      <LogoutButton />
      </View>
      
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../assets/Leaderboard.png')} style={styles.image} />

        <Text style={styles.title}>LEADERBOARD</Text>


        <View style={styles.header}>
          <Text style={[styles.headerText, {marginRight:35}]}>   </Text>
          <Text style={[styles.headerText, {marginRight:140}]}>Name</Text>
          <Text style={styles.headerText}>Score</Text>
        </View>

        <ScrollView style={styles.scrollView}>
        {userData.map((player, index) => (
          <View key={index} style={styles.playerContainer}>
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.playerScore}>{player.totalScore}</Text>
          </View>
        ))}
      </ScrollView>

        {/* <FlatList
          data={userData}
          renderItem={({ item, index }) => <Item data={item} index={index} />}
          keyExtractor={item => item._id}
        />         */}
      </View>
      
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={[styles.button, {elevation:5}]}
        onPress={() => {''}}
      >
        <Text style={ styles.buttonText } onPress={() => navigation.navigate('Round')}>Let's Play</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '80%',
    maxHeight: '50%',
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
  },
  playerName: {
    fontSize: 18,
  },
  playerScore: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    width:80,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    //position:'absolute',
    top: 10,
    right:10,
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
  winnerImage:{
    height: 25,
    width: 25,
    // alignItems:'flex-start',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginTop:20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
    marginTop:20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: 162,
    height: 58,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor:'#F6B17A',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  buttonText:{
    // fontFamily:'Roboto',
    color:'#FFF',
    fontSize:20,
    fontWeight:700,
  }
});

export default Leaderboard;