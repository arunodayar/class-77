import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { color } from "react-native-reanimated";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require("../assets/bg_image.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>ISS Tracker App</Text>
          </View>
          <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>ISS Location</Text>
            <Image
              source={require("../assets/iss_icon.png")}
              style={styles.iconImage}
            />
            <Text style={styles.bgDigit}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>Meteors</Text>
            <Image
              source={require("../assets/meteor_icon.png")}
              style={styles.iconImage}
            />
            <Text style={styles.bgDigit}>2</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },

  routeCard: {
    backgroundColor: "white",
    flex: 0.25,
    marginTop: 50,
    borderRadius: 30,
    marginLeft: 50,
    marginRight: 50,
  },

  routeText: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 75,
    paddingLeft: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },

  iconImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    position: "absolute",
    right: 20,
    top: -80,
  },

  bgDigit: {
    position: "absolute",
    color: "grey",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -10,
  },
});
