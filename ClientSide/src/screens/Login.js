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
  Modal,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from "react";

export default function Login({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={"position"} enabled={true}>
          <View style={styles.imageCountainer}>
            <Image
              style={styles.mainImage}
              source={require("../../assets/loginimage.jpeg")}
            />
          </View>

          <View style={styles.deskripsiGroup}>
            <Text style={styles.title}>Login Dulu Sebelum Main!</Text>
            <Text style={styles.deskripsi}>
              Sign in with your data that you have entered during your
              registration
            </Text>

            <SafeAreaView style={styles.form}>
              <TextInput style={styles.input} placeholder="Username" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
              />
            </SafeAreaView>

            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.buttonLogin} onPress={""}>
                <Text style={styles.textButton}>Login</Text>
              </TouchableOpacity>
              {/* 
                <TouchableOpacity
                  style={styles.buttonSignup}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  <Text style={styles.textButton}>SignUp</Text>
                </TouchableOpacity> */}

              <TouchableOpacity
                style={styles.buttonSignup}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.textButton}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>

      {/* =========================Ini Modal SignUp ====================================*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.containerModal}>
          <KeyboardAvoidingView behavior={"position"} enabled={true}>
            <View style={styles.viewModal}>
              <Text style={styles.titleModal}>Register</Text>

              <View>
                <SafeAreaView style={styles.formModal}>
                  <TextInput style={styles.inputModal} placeholder="Email" />
                  <TextInput style={styles.inputModal} placeholder="Username" />
                  <TextInput
                    style={styles.inputModal}
                    placeholder="Password"
                    secureTextEntry={true}
                  />
                  <TextInput
                    style={styles.inputModal}
                    placeholder="Re-type Password"
                    secureTextEntry={true}
                  />
                </SafeAreaView>
              </View>
              <View style={styles.bottonGroup}>
                <TouchableOpacity style={styles.buttonModal} onPress={""}>
                  <Text style={styles.textButtonModal}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonModal}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textButtonModal}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-arouncd",
  },
  containerModal: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  viewModal: {
    backgroundColor: "#FFB996",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  form: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
  formModal: {
    paddingHorizontal: 10,
    marginTop: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  inputModal: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    width: 250,
  },
  imageCountainer: {
    width: "100%",
    alignContent: "center",
    paddingTop: 80,
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
  titleModal: {
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
    marginTop: 10,
    fontSize: 16,
    marginHorizontal: 40,
  },
  buttonGroup: {
    marginTop: 30,
  },
  textButton: {
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
  },
  textButtonModal: {
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonSignup: {
    padding: 15,
    paddingHorizontal: 40,
    borderWidth: 0,
    margin: 10,
    borderRadius: 16,
    backgroundColor: "#FFE4C9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonModal: {
    padding: 15,
    paddingHorizontal: 40,
    borderWidth: 0,
    margin: 10,
    borderRadius: 16,
    backgroundColor: "#F6B17A",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
