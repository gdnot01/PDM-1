import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ConfigsCAL() {
    const CALrouter = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Configs </Text>
      <Text>As configurações aparecerão aqui.</Text>
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
