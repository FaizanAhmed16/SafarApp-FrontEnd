import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height } = Dimensions.get("window");

const Color = {
  colorTeal: "#008080",
  colorWhite: "#FFFFFF",
  colorDark: "#000000",
};

const FontFamily = {
  robotoMedium: "Roboto-Medium",
  k2DSemiBold: "K2D-SemiBold",
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

const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(
      `http://192.168.0.114:5000/users/public/${userId}`
    );
    const user = response.data;
    return { userName: user.username, walletBalance: user.walletBalance };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return { userName: "Error fetching data", walletBalance: 0 };
  }
};

const CardTopUpScreen = () => {
  const [userData, setUserData] = useState({ userName: "", walletBalance: 0 });
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const userId = await AsyncStorage.getItem("userId");
        const fetchedUserData = await fetchUserData(userId);
        setUserData(fetchedUserData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData({ userName: "Error fetching data", walletBalance: 0 });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      console.log("CardTopUpScreen Focused! Re-fetching user data");
      try {
        const userId = await AsyncStorage.getItem("userId");
        const fetchedUserData = await fetchUserData(userId);
        setUserData(fetchedUserData); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    });

    return unsubscribe;
  }, [navigation]);

  const navigateToBankTopUpScreen = () => {
    navigation.navigate("BankTopUpScreen"); // Corrected spelling
  };

  const navigateToEasyPaisaScreen = () => {
    navigation.navigate("EasypaisaTopupScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundFrame}>
        <Pressable onPress={() => navigation.goBack()} style={styles.headerBox}>
          <Image
            source={require("../assets/image-2623.png")}
            style={styles.backIcon}
          />
          <Text style={styles.headerTitle}>Card Top Up</Text>
        </Pressable>
      </View>
      <View style={styles.whiteFrame}>
        {isLoading ? (
          <Text>Loading user data...</Text>
        ) : (
          <>
            <Text style={styles.userName}>{userData.userName}</Text>
            <Text style={styles.walletBalance}>
              Rs {userData.walletBalance.toFixed(2)}
            </Text>
            <Text style={styles.accountBalance}>Account Balance</Text>
            <View style={styles.topUpOptions}>
              <Pressable
                style={styles.topUpButton}
                onPress={navigateToEasyPaisaScreen}
              >
                <Image
                  source={require("../assets/image-2645.png")}
                  style={styles.topUpIcon}
                />
                <Text style={styles.topUpButtonText}>Top Up Via EasyPaisa</Text>
              </Pressable>
              <Pressable
                style={styles.topUpButton}
                onPress={navigateToBankTopUpScreen}
              >
                <Image
                  source={require("../assets/image-2646.png")}
                  style={styles.topUpIcon}
                />
                <Text style={styles.topUpButtonText}>Top Up Via Bank Card</Text>
              </Pressable>
            </View>
          </>
        )}
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
    flex: 0.2,
    height: "20%",
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
    flex: 0.8,
    height: "80%",
    backgroundColor: Color.colorWhite,
    borderTopLeftRadius: Border.br_large,
    borderTopRightRadius: Border.br_large,
    paddingTop: 20,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  userName: {
    fontSize: FontSize.size_xl,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: FontFamily.k2DSemiBold,
  },
  walletBalance: {
    fontSize: FontSize.size_xx,
    fontWeight: "bold",
    fontFamily: FontFamily.k2DSemiBold,
  },
  accountBalance: {
    fontSize: FontSize.size_l,
    color: "#808080",
    marginBottom: 20, // Added spacing between accountBalance and topUpOptions
  },
  topUpOptions: {
    flexDirection: "column", // Changed to column for stacking buttons vertically
    justifyContent: "center", // Center buttons vertically within the column
    alignItems: "center", // Center buttons horizontally
  },
  topUpButton: {
    backgroundColor: Color.colorTeal,
    padding: 15,
    borderRadius: Border.br_small,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15, // Added spacing between buttons
    borderWidth: 1, // Added border around buttons
    borderColor: Color.colorWhite, // Set border color to white
  },
  topUpIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  topUpButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_l,
  },
  headerTitle: {
    fontSize: FontSize.size_xl,
    marginLeft: 10,
    fontFamily: FontFamily.robotoMedium,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
});

export default CardTopUpScreen;
