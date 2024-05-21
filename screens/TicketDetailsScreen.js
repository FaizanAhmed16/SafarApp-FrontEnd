import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
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

const TicketDetailsScreen = ({ route }) => {
  const { ticketDetails } = useTicket();
  const {
    routeNo = "",
    fromStop = "",
    toStop = "",
    date = "",
    time = "",
    numberOfTickets = "",
    totalFare = "",
  } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.whiteFrame}>
        <View style={styles.header}>
          <Image
            source={require("../assets/image-231.png")}
            style={styles.busIcon}
          />
          <View>
            <Text style={styles.heading}>Route No.</Text>
            <Text style={styles.subheading}>{ticketDetails.route}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.heading}>From</Text>
            <Text style={styles.subheading}>{ticketDetails.fromStop}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.heading}>To</Text>
            <Text style={styles.subheading}>{ticketDetails.toStop}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.heading}>Date</Text>
            <Text style={styles.subheading}>{ticketDetails.date}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.heading}>Time</Text>
            <Text style={styles.subheading}>{ticketDetails.time}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.heading}>No. of Tickets</Text>
            <Text style={styles.subheading}>
              {ticketDetails.numberOfTickets}
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.heading}>Total Fare</Text>
            <Text style={styles.subheading}>{ticketDetails.totalFare}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  whiteFrame: {
    height: height * 0.8,
    backgroundColor: Color.colorWhite,
    borderTopLeftRadius: Border.br_large,
    borderTopRightRadius: Border.br_large,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  busIcon: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  heading: {
    fontSize: FontSize.size_l,
    fontFamily: FontFamily.robotoMedium,
  },
  subheading: {
    fontSize: FontSize.size_l,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorDark,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default TicketDetailsScreen;
