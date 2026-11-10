import {View, Text, Image, Pressable, StyleSheet, ScrollView, Alert,} from "react-native";
import {useLocalSearchParams,Stack,} from "expo-router"; //Localparams ta ai sópra ajudar nas rotas de id internas
import { productsCAL } from "../data/products";

//Parte de dentro
export default function CALProductDetails() {
  const { id } = useLocalSearchParams<{ id: string; }>();

  const CALproduct = productsCAL.find(
    (item) => item.idCAL === id ); //chama o produto pelo id

  if (!CALproduct) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{ title: "Detalhes do produto" }}
      />

      <Image
        source={{ uri: CALproduct.imageCAL }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.name}>
          {CALproduct.nameCAL}
        </Text>

        <Text style={styles.price}>
          {CALproduct.priceCAL.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}
        </Text>

        <Text style={styles.heading}> Descrição </Text>

        <Text style={styles.description}> {CALproduct.descriptionCAL} </Text>

        <Pressable
          style={styles.button}
          onPress={() =>Alert.alert("AvatarHub", "Compra demonstrativa!")}>
          <Text style={styles.buttonText}> Compre Agora </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141419",
  },
  image: {
    width: "100%",
    height: 320,
  },
  content: {
    padding: 20,
  },
  name: {
    color:"#f5f5f7",
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 22,
    color: "#35D49A",
    marginTop: 10,
  },
  heading: {
    color:"#f5f5f7",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  description: {
    color:"#f5f5f7",
    fontSize: 16,
    marginTop: 8,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#8B5CF6",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "#F5F5F7",
    fontSize: 17,
    fontWeight: "bold",
  },
});