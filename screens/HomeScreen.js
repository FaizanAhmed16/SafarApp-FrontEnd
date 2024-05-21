import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const HomeScreen = ({ navigation }) => {
  // Dummy function to handle map press - replace with your actual function
  const onMapPress = () => {
    console.log("Map pressed!");
  };

  // Dummy function for navigation - replace with your actual navigation logic
  const navigateToBookTicket = () => {
    navigation.navigate("BookTicketScreen");
  };

  return (
    <View style={styles.container}>
      {/* Top Icons */}
      <Pressable onPress={() => navigation.openDrawer()}>
        <Image
          source={require("../assets/image-5.png")}
          style={styles.menuIcon}
        />
      </Pressable>
      <Image
        source={require("../assets/image-4.png")}
        style={styles.bellIcon}
      />

      {/* Search Bar */}
      <Pressable onPress={() => navigation.navigate("SearchScreen")}>
        <View style={styles.searchBar}>
          <Image
            source={require("../assets/image-6.png")}
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>Where do you want to go?</Text>
        </View>
      </Pressable>

      {/* Map Container */}
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 24.872298687029534,
            longitude: 67.03531383195934,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={onMapPress}
        />
      </View>

      {/* Bottom White Frame */}
      <View style={styles.bottomFrame}>
        <Text style={styles.savedRoutesHeading}>Saved Routes</Text>

        {/* Saved Routes List */}
        <View style={styles.savedRoute}>
          <Image
            source={require("../assets/image-10.png")}
            style={styles.routeIcon}
          />
          <Text style={styles.routeText}>Abdullah Chowk - Numaish</Text>
        </View>
        <View style={styles.savedRoute}>
          <Image
            source={require("../assets/image-11.png")}
            style={styles.routeIcon}
          />
          <Text style={styles.routeText}>Power House Chowrangi - Korangi</Text>
        </View>

        {/* Book Ticket Button */}
        <Pressable
          onPress={navigateToBookTicket}
          style={styles.bookTicketButton}
        >
          <Text style={styles.bookTicketText}>Book Ticket</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080", // Teal background color
  },
  menuIcon: {
    position: "absolute",
    top: 40,
    left: 16,
    width: 24,
    height: 24,
  },
  bellIcon: {
    position: "absolute",
    top: 40,
    right: 16,
    width: 24,
    height: 24,
  },
  searchBar: {
    flexDirection: "row",
    position: "absolute",
    top: 80,
    left: 16,
    right: 16,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 4,
    alignItems: "center",
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  searchText: {
    flex: 1,
    fontSize: 16,
  },
  mapContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 140,
    borderRadius: 6,
    overflow: "hidden",
  },
  map: {
    flex: 1,
  },
  // bottomFrame: {
  //   flex: 1,
  //   backgroundColor: "#FFF",
  //   paddingTop: 20,
  //   paddingHorizontal: 16,
  // },
  savedRoutesHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  // savedRoute: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginBottom: 16,
  // },
  routeIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  routeText: {
    fontSize: 16,
  },

  bookTicketText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  bottomFrame: {
    backgroundColor: "#FFF",
    paddingTop: 10, // Reduced from 20 to 10
    paddingHorizontal: 16,
    paddingBottom: 10, // Reduced from 20 to 10
  },
  savedRoute: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8, // If it was more before, reduce it to something like 8
  },
  bookTicketButton: {
    backgroundColor: "#FFA500", // Example color
    paddingVertical: 10, // If it was more before, reduce it to something like 10
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 8, // If it was more before, reduce it to something like 8
    alignItems: "center",
  },
});

export default HomeScreen;
