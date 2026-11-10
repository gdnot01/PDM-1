import { View, Text, StyleSheet, TouchableOpacity,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

//TELA OPCIONAL, SOMENTE PARA O PORTIFOLIO

export default function CartCAL() {
  const CALrouter = useRouter();

  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Carrinho</Text>
        <Ionicons name="cart-outline" size={27} color="#A78BFA" />
      </View>

      {/* CONTEÚDO DO CARRINHO VAZIO */}
      <View style={styles.emptyContainer}>

        <View style={styles.iconContainer}>
          <Ionicons
            name="cart-outline"
            size={65}
            color="#A78BFA"
          />
        </View>

        <Text style={styles.title}>
          Seu carrinho está vazio
        </Text>

        <Text style={styles.description}>
          Você ainda não adicionou nenhum avatar.
          Explore nossa coleção e encontre o seu favorito!
        </Text>

        {/* BOTÃO PARA VOLTAR À LOJA */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => CALrouter.navigate("/(tabs)")}
        >
          <Ionicons
            name="storefront-outline"
            size={20}
            color="#FFFFFF"
          />
          <Text style={styles.buttonText}>
            Explorar produtos
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0912",
    paddingTop: 20,
    paddingHorizontal: 18,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  iconContainer: {
    width: 125,
    height: 125,
    borderRadius: 65,
    backgroundColor: "#201B2E",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#38274F",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },

  description: {
    color: "#A69BB8",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#8952F6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 13,
    width: "100%",
    gap: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
