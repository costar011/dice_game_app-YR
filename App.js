import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const CURRENT_WIDTH = Dimensions.get(`window`).width;

const DICE_RENDOM = ["1", "2", "3", "4", "5", "6"];
const DICE_RENDOM2 = ["1", "2", "3", "4", "5", "6"];

const App = () => {
  const [tab, setTab] = useState(0);
  const [dice1, setDice1] = useState(`기다리세요`);
  const [dice2, setDice2] = useState(`기다리세요`);
  const [resultText, setResultText] = useState(``);

  const _RandomNumber = () => Math.floor(Math.random() * 6 + 1);
  const _RandomNumber2 = () => Math.floor(Math.random() * 6 + 1);

  const _startButtonClickHandler = (value) => {
    setTab(value);

    if (value === 0) {
      setDice1(`잠깐 기다려주세요`);
      setDice2(`잠깐 기다려주세요`);
      setResultText(``);
    }

    if (value === 1) {
      const dice1 = _RandomNumber();
      const dice2 = _RandomNumber2();

      const result1 = DICE_RENDOM[dice1];
      const result2 = DICE_RENDOM2[dice2];
      const result = dice1 + dice2;

      setDice1(result1);
      setDice2(result2);
      setResultText(result);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TopArea}>
        {tab === 0 && (
          <TouchableOpacity
            style={styles.startBtn}
            onPressOut={() => _startButtonClickHandler(1)}
          >
            <Text style={styles.startBtnText}>START</Text>
          </TouchableOpacity>
        )}
        {tab === 1 && (
          <View style={styles.MiddleArea}>
            <View style={styles.MiddleTopArea}>
              <View style={styles.MiddledetailBox}>
                <Text style={styles.Text}>dice1</Text>
              </View>

              <View style={styles.MiddledetailBox}>
                <Text style={styles.Text}>dice2</Text>
              </View>
            </View>

            <View style={styles.BottomArea}>
              <View style={styles.BottomdetailBox}>
                <Text style={styles.Text}>value1</Text>
              </View>
            </View>
          </View>
        )}
      </View>

      <View style={styles.BottomArea}>
        {tab === 1 && (
          <TouchableOpacity
            style={styles.startBtn}
            onPressOut={() => _startButtonClickHandler(0)}
          >
            <Text style={styles.startBtnText}>RESET</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  TopArea: {
    flex: 8,

    alignItems: "center",
    justifyContent: "center",
  },

  BottomArea: {
    flex: 2,

    alignItems: "center",
    justifyContent: "center",
  },

  startBtn: {
    width: CURRENT_WIDTH / 2,
    height: 50,

    backgroundColor: "#66aaf2",
    borderRadius: 7,

    alignItems: "center",
    justifyContent: "center",
  },

  startBtnText: {
    fontWeight: "600",
    fontSize: 30,
  },

  MiddleArea: {
    flex: 1,
  },

  MiddleTopArea: {
    width: CURRENT_WIDTH,
    flex: 3,

    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },

  MiddledetailBox: {
    flex: 1,

    width: CURRENT_WIDTH,
    height: 200,

    alignItems: "center",
    justifyContent: "center",
  },

  BottomArea: {
    width: CURRENT_WIDTH,
    flex: 3,

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  BottomdetailBox: {
    flex: 1,

    width: 200,

    alignItems: "center",
    justifyContent: "center",
  },

  Text: {
    fontSize: 30,
    fontWeight: "600",
  },
});

export default App;
