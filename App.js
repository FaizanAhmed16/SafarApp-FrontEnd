import React, { useState, createContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { UserProvider } from "./components/UserContext";

//Screen Imports
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import BookTicketScreen from "./screens/BookTicketScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import MenuScreen from "./screens/MenuScreen";
import TariffsScreen from "./screens/TariffsScreen";
import Buses from "./screens/Buses";
import SettingsScreen from "./screens/SettingsScreen";
import AboutScreen from "./screens/AboutScreen";
import CardTopUpScreen from "./screens/CardTopUpScreen";
import SpecificBusRouteScreen from "./screens/SpecificBusRouteScreen";
import EasypaisaTopupScreen from "./screens/EasypaisaTopupScreen";
import BankTopUpScreen from "./screens/BankTopUpScreen";
import SpecificBusStationScreen from "./screens/SpecificBusStationScreen";
import EasypaisaTopupScreen3 from "./screens/EasypaisaTopupScreen3";
import CardTopUpScreenUpdated from "./screens/CardTopUpScreenUpdated";
import ChoosePaymentScreen from "./screens/ChoosePaymentScreen";
import PaymentSuccessfulScreen from "./screens/PaymentSuccessfulScreen";
import SearchRouteScreen from "./screens/SearchRouteScreen";
import SearchRouteScreen1 from "./screens/SearchRouteScreen1";
import TicketDetailsScreen from "./screens/TicketDetailsScreen";
import SearchScreen from "./screens/SearchScreen";
import EasypaisaTopupScreen2 from "./screens/EasypaisaTopupScreen2";

import CustomDrawerContent from "./components/CustomDrawerContent";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { TicketProvider } from "./components/TicketContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// The Stack Navigator as a separate component
function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookTicketScreen"
        component={BookTicketScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TariffsScreen"
        component={TariffsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Buses"
        component={Buses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardTopUpScreen"
        component={CardTopUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpecificBusRouteScreen"
        component={SpecificBusRouteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EasypaisaTopupScreen"
        component={EasypaisaTopupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BankTopUpScreen"
        component={BankTopUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpecificBusStationScreen"
        component={SpecificBusStationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EasypaisaTopupScreen3"
        component={EasypaisaTopupScreen3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardTopUpScreenUpdated"
        component={CardTopUpScreenUpdated}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChoosePaymentScreen"
        component={ChoosePaymentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentSuccessfulScreen"
        component={PaymentSuccessfulScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchRouteScreen"
        component={SearchRouteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchRouteScreen1"
        component={SearchRouteScreen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EasypaisaTopupScreen2"
        component={EasypaisaTopupScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TicketDetailsScreen"
        component={TicketDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "K2D-Regular": require("./assets/fonts/K2D-Regular.ttf"),
    "K2D-SemiBold": require("./assets/fonts/K2D-SemiBold.ttf"),
    "K2D-ExtraBold": require("./assets/fonts/K2D-ExtraBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  const toggleDarkMode = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  // Determine which theme to use based on the dark mode state
  const appTheme = isDarkModeEnabled ? DarkTheme : DefaultTheme;

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <TicketProvider>
          <Drawer.Navigator
            initialRouteName="HomeScreen"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{ headerShown: false }}
          >
            {/* The Drawer.Screen named 'Home' is actually your Stack Navigator */}
            <Drawer.Screen name="Home" component={StackNavigator} />
            {/* Here you can add other screens outside the stack if needed */}
          </Drawer.Navigator>
        </TicketProvider>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
