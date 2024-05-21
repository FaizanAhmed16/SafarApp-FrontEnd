import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, Padding, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IOSAlphbeticKeyboardEngli = ({
  componentSuggestionItemHeight,
  componentSuggestionItemMarginLeft,
  textOverflow,
  textWidth,
  textOverflow1,
  textWidth1,
}) => {
  const iOSAlphbeticKeyboardEngliStyle = useMemo(() => {
    return {
      ...getStyleValue("height", componentSuggestionItemHeight),
      ...getStyleValue("marginLeft", componentSuggestionItemMarginLeft),
    };
  }, [componentSuggestionItemHeight, componentSuggestionItemMarginLeft]);

  const seperatorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", textOverflow),
      ...getStyleValue("width", textWidth),
    };
  }, [textOverflow, textWidth]);

  const seperatorIcon1Style = useMemo(() => {
    return {
      ...getStyleValue("overflow", textOverflow1),
      ...getStyleValue("width", textWidth1),
    };
  }, [textOverflow1, textWidth1]);

  return (
    <View
      style={[styles.iosAlphbeticKeyboardEngli, iOSAlphbeticKeyboardEngliStyle]}
    >
      <View style={[styles.componentSuggestionBar, styles.componentFlexBox1]}>
        <View style={styles.componentItemFlexBox}>
          <Text style={[styles.text, styles.textTypo1]} numberOfLines={1}>
            Suggest
          </Text>
        </View>
        <Image
          style={[styles.seperatorIcon, seperatorIconStyle]}
          contentFit="cover"
          source={require("../assets/seperator.png")}
        />
        <View
          style={[styles.componentSuggestionItem1, styles.componentItemFlexBox]}
        >
          <Text style={[styles.text, styles.textTypo1]} numberOfLines={1}>
            Suggest
          </Text>
        </View>
        <Image
          style={[styles.seperatorIcon, seperatorIcon1Style]}
          contentFit="cover"
          source={require("../assets/seperator1.png")}
        />
        <View
          style={[styles.componentSuggestionItem1, styles.componentItemFlexBox]}
        >
          <Text style={[styles.text, styles.textTypo1]} numberOfLines={1}>
            Suggest
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.keysLayoutAlphabeticEng,
          styles.keysLayoutAlphabeticEngBg,
        ]}
      >
        <View style={styles.rowAlphabetic}>
          <View style={styles.componentShadowBox3}>
            <Text style={styles.text3}>Q</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>W</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>E</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>R</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>T</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>Y</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>U</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>I</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>O</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>P</Text>
          </View>
        </View>
        <View style={[styles.rowAlphabetic1, styles.rowFlexBox]}>
          <View style={styles.componentShadowBox3}>
            <Text style={styles.text3}>A</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>S</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>D</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>F</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>G</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>H</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>J</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>K</Text>
          </View>
          <View style={styles.componentShadowBox2}>
            <Text style={styles.text3}>L</Text>
          </View>
        </View>
        <View style={styles.rowFlexBox}>
          <View style={[styles.componentKey19, styles.componentShadowBox1]}>
            <Text style={[styles.text22, styles.textTypo]}>􀆞</Text>
          </View>
          <View
            style={[styles.rowAlphabetic2, styles.rowAlphabetic2SpaceBlock]}
          >
            <View style={styles.componentShadowBox3}>
              <Text style={styles.text3}>Z</Text>
            </View>
            <View style={styles.componentShadowBox2}>
              <Text style={styles.text3}>X</Text>
            </View>
            <View style={styles.componentShadowBox2}>
              <Text style={styles.text3}>C</Text>
            </View>
            <View style={styles.componentShadowBox2}>
              <Text style={styles.text3}>V</Text>
            </View>
            <View style={styles.componentShadowBox2}>
              <Text style={styles.text3}>B</Text>
            </View>
            <View style={styles.componentShadowBox2}>
              <Text style={styles.text3}>N</Text>
            </View>
            <View style={styles.componentShadowBox2}>
              <Text style={styles.text3}>M</Text>
            </View>
          </View>
          <View style={[styles.componentKey27, styles.componentFlexBox]}>
            <Text style={[styles.text22, styles.textTypo]}>􀆛</Text>
          </View>
        </View>
        <View style={styles.rowFlexBox}>
          <View style={[styles.componentKey28, styles.componentFlexBox]}>
            <Text style={[styles.text22, styles.textTypo]}>123</Text>
          </View>
          <View style={[styles.componentKey29, styles.componentShadowBox]}>
            <Text style={styles.textTypo}>space</Text>
          </View>
          <View style={[styles.componentKey30, styles.componentShadowBox]}>
            <Text style={[styles.text22, styles.textTypo]}>Go</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.componentHomeIndicatorSec,
          styles.keysLayoutAlphabeticEngBg,
        ]}
      >
        <View style={styles.keys}>
          <View style={styles.componentKey31}>
            <Text style={[styles.text34, styles.textTypo1]}>􀎸</Text>
          </View>
          <View style={styles.componentKey31}>
            <Text style={[styles.text34, styles.textTypo1]}>􀊰</Text>
          </View>
        </View>
        <View style={[styles.componentHomeIndicator, styles.componentFlexBox1]}>
          <View style={styles.indicator} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.iOSMediumBody,
  },
  componentItemFlexBox: {
    height: 34,
    borderRadius: Border.br_8xs_6,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  keysLayoutAlphabeticEngBg: {
    backgroundColor: Color.iOSAlfaCCCED376,
    alignSelf: "stretch",
  },
  rowFlexBox: {
    marginTop: 12,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  componentShadowBox1: {
    padding: Padding.p_2xs,
    height: 42,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    borderRadius: Border.br_8xs_6,
    overflow: "hidden",
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.iOSMediumBody_size,
    color: Color.iOS000000,
    textAlign: "center",
    fontFamily: FontFamily.iOSMediumBody,
    flex: 1,
  },
  rowAlphabetic2SpaceBlock: {
    marginLeft: 1,
    flexDirection: "row",
  },
  componentFlexBox: {
    backgroundColor: Color.iOSADB3BC,
    justifyContent: "center",
    alignItems: "center",
  },
  componentShadowBox: {
    marginLeft: 6,
    padding: Padding.p_2xs,
    height: 42,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    borderRadius: Border.br_8xs_6,
    flexDirection: "row",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.iOSDefaultBody_size,
    lineHeight: 20,
    color: Color.iOS3A3B3D,
    height: 20,
    flex: 1,
    overflow: "hidden",
  },
  seperatorIcon: {
    maxWidth: "100%",
    height: 24,
    marginLeft: 2,
    overflow: "hidden",
  },
  componentSuggestionItem1: {
    marginLeft: 2,
  },
  componentSuggestionBar: {
    paddingHorizontal: Padding.p_12xs,
    paddingTop: Padding.p_3xs,
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
    backgroundColor: Color.iOSFFFFFF,
  },
  text3: {
    fontSize: FontSize.iOSDefaultTitle2_size,
    lineHeight: 28,
    color: Color.iOS000000,
    textAlign: "center",
    fontFamily: FontFamily.iOSMediumBody,
    flex: 1,
  },
  componentShadowBox3: {
    padding: Padding.p_6xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    borderRadius: Border.br_8xs_6,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.iOSFFFFFF,
  },
  componentShadowBox2: {
    marginLeft: 5,
    padding: Padding.p_6xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    borderRadius: Border.br_8xs_6,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.iOSFFFFFF,
  },
  rowAlphabetic: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  rowAlphabetic1: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
  },
  text22: {
    height: 20,
  },
  componentKey19: {
    width: 42,
    padding: Padding.p_2xs,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.iOSFFFFFF,
  },
  rowAlphabetic2: {
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    flex: 1,
  },
  componentKey27: {
    marginLeft: 1,
    flexDirection: "row",
    padding: Padding.p_2xs,
    height: 42,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    borderRadius: Border.br_8xs_6,
    overflow: "hidden",
    width: 42,
  },
  componentKey28: {
    width: 87,
    padding: Padding.p_2xs,
    height: 42,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    borderRadius: Border.br_8xs_6,
    overflow: "hidden",
    flexDirection: "row",
  },
  componentKey29: {
    flex: 1,
    backgroundColor: Color.iOSFFFFFF,
  },
  componentKey30: {
    width: 88,
    backgroundColor: Color.iOSADB3BC,
    justifyContent: "center",
    alignItems: "center",
  },
  keysLayoutAlphabeticEng: {
    paddingHorizontal: Padding.p_10xs,
    paddingVertical: Padding.p_5xs,
  },
  text34: {
    fontSize: FontSize.size_7xl,
    color: Color.iOS50555C,
  },
  componentKey31: {
    width: 47,
    height: 47,
    padding: Padding.p_5xs,
    borderRadius: Border.br_8xs_6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  keys: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_4xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  indicator: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.iOS000000,
    width: 134,
    height: 5,
  },
  componentHomeIndicator: {
    paddingHorizontal: Padding.p_101xl,
    paddingTop: Padding.p_12xs,
    paddingBottom: Padding.p_4xs,
    alignSelf: "stretch",
  },
  componentHomeIndicatorSec: {
    justifyContent: "flex-end",
  },
  iosAlphbeticKeyboardEngli: {
    position: "absolute",
    marginLeft: -196.5,
    bottom: 0,
    left: "50%",
    width: 393,
    height: 335,
    backgroundColor: Color.iOSFFFFFF,
  },
});

export default IOSAlphbeticKeyboardEngli;
