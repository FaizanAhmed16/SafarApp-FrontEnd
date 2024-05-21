import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Dimensions,
  Pressable,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

// Use Dimensions to get the full screen height
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  backgroundFrame: {
    height: height * 0.2, // 20% of the screen height
    backgroundColor: "#008080", // Teal color
  },
  whiteFrame: {
    height: height * 0.8, // 80% of the screen height
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  routeLabel: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  routeLabelText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  routeDetails: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 10,
  },
  routeName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#000",
  },
});

const BusesScreen = () => {
  const navigation = useNavigation();
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.114:5000/users/public/routes/get"
        );
        const data = response.data;
        // Extract only routeName from the fetched data
        const extractedRouteNames = data.map((route) => route.routeName);
        setRoutes(extractedRouteNames); // Update state with route names only
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching routes:", error);
        // Handle errors as needed
      }
    };
    fetchRoutes();
  }, []);

  const handleRoutePress = (routeName) => {
    navigation.navigate("SpecificBusRouteScreen", { routeName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundFrame} />
      <ScrollView style={styles.whiteFrame}>
        <View style={styles.header}>
          <Image
            style={styles.headerIcon}
            source={require("../assets/image-231.png")} // Adjust your icon path
          />
          <Text style={styles.headerText}>Routes</Text>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000FF" />
        ) : routes.length > 0 ? (
          routes.map((routeName, index) => (
            <Pressable
              key={index}
              style={styles.listItem}
              onPress={() => handleRoutePress(routeName)}
            >
              <Image
                source={require("../assets/busroute.png")}
                style={styles.icon}
              />
              <Text style={styles.routeName}>{routeName}</Text>
            </Pressable>
          ))
        ) : (
          <Text style={styles.emptyText}>No routes available</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default BusesScreen;
