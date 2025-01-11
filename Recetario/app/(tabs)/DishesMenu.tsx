import { Dish } from "@/components/Dish";
import { RecepieModal } from "@/components/RecepieModal";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

import { SafeAreaView, Text, StyleSheet, View, FlatList } from "react-native";

interface IDish {
  
  Name: string;
  Image: string;
  Ingredients: string[];
  Recipe: string[];
}

interface IMenuProps {
  itemDishes?: {
    jsonStringified: string;
  }[];
}

const DishesMenu: React.FC<IMenuProps> = ({ itemDishes }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDish, setSelecetedDish] = useState<IDish>({Name:"",Image:"",Ingredients:[""], Recipe:[""]});

  const route = useRoute();
  const { typicalDishes } = route.params || Array<IDish>();

  const showModal = (dish:IDish) => () => {
    setIsModalVisible(true);
    setSelecetedDish(dish);
  };
  const onHidePress = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.dishesMenuTitle}>Typical Meals Per Country</Text>
        <View style={styles.dishesContainer}>
          <FlatList
            style={styles.listDisplay}
            data={typicalDishes}
            renderItem={({ item }) => (
              <Dish itemDish={item} onDishPress={showModal(item)} />
              // <Dish itemDish={parsedData} onDishPress={showModal} />
            )}
          />
          <RecepieModal
            isModalVisible={isModalVisible}
            onHidePress={onHidePress}
            singleDish={selectedDish}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#d6dbdb",
    height: "100%",
    width: "100%",
    padding: "5%",
    gap: 15,
  },
  dishesMenuTitle: {
    color: "#ffffff",
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  listDisplay: {
    margin: "2%",
    // height:1
  },
  dishesContainer: {
    backgroundColor: "#ebecee",
  },
});

export default DishesMenu;
