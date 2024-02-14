import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";

export default function SignUp() {
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.deskripsiGroup}>
            <Text style={styles.title}>Daftar Dulu Yu!</Text>
            <Text style={styles.deskripsi}>
              Sign in with your data that you have entered during your
              registration
            </Text>
          </View>

          <SafeAreaView style={styles.form}>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Username" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Re-type Password"
              secureTextEntry={true}
            />
          </SafeAreaView>

          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.buttonLogin} onPress={""}>
              <Text style={styles.textButton}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  form: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    width: 250,
    justifyContent: "center",
  },
  imageCountainer: {
    width: "100%",
    alignContent: "center",
    paddingTop: 10,
  },
  mainImage: {
    alignSelf: "center",
    width: 250,
    height: 250,
  },
  title: {
    fontFamily: "Helvetica",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  deskripsiGroup: {
    padding: 24,
    width: "100%",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  deskripsi: {
    textAlign: "center",
    fontWeight: "300",
    marginTop: 18,
    fontSize: 16,
    marginHorizontal: 60,
  },
  buttonGroup: {
    marginTop: 80,
    padding: 30,
  },
  textButton: {
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
  },
  buttonLogin: {
    padding: 15,
    paddingHorizontal: 40,
    borderWidth: 0,
    margin: 10,
    borderRadius: 16,
    backgroundColor: "#FFB996",
  },
  buttonSignup: {
    padding: 15,
    paddingHorizontal: 40,
    borderWidth: 0,
    margin: 10,
    borderRadius: 16,
    backgroundColor: "#FFE4C9",
  },
});
