import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Color = {
  colorTeal: "#008080",
  colorWhite: "#FFFFFF",
};

const FontFamily = {
  robotoMedium: "Roboto-Medium",
};

const FontSize = {
  size_l: 18,
  size_xl: 24,
  size_xx: 26, // Added for heading size
};

const Border = {
  br_small: 5,
  br_large: 20,
};

const SearchRouteScreen1 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routes = route.params?.routes || []; // Receive the routes from navigation parameters

  const renderItem = ({ item }) => {
    return (
      <View style={styles.routeContainer}>
        <Text style={styles.routeText}>{item}</Text>
        <Pressable
          style={styles.detailsButton}
          onPress={() =>
            navigation.navigate("SpecificBusRouteScreen", { routeName: item })
          }
        >
          <Text style={styles.buttonText}>View Details</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundFrame} />
      <View style={styles.whiteFrame}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../assets/image-14.png")}
            style={styles.backIcon}
          />
        </Pressable>
        <Text style={styles.heading}>Routes Available</Text>
        <FlatList
          data={routes}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={<Text>No routes available.</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  backgroundFrame: {
    height: height * 0.15, // 15% of the screen height
    backgroundColor: Color.colorTeal, // Teal color
  },
  whiteFrame: {
    flex: 1, // Make whiteFrame flexible to use remaining space
    backgroundColor: Color.colorWhite,
    borderTopLeftRadius: Border.br_large,
    borderTopRightRadius: Border.br_large,
    paddingTop: 20,
    paddingHorizontal: 16,
    marginTop: -20, // Adjust as needed for visual overlap
  },
  backButton: {
    position: "absolute",
    top: 10, // Adjust as needed
    left: 10, // Adjust as needed
    zIndex: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 400,
  },
  routeContainer: {
    backgroundColor: Color.colorTeal,
    padding: 20,
    marginVertical: 10,
    width: "90%",
    borderRadius: Border.br_large,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  routeText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoMedium,
    flex: 1,
  },
  detailsButton: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_small,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: Color.colorTeal,
    fontSize: FontSize.size_l,
    fontFamily: FontFamily.robotoMedium,
  },
  heading: {
    fontSize: FontSize.size_xx,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorTeal,
    textAlign: "center", // Center the heading
    fontWeight: "bold", // Make the text bold
    marginVertical: -15, // Add space around the heading
  },
});

export default SearchRouteScreen1;
