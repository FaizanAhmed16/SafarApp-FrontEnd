import React, { useState, useEffect } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"; // Ensure axios is imported to make HTTP requests
// import * as Google from "expo-auth-session/providers/google";
// import { makeRedirectUri } from "expo-auth-session";

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

// const clientId =
//   "641318912119-nn81nt66ln2pfvv5lc149ca24vuruf64.apps.googleusercontent.com";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // const redirectUri = "192.168.0.114:5000";

  // const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
  //   clientId,
  //   redirectUri,
  // });

  // React.useEffect(() => {
  //   if (response?.type === "success") {
  //     const { id_token } = response.params;

  //     handleGoogleSignUp(id_token);
  //   }
  // }, [response]);

  // const handleGoogleSignUp = async (idToken) => {
  //   try {
  //     const response = await axios.post(
  //       "http://192.168.0.114:5000/users/register-google",
  //       {
  //         token: idToken,
  //       }
  //     );

  //     if (response.status === 201) {
  //       await AsyncStorage.setItem("userToken", response.data.token);
  //       Alert.alert("Success", "Sign Up Successful!", [
  //         {
  //           text: "OK",
  //           onPress: () => navigation.navigate("HomeScreen"),
  //         },
  //       ]);
  //     }
  //   } catch (error) {
  //     const errorMessage = error.response
  //       ? error.response.data.message
  //       : error.message;
  //     Alert.alert("Signup Error", errorMessage);
  //   }
  // };

  const handleSignUp = async () => {
    if (!fullName || !email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.0.114:5000/users/public/register",
        {
          username: fullName,
          email: email,
          password: password,
        }
      );

      if (response.status === 201) {
        await AsyncStorage.setItem("userToken", response.data.token);
        Alert.alert("Success", "Sign Up Successful!", [
          {
            text: "OK",
            onPress: () => navigation.navigate("LoginScreen"),
          },
        ]);
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : error.message;
      Alert.alert("Signup Error", errorMessage);
    }
  };

  return (
    <View style={styles.signUpScreen}>
      <Text style={styles.signUp1}>Sign Up</Text>
      <View style={styles.rectangleParent}>
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          onChangeText={setFullName}
          value={fullName}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
        <Pressable style={styles.rectanglePressable} onPress={handleSignUp}>
          <Text style={styles.signUp}>SIGN UP</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            promptAsync();
          }}
        >
          <Image
            source={require("../assets/image-1.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.signUpWith}>Sign Up With Google</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpScreen: {
    backgroundColor: Color.colorTeal,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signUp1: {
    fontSize: FontSize.size_11xl,
    fontWeight: "bold",
    fontFamily: FontFamily.robotoBlack,
    color: Color.iOSFFFFFF,
    marginBottom: 20,
  },
  rectangleParent: {
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
  rectanglePressable: {
    height: 50,
    backgroundColor: Color.colorGoldenrod,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  signUp: {
    color: Color.iOS000000,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
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
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  signUpWith: {
    color: Color.iOS000000,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
});

export default SignUpScreen;
