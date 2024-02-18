import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Modal,
  Screen
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import InsetShadow from "react-native-inset-shadow";
import { useState } from "react";
import RondeModal from "./RondeModal";
import LoseModal from "./LoseModal";
import ModalWin from "./ModalWin";
import axios from "axios";

const choices = [
  {
    name: 'rock',
    uri:  require(`../../assets/Batu.png`)
  },
  {
    name: 'paper',
    uri:  require(`../../assets/Kertas.png`)
  },
  {
    name: 'scissors',
    uri:  require(`../../assets/Gunting.png`)
   
  },
];

export default function Main({ route }) {
  const [showScreen, setShowScreen] = useState(route.params.showScreen);

  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  
  const [round, setRound] = useState(1);
  
  const [playerWins, setPlayerWins] = useState(0);
  const [compWins, setCompWins] = useState(0);

  const [showLoseScreen, setshowLoseScreen] = useState(showScreen);
  const [showWinScreen, setshowWinScreen] = useState(showScreen);

  const generateComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const playRound = (playerChoice) => {
    const computerChoice = generateComputerChoice();
    const newPlayerChoice = choices.find(choice => choice.name === playerChoice);

    setPlayerChoice(newPlayerChoice);
    setComputerChoice(computerChoice);

    if (playerChoice === computerChoice.name) {
    } else if (
      (playerChoice === 'rock' && computerChoice.name === 'scissors') ||
      (playerChoice === 'paper' && computerChoice.name === 'rock') ||
      (playerChoice === 'scissors' && computerChoice.name === 'paper')
    ) {
      setPlayerWins(playerWins + 1);
      setshowWinScreen(true);
    } else {
      setCompWins(compWins + 1);
      setshowLoseScreen(true);
    }

    if (round < 1) {
      setRound(round + 1);
    }else{
      setRound(1);
    }  
  };

  const ChoiceCard = ({ player, choice: { name, uri }}) => {
  
    return (
      <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 18, marginLeft: 75, fontWeight: "bold" }}>{player}</Text>
            <View style={styles.Box}>
              <InsetShadow>
                <Image
                  style={[styles.fingers, { marginTop: 18, marginLeft: 15}]}
                  source={uri}
                />
              </InsetShadow>
            </View>
            
            <View style={styles.Me}></View>
          </View>
    );
  }
  
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image style={styles.Logo} source={require("../../assets/Logo.png")} />
        <View style={styles.BattleTitle}>
          <Text style={{ Color: "#1B1A55", fontSize: 24, fontWeight: "bold" }}>
            PERTANDINGAN
          </Text>
        </View>
        <SafeAreaView
          style={[
            styles.Games,
            { marginTop: 40, alignItems: "center", flexDirection: "row" },
          ]}
        >
            <ChoiceCard 
              player="Player"
              choice={playerChoice}
            />
            <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 50 }}>
              VS
            </Text>
            <ChoiceCard 
              player="Computer"
              choice={computerChoice}
            />
        </SafeAreaView>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 100 }}>
          <TouchableOpacity
            style={styles.boxbgk}
            onPress={() => playRound('rock')}
          >
            <View style={styles.boxbgk2}>
              <Image
                style={styles.fingers}
                source={require("../../assets/Batu.png")}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 18,
                  color: "#1B1A55",
                  fontWeight: "400",
                }}
              >
                Batu
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxbgk}
            onPress={() => playRound('paper')}
          >
            <View style={styles.boxbgk2}>
              <Image
                style={styles.fingers}
                source={require("../../assets/Kertas.png")}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 18,
                  color: "#1B1A55",
                  fontWeight: "400",
                }}
              >
                Kertas
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxbgk}
            onPress={() => playRound('scissors')}
          >
            <View style={styles.boxbgk2}>
              <Image
                style={styles.fingers}
                source={require("../../assets/Gunting.png")}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 18,
                  color: "#1B1A55",
                  fontWeight: "400",
                }}
              >
                Gunting
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Modal visible={showLoseScreen} animationType="slide" transparent>
            <LoseModal onCloseModal={() => {
                setshowLoseScreen(false); // Menutup modal
                setPlayerChoice(''); // Mengosongkan playerChoice
                setComputerChoice(''); // Mengosongkan computerChoice
                setPlayerWins(playerWins + 1);
              }}/>
        </Modal>

        <Modal visible={showWinScreen} animationType="slide" transparent>
            <ModalWin onCloseModal={() => {
                setshowWinScreen(false); // Menutup modal
                setPlayerChoice(''); // Mengosongkan playerChoice
                setComputerChoice(''); // Mengosongkan computerChoice
                setPlayerWins(playerWins + 1);
              }}/>
        </Modal>

   
     
        {/* <TouchableOpacity
          style={styles.ButtonBerhenti}
          onPress={() => navigation.navigate("RondeModal")}
        >
          <Text style={styles.textButton}>Berhenti</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  Logo: {
    alignSelf: "center",
    width: 65,
    height: 65,
    marginTop: 60,
  },
  BattleTitle: {
    width: 300,
    height: 70,
    backgroundColor: "#FFB996",
    marginTop: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  Games: {
    flexDirection: "row",
  },
  Box: {
    width: 120,
    height: 120,
    backgroundColor: "#FEF6E1",
    marginLeft: 50,
    marginTop: 10,
  },
  Score: {
    flexDirection: "row",
  },
  Me: {
    width: 80,
    height: 40,
    backgroundColor: "#F6B17A",
    borderRadius: 30,
    marginHorizontal: 70,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  boxbgk: {
    width: 90,
    height: 90,
    backgroundColor: "#FFB996",
    margin: 5,
  },
  boxbgk2: {
    width: 80,
    height: 80,
    backgroundColor: "#FFE4C9",
    borderRadius: 40,
    alignItems: "center",
    margin: 4,
  },
  fingers: {
    width: 80,
    height: 80,
  },
  ButtonBerhenti: {
    width: 200,
    height: 60,
    backgroundColor: "#FFE4C9",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textButton: {
    color: "#858484",
    fontWeight: "600",
    fontSize: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
