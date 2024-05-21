import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MenuScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuScreen}>
      <View style={[styles.whatsappImage20240111At1Parent, styles.parentBg]}>
        <Image
          style={[styles.whatsappImage20240111At1, styles.image5ParentPosition]}
          contentFit="cover"
          source={require("../assets/whatsapp-image-20240111-at-1136-2.png")}
        />
        <View style={styles.image10Parent}>
          <Image
            style={[styles.image10Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-10.png")}
          />
          <Image
            style={[styles.image11Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-11.png")}
          />
          <Text style={[styles.abdullahChowk, styles.abdullahChowkTypo]}>
            Abdullah Chowk - Numaish
          </Text>
          <Text style={[styles.powerHouseChowrangi, styles.abdullahChowkTypo]}>
            Power House Chowrangi - Korangi
          </Text>
          <Image
            style={[styles.image12Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-12.png")}
          />
          <View style={styles.frameChild} />
          <Text style={styles.bookTicket}>Book Ticket</Text>
          <Image
            style={styles.image13Icon}
            contentFit="cover"
            source={require("../assets/image-13.png")}
          />
        </View>
        <Text style={styles.savedRoutes}>Saved Routes</Text>
      </View>
      <Image
        style={[styles.image7Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.image4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <View style={styles.image6Parent}>
        <Image
          style={[styles.image6Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Text style={styles.whereDoYou}>Where do you want to go?</Text>
      </View>
      <Text style={[styles.buses, styles.busesTypo]}>Buses</Text>
      <View style={[styles.image5Parent, styles.image5ParentPosition]}>
        <Image
          style={[styles.image5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <Text style={[styles.routes, styles.busesTypo]}>Routes</Text>
        <Text style={[styles.stops, styles.busesTypo]}>Stops</Text>
        <Image
          style={[styles.image8Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-8.png")}
        />
        <Image
          style={[styles.image9Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
        <Pressable
          style={[styles.image2611, styles.image2611Layout]}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-2611.png")}
          />
        </Pressable>
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
        </Pressable>
        <Image
          style={[styles.image2612Icon, styles.image2613Position]}
          contentFit="cover"
          source={require("../assets/image-2612.png")}
        />
        <Text style={[styles.routes1, styles.aboutPosition]}>Routes</Text>
        <Pressable
          style={[styles.image2613, styles.image2613Position]}
          onPress={() => navigation.navigate("Buses")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-2613.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.buses1, styles.aboutPosition]}
          onPress={() => navigation.navigate("Buses")}
        >
          <Text style={[styles.buses2, styles.home1Typo]}>Buses</Text>
        </Pressable>
        <Image
          style={[styles.image2615Icon, styles.image2611Layout]}
          contentFit="cover"
          source={require("../assets/image-2615.png")}
        />
        <Text style={[styles.announcements, styles.aboutPosition]}>
          Announcements
        </Text>
        <Image
          style={[styles.image2616Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-2616.png")}
        />
        <Pressable
          style={[styles.tariffs, styles.aboutPosition]}
          onPress={() => navigation.navigate("TariffsScreen")}
        >
          <Text style={[styles.tariffs1, styles.home1Typo]}>Tariffs</Text>
        </Pressable>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Image
          style={[styles.image2617Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-2617.png")}
        />
        <Image
          style={[styles.image2618Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-2618.png")}
        />
        <Text style={[styles.profile, styles.home1Typo]}>Profile</Text>
        <Text style={[styles.cardsFavorites, styles.cardsFavoritesTypo]}>
          {Cards & Favorites}
        </Text>
        <Image
          style={[styles.image2619Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-2619.png")}
        />
        <Image
          style={[styles.image2620Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-2620.png")}
        />
        <Image
          style={[styles.image2621Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-2621.png")}
        />
        <Text style={[styles.sendFeedback, styles.loginPosition]}>
          Send Feedback
        </Text>
        <Pressable
          style={[styles.settings, styles.loginPosition]}
          onPress={() => navigation.navigate("SettingsScreen")}
        >
          <Text style={[styles.settings1, styles.home1Typo]}>Settings</Text>
        </Pressable>
        <Pressable
          style={[styles.about, styles.aboutPosition]}
          onPress={() => navigation.navigate("AboutScreen")}
        >
          <Text style={[styles.tariffs1, styles.home1Typo]}>About</Text>
        </Pressable>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Pressable
          style={[styles.login, styles.loginPosition]}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={[styles.tariffs1, styles.home1Typo]}>Login</Text>
        </Pressable>
        <Pressable
          style={[styles.cardTopUp, styles.aboutPosition]}
          onPress={() => navigation.navigate("CardTopUpScreen")}
        >
          <Text style={[styles.buses2, styles.home1Typo]}>Card Top-Up</Text>
        </Pressable>
        <Image
          style={[styles.image2650Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-2650.png")}
        />
        <Text style={[styles.viewMyBookings, styles.cardsFavoritesTypo]}>
          View My Bookings
        </Text>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Pressable
          style={[styles.signOut, styles.loginPosition]}
          onPress={() => navigation.navigate("WelcomeScreen")}
        >
          <Text style={[styles.settings1, styles.home1Typo]}>Sign Out</Text>
        </Pressable>
      </View>
      <View style={[styles.menuScreenChild, styles.frameLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentBg: {
    backgroundColor: Color.iOSFFFFFF,
    left: 0,
    overflow: "hidden",
  },
  image5ParentPosition: {
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 25,
    height: 25,
    position: "absolute",
  },
  abdullahChowkTypo: {
    height: 23,
    color: Color.iOS000000,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    left: 40,
    position: "absolute",
  },
  busesTypo: {
    height: 16,
    width: 50,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.iOSFFFFFF,
    position: "absolute",
  },
  image2611Layout: {
    width: 30,
    height: 30,
    position: "absolute",
  },
  home1Typo: {
    height: 18,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    color: Color.iOS000000,
    fontSize: FontSize.size_lg,
  },
  image2613Position: {
    left: 16,
    width: 30,
    height: 30,
    position: "absolute",
  },
  aboutPosition: {
    left: 58,
    position: "absolute",
  },
  iconPosition: {
    left: 17,
    width: 30,
    position: "absolute",
  },
  frameLayout: {
    height: 3,
    width: 345,
    borderTopWidth: 3,
    borderColor: Color.iOS000000,
    borderStyle: "solid",
    left: -1,
    position: "absolute",
  },
  cardsFavoritesTypo: {
    width: 162,
    left: 59,
    height: 18,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.iOS000000,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  loginPosition: {
    left: 60,
    position: "absolute",
  },
  whatsappImage20240111At1: {
    marginLeft: -196.5,
    left: "50%",
    height: 369,
    width: 393,
  },
  image10Icon: {
    top: 37,
    height: 25,
    left: 0,
    width: 25,
  },
  image11Icon: {
    top: 76,
    height: 25,
    left: 0,
    width: 25,
  },
  abdullahChowk: {
    top: 39,
    width: 296,
  },
  powerHouseChowrangi: {
    top: 78,
    width: 313,
  },
  image12Icon: {
    top: 111,
    left: 168,
    height: 25,
  },
  frameChild: {
    top: 151,
    left: 33,
    backgroundColor: Color.colorGoldenrod,
    width: 295,
    height: 51,
    position: "absolute",
  },
  bookTicket: {
    top: 161,
    left: 63,
    fontSize: FontSize.size_6xl,
    fontWeight: "800",
    fontFamily: FontFamily.k2DExtraBold,
    width: 247,
    height: 30,
    textAlign: "center",
    color: Color.iOSFFFFFF,
    position: "absolute",
  },
  image13Icon: {
    top: 163,
    left: 40,
    height: 25,
    width: 25,
    position: "absolute",
  },
  image10Parent: {
    top: 408,
    width: 357,
    height: 202,
    left: 19,
    position: "absolute",
    overflow: "hidden",
  },
  savedRoutes: {
    top: 400,
    fontSize: FontSize.size_xl,
    width: 149,
    height: 32,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    left: 27,
    textAlign: "left",
    color: Color.iOS000000,
    position: "absolute",
  },
  whatsappImage20240111At1Parent: {
    top: 158,
    borderRadius: Border.br_11xl,
    height: 633,
    width: 393,
    position: "absolute",
  },
  image7Icon: {
    top: 804,
    left: 330,
    height: 25,
  },
  image4Icon: {
    left: 355,
    top: 28,
    height: 25,
  },
  image6Icon: {
    top: 9,
    left: 304,
    height: 25,
  },
  whereDoYou: {
    top: 8,
    fontFamily: FontFamily.k2DRegular,
    color: Color.colorDarkgray_200,
    width: 225,
    height: 27,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    left: 19,
    position: "absolute",
  },
  image6Parent: {
    top: 94,
    borderRadius: Border.br_xl,
    width: 340,
    height: 43,
    left: 27,
    backgroundColor: Color.iOSFFFFFF,
    position: "absolute",
    overflow: "hidden",
  },
  buses: {
    top: 826,
    left: 318,
  },
  image5Icon: {
    left: 26,
    top: 28,
    height: 25,
  },
  routes: {
    top: 825,
    left: 30,
  },
  stops: {
    top: 827,
    left: 182,
  },
  image8Icon: {
    top: 802,
    left: 44,
    height: 25,
  },
  image9Icon: {
    top: 803,
    left: 196,
    height: 25,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image2611: {
    left: 14,
    top: 28,
  },
  home1: {
    width: 68,
    height: 18,
    textAlign: "center",
  },
  home: {
    left: 46,
    top: 32,
    position: "absolute",
  },
  image2612Icon: {
    top: 122,
  },
  routes1: {
    top: 124,
    height: 18,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    color: Color.iOS000000,
    fontSize: FontSize.size_lg,
    width: 68,
    textAlign: "left",
  },
  image2613: {
    top: 179,
  },
  buses2: {
    width: 114,
    textAlign: "left",
  },
  buses1: {
    top: 180,
  },
  image2615Icon: {
    top: 236,
    left: 19,
  },
  announcements: {
    top: 238,
    width: 139,
    height: 18,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    color: Color.iOS000000,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  image2616Icon: {
    top: 296,
    height: 30,
  },
  tariffs1: {
    width: 68,
    height: 18,
    textAlign: "left",
  },
  tariffs: {
    top: 298,
  },
  frameItem: {
    top: 409,
  },
  image2617Icon: {
    top: 430,
    height: 30,
  },
  image2618Icon: {
    top: 530,
    height: 30,
  },
  profile: {
    top: 433,
    left: 57,
    width: 68,
    height: 18,
    textAlign: "left",
    position: "absolute",
  },
  cardsFavorites: {
    top: 531,
  },
  image2619Icon: {
    top: 595,
    height: 30,
  },
  image2620Icon: {
    top: 644,
    height: 30,
  },
  image2621Icon: {
    top: 703,
    height: 30,
  },
  sendFeedback: {
    top: 705,
    width: 136,
    height: 18,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    color: Color.iOS000000,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  settings1: {
    width: 85,
    textAlign: "left",
  },
  settings: {
    top: 646,
  },
  about: {
    top: 598,
  },
  frameInner: {
    top: 583,
  },
  login: {
    top: 763,
  },
  cardTopUp: {
    top: 358,
  },
  image2650Icon: {
    top: 359,
    height: 25,
  },
  viewMyBookings: {
    top: 481,
  },
  frameIcon: {
    top: 472,
    left: 12,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  signOut: {
    top: 813,
  },
  image5Parent: {
    width: 342,
    backgroundColor: Color.iOSFFFFFF,
    left: 0,
    overflow: "hidden",
    height: 852,
  },
  menuScreenChild: {
    top: 88,
  },
  menuScreen: {
    backgroundColor: Color.colorTeal,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
  },
});

export default MenuScreen;
