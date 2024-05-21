import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import axios from "axios";
import {
  StripeProvider,
  CardField,
  useStripe,
} from "@stripe/stripe-react-native";

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

const ChoosePaymentScreen = ({ navigation, route }) => {
  const { fare } = route.params;
  const { confirmPayment } = useStripe();
  const [clientSecret, setClientSecret] = useState("");

  const amountInCents = Math.round(fare * 100);

  const handlePayment = async () => {
    try {
      // Call the backend API using axios to create a payment intent
      const response = await axios.post(
        "http://192.168.0.114:5000/users/public/create-payment-intent",
        {
          amount: amountInCents,
        }
      );

      // Extract client secret from the response
      const { clientSecret } = response.data;
      setClientSecret(clientSecret);

      // Confirm the payment using the client secret
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: "Card", // Ensure this parameter is correctly set
      });

      // Handle the payment result
      if (error) {
        console.error("Failed to process payment:", error);
      } else {
        console.log("Payment successful:", paymentIntent);
        navigation.navigate("PaymentSuccessfulScreen");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <View style={styles.backgroundFrame}>
        <Pressable onPress={goBack} style={styles.headerBox}>
          <Image
            source={require("../assets/image-2623.png")}
            style={styles.backIcon}
          />
          <Text style={styles.headerTitle}>Payment</Text>
        </Pressable>
      </View>
      <View style={styles.whiteFrame}>
        <Text style={styles.heading}>Amount</Text>
        <Text style={styles.amount}>{fare}</Text>
        {/* Stripe Payment Form */}
        <StripeProvider publishableKey="pk_test_51PFyfgG7oaNDE17QFvSs8VY5Fwabytpgx2zcplltcKG72wQqpRCMBLOWr56fyZuSyXyVwXUU1BYtj0MD6TGX8ly7004SIgYqVT">
          <CardField
            postalCodeEnabled={false}
            placeholder={{
              number: "4242 4242 4242 4242",
            }}
            style={{
              width: "100%",
              height: 50,
              marginVertical: 30,
            }}
          />
          {/* Button to Process Payment */}
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
  headerTitle: {
    fontSize: FontSize.size_xl,
    marginLeft: 10,
    fontFamily: FontFamily.robotoMedium,
  },
  heading: {
    fontSize: FontSize.size_xx,
    textAlign: "center",
    marginBottom: 10,
  },
  amount: {
    fontSize: FontSize.size_xx,
    textAlign: "center",
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  backButton: {
    padding: 10,
  },
  payButton: {
    backgroundColor: "#FF5733", // Background color for the button
    borderRadius: 10, // Border radius to make the button rounded
    padding: 15, // Padding around the button content
    alignItems: "center", // Align content in the center horizontally
    marginTop: 20, // Spacing from the top
  },
  payButtonText: {
    color: "#FFFFFF", // Text color
    fontSize: 18, // Font size of the button text
    fontWeight: "bold", // Bold font weight
  },
});

export default ChoosePaymentScreen;
