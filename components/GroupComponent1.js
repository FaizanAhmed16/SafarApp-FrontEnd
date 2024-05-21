import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({ korangiCrossingBusTop, korangiCrossingBusLeft }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", korangiCrossingBusTop),
      ...getStyleValue("left", korangiCrossingBusLeft),
    };
  }, [korangiCrossingBusTop, korangiCrossingBusLeft]);

  return (
    <View style={[styles.image15Parent, groupViewStyle]}>
      <Image
        style={[styles.image15Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <Image
        style={[styles.image16Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <Image
        style={[styles.image17Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <Text style={styles.recentSearches}>Recent Searches</Text>
      <Text style={[styles.canttStation, styles.canttStationTypo]}>
        Cantt Station
      </Text>
      <Text style={[styles.korangiCrossingBus, styles.canttStationTypo]}>
        Korangi Crossing Bus Stop
      </Text>
      <Text style={[styles.khayabanEMuhafiz, styles.canttStationTypo]}>
        Khayaban-e-Muhafiz
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 20,
    width: 20,
    left: 0,
    position: "absolute",
  },
  canttStationTypo: {
    height: 16,
    width: 286,
    left: 30,
    textAlign: "left",
    color: Color.iOS000000,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  image15Icon: {
    top: 38,
  },
  image16Icon: {
    top: 106,
  },
  image17Icon: {
    top: 72,
  },
  recentSearches: {
    top: 0,
    left: 5,
    width: 149,
    height: 32,
    textAlign: "left",
    color: Color.iOS000000,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  canttStation: {
    top: 35,
  },
  korangiCrossingBus: {
    top: 104,
  },
  khayabanEMuhafiz: {
    top: 69,
  },
  image15Parent: {
    top: 107,
    left: 50,
    width: 316,
    height: 126,
    position: "absolute",
  },
});

export default GroupComponent;
