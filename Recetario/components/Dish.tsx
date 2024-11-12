import { getRandomColor } from "@/utils/utils";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IPropsDish {
  itemDish: {
    Name: string;
    Image: string;
    // Ingredients: string,
    // Ingredients: string[],
    Ingredients: any;
    Recipe: string;
  };
  onDishPress: () => void;
}

export const Dish: React.FC<IPropsDish> = ({ itemDish, onDishPress }) => {
  return (
    <TouchableOpacity
      onPress={onDishPress}
      style={[styles.dishContainer, { backgroundColor: getRandomColor() }]}
    >
      <Text style={styles.dishName}>{itemDish.Name}</Text>
      <Text style={styles.dishTime}>Tap to see</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dishContainer: {
    flexDirection: "row",
    //   backgroundColor: "#F8F6F1",
    alignItems: "center",
    justifyContent: "space-between",
    height: 55,
    // width: '100%',
    width: 340,
    paddingHorizontal: "3%",
    margin: 2,
  },
  dishName: {
    fontSize: 25,
    fontWeight: "black",
  },
  dishTime: {
    fontSize: 20,
    fontWeight: "light",
  },
});
