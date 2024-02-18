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
  Alert,
  Platform,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";

// const Background = require("../../assets/bilal.jpeg");

export default function Login({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUserName] = useState(" ");
  const [userNameVerify, setUserNameVerify] = useState(false);
  const [email, setEmail] = useState(" ");
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState(" ");
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(" ");
  const [passwordVerifyConfirm, setPasswordVerifyConfirm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const handleRegister = () => {
    const userData = {
      username: username,
      email: email,
      password: password,
    };
    if (userNameVerify && emailVerify && passwordVerify) {
      axios
        .post("https://a77f-114-10-24-1.ngrok-free.app/registration", userData)
        .then((res) => {
          console.log(res.data);
          if (res.data.status == "ok") {
            Alert.alert("Register Done!");
            setModalVisible(false);
          } else {
            Alert.alert(JSON.stringify(res.data));
          }
        })

        .catch((e) => console.log(e));
    } else {
      Alert.alert("Lengkapi data anda!");
    }
  };

  const handleUserName = (n) => {
    console.log(n.nativeEvent.text);
    const userNameVar = n.nativeEvent.text;
    setUserName(userNameVar);
    setUserNameVerify(false);
    if (userNameVar.length > 4) {
      setUserNameVerify(true);
    }
  };

  const handleEmail = (e) => {
    console.log(e.nativeEvent.text);
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{1,}$/.test(emailVar)) {
      setEmail(emailVar);
      setEmailVerify(true);
    }
  };

  const handlePassword = (p) => {
    console.log(p.nativeEvent.text);
    const passwordVar = p.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    // if (/(?=.*\d)(?=.*[a-z])(?=.*{A-Z}).{6,}/.test(passwordVar))
    if (passwordVar.length > 4) {
      setPassword(passwordVar);
      setPasswordVerify(true);
    }
  };

  const handlePasswordConfirm = (p1) => {
    console.log(p1.nativeEvent.text);
    const passwordVarConfirm = p1.nativeEvent.text;
    setPasswordConfirm(passwordVarConfirm);
    setPasswordVerifyConfirm(true);
    // if (password == passwordConfirm) {
    //   setPasswordConfirm(passwordVarConfirm);
    //   setPasswordVerifyConfirm(true);
    // }
  };

  const toggleShowPasswordLogin = () => {
    setShowPassword(!showPassword);
    setPasswordVerify(true);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    setPasswordVerify(true);
  };

  const handleLogin = () => {
    const userData = {
      username: username,
      password: password,
    };
    axios
      .post("https://a77f-114-10-24-1.ngrok-free.app/login", userData)
      .then((res) => {
        const { token, email } = res.data;
        AsyncStorage.setItem("token", token);
        AsyncStorage.setItem("email", email);
        navigation.navigate("Leaderboard", {token, email});
        if (res.data.status == "ok") {
          Alert.alert("Selamat Bermain!");
        } else {
          Alert.alert(JSON.stringify(res.data));
        }
      })
      .catch((error) => {
        // console.error("Error Login", error);
        Alert.alert("Coba Lagi!");
      });
  };

  return (
    <ImageBackground resizeMode="cover" style={styles.background}>
      <SafeAreaView style={styles.container}>
        <SafeAreaProvider>
          <ScrollView>
            <View style={styles.imageContainer}>
              <Image
                style={styles.mainImage}
                source={require("../../assets/loginimage.jpeg")}
              />
            </View>
            <KeyboardAvoidingView behavior={"position"} enabled={true}>
              <View style={styles.deskripsiGroup}>
                <View>
                  <Text style={styles.title}>Masuk!</Text>
                  <Text style={styles.deskripsi}>
                    Masukan data kamu secara benar ya!
                  </Text>
                </View>

                <SafeAreaView style={styles.form}>
                  <View>
                    <View style={styles.inputBoxLogin}>
                      <TextInput
                        style={styles.input}
                        placeholder="Nama Pengguna"
                        onChange={(n) => handleUserName(n)}
                      />
                    </View>
                  </View>

                  <View>
                    <View style={styles.inputBoxLogin}>
                      <TextInput
                        style={styles.input}
                        placeholder="Kata Sandi"
                        secureTextEntry={!showPassword}
                        onChange={(p) => handlePassword(p)}
                      />
                      <MaterialCommunityIcons
                        name={!showPassword ? "eye-off" : "eye"}
                        size={24}
                        color="#aaa"
                        onPress={toggleShowPasswordLogin}
                        style={styles.icon}
                      />
                    </View>
                  </View>
                </SafeAreaView>

                <View style={styles.buttonGroup}>
                  <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={handleLogin}
                  >
                    <Text style={styles.textButton}>Masuk</Text>
                  </TouchableOpacity>
                  {/* 
                <TouchableOpacity
                  style={styles.buttonSignup}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  <Text style={styles.textButton}>SignUp</Text>
                </TouchableOpacity> */}
                  <View style={styles.buttonSignup}>
                    <Text style={{ fontFamily: "Roboto-Regular" }}>
                      Belum punya akun?
                    </Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                      <Text style={styles.textButtonSignup}>Daftar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>

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
                <KeyboardAvoidingView
                  behavior={"position"}
                  enabled={true}
                  keyboardVerticalOffset={Platform.OS === "ios" ? -200 : 0}
                >
                  <ScrollView>
                    <View style={styles.viewModal}>
                      <View style={styles.modalCard}>
                        <Text style={styles.titleModal}>Registrasi</Text>
                        <View>
                          <SafeAreaView style={styles.formModal}>
                            <View>
                              <View style={styles.inputBox}>
                                <TextInput
                                  placeholder="Nama Pengguna"
                                  onChange={(n) => handleUserName(n)}
                                  style={styles.inputModal}
                                />
                              </View>
                              {username.length == 0 ? (
                                username.length > 4
                              ) : userNameVerify ? null : (
                                <Text style={styles.inputAllertFalse}>
                                  Minimal 4 karakter!{" "}
                                </Text>
                              )}
                            </View>

                            <View>
                              <View style={styles.inputBox}>
                                <TextInput
                                  placeholder="Email"
                                  onChange={(e) => handleEmail(e)}
                                  style={styles.inputModal}
                                />
                              </View>
                              {email.length == 0 ? (
                                email.length > 1
                              ) : emailVerify ? null : (
                                <Text style={styles.inputAllertFalse}>
                                  Masukkan email yang benar!{" "}
                                </Text>
                              )}
                            </View>

                            <View>
                              <View style={styles.inputBox}>
                                <TextInput
                                  placeholder="Kata Sandi"
                                  secureTextEntry={!showPassword}
                                  onChange={(p) => handlePassword(p)}
                                  style={styles.inputModalPassword}
                                />

                                <MaterialCommunityIcons
                                  name={showPassword ? "eye-off" : "eye"}
                                  size={24}
                                  color="#aaa"
                                  onPress={toggleShowPassword}
                                  style={styles.icon}
                                />
                              </View>

                              {password.length == 0 ? (
                                password.length > 1
                              ) : passwordVerify ? null : (
                                <Text style={styles.inputAllertFalsePassword}>
                                  Minimal 4 karakter!{" "}
                                </Text>
                              )}
                            </View>

                            <View>
                              <View style={styles.inputBox}>
                                <TextInput
                                  placeholder="Kata Sandi"
                                  secureTextEntry={!showPassword}
                                  onChange={(p1) => handlePasswordConfirm(p1)}
                                  style={styles.inputModalPassword}
                                />
                                <MaterialCommunityIcons
                                  name={showPassword ? "eye-off" : "eye"}
                                  size={24}
                                  color="#aaa"
                                  onPress={toggleShowPassword}
                                  style={styles.icon}
                                />
                              </View>
                              {passwordConfirm == password ? null : (
                                <Text style={styles.inputAllertFalsePassword}>
                                  Kata sandi tidak sama!{" "}
                                </Text>
                              )}
                            </View>
                          </SafeAreaView>
                        </View>
                        <View style={styles.buttonGroup}>
                          <TouchableOpacity
                            style={styles.buttonModal}
                            onPress={() => handleRegister()}
                          >
                            <Text style={styles.textButtonModal}>Daftar</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.buttonModalClose}
                            onPress={() => setModalVisible(!modalVisible)}
                          >
                            <Text style={styles.textButtonModalCancel}>
                              Batal
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </KeyboardAvoidingView>
              </View>
            </Modal>

            {/* =========================Ini Modal SignUp ====================================*/}
          </ScrollView>
        </SafeAreaProvider>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#000",
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
    flexDirection: "column",
    paddingHorizontal: 30,
    marginTop: 30,
    // backgroundColor: "#FFE4C9",
    justifyContent: "center",
    alignSelf: "center",
  },
  formModal: {
    marginTop: 30,
    alignItems: "center",
    // backgroundColor: "#fff",
    flexDirection: "column,",
    // paddingHorizontal: 10,
  },
  input: {
    height: 40,
    // margin: 12,
    // borderBottomWidth: 1,
    // padding: 10,
    width: "90%",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#fff",
    justifyContent: "center",
    // marginLeft: 14,
    marginVertical: 14,
    padding: 10,
    paddingHorizontal: 20,
    height: 40,
    width: 250,
    backgroundColor: "#FFE4C9",
  },
  inputBoxLogin: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
    paddingHorizontal: 10,
    height: 40,
    width: 250,
    // backgroundColor: "#FFE4C9",
    borderBottomWidth: 1,
  },
  inputModal: {
    margin: 14,
    marginVertical: 14,
    padding: 10,
    height: 40,
    width: 250,
    backgroundColor: "#FFE4C9",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  inputModalPassword: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 220,
    padding: 14,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    // backgroundColor: "#fff",
  },
  inputAllertFalse: {
    color: "red",
    fontSize: 10,
    marginLeft: 10,
    marginTop: -10,
    fontFamily: "Roboto-Light",
  },
  inputAllertFalsePassword: {
    color: "red",
    fontSize: 10,
    marginLeft: 10,
    marginTop: -10,
    fontFamily: "Roboto-Light",
  },
  icon: {
    // backgroundColor: "#FFE4C9",
    // height: 40,
    marginRight: 10,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    padding: 30,
    // backgroundColor: "#000",
  },
  mainImage: {
    alignSelf: "center",
    width: 250,
    height: 250,
  },
  title: {
    fontFamily: "Roboto-Black",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
  },
  titleModal: {
    fontFamily: "Roboto-Black",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  card: {
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 6,
    // shadowOpacity: 0.26,
    // backgroundColor: "#fff",
    flex: 1,
    // marginVertical: 80,
    borderRadius: 40,
    width: 400,
    height: 800,
    justifyContent: "center",
    alignItems: "center",
  },
  deskripsiGroup: {
    // marginTop: -100,
    padding: 24,
    width: "100%",
    // height: 150,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  deskripsi: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontWeight: "300",
    marginTop: 20,
    fontSize: 16,
    marginHorizontal: 40,
  },
  buttonGroup: {
    marginTop: 30,
    // backgroundColor: "#000",
    paddingHorizontal: 30,
  },
  textButton: {
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
  textButtonSignup: {
    fontFamily: "Roboto-Black",
    fontWeight: "700",
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    paddingLeft: 6,
  },
  textButtonModal: {
    fontFamily: "Roboto-Medium",
    fontWeight: "600",
    fontSize: 20,
    color: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    textAlign: "center",
  },
  textButtonModalCancel: {
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
    paddingTop: 30,
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
  buttonModalClose: {
    padding: 12,
    paddingHorizontal: 40,
    margin: 10,
    borderRadius: 40,
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
});
