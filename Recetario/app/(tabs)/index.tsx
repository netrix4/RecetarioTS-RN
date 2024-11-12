import CousineCard from "@/components/CousineCard";
import { useEffect, useState } from "react";

import { SafeAreaView, StatusBar, StyleSheet, View, FlatList } from "react-native";

const cousines = [
  {
    Title: "Mexico",
    Emoji: "🌮",
    Dishes: ["Primero", "Segundo", "Tercero"],
  },
  {
    Title: "Italy",
    Emoji: "🍝",
    Dishes: [],
  },
  {
    Title: "Argentina",
    Emoji: "🥟",
    Dishes: [],
  },
  {
    Title: "United States",
    Emoji: "🍔🍟",
    Dishes: [],
  },
  {
    Title: "Japan",
    Emoji: "🍣",
    Dishes: [],
  },
  {
    Title: "France",
    Emoji: "🫕",
    Dishes: [],
  },
];


export default function HomeScreen() {
  const [countriesData, setCountriesData] = useState<{key:string, info: any}[]>([])

  useEffect(()=>{
    const FetchData = () => {
      // const cousines2 = require('@/utils/cuosines.json');
      const cousines2 = require('@/utils/Cousines.json');
      setCountriesData(
        Object.keys(cousines2).map((key) => ({ key: key, info: cousines2[key] }))
      );
    };
    
    FetchData();
  },[])

  // console.log(countriesData);
  // console.log(countriesData[1]);

  return (
    <SafeAreaView>
      <StatusBar barStyle={"light-content"}></StatusBar>
      <View style={styles.mainContainer}>
        <FlatList
          style={styles.listDisplay}
          data={countriesData}
          numColumns={2}
          renderItem={({ item }) => <CousineCard itemCousine={item} />}
        />
        {/* <FlatList
          style={styles.listDisplay}
          data={countriesData}
          renderItem={itemData => <CousineCard itemCousine={itemData.item}/>}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "#d6dbdb",
    height: "100%",
    width: "100%",
    padding: "2%",
  },
  listDisplay: {},
});
