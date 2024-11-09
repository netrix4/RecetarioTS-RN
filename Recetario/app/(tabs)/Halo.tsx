import { StyleSheet, SafeAreaView, Text, View } from "react-native";

export default function Halo() {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text>Aqui hay otra pestaña de navegación HALO</Text>
      </View>
    </SafeAreaView>
  );
}

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
