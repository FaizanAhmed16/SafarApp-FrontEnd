// import * as React from "react";
// import { Text, StyleSheet, View, Pressable } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

// const WelcomeContainer = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.frame}>
//       <View style={styles.frame1}>
//         <Text style={styles.welcome}>Welcome</Text>
//         <Text style={styles.welcomeToSafarContainer}>
//           <Text
//             style={styles.welcomeToSafar}
//           >{`Welcome to SAFAR - Your Urban Transit Hub! Simplify your commute with unified booking, real-time updates, and hassle-free payments.
// `}</Text>
//           <Text style={styles.blankLine}> </Text>
//         </Text>
//       </View>
//       <Pressable
//         style={styles.loginButton}
//         onPress={() => navigation.navigate("LoginScreen")}
//       >
//         <Text style={styles.login}>LOGIN</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   welcome: {
//     position: "relative",
//     fontSize: FontSize.size_11xl,
//     fontWeight: "500",
//     fontFamily: FontFamily.robotoMedium,
//     color: Color.iOS000000,
//     textAlign: "left",
//     width: 145,
//     height: 41,
//   },
//   welcomeToSafar: {
//     fontFamily: FontFamily.iOSMediumBody,
//   },
//   blankLine: {
//     fontWeight: "500",
//     fontFamily: FontFamily.robotoMedium,
//   },
//   welcomeToSafarContainer: {
//     fontSize: FontSize.size_mini,
//     color: Color.iOS000000,
//     textAlign: "left",
//     width: 312,
//     height: 111,
//     marginLeft: 2,
//     marginTop: 15,
//   },
//   frame1: {
//     width: 314,
//     height: 167,
//     overflow: "hidden",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//   },
//   login: {
//     position: "relative",
//     fontSize: FontSize.size_xl,
//     fontWeight: "500",
//     fontFamily: FontFamily.robotoMedium,
//     color: Color.iOSFFFFFF,
//     textAlign: "center",
//     width: 103,
//     height: 30,
//   },
//   loginButton: {
//     borderRadius: Border.br_3xs,
//     backgroundColor: Color.colorGoldenrod,
//     borderStyle: "solid",
//     borderColor: Color.iOS000000,
//     borderWidth: 1,
//     width: 123,
//     height: 38,
//     overflow: "hidden",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     paddingHorizontal: 0,
//     paddingVertical: Padding.p_11xs,
//     marginLeft: 109,
//     marginTop: 70,
//   },
//   frame: {
//     width: 314,
//     height: 275,
//     overflow: "hidden",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//   },
// });

// export default WelcomeContainer;

import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const WelcomeContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.welcomeToSafarContainer}>
        Welcome to SAFAR - Your Urban Transit Hub! Simplify your commute with
        unified booking, real-time updates, and hassle-free payments.
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>
      <Pressable
        style={[styles.button, { backgroundColor: Color.colorGoldenrod }]}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.buttonText}>SIGNUP</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_11xs,
    alignItems: "center",
  },
  welcome: {
    fontSize: FontSize.size_11xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.iOS000000,
    marginBottom: 10,
  },
  welcomeToSafarContainer: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.iOSMediumBody,
    color: Color.iOS000000,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    width: "50%",
    height: 38,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.iOSFFFFFF,
  },
});

export default WelcomeContainer;
