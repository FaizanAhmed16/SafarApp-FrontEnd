import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SpecificBusStationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.specificBusStationScreen}>
      <View style={[styles.frameParent, styles.frameLayout1]}>
        <View style={[styles.frameGroup, styles.frameLayout1]}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text, styles.textLayout]}>22001</Text>
          </View>
          <Text style={[styles.abdullahChowkTerminal, styles.shareTypo]}>
            Abdullah Chowk (Terminal)
          </Text>
          <Image
            style={[styles.frameChild, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/line-25.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/line-28.png")}
          />
          <Text style={[styles.share, styles.shareTypo]}>Share</Text>
          <View style={styles.frameInner} />
          <View style={[styles.kbGlWrapper, styles.wrapperLayout]}>
            <Text style={[styles.text, styles.textLayout]}>KB-GL</Text>
          </View>
          <View style={[styles.kbGlContainer, styles.wrapperLayout]}>
            <Text style={[styles.text, styles.textLayout]}>KB-GL</Text>
          </View>
          <Text style={[styles.abdullahChowk, styles.abdullahTypo]}>
            Abdullah Chowk - Numaish
          </Text>
          <Text style={[styles.numaishAbdullah, styles.abdullahTypo]}>
            Numaish - Abdullah Chowk
          </Text>
          <Text style={[styles.busStop, styles.shareTypo]}>Bus Stop</Text>
        </View>
        <Image
          style={[styles.image46Icon, styles.frameLayout1]}
          contentFit="cover"
          source={require("../assets/image-46.png")}
        />
        <View style={styles.abdullahChowkTerminalParent}>
          <Text style={[styles.abdullahChowkTerminal1, styles.abdullahTypo]}>
            Abdullah Chowk (Terminal)
          </Text>
          <Pressable
            style={styles.image14}
            onPress={() => navigation.navigate("SpecificBusRouteScreen")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-14.png")}
            />
          </Pressable>
        </View>
      </View>
      <Image
        style={styles.image44Icon}
        contentFit="cover"
        source={require("../assets/image-44.png")}
      />
      <Image
        style={[styles.image7Icon, styles.textLayout]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    width: 393,
    position: "absolute",
  },
  wrapperLayout: {
    height: 28,
    backgroundColor: Color.colorLime,
    borderRadius: Border.br_3xs,
    width: 83,
    position: "absolute",
    overflow: "hidden",
  },
  textLayout: {
    height: 25,
    position: "absolute",
  },
  shareTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    position: "absolute",
  },
  frameLayout: {
    height: 8,
    width: 392,
    left: 0,
    position: "absolute",
  },
  abdullahTypo: {
    height: 23,
    width: 248,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    color: Color.iOS000000,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  text: {
    left: 6,
    fontFamily: FontFamily.k2DSemiBold,
    textAlign: "center",
    width: 68,
    color: Color.iOS000000,
    fontWeight: "600",
    height: 25,
    fontSize: FontSize.size_xl,
    top: 0,
  },
  wrapper: {
    top: 46,
    left: 18,
  },
  abdullahChowkTerminal: {
    top: 41,
    left: 110,
    width: 167,
    height: 46,
    color: Color.iOS000000,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
  },
  frameChild: {
    top: 199,
  },
  frameItem: {
    top: 248,
  },
  share: {
    top: 121,
    left: 340,
    fontSize: FontSize.size_mini,
    width: 43,
    height: 18,
    color: Color.iOS000000,
  },
  frameInner: {
    top: 20,
    left: 159,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 5,
    width: 65,
    height: 5,
    position: "absolute",
  },
  kbGlWrapper: {
    top: 158,
    left: 9,
  },
  kbGlContainer: {
    left: 8,
    top: 215,
  },
  abdullahChowk: {
    top: 160,
    left: 97,
    height: 23,
    width: 248,
  },
  numaishAbdullah: {
    left: 97,
    height: 23,
    width: 248,
    top: 215,
  },
  busStop: {
    top: 102,
    fontSize: FontSize.size_lg,
    color: "#3c4043",
    height: 33,
    width: 83,
    fontFamily: FontFamily.robotoBold,
    left: 18,
  },
  frameGroup: {
    top: 459,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 393,
    left: 0,
    width: 393,
    overflow: "hidden",
  },
  image46Icon: {
    left: 2,
    height: 459,
    top: 0,
  },
  abdullahChowkTerminal1: {
    top: 10,
    left: 56,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image14: {
    left: 14,
    top: 13,
    width: 20,
    height: 20,
    position: "absolute",
  },
  abdullahChowkTerminalParent: {
    top: 31,
    backgroundColor: Color.iOSFFFFFF,
    width: 361,
    height: 44,
    left: 18,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    left: 0,
    width: 393,
    overflow: "hidden",
    top: 0,
    height: 852,
  },
  image44Icon: {
    top: 546,
    left: 346,
    width: 30,
    height: 30,
    position: "absolute",
  },
  image7Icon: {
    top: 780,
    left: 136,
    width: 25,
  },
  specificBusStationScreen: {
    backgroundColor: Color.colorTeal,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
  },
});

export default SpecificBusStationScreen;
