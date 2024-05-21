import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const CardTopUpScreenUpdated = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardTopupScreenUpdated}>
      <View style={styles.frameParent}>
        <View style={styles.topUpParent}>
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
        <View style={styles.faizanParent}>
          <Text style={[styles.faizan, styles.faizanLayout]}>FAIZAN</Text>
          <Text style={[styles.rs72500, styles.faizanLayout]}>RS 725.00</Text>
          <Text style={styles.accountBalance}>Account Balance</Text>
          <Pressable
            style={[styles.image2645Wrapper, styles.wrapperShadowBox]}
            onPress={() => navigation.navigate("EasypaisaTopupScreen")}
          >
            <Image
              style={[styles.image2645Icon, styles.image2644Layout]}
              contentFit="cover"
              source={require("../assets/image-2645.png")}
            />
          </Pressable>
          <View style={[styles.image2646Wrapper, styles.wrapperShadowBox]}>
            <Image
              style={styles.image2646Icon}
              contentFit="cover"
              source={require("../assets/image-2646.png")}
            />
          </View>
          <View style={[styles.image2648Wrapper, styles.wrapperShadowBox]}>
            <Image
              style={styles.image2648Icon}
              contentFit="cover"
              source={require("../assets/image-2648.png")}
            />
          </View>
          <View style={[styles.image2647Wrapper, styles.wrapperShadowBox]}>
            <Image
              style={styles.image2646Icon}
              contentFit="cover"
              source={require("../assets/image-2647.png")}
            />
          </View>
          <Text style={[styles.topUpViaEasypaisa, styles.topTypo]}>
            Top-Up via EasyPaisa
          </Text>
          <Text style={[styles.topUpVia1, styles.topTypo]}>
            Top-Up via 1 Bill
          </Text>
          <Text style={[styles.bankTransfer, styles.topTypo]}>
            Bank Transfer
          </Text>
          <Text style={[styles.topUpViaBank, styles.topTypo]}>
            Top-Up via Bank Card
          </Text>
          <FrameComponent jan2024="21 Jan 2024" rs50="Rs 300" propTop={343} />
          <FrameComponent jan2024="10 Jan 2024" rs50="Rs 200" propTop={429} />
          <View style={[styles.amountParent, styles.amountShadowBox]}>
            <Text style={styles.amount}>Amount:</Text>
            <Text style={[styles.easypaisa, styles.decTypo]}>Easypaisa</Text>
            <Text style={[styles.dec2023, styles.decTypo]}>30 Dec 2023</Text>
            <Text style={[styles.rs100, styles.decTypo]}>Rs 100</Text>
          </View>
          <View style={[styles.amountGroup, styles.amountShadowBox]}>
            <Text style={styles.amount}>Amount:</Text>
            <Text style={[styles.easypaisa, styles.decTypo]}>Easypaisa</Text>
            <Text style={[styles.dec20231, styles.decTypo]}>15 Dec 2023</Text>
            <Text style={[styles.rs75, styles.decTypo]}>Rs 75</Text>
          </View>
        </View>
      </View>
      <View style={[styles.image2644, styles.image2644Layout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  faizanLayout: {
    height: 33,
    width: 127,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.iOS000000,
    position: "absolute",
  },
  wrapperShadowBox: {
    height: 65,
    width: 72,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 188,
    borderWidth: 1,
    borderColor: Color.iOS000000,
    borderStyle: "solid",
    backgroundColor: Color.iOSFFFFFF,
    position: "absolute",
    overflow: "hidden",
  },
  image2644Layout: {
    height: 50,
    position: "absolute",
  },
  topTypo: {
    width: 89,
    top: 267,
    height: 60,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.iOS000000,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  amountShadowBox: {
    height: 63,
    width: 361,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    borderColor: Color.iOS000000,
    borderStyle: "solid",
    backgroundColor: Color.iOSFFFFFF,
    position: "absolute",
    overflow: "hidden",
  },
  decTypo: {
    fontFamily: FontFamily.interSemiBold,
    height: 20,
    fontSize: FontSize.iOSMediumBody_size,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  topUp: {
    top: 5,
    left: 48,
    fontFamily: FontFamily.k2DSemiBold,
    color: Color.colorDarkslategray_100,
    width: 151,
    height: 36,
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image2623: {
    width: 30,
    height: 30,
    top: 8,
    left: 5,
    position: "absolute",
  },
  topUpParent: {
    top: 27,
    width: 359,
    height: 44,
    backgroundColor: Color.iOSFFFFFF,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  faizan: {
    left: 125,
    fontSize: FontSize.iOSDefaultTitle2_size,
    textAlign: "center",
    height: 33,
    width: 127,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: 30,
  },
  rs72500: {
    top: 75,
    left: 132,
    height: 33,
    width: 127,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_6xl,
  },
  accountBalance: {
    top: 115,
    left: 123,
    width: 147,
    height: 26,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  image2645Icon: {
    left: 2,
    width: 70,
    top: 8,
  },
  image2645Wrapper: {
    left: 13,
  },
  image2646Icon: {
    top: 13,
    width: 40,
    height: 40,
    left: 16,
    position: "absolute",
  },
  image2646Wrapper: {
    left: 110,
  },
  image2648Icon: {
    top: 4,
    left: 7,
    width: 60,
    height: 60,
    position: "absolute",
  },
  image2648Wrapper: {
    left: 209,
  },
  image2647Wrapper: {
    left: 304,
  },
  topUpViaEasypaisa: {
    left: 5,
  },
  topUpVia1: {
    left: 203,
  },
  bankTransfer: {
    left: 296,
  },
  topUpViaBank: {
    left: 105,
  },
  amount: {
    top: 32,
    fontFamily: FontFamily.interRegular,
    height: 20,
    fontSize: FontSize.iOSMediumBody_size,
    width: 98,
    left: 11,
    color: Color.colorDimgray_100,
    textAlign: "left",
    position: "absolute",
  },
  easypaisa: {
    width: 98,
    fontFamily: FontFamily.interSemiBold,
    left: 11,
    color: Color.iOS000000,
    top: 8,
  },
  dec2023: {
    left: 250,
    width: 107,
    color: Color.colorDimgray_100,
    top: 8,
  },
  rs100: {
    left: 253,
    width: 98,
    fontFamily: FontFamily.interSemiBold,
    color: Color.iOS000000,
    top: 30,
  },
  amountParent: {
    top: 515,
    left: 16,
  },
  dec20231: {
    left: 252,
    width: 98,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDimgray_100,
    top: 8,
  },
  rs75: {
    left: 254,
    width: 98,
    fontFamily: FontFamily.interSemiBold,
    color: Color.iOS000000,
    top: 30,
  },
  amountGroup: {
    top: 601,
    left: 15,
  },
  faizanParent: {
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
  },
  cardTopupScreenUpdated: {
    backgroundColor: Color.colorTeal,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
  },
});

export default CardTopUpScreenUpdated;
