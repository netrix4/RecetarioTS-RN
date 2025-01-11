import React from "react";
// import { Link, useNavigation } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { getRandomColor } from "@/utils/utils";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  // itemCousine: {
  //   Title: string;
  //   Emoji: string;
  //   Dishes: string[];
  // };
  itemCousine: {
    key: string;
    info: {
      Title: string;
      Emoji: string;
      Dishes:{
        Name: string;
        Image: string;
        // Ingredients: string;
        Ingredients: string[],
        Recipe: string[];
      }[];
    }
  };
}

const CousineCard: React.FC<IProps> = ({ itemCousine }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={[styles.mainCard, { backgroundColor: getRandomColor() }]}
      onPress={() => {
        const typicalDishes = itemCousine.info.Dishes
        // const information = JSON.stringify(itemCousine.info)
        // navigation.navigate("DishesMenu");
        navigation.navigate("DishesMenu", {typicalDishes});
      }}
    >
      {/* <Link
        href={{
          pathname: '/(tabs)/DishesMenu',
          params:{
            info: JSON.stringify(itemCousine.info)
          }
        }}
      /> */}

      {/* <Text style={styles.cardTitle}>{itemCousine.Title}</Text>
      <Text style={styles.cardParraph}>{itemCousine.Emoji}</Text> */}

      <Text style={styles.cardTitle}>{itemCousine.info.Title}</Text>
      <Text style={styles.cardParraph}>{itemCousine.info.Emoji}</Text>


    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    justifyContent: "center",
    alignItems: "center",
    height: 180,
    width: "48%",
    margin: "1%",
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 25,
  },
  cardParraph: {
    fontSize: 20,
  },
});

export default CousineCard;
