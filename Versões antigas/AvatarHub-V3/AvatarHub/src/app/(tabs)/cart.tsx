import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function CartCAL() {
  const CALrouter = useRouter();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Carrinho</Text>
      <Text>Seus produtos aparecerão aqui.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
