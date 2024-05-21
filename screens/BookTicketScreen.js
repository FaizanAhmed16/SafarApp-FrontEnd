import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { useTicket } from "../components/TicketContext";

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
  size_xx: 26,
};

const Border = {
  br_small: 5,
  br_large: 20,
  separatorBold: 2,
};

const BookTicketScreen = ({ navigation }) => {
  const [route, setRoute] = useState("");
  const [routeId, setRouteId] = useState("");
  const [boardingStopId, setBoardingStopId] = useState("");
  const [gettingOffStopId, setGettingOffStopId] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [routes, setRoutes] = useState([]);
  const [stops, setStops] = useState([]);
  const [numberOfTickets, setNumberOfTickets] = useState("");
  const [loading, setLoading] = useState(false);
  const { setTicketDetails } = useTicket();

  useEffect(() => {
    fetchRoutes();
  }, []);

  useEffect(() => {
    if (route) {
      findStopsUsingRouteName(route);
    }
  }, [route]);

  const fetchRoutes = async () => {
    setLoading(true);
    try {
      // Updated to use the new endpoint which includes routeID
      const response = await axios.get(
        "http://192.168.0.114:5000/users/public/fetch-routes/get"
      );
      const mappedRoutes = response.data.map((item) => ({
        label: item.routeName,
        value: item.routeName,
        routeId: item.routeID, // This assumes that your backend correctly names it as 'routeID'
      }));
      setRoutes(mappedRoutes);
    } catch (error) {
      Alert.alert("Error fetching routes", error.message);
    } finally {
      setLoading(false);
    }
  };

  const findStopsUsingRouteName = async (routeName) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://192.168.0.114:5000/users/public/by-name/${routeName}`
      );
      setStops(
        response.data.stops.map((stop) => ({
          label: stop.stopName,
          value: stop.stopName,
          id: stop.stopId, // Ensure this is the correct key for stop ID from your backend
        }))
      );
    } catch (error) {
      Alert.alert("Error fetching stops", error.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateStopsTraveled = async () => {
    try {
      const response = await axios.post(
        `http://192.168.0.114:5000/users/public/calculate-stops-traveled`,
        {
          routeId: routeId, // Ensure routeId is correctly set in the state
          boardingStopId: boardingStopId ? boardingStopId._id : "", // Ensure boardingStopId is correctly set in the state
          gettingOffStopId: gettingOffStopId ? gettingOffStopId._id : "", // Ensure gettingOffStopId is correctly set in the state
        }
      );

      return response.data.stopsTraveled; // This should now correctly return the number of stops traveled
    } catch (error) {
      console.error(
        "Error calculating stops traveled:",
        error.response ? error.response.data : error.message
      );
      Alert.alert(
        "Error",
        "Failed to calculate stops traveled: " +
          (error.response ? error.response.data.error : error.message)
      );
      return null;
    }
  };

  const calculateFare = async (stopsTraveled) => {
    try {
      const response = await axios.get(
        `http://192.168.0.114:5000/users/public/calculate-fare/${stopsTraveled}/${numberOfTickets}`
      );
      return response.data.fare; // This should now correctly return the fare
    } catch (error) {
      console.error("Error calculating fare:", error.message);
      Alert.alert("Error", "Failed to calculate fare");
      return null; // Return null to indicate failure
    }
  };

  const goBack = () => navigation.goBack();

  const proceedToNextScreen = async () => {
    const stopsTraveled = await calculateStopsTraveled();
    if (stopsTraveled !== null) {
      // Check if stopsTraveled is not null
      const fare = await calculateFare(stopsTraveled);

      if (fare) {
        setTicketDetails({
          route: route,
          fromStop: from,
          toStop: to,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          numberOfTickets: numberOfTickets,
          totalFare: fare,
        });

        if (fare !== null) {
          // Check if fare is not null
          navigation.navigate("ChoosePaymentScreen", { fare: fare });
        } else {
          Alert.alert("Error", "Failed to calculate fare");
        }
      } else {
        Alert.alert("Error", "Failed to calculate stops traveled");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundFrame}>
        <Pressable onPress={goBack} style={styles.headerBox}>
          <Image
            source={require("../assets/image-2623.png")}
            style={styles.backIcon}
          />
          <Text style={styles.headerTitle}>Book Ticket</Text>
        </Pressable>
      </View>
      <View style={styles.whiteFrame}>
        <View style={styles.routeContainer}>
          <Text style={styles.label}>Route:</Text>
          <Picker
            selectedValue={route}
            onValueChange={(itemValue, itemIndex) => {
              const selectedRoute = routes.find(
                (route) => route.value === itemValue
              );
              console.log("Selected Route", selectedRoute);
              setRoute(itemValue);
              setRouteId(selectedRoute ? selectedRoute.routeId : ""); // Update routeId here
            }}
            style={styles.pickerStyle}
          >
            {routes.map((route, index) => (
              <Picker.Item
                label={route.label}
                value={route.value}
                key={route.routeId || index} //Use routeId as key, or index if routeId isn't available
              />
            ))}
          </Picker>
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>From:</Text>
          {/* <Picker
            selectedValue={from}
            onValueChange={(itemValue) => setFrom(itemValue)}
            style={styles.dropdown}
            onPress={() => setBoardingStopId(stopId)}
          >
            {stops.map((stop, index) => (
              <Picker.Item label={stop} value={stop} key={index} />
            ))}
          </Picker> */}
          <Picker
            selectedValue={from}
            onValueChange={(itemValue, itemIndex) => {
              const selectedStop = stops.find(
                (stop) => stop.value === itemValue
              );
              setFrom(itemValue);
              setBoardingStopId(selectedStop ? selectedStop.id : "");
            }}
            style={styles.dropdown}
          >
            {stops.map((stop, index) => (
              <Picker.Item
                label={stop.label}
                value={stop.value}
                key={stop.id || index} // Use stop id as key, or index if id isn't available
              />
            ))}
          </Picker>
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>To:</Text>
          {/* <Picker
            selectedValue={to}
            onValueChange={(itemValue) => setTo(itemValue)}
            style={styles.dropdown}
            onPress={() => setGettingOffStopId(stopId)}
          >
            {stops.map((stop, index) => (
              <Picker.Item label={stop} value={stop} key={index} />
            ))}
          </Picker> */}
          <Picker
            selectedValue={to}
            onValueChange={(itemValue, itemIndex) => {
              const selectedStop = stops.find(
                (stop) => stop.value === itemValue
              );
              setTo(itemValue);
              setGettingOffStopId(selectedStop ? selectedStop.id : "");
            }}
            style={styles.dropdown}
          >
            {stops.map((stop, index) => (
              <Picker.Item
                label={stop.label}
                value={stop.value}
                key={stop.id || index} // Use stop id as key, or index if id isn't available
              />
            ))}
          </Picker>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>No. of Tickets:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={setNumberOfTickets}
            value={numberOfTickets}
            placeholder="Enter number"
          />
        </View>
        <Pressable style={styles.proceedButton} onPress={proceedToNextScreen}>
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </Pressable>
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
    borderTopLeftRadius: Border.br_large,
    borderTopRightRadius: Border.br_large,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  pickerStyle: {
    flex: 1,
    height: 50,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: Border.br_small,
    paddingHorizontal: 10,
  },
  routeContainer: {
    flex: 0.2,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: FontSize.size_xl,
    marginLeft: 10,
    fontFamily: FontFamily.robotoMedium,
  },
  busIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  heading: {
    fontSize: FontSize.size_l,
  },
  dropdown: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: Border.br_small,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    flex: 0.2,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: Border.br_small,
  },
  proceedButton: {
    backgroundColor: "teal",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  proceedButtonText: {
    color: "white",
    fontSize: FontSize.size_l,
  },
  label: {
    fontSize: FontSize.size_l,
    marginBottom: 5,
    fontWeight: "bold",
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default BookTicketScreen;
