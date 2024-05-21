import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const FontFamily = {
  robotoMedium: "Roboto-Medium",
};

const FontSize = {
  size_l: 18,
  size_xl: 22,
  size_xx: 26, // Added for heading size
};

const Border = {
  br_small: 5,
  br_large: 20,
};

const SpecificBusRouteScreen = ({ route }) => {
  const { routeName } = route.params;
  const [mapRegion, setMapRegion] = useState(null);
  const [stops, setStops] = useState([]);
  const navigation = useNavigation(); // Get the navigation object

  useEffect(() => {
    const fetchRouteData = async () => {
      if (routeName) {
        try {
          // Corrected URL string
          const url = `http://192.168.0.114:5000/users/public/by-name/${encodeURIComponent(
            routeName
          )}`;
          const response = await axios.get(url);
          const routeData = response.data;

          // Extract stop coordinates and names
          const stopCoordinates = routeData.stops.map((stop) => ({
            latitude: stop.stopId.location.coordinates[0], // Ensure latitude is the first item
            longitude: stop.stopId.location.coordinates[1], // Ensure longitude is the second item
            name: stop.stopName, // Corrected to use stopName directly
          }));

          // Update the stops state
          setStops(stopCoordinates);

          // Setting the map region based on the stops
          if (stopCoordinates.length > 0) {
            const latitudes = stopCoordinates.map((stop) => stop.latitude);
            const longitudes = stopCoordinates.map((stop) => stop.longitude);
            const maxLat = Math.max(...latitudes);
            const minLat = Math.min(...latitudes);
            const maxLon = Math.max(...longitudes);
            const minLon = Math.min(...longitudes);

            setMapRegion({
              latitude: (maxLat + minLat) / 2,
              longitude: (maxLon + minLon) / 2,
              latitudeDelta: (maxLat - minLat) * 1.1, // Slightly increase the delta for padding
              longitudeDelta: (maxLon - minLon) * 1.1,
            });
          }
        } catch (error) {
          console.error("Failed to fetch route data:", error);
        }
      }
    };

    fetchRouteData();
  }, [routeName]);

  if (!mapRegion || stops.length === 0) {
    return <Text>Loading route information...</Text>;
  }

  const firstStop = stops[0].name;
  const lastStop = stops[stops.length - 1].name;

  return (
    <View style={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={mapRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsTraffic={true}
        zoomEnabled={true}
        rotateEnabled={true}
        scrollEnabled={true}
        pitchEnabled={true}
      >
        {stops.map((stop, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: stop.latitude, longitude: stop.longitude }}
            title={stop.name}
          />
        ))}
        <Polyline coordinates={stops} strokeColor="#FF0000" strokeWidth={2} />
      </MapView>
      <ScrollView style={styles.list}>
        <View style={styles.headerContainer}>
          <View style={styles.routeBox}>
            <Text style={styles.routeText}>{routeName}</Text>
          </View>
          <Text style={styles.headingText}>
            {firstStop} - {lastStop}
          </Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("BookTicketScreen")} // Navigate to BookTicketScreen
        >
          <Text style={styles.buttonText}>Buy Ticket</Text>
        </Pressable>
        {stops.map((stop, index) => (
          <View key={index} style={styles.stopItem}>
            <Image
              source={require("../assets/image-39.png")}
              style={styles.stopIcon}
            />
            <Text style={styles.stopName}>{stop.name}</Text>
            {index < stops.length - 1 && ( // Check if not the last stop
              <View style={styles.separator} />
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "60%",
  },
  list: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    textAlign: "left",
  },
  stopItem: {
    padding: 10,
    fontSize: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  routeBox: {
    backgroundColor: "rgb(0, 128, 128)",
    padding: 10,
    borderRadius: 5,
  },
  routeText: {
    color: "white",
    fontSize: 16,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_xl,
  },
  button: {
    backgroundColor: "#F6C049",
    padding: 15,
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: FontSize.size_xl,
    fontWeight: "bold",
    fontFamily: FontFamily.robotoMedium,
  },
  stopIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  stopName: {
    fontSize: FontSize.size_l,
    marginLeft: 30,
    marginTop: -22, // Increased font size (adjust as needed)
  },
  separator: {
    height: 2,
    backgroundColor: "#888", // Adjust color and thickness as needed
    marginHorizontal: 0,
    marginVertical: 5,
    // Adjust margin for horizontal alignment
  },
});

export default SpecificBusRouteScreen;
