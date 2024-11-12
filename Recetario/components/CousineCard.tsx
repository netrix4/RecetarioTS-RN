import React from "react";
import { Link, useNavigation } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getRandomColor } from "@/utils/utils";

interface IProps {
  itemCousine: {
    Title: string;
    Emoji: string;
    Dishes: string[];
  };
  // itemCousine: {
  //   key: string;
  //   info: any;
  // };
}

const CousineCard: React.FC<IProps> = ({ itemCousine }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.mainCard, { backgroundColor: getRandomColor() }]}
      onPress={() => {
        // navigation.navigate('Halo', {Dishes:itemCousine.Dishes})
        navigation.navigate("DishesMenu");
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



      <Text style={styles.cardTitle}>{itemCousine.Title}</Text>
      <Text style={styles.cardParraph}>{itemCousine.Emoji}</Text>

      {/* <Text style={styles.cardTitle}>{itemCousine.key}</Text> */}


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
