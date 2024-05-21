import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PaymentSuccessfulScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require("../assets/tick-1.png")}
          style={styles.tickIcon}
        />
        <Text style={styles.paymentSuccessText}>PAYMENT SUCCESS!</Text>
        <TouchableOpacity
          style={styles.viewDetailsButton}
          onPress={() => navigation.navigate("TicketDetailsScreen")}
        >
          <Text style={styles.viewDetailsButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorTeal,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
  },
  tickIcon: {
    width: 150,
    height: 150,
    marginBottom: 20, // Adjust spacing as needed
  },
  paymentSuccessText: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.iOSFFFFFF,
    marginBottom: 30, // Add spacing before button
    marginRight: 5, // Move text slightly to the right
  },
  viewDetailsButton: {
    backgroundColor: Color.colorGoldenrod, // Yellow color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ffd700", // Border color matches button background
  },
  viewDetailsButtonText: {
    color: Color.iOSFFFFFF, // White color
    fontSize: FontSize.size_xx,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PaymentSuccessfulScreen;
