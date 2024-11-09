import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Modal,
  Button,
  View,
  Image,
} from "react-native";

interface IPropsRecipeModal {
  onHidePress: () => void;
  isModalVisible: boolean;
}

const RecepieModal: React.FC<IPropsRecipeModal> = ({
  onHidePress,
  isModalVisible,
}) => {
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <Image source={require("@/assets/images/Pizza.png")} />
          <Text>Insert recepie info here</Text>
          <Button title="Hide Modal" onPress={onHidePress}></Button>
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
});

export { RecepieModal };
