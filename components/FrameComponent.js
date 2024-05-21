import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountNumberParent}>
      <Text style={styles.accountNumber}>Account Number</Text>
      <Text style={[styles.easypaisa, styles.textTypo]}>Easypaisa</Text>
      <Text style={styles.tapOnMobile}>Tap on mobile icon to add balance</Text>
      <Text style={[styles.text, styles.textTypo]}>03458294490</Text>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("EasypaisaTopupScreen3")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/frame2.png")}
        />
      </Pressable>
      <Image
        style={[styles.frameIcon, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.iOS000000,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    height: 20,
    textAlign: "left",
    fontSize: FontSize.iOSMediumBody_size,
    position: "absolute",
  },
  frameLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  accountNumber: {
    top: 32,
    fontFamily: FontFamily.interRegular,
    width: 138,
    height: 20,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontSize: FontSize.iOSMediumBody_size,
    left: 11,
    position: "absolute",
  },
  easypaisa: {
    top: 8,
    width: 98,
    left: 11,
    color: Color.iOS000000,
  },
  tapOnMobile: {
    top: 58,
    width: 269,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    height: 20,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontSize: FontSize.iOSMediumBody_size,
    left: 11,
    position: "absolute",
  },
  text: {
    top: 30,
    left: 158,
    width: 122,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  frame: {
    left: 295,
    top: 53,
  },
  frameIcon: {
    top: 52,
    left: 325,
    overflow: "hidden",
  },
  accountNumberParent: {
    top: 243,
    left: 17,
    backgroundColor: Color.iOSFFFFFF,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.iOS000000,
    borderWidth: 1,
    width: 361,
    height: 91,
    overflow: "hidden",
    position: "absolute",
  },
});

export default FrameComponent;
