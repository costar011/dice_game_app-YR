import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

const CURRENT_WIDTH = Dimensions.get(`window`).width;

const App = () => {
  const [tab, setTab] = useState(0);
  const [dice1, setDice1] = useState(0);
  const [dice2, setDice2] = useState(0);
  const [resultText, setResultText] = useState(0);

  const _RandomNumber = () => Math.floor(Math.random() * 5 + 1);
  const _RandomNumber2 = () => Math.floor(Math.random() * 5 + 1);

  const _startButtonClickHandler = (value) => {
    setTab(value);

    if (value === 0) {
      setDice1(`잠시만 기다려 주세요`);
      setDice2(`잠시만 기다려 주세요`);

      setResultText(``);
    }

    if (value === 1) {
      const dice1 = _RandomNumber();
      const dice2 = _RandomNumber2();
      const result = dice1 + dice2;

      setDice1(dice1);
      setDice2(dice2);

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
                <Text style={styles.Text}>{dice1}</Text>
              </View>

              <View style={styles.MiddledetailBox}>
                <Text style={styles.Text}>{dice2}</Text>
              </View>
            </View>

            <View style={styles.BottomArea}>
              <View style={styles.BottomdetailBox}>
                <Text style={styles.Text}>{resultText}</Text>
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
