// import * as React from "react";
// import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
// import WelcomeContainer from "../components/WelcomeContainer"; // Make sure this path is correct
// import { useNavigation } from "@react-navigation/native";
// import { FontFamily, Color, Border } from "../GlobalStyles";

// const WelcomeScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.welcomeScreen}>
//       {/* SAFAR text in the middle */}
//       <Text style={styles.safar}>SAFAR</Text>

//       {/* Vector icon and vector icon-1 around the SAFAR text */}
//       <View style={styles.vectorIconWrapper}>
//         <Image
//           style={styles.vectorIcon}
//           contentFit="cover"
//           source={require("../assets/vector.png")}
//         />
//         <Image
//           style={styles.vectorIcon1}
//           contentFit="cover"
//           source={require("../assets/vector1.png")}
//         />
//       </View>

//       {/* Frame Parent containing the WelcomeContainer */}
//       <View style={styles.frameParent}>
//         <WelcomeContainer navigation={navigation} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   welcomeScreen: {
//     flex: 1,
//     backgroundColor: Color.colorTeal,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   safar: {
//     fontSize: 70,
//     fontWeight: "800",
//     fontFamily: FontFamily.k2DExtraBold,
//     color: Color.iOSFFFFFF,
//     position: "absolute",
//     top: Dimensions.get("window").height * 0.1, // Position SAFAR text 10% from the top of the screen
//     alignSelf: "center",
//   },
//   vectorIconWrapper: {
//     position: "absolute",
//     top: Dimensions.get("window").height * 0.1, // Position the icons wrapper 10% from the top
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   vectorIcon: {
//     // These styles should position the icon to the left of the SAFAR text
//     height: 50, // Adjust size as needed
//     width: 50, // Adjust size as needed
//     resizeMode: "contain",
//     marginRight: 10, // Space between icon and text
//   },
//   vectorIcon1: {
//     // These styles should position the icon to the right of the SAFAR text
//     height: 50, // Adjust size as needed
//     width: 50, // Adjust size as needed
//     resizeMode: "contain",
//     marginLeft: 50, // Space between icon and text
//   },
//   frameParent: {
//     position: "absolute",
//     width: "100%",
//     height: "50%", // Adjust the height as required
//     bottom: 0,
//     borderTopLeftRadius: Border.br_11xl,
//     borderTopRightRadius: Border.br_11xl,
//     backgroundColor: Color.iOSFFFFFF,
//     paddingHorizontal: 24,
//     paddingVertical: 51,
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
// });

// export default WelcomeScreen;

import * as React from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import WelcomeContainer from "../components/WelcomeContainer"; // Ensure this path is correct
import { useNavigation } from "@react-navigation/native";
import { Color, Border } from "../GlobalStyles";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const window = Dimensions.get("window"); // Get the full window dimensions object

  return (
    <View style={styles.welcomeScreen}>
      {/* SAFAR logo */}
      <Image
        style={[styles.logo, { marginTop: window.height * 0.1 }]} // Adjust marginTop using window height
        source={require("../assets/icon.png")} // Update with correct path to your logo image
      />

      {/* Frame Parent containing the WelcomeContainer */}
      <View style={styles.frameParent}>
        <WelcomeContainer navigation={navigation} />
      </View>
    </View>
  );
};

// Move Dimensions.get('window') inside the component to avoid the error
const window = Dimensions.get("window");

const styles = StyleSheet.create({
  welcomeScreen: {
    flex: 1,
    backgroundColor: Color.colorTeal,
    justifyContent: "top",
    alignItems: "center",
  },
  logo: {
    height: window.height * 0.3,
    width: window.width * 0.58,
    resizeMode: "contain",
    alignSelf: "center",
  },
  frameParent: {
    position: "absolute",
    width: "100%",
    height: "50%", // Adjust the height as required
    bottom: 0,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.iOSFFFFFF,
    paddingHorizontal: 24,
    paddingVertical: 51,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default WelcomeScreen;
