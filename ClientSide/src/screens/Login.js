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
  ImageBackground,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from "react";
import Leaderboard from "./Leaderboard";

const Background = require("../../assets/bilal.jpeg");

export default function Login({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground resizeMode="cover" style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageCountainer}>
            <Image
              style={styles.mainImage}
              source={require("../../assets/loginimage.jpeg")}
            />
          </View>
          <KeyboardAvoidingView behavior={"position"} enabled={true}>
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
                <TouchableOpacity
                  style={styles.buttonLogin}
                  onPress={() => navigation.navigate("Leaderboard")}
                >
                  <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                {/* 
                <TouchableOpacity
                  style={styles.buttonSignup}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  <Text style={styles.textButton}>SignUp</Text>
                </TouchableOpacity> */}
                <View style={styles.buttonSignup}>
                  <Text>Don't have an account?</Text>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={styles.textButtonSignup}>Register</Text>
                  </TouchableOpacity>
                </View>
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
              <ScrollView>
                <View style={styles.viewModal}>
                  <View style={styles.modalCard}>
                    <Text style={styles.titleModal}>Register</Text>
                    <View>
                      <SafeAreaView style={styles.formModal}>
                        <TextInput
                          style={styles.inputModal}
                          placeholder="Email"
                        />
                        <TextInput
                          style={styles.inputModal}
                          placeholder="Username"
                        />
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
                    <View style={styles.buttonGroup}>
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
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewModal: {
    justifyContent: "center",
    alignSelf: "center",
    width: 400,
    blur: 10,
  },
  modalCard: {
    backgroundColor: "#FFB996",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "50%",
    borderRadius: 40,
    padding: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  form: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
  formModal: {
    marginTop: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  inputModal: {
    margin: 12,
    padding: 10,
    height: 40,
    width: 250,
    backgroundColor: "#FFE4C9",
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
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },

  deskripsiGroup: {
    marginBottom: -40,
    padding: 24,
    width: "100%",
    height: 150,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 40,
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
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  textButtonSignup: {
    fontWeight: "700",
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    paddingLeft: 6,
  },
  textButtonModal: {
    fontWeight: "600",
    fontSize: 20,
    color: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    textAlign: "center",
  },
  buttonLogin: {
    padding: 15,
    paddingHorizontal: 40,
    borderWidth: 0,
    margin: 10,
    borderRadius: 40,
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
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    // paddingVertical: 40,
    // borderWidth: 0,
    // margin: 10,
    // borderRadius: 40,
    // backgroundColor: "#FFE4C9",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  buttonModal: {
    padding: 12,
    paddingHorizontal: 40,
    margin: 10,
    borderRadius: 40,
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
