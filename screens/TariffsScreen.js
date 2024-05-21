import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

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

const TariffsScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  // Function to go back when back button is pressed
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundFrame}>
        <Pressable onPress={goBack} style={styles.headerBox}>
          <Image
            source={require("../assets/image-2623.png")}
            style={styles.backIcon}
          />
          <Text style={styles.headerTitle}>Tariffs</Text>
        </Pressable>
      </View>
      <View style={styles.whiteFrame}>
        <View style={styles.tariffsHeader}>
          <Image
            source={require("../assets/image-2616.png")}
            style={styles.tariffIcon}
          />
          <Text style={styles.title}>Tariffs</Text>
        </View>
        <ScrollView>
          <View style={styles.listItem}>
            <Text style={styles.routes}>R1, R2, R3, R4, R10, R11</Text>
            <Text style={styles.price}>55 Rupees</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.routes}>R9, PBS EV1, EV2</Text>
            <Text style={styles.price}>50/100 Rupees</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.routes}>Karachi Route Green Line</Text>
            <Text style={styles.price}>
              55 Rupees Fixed (Will vary if you have a card)
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080",
  },
  backgroundFrame: {
    flex: 1,
    height: height * 0.2,
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
    height: height * 0.8,
    backgroundColor: Color.colorWhite,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  tariffsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: FontSize.size_xx,
    marginLeft: 10,
    fontFamily: FontFamily.robotoMedium,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  listItem: {
    paddingVertical: 20,
    borderBottomWidth: Border.separatorBold,
    borderBottomColor: Color.colorDark, // Darker color for visibility
  },
  routes: {
    fontSize: FontSize.size_xl,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: FontSize.size_l,
    fontWeight: "bold",
    color: "#666",
    marginTop: 5,
  },
  tariffIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: FontSize.size_xx,
    fontWeight: "bold",
    fontFamily: FontFamily.robotoMedium,
  },
});

export default TariffsScreen;
