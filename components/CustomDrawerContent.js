import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* Add custom drawer items here */}
      <DrawerItem
        label="Home"
        icon={() => (
          <Image
            source={require("../assets/image-2611.png")}
            style={styles.icon}
          />
        )}
        onPress={() => props.navigation.navigate("HomeScreen")}
      />
      <DrawerItem
        label="Routes"
        icon={() => (
          <Image
            source={require("../assets/image-2612.png")}
            style={styles.icon}
          />
        )}
        onPress={() => {
          props.navigation.navigate("SearchRouteScreen");
        }}
      />
      <DrawerItem
        label="Buses"
        icon={() => (
          <Image
            source={require("../assets/image-2613.png")}
            style={styles.icon}
          />
        )}
        onPress={() => {
          props.navigation.navigate("Buses");
        }}
      />
      <DrawerItem
        label="Announcements"
        icon={() => (
          <Image
            source={require("../assets/image-2615.png")}
            style={styles.icon}
          />
        )}
        onPress={() => {
          // Go to Announcement page
        }}
      />
      <DrawerItem
        label="Tariffs"
        icon={() => (
          <Image
            source={require("../assets/image-2616.png")}
            style={styles.icon}
          />
        )}
        onPress={() => {
          props.navigation.navigate("TariffsScreen");
        }}
      />
      <DrawerItem
        label="Card Top-Up"
        icon={() => (
          <Image
            source={require("../assets/image-2650.png")}
            style={styles.icon}
          />
        )}
        onPress={() => {
          props.navigation.navigate("CardTopUpScreen");
        }}
      />
      {/* <DrawerItem
        label="Profile"
        icon={() => <Image source={require('../assets/image-2617.png')} style={styles.icon} />}
        onPress={() => {
            // Profile Screen
        }}
      /> */}
      <DrawerItem
        label="View My Booking"
        icon={() => (
          <Image
            source={require("../assets/booking.png")}
            style={styles.icon}
          />
        )}
        onPress={() => {
          // Bookings Page
        }}
      />
      <DrawerItem
        label="About"
        icon={() => (
          <Image
            source={require("../assets/image-2619.png")}
            style={styles.icon}
          />
        )}
        onPress={() => {
          props.navigation.navigate("AboutScreen");
        }}
      />
      <DrawerItem
        label="Settings"
        icon={() => (
          <Image
            source={require("../assets/image-2620.png")}
            style={styles.icon}
          />
        )}
        onPress={() => {
          props.navigation.navigate("SettingsScreen");
        }}
      />
      {/* <DrawerItem
        label="Send Feedback"
        icon={() => <Image source={require('../assets/image-2621.png')} style={styles.icon} />}
        onPress={() => {
            props.navigation.navigate('Buses.js')
        }}
      /> */}
      <DrawerItem
        label="Sign Out"
        icon={() => (
          <Image
            source={require("../assets/signout.png")}
            style={styles.icon}
          />
        )}
        onPress={() => {
          props.navigation.navigate("WelcomeScreen");
        }}
      />
      {/* Slide-left indication icon */}
      <View style={styles.slideIndicator}>
        <Image
          source={require("../assets/slide-left.png")}
          style={styles.icon}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  // ... define your styles here ...
  icon: {
    width: 24,
    height: 24,
  },
  slideIndicator: {
    // Adjust the position as necessary to match your design
    position: "absolute",
    left: 10,
    top: "50%",
  },
});

export default CustomDrawerContent;
