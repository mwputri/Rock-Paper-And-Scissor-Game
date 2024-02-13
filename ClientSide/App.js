import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <View>
        <Image />
      </View>
      <View>
        <Text style={styles.title}>
          Welcome to BAKEGU
        </Text>
        <Text style={styles.body}>
          Ayo kita main!
        </Text>
      </View>
      <Button title={"Login"} onPress={''}/>
      <Button title={"Sign Up"} onPress={''}/>
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontFamily: 'Arial',
    fontStyle: 'Medium',
    
  }
});
