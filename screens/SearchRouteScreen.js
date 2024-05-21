import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  Image,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import axios from "axios";

const Color = {
  colorTeal: "#008080",
  colorWhite: "#FFFFFF",
  colorDarkGray: "#A9A9A9",
  colorGray: "#808080",
  colorBlack: "#000000",
};

const FontFamily = {
  robotoMedium: "Roboto-Medium",
};

const FontSize = {
  size_l: 18,
  size_m: 16,
};

const Border = {
  br_small: 5,
  br_large: 20,
};

async function findNearestStops(currentLocation, destination) {
  try {
    const response = await axios.post(
      "http://192.168.0.114:5000/users/public/find-nearest-stops",
      {
        userLocations: [
          { coordinates: [currentLocation.lng, currentLocation.lat] },
          { coordinates: [destination.lng, destination.lat] },
        ],
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching nearest stops:", error);
    return [];
  }
}

// Function to fetch routes containing the nearest stops
async function findRoutesContainingStops(nearestStops) {
  try {
    const response = await axios.post(
      "http://192.168.0.114:5000/users/public/find-routes",
      {
        nearestStops,
      }
    );
    return response.data; // Returns an array of routes
  } catch (error) {
    console.error("Error fetching routes:", error);
    return []; // Return empty array on error
  }
}

const SearchRouteScreen = () => {
  const navigation = useNavigation();
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleProceed = async () => {
    if (currentLocation && destination) {
      setIsSearching(true);
      try {
        const nearestStops = await findNearestStops(
          currentLocation,
          destination
        );
        const routes = await findRoutesContainingStops(nearestStops);
        // console.log("Routes received:", routes);
        setIsSearching(false);
        navigation.navigate("SearchRouteScreen1", { routes: routes || [] });
      } catch (error) {
        console.error("Error fetching routes:", error);
        setIsSearching(false); // Hide loading indicator on error
        navigation.navigate("SearchRouteScreen1", { routes: [] }); // Navigate with empty routes
      }
    } else {
      alert("Please select both current location and destination.");
    }
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

        <View style={styles.searchRow}>
          <Image
            source={require("../assets/image-15.png")}
            style={styles.pinIcon}
          />
          <GooglePlacesAutocomplete
            placeholder="Enter current location"
            onPress={(data, details = null) => {
              setCurrentLocation(details.geometry.location);
            }}
            query={{
              key: "AIzaSyAVSnSexdpnLKAxA3cfhFWmLMPDv7WrseA",
              language: "en",
              components: "country:pk",
            }}
            styles={{
              textInput: styles.searchInput,
              listView: styles.listView,
            }}
            fetchDetails={true}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={200}
            textInputProps={{
              onFocus: () => setIsSearching(true),
              onBlur: () => setIsSearching(false),
            }}
            listViewDisplayed={isSearching}
          />
        </View>

        <View style={styles.searchRow}>
          <Image
            source={require("../assets/image-15.png")}
            style={styles.pinIcon}
          />
          <GooglePlacesAutocomplete
            placeholder="Enter your destination"
            onPress={(data, details = null) => {
              setDestination(details.geometry.location);
            }}
            query={{
              key: "AIzaSyAVSnSexdpnLKAxA3cfhFWmLMPDv7WrseA",
              language: "en",
              components: "country:pk",
            }}
            styles={{
              textInput: styles.searchInput,
              listView: styles.listView,
            }}
            fetchDetails={true}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={200}
            textInputProps={{
              onFocus: () => setIsSearching(true),
              onBlur: () => setIsSearching(false),
            }}
            listViewDisplayed={isSearching}
          />
        </View>

        {!isSearching && (
          <View>
            <Text style={styles.recentSearchTitle}>Recent Searches</Text>
            <View style={styles.recentSearchItem}>
              <Image
                source={require("../assets/image-15.png")}
                style={styles.historyIcon}
              />
              <Text style={styles.recentSearchText}>Cantt Station</Text>
            </View>
            <View style={styles.recentSearchItem}>
              <Image
                source={require("../assets/image-15.png")}
                style={styles.historyIcon}
              />
              <Text style={styles.recentSearchText}>Khayaban-e-Muhafiz</Text>
            </View>
            <View style={styles.recentSearchItem}>
              <Image
                source={require("../assets/image-15.png")}
                style={styles.historyIcon}
              />
              <Text style={styles.recentSearchText}>
                Korangi Crossing Bus Stop
              </Text>
            </View>
          </View>
        )}

        {isSearching && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Color.colorTeal} />
          </View>
        )}

        {!isSearching && (
          <Pressable style={styles.proceedButton} onPress={handleProceed}>
            <Text style={styles.proceedButtonText}>Proceed</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  listView: {
    color: "black",
    backgroundColor: "white",
    position: "absolute",
    top: 100, // Adjust if needed to position the list results
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  backgroundFrame: {
    height: height * 0.15, // 15% of the screen height
    backgroundColor: Color.colorTeal, // Teal color
  },
  whiteFrame: {
    height: height * 0.85, // 85% of the screen height
    backgroundColor: Color.colorWhite,
    borderTopLeftRadius: Border.br_large,
    borderTopRightRadius: Border.br_large,
    paddingTop: 20,
    paddingHorizontal: 16,
    marginTop: -20, // adjust as needed for visual overlap
  },
  backButton: {
    position: "absolute",
    top: 10, // adjust as needed
    left: 10, // adjust as needed
    zIndex: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 20,
  },
  pinIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorGray,
    borderWidth: 1,
    borderRadius: Border.br_small,
    paddingHorizontal: 10,
    fontSize: FontSize.size_l,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
  },
  recentSearchTitle: {
    fontSize: FontSize.size_m,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorDarkGray,
    paddingVertical: 4,
  },
  recentSearchItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  historyIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  recentSearchText: {
    fontSize: FontSize.size_m,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
  },
  proceedButton: {
    backgroundColor: Color.colorTeal,
    borderRadius: Border.br_small,
    paddingVertical: 12,
    paddingHorizontal: 100,
    alignItems: "center",
    marginTop: 10,
  },
  proceedButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_l,
    fontFamily: FontFamily.robotoMedium,
  },
  loadingContainer: {
    flex: 1, // Cover the entire view while loading
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchRouteScreen;
