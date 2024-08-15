import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import * as Font from "expo-font";
const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Oswald: require("../../assets/fonts/Oswald-SemiBold.ttf"), // Ensure path is correct
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.maincontainer}>
      <View style={styles.textContainer}>
        <Text style={styles.maintitle}>Welcome to Roadmaps</Text>
        <Text style={styles.maintitle2}>Design {'>'} Plan {'>'} Estimate</Text>
      </View>

      <Video
        source={require("../../assets/sky.mp4")}
        style={styles.video}
        useNativeControls={false}
        shouldPlay={true}
        isMuted={true}
        isLooping
      />

      <View style={styles.boxContainer}>
        <View style={styles.firstbox}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text className="">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  textContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 30,
  },
  maintitle: {
    fontSize: 60,
    backgroundColor: "#FBC02D",
    width: width,
    textAlign: "center",
    color: "black",
    fontFamily: "Oswald",
    transform: [{ skewY: "4deg" }],
    marginBottom: 10,
    zIndex: 20,
  },
  maintitle2: {
    fontSize: 60,
    backgroundColor: "black",
    width: width,
    textAlign: "center",
    color: "#FBC02D",
    fontFamily: "Oswald",
    transform: [{ skewY: "-4deg" }],
  },
  video: {
    width: "100%",
    height: "100%",
  },
  bottomContainer: {
    position: "absolute",
    backgroundColor: "#FBC02D",
    display: "flex",
    flexDirection: "column",
    color: "yellow",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#FBC02D",
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 30,
    fontWeight: "bold",
  },

  bottomContainertext: {},

  boxContainer: {
    position: "absolute",
    bottom: 110, 
    flexDirection: "row",
    justifyContent: "space-between",
    width: width - 450, 
    paddingHorizontal: 30,
    zIndex: 20,
  },
  box: {
    width: 10, 
    height: 10,
    borderRadius: 10,
    backgroundColor: "#FBC02D",
  },

  firstbox: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "black",
  },
});

export default HomeScreen;
