import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Color = {
  colorTeal: "#18675C",
  iOSFFFFFF: "#FFFFFF",
  iOS000000: "#000000",
  colorGainsboro: "#DCDCDC",
  colorGoldenrod: "#DAA520",
};

const FontFamily = {
  robotoBlack: "Roboto-Black",
  k2DSemiBold: "K2D-SemiBold",
};

const FontSize = {
  size_xl: 20,
  size_11xl: 36,
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     Alert.alert("Error", "Please fill all the required fields.");
  //     return;
  //   }
  //   try {
  //     const response = await axios.post(
  //       "http://192.168.0.114:5000/users/public/login",
  //       {
  //         email,
  //         password,
  //       }
  //     );
  //     await AsyncStorage.setItem("userToken", response.data.accessToken);
  //     await AsyncStorage.setItem("userId", userId.toString());
  //     navigation.navigate("HomeScreen");
  //   } catch (error) {
  //     const errorMessage = error.response
  //       ? error.response.data.message
  //       : "Login failed!";
  //     Alert.alert("Login Error", errorMessage);
  //   }
  // };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill all the required fields.");
      return;
    }
    try {
      const response = await axios.post(
        "http://192.168.0.114:5000/users/public/login",
        {
          email,
          password,
        }
      );
      const { accessToken, userId } = response.data;
      await AsyncStorage.setItem("userToken", accessToken);
      await AsyncStorage.setItem("userId", userId.toString()); // Save userId as a string
      navigation.navigate("HomeScreen");
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "Login failed!";
      Alert.alert("Login Error", errorMessage);
    }
  };

  return (
    <View style={styles.loginScreen}>
      <Text style={styles.loginHeader}>Login</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Pressable
          style={styles.googleButton}
          onPress={() => console.log("Login with Google")}
        >
          <Image
            source={require("../assets/image-1.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.buttonText}>Login With Google</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorTeal,
  },
  loginHeader: {
    fontSize: FontSize.size_11xl,
    fontWeight: "bold",
    fontFamily: FontFamily.robotoBlack,
    color: Color.iOSFFFFFF,
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: Color.iOSFFFFFF,
    width: "90%",
    maxWidth: 500,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  input: {
    height: 50,
    backgroundColor: Color.colorGainsboro,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
  },
  loginButton: {
    backgroundColor: Color.colorGoldenrod,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  googleButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: Color.iOSFFFFFF,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.colorGoldenrod,
    marginVertical: 10,
  },
  buttonText: {
    color: Color.iOS000000,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default LoginScreen;
