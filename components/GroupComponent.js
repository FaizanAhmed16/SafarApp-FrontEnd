import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const GroupComponent1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.vectorParent, styles.groupChildPosition]}>
      <Image
        style={[styles.groupChild, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-114.png")}
      />
      <Pressable
        style={styles.groupItem}
        onPress={() => navigation.navigate("SpecificBusRouteScreen")}
      />
      <Text style={[styles.viewDetails, styles.textFlexBox]}>View Details</Text>
      <Text style={[styles.upMore, styles.upMoreTypo]}>Up More</Text>
      <Text style={[styles.numaish, styles.upMoreTypo]}>Numaish</Text>
      <Text style={[styles.am, styles.amTypo]}>8:00 am</Text>
      <Text style={[styles.am1, styles.amTypo]}>8:30 am</Text>
      <Image
        style={[styles.groupInner, styles.groupInnerLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.groupInnerLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/image-71.png")}
      />
      <Image
        style={styles.image2613Icon}
        contentFit="cover"
        source={require("../assets/image-2613.png")}
      />
      <Image
        style={styles.image2614Icon}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>...................</Text>
      <Image
        style={[styles.groupChild1, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Image
        style={[styles.groupChild2, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 175,
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  upMoreTypo: {
    color: Color.iOS000000,
    fontSize: FontSize.size_xl,
    top: 43,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  amTypo: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    top: 17,
    color: Color.iOS000000,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 14,
    width: 14,
    position: "absolute",
  },
  groupChildLayout: {
    height: 32,
    width: 32,
    top: 115,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -172,
    top: 0,
    borderRadius: Border.br_xl,
    width: 343,
  },
  groupItem: {
    marginLeft: -72,
    top: 129,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTeal,
    width: 145,
    height: 33,
    left: "50%",
    position: "absolute",
  },
  viewDetails: {
    marginLeft: -41,
    top: 136,
    color: Color.iOSFFFFFF,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    left: "50%",
  },
  upMore: {
    width: 113,
    left: 42,
  },
  numaish: {
    left: 233,
  },
  am: {
    left: 42,
  },
  am1: {
    left: 233,
  },
  groupInner: {
    top: 102,
    left: 104,
  },
  ellipseIcon: {
    top: 101,
    left: 259,
  },
  image7Icon: {
    top: 40,
    left: 132,
    width: 25,
    height: 25,
    position: "absolute",
  },
  image2613Icon: {
    top: 90,
    left: 67,
    width: 30,
    height: 30,
    position: "absolute",
  },
  image2614Icon: {
    top: 95,
    left: 275,
    width: 20,
    height: 20,
    position: "absolute",
  },
  text: {
    top: 80,
    left: 126,
    fontSize: FontSize.size_10xl,
    fontWeight: "600",
    fontFamily: FontFamily.k2DSemiBold,
    color: Color.colorDimgray_100,
  },
  groupChild1: {
    left: 344,
  },
  groupChild2: {
    left: 0,
  },
  vectorParent: {
    marginLeft: -187.5,
    top: 223,
    width: 376,
  },
});

export default GroupComponent1;
