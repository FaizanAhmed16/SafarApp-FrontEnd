import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  StripeProvider,
  CardField,
  useStripe,
} from "@stripe/stripe-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // For Async Storage
import axios from "axios"; // For API calls

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
  br_large: 20,
};

const BankTopUpScreen = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState("");
  const { confirmPayment } = useStripe();
  const [userID, setUserID] = useState(null);
  const [userData, setUserData] = useState({ userName: "", walletBalance: 0 }); // To store retrieved userID

  useEffect(() => {
    // Retrieve userID from Async Storage on component mount
    const getUserID = async () => {
      try {
        const storedUserID = await AsyncStorage.getItem("userId");
        if (storedUserID) {
          setUserID(storedUserID);
        }
      } catch (error) {
        console.error("Error retrieving userID from AsyncStorage:", error);
      }
    };
    getUserID();
  }, []);

  useEffect(() => {
    // Trigger re-render when userData changes
    console.log("User data updated:", userData);
  }, [userData]);

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

  const handlePayment = async () => {
    try {
      // Call backend API to create payment intent
      const response = await axios.post(
        "http://192.168.0.114:5000/users/public/create-payment-intent",
        { amount: parseInt(amount) * 100 } // Convert amount to cents
      );

      const { clientSecret } = response.data;

      // Confirm payment using Stripe library
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: "Card",
      });

      if (error) {
        console.error("Failed to process payment:", error);
      } else {
        console.log("Payment successful:", paymentIntent);

        // Check if userID is retrieved before sending notification
        if (userID) {
          await axios.post("http://192.168.0.114:5000/users/public/add-funds", {
            userID,
            amount: parseInt(amount),
          });
        } else {
          console.warn("UserID not available for adding funds");
        }

        // Update user data state first with fetched data
        const fetchedUserData = await fetchUserData(userID);
        setUserData(fetchedUserData);
        console.log("Fetched Data", fetchedUserData);

        Alert.alert("Payment Successful!", "", [
          { text: "OK", onPress: () => navigation.goBack() },
        ]);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundFrame}>
        <Pressable onPress={() => navigation.goBack()} style={styles.headerBox}>
          <Image
            source={require("../assets/image-2623.png")}
            style={styles.backIcon}
          />
          <Text style={styles.headerTitle}>EasyPaisa Top Up</Text>
        </Pressable>
      </View>
      <View style={styles.whiteFrame}>
        <Text style={styles.heading}>Amount</Text>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          placeholder="Enter Amount"
          keyboardType="numeric"
          style={styles.amountInput}
        />
        <StripeProvider publishableKey="pk_test_51PFyfgG7oaNDE17QFvSs8VY5Fwabytpgx2zcplltcKG72wQqpRCMBLOWr56fyZuSyXyVwXUU1BYtj0MD6TGX8ly7004SIgYqVT">
          <CardField
            postalCodeEnabled={false}
            placeholder={{
              number: "4242 4242 4242 4242",
            }}
            style={styles.cardField}
          />
          <Pressable onPress={handlePayment} style={styles.payButton}>
            <Text style={styles.payButtonText}>Pay Now</Text>
          </Pressable>
        </StripeProvider>
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
    borderRadius: Border.br_large,
  },
  backIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorDark,
  },
  whiteFrame: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: FontSize.size_l,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorDark,
    marginBottom: 10,
  },
  amountInput: {
    fontSize: FontSize.size_l,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorDark,
    padding: 5,
    marginBottom: 20,
  },
  cardField: {
    height: 50,
    backgroundColor: "#EAEAF3",
    borderRadius: Border.br_large,
    padding: 10,
  },
  payButton: {
    marginTop: 20,
    backgroundColor: Color.colorTeal,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: Border.br_large,
  },
  payButtonText: {
    fontSize: FontSize.size_l,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoMedium,
  },
});

export default BankTopUpScreen;
