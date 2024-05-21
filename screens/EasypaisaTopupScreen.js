import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const Color = {
  colorTeal: "#008080",
  colorWhite: "#FFFFFF",
  colorDark: "#000000",
};

const FontFamily = {
  robotoMedium: "Roboto-Medium",
};

const FontSize = {
  size_l: 18,
  size_xl: 22,
  size_xx: 24,
};

const Border = {
  br_small: 5,
  br_large: 20,
  separatorBold: 2,
};

const EasypaisaTopUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backgroundFrame}>
        <Pressable onPress={() => navigation.goBack()} style={styles.headerBox}>
          <Image
            source={require("../assets/image-2623.png")}
            style={styles.backIcon}
          />
          <Text style={styles.headerTitle}>EasyPaisa Top Up</Text>
        </Pressable>
      </View>
      <View style={styles.whiteFrame}>
        <Image
          source={require("../assets/work-in-progress.png")}
          style={styles.workInProgressImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorTeal,
  },
  backgroundFrame: {
    flex: 0.2,
    height: "20%",
    backgroundColor: Color.colorTeal,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    padding: 10,
    borderRadius: Border.br_small,
  },
  whiteFrame: {
    flex: 0.8,
    height: "80%",
    backgroundColor: Color.colorWhite,
    borderTopLeftRadius: Border.br_large,
    borderTopRightRadius: Border.br_large,
    paddingTop: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: FontSize.size_xl,
    marginLeft: 10,
    fontFamily: FontFamily.robotoMedium,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  workInProgressImage: {
    width: 100,
    height: 100,
  },
});

export default EasypaisaTopUpScreen;
