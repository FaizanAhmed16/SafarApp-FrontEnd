import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const EasypaisaTopupScreen3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.easypaisaTopupScreen4}>
      <View style={styles.frameParent}>
        <View style={styles.topUpParent}>
          <Text style={styles.topUp}>Top-Up</Text>
          <Pressable
            style={[styles.image2623, styles.image2623Layout]}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-2623.png")}
            />
          </Pressable>
        </View>
        <View style={styles.selectMobileNumberParent}>
          <Text style={[styles.selectMobileNumber, styles.amountOfTopUpTypo]}>
            Select Mobile Number
          </Text>
          <Text style={[styles.amountOfTopUp, styles.amountOfTopUpTypo]}>
            Amount of Top-Up (PKR)
          </Text>
        </View>
      </View>
      <View style={styles.image2644} />
      <View
        style={[
          styles.selectMobileAccountNumberParent,
          styles.pleaseEnterTopUpAmountWrapperShadowBox,
        ]}
      >
        <Text style={[styles.selectMobileAccount, styles.dailyTopUpLimitTypo]}>
          Select Mobile Account Number
        </Text>
        <Image
          style={[styles.image2632Icon, styles.image2623Layout]}
          contentFit="cover"
          source={require("../assets/image-2629.png")}
        />
      </View>
      <View
        style={[
          styles.pleaseEnterTopUpAmountWrapper,
          styles.pleaseEnterTopUpAmountWrapperShadowBox,
        ]}
      >
        <Text style={[styles.selectMobileAccount, styles.dailyTopUpLimitTypo]}>
          Please enter top-up amount
        </Text>
      </View>
      <Text style={[styles.dailyTopUpLimit, styles.dailyTopUpLimitTypo]}>
        Daily Top-Up limit is Rs 9,999/-
      </Text>
      <Pressable
        style={styles.topUpAccountWrapper}
        onPress={() => navigation.navigate("CardTopUpScreenUpdated")}
      >
        <Text style={styles.topUpAccount}>TOP-UP ACCOUNT</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image2623Layout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  amountOfTopUpTypo: {
    height: 26,
    fontSize: FontSize.size_lg,
    left: 22,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  pleaseEnterTopUpAmountWrapperShadowBox: {
    height: 38,
    width: 361,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 22,
    borderWidth: 1,
    borderColor: Color.iOS000000,
    borderStyle: "solid",
    backgroundColor: Color.iOSFFFFFF,
    position: "absolute",
    overflow: "hidden",
  },
  dailyTopUpLimitTypo: {
    height: 20,
    width: 269,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  topUp: {
    top: 5,
    left: 48,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.k2DSemiBold,
    color: Color.colorDarkslategray_100,
    width: 151,
    height: 36,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image2623: {
    left: 5,
    top: 8,
  },
  topUpParent: {
    top: 27,
    left: 16,
    width: 359,
    height: 44,
    backgroundColor: Color.iOSFFFFFF,
    position: "absolute",
    overflow: "hidden",
  },
  selectMobileNumber: {
    top: 35,
    width: 363,
  },
  amountOfTopUp: {
    top: 155,
    width: 354,
  },
  selectMobileNumberParent: {
    top: 102,
    borderRadius: Border.br_3xs,
    height: 750,
    borderWidth: 1,
    borderColor: Color.iOS000000,
    borderStyle: "solid",
    backgroundColor: Color.iOSFFFFFF,
    width: 393,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    top: 0,
    width: 393,
    left: 0,
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
  selectMobileAccount: {
    top: 11,
    left: 11,
    fontSize: FontSize.iOSMediumBody_size,
    color: Color.colorDimgray_100,
    width: 269,
    fontFamily: FontFamily.interSemiBold,
  },
  image2632Icon: {
    top: 4,
    left: 323,
  },
  selectMobileAccountNumberParent: {
    top: 169,
  },
  pleaseEnterTopUpAmountWrapper: {
    top: 289,
  },
  dailyTopUpLimit: {
    top: 351,
    left: 26,
    fontSize: 14,
    color: "#1f5893",
  },
  topUpAccount: {
    top: 13,
    left: 15,
    fontSize: FontSize.size_xl,
    color: Color.iOS000000,
    textAlign: "center",
    width: 286,
    height: 32,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  topUpAccountWrapper: {
    top: 434,
    left: 35,
    backgroundColor: Color.colorLightseagreen,
    width: 328,
    height: 53,
    position: "absolute",
    overflow: "hidden",
  },
  easypaisaTopupScreen4: {
    backgroundColor: Color.colorTeal,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
  },
});

export default EasypaisaTopupScreen3;
