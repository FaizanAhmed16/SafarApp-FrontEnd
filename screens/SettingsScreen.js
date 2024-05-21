import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Switch } from "react-native-paper";

const { height } = Dimensions.get("screen");

const SettingsScreen = ({ isDarkModeEnabled, toggleDarkMode }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={require("../assets/image-2623.png")}
            style={styles.backIcon}
          />
          <Text style={styles.title}>Settings</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={styles.setting}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={isDarkModeEnabled}
            onValueChange={toggleDarkMode}
            // Additional props for customization (optional)
            color="#008080" // Customize switch color
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080", // Teal background for the entire screen
  },
  header: {
    height: height * 0.2, // 20% of the screen height
    backgroundColor: "#008080",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // White text color
  },
  content: {
    flex: 1,
    height: height * 0.8, // 80% of the screen height
    backgroundColor: "#FFFFFF", // White background for content area
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 18,
    color: "#333333", // Dark gray text color
  },
});

export default SettingsScreen;
