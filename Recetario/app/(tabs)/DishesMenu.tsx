import { Dish } from "@/components/Dish";
import { RecepieModal } from "@/components/RecepieModal";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, FlatList } from "react-native";
import { SafeAreaConsumer } from "react-native-safe-area-context";

const typicalDishes = [
  {
    Name: "Tacos",
    ElaborationTime: "45min",
  },
  {
    Name: "Burritos",
    ElaborationTime: "35min",
  },
  {
    Name: "Sopes",
    ElaborationTime: "15min",
  },
  {
    Name: "Quesadillas",
    ElaborationTime: "5min",
  },
  {
    Name: "Cochinita Pibil",
    ElaborationTime: "75min",
  },
];

const DishesMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);




  // const {info} = useLocalSearchParams();
  // const dataJson = Array.isArray(info)? info[0]:info;
  // const parsedData = JSON.parse(dataJson);


  const showModal = () => {
    setIsModalVisible(true);
  };
  const onHidePress = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.dishesMenuTitle}>Typical country title</Text>
        <View style={styles.dishesContainer}>
          <FlatList
            style={styles.listDisplay}
            data={typicalDishes}
            renderItem={(item) => (
              <Dish itemDish={item.item} onDishPress={showModal} />
              // <Dish itemDish={parsedData} onDishPress={showModal} />
            )}
          />
          <RecepieModal
            isModalVisible={isModalVisible}
            onHidePress={onHidePress}
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
