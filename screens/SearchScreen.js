import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Color = {
  colorTeal: "#008080",
  iOSFFFFFF: "#FFFFFF",
  colorDarkgray_100: "#A9A9A9",
  colorWhitesmoke_100: "#F5F5F5",
};

const FontFamily = {
  robotoMedium: "Roboto-Medium",
};

const FontSize = {
  size_xl: 20,
};

const Border = {
  br_3xs: 5,
};

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener("focus", () => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    });

    return unsubscribeFocus;
  }, [navigation]);

  const locations = [
    { key: "1", name: "Cantt Station" },
    { key: "2", name: "Khayaban-e-Muhafiz" },
    { key: "3", name: "Korangi Crossing Bus Stop" },
  ];

  return (
    <View style={styles.searchScreen}>
      <View style={styles.searchScreen1}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>{"<"}</Text>
        </Pressable>
        <View style={styles.searchContainer}>
          <TextInput
            ref={searchInputRef}
            style={styles.searchInput}
            placeholder="Search for a place"
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
          />
          <Image
            style={styles.logo}
            source={require("../assets/image-6.png")}
          />
        </View>
        <FlatList
          data={locations}
          renderItem={({ item }) => (
            <View key={item.key} style={styles.locationItem}>
              <Image
                style={styles.locationIcon}
                source={require("../assets/image-15.png")}
              />
              <Text style={styles.locationName}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchScreen: {
    backgroundColor: Color.colorTeal,
    flex: 1,
    width: "100%",
  },
  searchScreen1: {
    marginTop: 78,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.iOSFFFFFF,
    flex: 1,
    overflow: "hidden",
  },
  backButton: {
    marginLeft: 10,
    marginTop: 20,
    width: 30,
    height: 30,
  },
  backButtonText: {
    fontSize: FontSize.size_xl,
    fontWeight: "bold",
    color: Color.colorDarkgray_100,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    marginTop: 12,
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    padding: 10,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorWhitesmoke_100,
    borderRadius: 5,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoMedium,
  },
  logo: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  locationName: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorDarkgray_100,
  },
});

export default SearchScreen;

// #Below is the code to implement Recent Searches on the Search Screen. RecentSearches function has to be created on the backend Server#

// import React, { useState, useEffect, useRef } from "react";
// import { StyleSheet, View, Pressable, Text, TextInput, Image, FlatList } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import axios from 'axios'; // make sure to install axios with npm or yarn

// ... Your existing setup for Color, FontFamily, FontSize, and Border

// const SearchScreen = () => {
//   const navigation = useNavigation();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [recentSearches, setRecentSearches] = useState([]);
//   const searchInputRef = useRef(null);

//   // Function to load recent searches from the backend
//   const loadRecentSearches = async () => {
//     try {
//       // Replace with your backend API endpoint
//       const response = await axios.get('https://yourapi.com/recent-searches');
//       setRecentSearches(response.data);
//     } catch (error) {
//       // Handle error, e.g., show a toast notification
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     // Focus event listener
//     const unsubscribeFocus = navigation.addListener('focus', () => {
//       loadRecentSearches();
//       if (searchInputRef.current) {
//         searchInputRef.current.focus();
//       }
//     });

//     return unsubscribeFocus;
//   }, [navigation]);

//   // Function to save a new search when the user searches for a location
//   const saveSearch = async (search) => {
//     try {
//       // Replace with your backend API endpoint
//       await axios.post('https://yourapi.com/save-search', { query: search });
//       // Reload recent searches to include the new one
//       loadRecentSearches();
//     } catch (error) {
//       // Handle error, e.g., show a toast notification
//       console.error(error);
//     }
//   };

//   // Function to handle the search submit action
//   const handleSearchSubmit = () => {
//     // Save the search when the user submits the query
//     saveSearch(searchQuery);
//   };

//   return (
//     <View style={styles.searchScreen}>
//       <View style={styles.searchScreen1}>
//         <Pressable
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Text style={styles.backButtonText}>{"<"}</Text> // Replace with your icon
//         </Pressable>
//         <TextInput
//           ref={searchInputRef}
//           style={styles.searchInput}
//           placeholder="Search for a place"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//           returnKeyType="search"
//           onSubmitEditing={handleSearchSubmit} // Call the handleSearchSubmit when the search is submitted
//         />
//         <FlatList
//           data={recentSearches}
//           renderItem={({ item }) => (
//             <View key={item} style={styles.locationItem}>
//               <Image
//                 style={styles.locationIcon}
//                 source={require("../assets/image-15.png")}
//               />
//               <Text style={styles.locationName}>{item}</Text>
//             </View>
//           )}
//           keyExtractor={item => item}
//         />
//       </View>
//     </View>
//   );
// };

// // Styles remain unchanged

// export default SearchScreen;
