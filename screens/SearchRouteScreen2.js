import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SearchRouteScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchRouteScreen3}>
      <View style={styles.rectangleParent}>
        <View style={styles.kbGlWrapper}>
          <Text style={styles.kbGl}>KB-GL</Text>
        </View>
        <Pressable
          style={styles.viewDetailsButton}
          onPress={() => navigation.navigate("DetailsScreen")} // Adjust as per actual route
        >
          <Text style={styles.viewDetailsText}>View Details</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchRouteScreen3: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: Color.colorTeal,
  },
  rectangleParent: {
    marginTop: 20,
    height: 100,
    backgroundColor: Color.iOSFFFFFF,
    alignItems: "center",
    justifyContent: "space-around",
  },
  kbGlWrapper: {
    padding: 10,
    backgroundColor: Color.colorLime, // Background color of the button
  },
  kbGl: {
    fontWeight: "600",
    fontFamily: FontFamily.k2DSemiBold,
    textAlign: "center",
    color: Color.iOS000000,
    fontSize: FontSize.size_xl,
  },
  viewDetailsButton: {
    padding: 10,
    backgroundColor: Color.colorTeal, // Button color, can be adjusted
  },
  viewDetailsText: {
    color: Color.iOSFFFFFF, // Text color
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_xl,
  },
});
export default SearchRouteScreen2;
