import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LogoutButton = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Clear JWT token from AsyncStorage
      // await AsyncStorage.removeItem('jwtToken');
      await AsyncStorage.removeItem('token');
      // Navigate to login page
      // navigation.navigate('Login');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error logging out:', error);
      Alert.alert('Error', 'An error occurred while logging out.');
    }
  };

  return (
    <TouchableOpacity
      onPress={handleLogout}
      style={{
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white' }}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
