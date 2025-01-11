import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Modal,
  Button,
  View,
  Image,
  ScrollView,
} from "react-native";

interface IDish {
  Name: string;
  Image: string;
  Ingredients: string[];
  Recipe: string[];
}

interface IPropsRecipeModal {
  onHidePress: () => void;
  isModalVisible: boolean;
  singleDish: IDish;
}

const RecepieModal: React.FC<IPropsRecipeModal> = ({
  onHidePress,
  isModalVisible,
  singleDish,
}) => {
  // console.log(singleDish);
  function arrayOrString(){
    
    return (singleDish.Ingredients === typeof Array? singleDish.Ingredients.toString(): singleDish.Ingredients)
  }
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <View style={styles.dishesContainer}>
            <View style={styles.propertiesWrapper}>

            {/* <Image source={require("@/assets/images/Pizza.png")} /> */}
            <Image style={styles.imageStyle} source={{uri: singleDish.Image}} />
            {/* <ScrollView style={styles.scrollStyle}> */}

              <View style={styles.propertiesContainer}>
                <Text style={styles.propertiesTitle}>{singleDish.Name}</Text>
              </View>
              <View style={styles.propertiesContainer}>
                <Text style={styles.propertiesText}>{arrayOrString()}</Text>
              </View>
              {/* <View style={styles.propertiesContainer}>
                <Text style={styles.propertiesText}>{singleDish.Ingredients.toString()}</Text>
              </View> */}
              <View style={styles.propertiesContainer}>
                <Text style={styles.propertiesText}>{singleDish.Recipe.toString()}</Text>
              </View>
            {/* </ScrollView> */}

            </View>
            <Button title="Hide Recepie" onPress={onHidePress}></Button>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    backgroundColor: "#d6dbdb",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  dishesContainer: {
    // height:725,
    padding:'2%',
    backgroundColor: "#ebecee",
    justifyContent: "center",
    alignItems: "center"
  },
  propertiesWrapper:{
    height: 'auto',
    padding:'2%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    borderRadius: 10,
  },
  propertiesContainer:{
    backgroundColor: 'white',
    marginVertical: '1%',
    padding: '2%',
    justifyContent: "center",
    alignItems: "center"
  },
  scrollStyle:{
    height: 5
  },
  propertiesText:{
    fontSize:15,
  },
  propertiesTitle:{
    fontWeight: "bold",
    fontSize:15,
  },
  imageStyle:{
    width:350,
    height:350
  }
});

export { RecepieModal };
