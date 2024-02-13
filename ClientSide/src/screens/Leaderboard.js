import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, Pressable, TouchableOpacity, Button, Platform } from 'react-native';

const data = [
  {
    nama: 'Satria',
    score: '123',
  },
  {
    nama: 'Arva',
    score: '124',
  },
  {
    nama: 'Ali',
    score: '125',
  }
];


const Leaderboard = ({ navigation }) => {
    const sortedData = data.sort((a, b) => parseInt(b.score) - parseInt(a.score));

    const Item = ({ data, index }) => (
        <View style={styles.item}>
          <Text style={[styles.itemText,{marginRight:10}]}>{index+1}</Text>
          <Text style={[styles.itemText,{marginRight:160}]}>{data.nama}</Text>
          <Text style={styles.itemText}>{data.score}</Text>
        </View>
      );  

    return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/Leaderboard.png')} style={styles.image} />
        <Text style={styles.title}>LEADERBOARD</Text>
        
        <View style={styles.header}>
          <Text style={[styles.headerText, {marginRight:200}]}>Name</Text>
          <Text style={styles.headerText}>Score</Text>
        </View>

        <FlatList
          data={sortedData}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={item => item.nama}
        />

      </View>
      <TouchableOpacity
        style={[styles.button, {elevation:5}]}
        onPress={() => {''}}
      >
        <Text style={ styles.buttonText }>Let's Play</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 121,
    width: 120,
    marginTop: 142,
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
