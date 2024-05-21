import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EasypaisaTopupScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.easypaisaTopupScreen3, styles.frameParentLayout]}>
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View style={[styles.topUpParent, styles.parentBg]}>
          <Text style={styles.topUp}>Top-Up</Text>
          <Pressable
            style={styles.image2623}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-2623.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.easypaisaAccountsParent, styles.parentBg]}>
          <Text style={[styles.easypaisaAccounts, styles.tapOnTypo]}>
            Easypaisa Accounts
          </Text>
          <Text style={[styles.tapOn, styles.tapOnTypo]}>
            Tap on + icon to add easypaisa account
          </Text>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame1.png")}
          />
        </View>
      </View>
      <View style={styles.image2644} />
      <FrameComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentLayout: {
    height: 852,
    overflow: "hidden",
  },
  parentLayout: {
    width: 393,
    left: 0,
  },
  parentBg: {
    backgroundColor: Color.iOSFFFFFF,
    position: "absolute",
    overflow: "hidden",
  },
  tapOnTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: 22,
    textAlign: "left",
    position: "absolute",
  },
  topUp: {
    top: 5,
    left: 48,
    fontSize: FontSize.size_6xl,
    fontWeight: "600",
    fontFamily: FontFamily.k2DSemiBold,
    color: Color.colorDarkslategray_100,
    width: 151,
    height: 36,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image2623: {
    left: 5,
    top: 8,
    width: 30,
    height: 30,
    position: "absolute",
  },
  topUpParent: {
    top: 27,
    left: 16,
    width: 359,
    height: 44,
  },
  easypaisaAccounts: {
    top: 30,
    fontSize: FontSize.iOSDefaultTitle2_size,
    color: Color.iOS000000,
    width: 237,
    height: 33,
  },
  tapOn: {
    top: 65,
    fontSize: FontSize.size_lg,
    color: Color.colorDimgray_100,
    width: 363,
    height: 26,
  },
  frameIcon: {
    top: 25,
    left: 332,
    width: 35,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  easypaisaAccountsParent: {
    top: 102,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.iOS000000,
    borderWidth: 1,
    height: 750,
    width: 393,
    left: 0,
  },
  frameParent: {
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: 852,
  },
  image2644: {
    top: 199,
    left: 322,
    width: 50,
    height: 50,
    position: "absolute",
  },
  easypaisaTopupScreen3: {
    backgroundColor: Color.colorTeal,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default EasypaisaTopupScreen2;
