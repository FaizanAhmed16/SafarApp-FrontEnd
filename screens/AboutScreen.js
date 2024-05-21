// import * as React from "react";
// import { Text, StyleSheet, Pressable, View, Linking } from "react-native";
// import { Image } from "expo-image";
// import { useNavigation } from "@react-navigation/native";
// import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

// const AboutScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={[styles.aboutScreen, styles.aboutScreenLayout]}>
//       <View style={[styles.frameParent, styles.parentLayout]}>
//         <View style={[styles.aboutParent, styles.parentBg]}>
//           <Text style={styles.about}>About</Text>
//           <Pressable
//             style={styles.image2623}
//             onPress={() => navigation.navigate("HomeScreen")}
//           >
//             <Image
//               style={styles.icon}
//               contentFit="cover"
//               source={require("../assets/image-2623.png")}
//             />
//           </Pressable>
//         </View>
//         <View style={[styles.image2639Parent, styles.image2639ParentBorder]}>
//           <Image
//             style={[styles.image2639Icon, styles.iconLayout]}
//             contentFit="cover"
//             source={require("../assets/image-2639.png")}
//           />
//           <Pressable
//             style={[styles.sindhMassTransitContainer, styles.containerPosition]}
//             onPress={() =>
//               Linking.openURL("https://smta.sindh.gov.pk/contact-us")
//             }
//           >
//             <Text style={styles.sindhMassTransitAuthority}>
//               Sindh Mass Transit Authority
//             </Text>
//           </Pressable>
//           <Image
//             style={[styles.image2640Icon, styles.iconLayout]}
//             contentFit="cover"
//             source={require("../assets/image-2639.png")}
//           />
//           <Pressable
//             style={[styles.redLineBrtContainer, styles.containerPosition]}
//             onPress={() =>
//               Linking.openURL(
//                 "https://thinktransportation.net/red-bus-karachi/"
//               )
//             }
//           >
//             <Text style={styles.sindhMassTransitAuthority}>
//               Red Line BRT Karachi
//             </Text>
//           </Pressable>
//         </View>
//       </View>
//       <View style={[styles.aboutScreenChild, styles.image2639ParentBorder]} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   aboutScreenLayout: {
//     overflow: "hidden",
//     height: 852,
//   },
//   parentLayout: {
//     width: 393,
//     left: 0,
//   },
//   parentBg: {
//     backgroundColor: Color.iOSFFFFFF,
//     overflow: "hidden",
//   },
//   image2639ParentBorder: {
//     borderColor: Color.iOS000000,
//     borderStyle: "solid",
//     position: "absolute",
//   },
//   iconLayout: {
//     height: 40,
//     width: 40,
//     left: 13,
//     position: "absolute",
//   },
//   containerPosition: {
//     left: 73,
//     position: "absolute",
//   },
//   about: {
//     top: 5,
//     left: 48,
//     fontSize: FontSize.size_6xl,
//     fontWeight: "600",
//     fontFamily: FontFamily.k2DSemiBold,
//     color: Color.colorDarkslategray_100,
//     width: 151,
//     height: 36,
//     textAlign: "left",
//     position: "absolute",
//   },
//   icon: {
//     height: "100%",
//     width: "100%",
//   },
//   image2623: {
//     left: 5,
//     top: 8,
//     width: 30,
//     height: 30,
//     position: "absolute",
//   },
//   aboutParent: {
//     top: 27,
//     left: 16,
//     width: 359,
//     height: 44,
//     position: "absolute",
//   },
//   image2639Icon: {
//     top: 23,
//   },
//   sindhMassTransitAuthority: {
//     fontSize: FontSize.iOSDefaultTitle2_size,
//     fontWeight: "700",
//     fontFamily: FontFamily.robotoBold,
//     color: Color.iOS000000,
//     width: 306,
//     height: 33,
//     textAlign: "left",
//   },
//   sindhMassTransitContainer: {
//     top: 30,
//   },
//   image2640Icon: {
//     top: 102,
//   },
//   redLineBrtContainer: {
//     top: 109,
//   },
//   image2639Parent: {
//     borderRadius: Border.br_3xs,
//     borderWidth: 1,
//     height: 750,
//     top: 102,
//     backgroundColor: Color.iOSFFFFFF,
//     overflow: "hidden",
//     width: 393,
//     left: 0,
//   },
//   frameParent: {
//     top: 0,
//     position: "absolute",
//     overflow: "hidden",
//     height: 852,
//   },
//   aboutScreenChild: {
//     top: 260,
//     left: -1,
//     borderTopWidth: 2,
//     width: 395,
//     height: 2,
//   },
//   aboutScreen: {
//     backgroundColor: Color.colorTeal,
//     flex: 1,
//     width: "100%",
//   },
// });

// export default AboutScreen;

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Pressable,
//   Linking,
//   Dimensions,
// } from "react-native";

// const { height } = Dimensions.get("window");

// const AboutScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Pressable
//           onPress={() => {
//             /* Replace with your navigation logic */
//           }}
//         >
//           <Image
//             source={require("../assets/image-2623.png")}
//             style={styles.backIcon}
//           />
//         </Pressable>
//         <View style={styles.titleBox}>
//           <Text style={styles.headerTitle}>About</Text>
//         </View>
//       </View>
//       <View style={styles.content}>
//         <Pressable
//           style={styles.link}
//           onPress={() =>
//             Linking.openURL("https://smta.sindh.gov.pk/contact-us")
//           }
//         >
//           <Image
//             source={require("../assets/image-2639.png")}
//             style={styles.infoIcon}
//           />
//           <Text style={styles.linkText}>Sindh Mass Transit Authority</Text>
//         </Pressable>
//         <Pressable
//           style={styles.link}
//           onPress={() =>
//             Linking.openURL("https://thinktransportation.net/red-bus-karachi/")
//           }
//         >
//           <Image
//             source={require("../assets/image-2639.png")}
//             style={styles.infoIcon}
//           />
//           <Text style={styles.linkText}>Red Line BRT Karachi</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#008080", // Teal background for the entire screen
//   },
//   header: {
//     height: height * 0.2, // 20% of the screen height
//     backgroundColor: "#008080",
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   titleBox: {
//     backgroundColor: "#FFFFFF", // White box for the title
//     borderRadius: 10,
//     padding: 10,
//     marginLeft: 10,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#000000", // Black text color for better visibility
//   },
//   backIcon: {
//     width: 30,
//     height: 30,
//   },
//   content: {
//     height: height * 0.8, // 80% of the screen height
//     backgroundColor: "#FFFFFF", // White background for content area
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     paddingTop: 20,
//     paddingHorizontal: 16,
//   },
//   link: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   infoIcon: {
//     width: 40,
//     height: 40,
//   },
//   linkText: {
//     fontSize: 18,
//     marginLeft: 10,
//     color: "#333",
//   },
// });

// export default AboutScreen;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Linking,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("screen");

const Color = {
  colorTeal: "#008080",
  colorWhite: "#FFFFFF",
  colorDark: "#000000", // Added for darker color
};

const FontFamily = {
  robotoMedium: "Roboto-Medium",
};

const FontSize = {
  size_l: 18,
  size_xl: 22,
  size_xx: 26,
};

const Border = {
  br_small: 5,
  br_large: 20,
  separatorBold: 2, // Increased width for bolder separator
};

const AboutScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  // Function to go back when back button is pressed
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleBox}>
          <Pressable onPress={goBack}>
            <Image
              source={require("../assets/image-2623.png")}
              style={styles.backIcon}
            />
          </Pressable>
          <Text style={styles.headerTitle}>About</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Pressable
          style={styles.link}
          onPress={() =>
            Linking.openURL("https://smta.sindh.gov.pk/contact-us")
          }
        >
          <Image
            source={require("../assets/image-2639.png")}
            style={styles.infoIcon}
          />
          <Text style={styles.linkText}>Sindh Mass Transit Authority</Text>
        </Pressable>
        <Pressable
          style={styles.link}
          onPress={() =>
            Linking.openURL("https://thinktransportation.net/red-bus-karachi/")
          }
        >
          <Image
            source={require("../assets/image-2639.png")}
            style={styles.infoIcon}
          />
          <Text style={styles.linkText}>Red Line BRT Karachi</Text>
        </Pressable>
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
  titleBox: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    padding: 10,
    borderRadius: Border.br_small,
  },
  headerTitle: {
    fontSize: FontSize.size_xx,
    marginLeft: 10,
    fontFamily: FontFamily.robotoMedium,
    // color: "#000000", // Black text color for better visibility
  },
  backIcon: {
    width: 30,
    height: 30,
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
  link: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  infoIcon: {
    width: 40,
    height: 40,
  },
  linkText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#333",
  },
});

export default AboutScreen;
