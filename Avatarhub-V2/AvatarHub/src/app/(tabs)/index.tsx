import {View, Text, FlatList, StyleSheet, Pressable,Image,TouchableOpacity } from "react-native";
import CALProductCard from "@/components/ProductCard";
import {productsCAL } from "../data/products";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

//Backgound e logo
export default function HomeaCAL() {
  const CALrouter = useRouter();

    return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Image
          source={require("../../../assets/images/avatarhub-logo-solo.png")}//Salvei o arquivo como png duas vezes :(
          style={styles.logo} 
          resizeMode="contain"
          />

          <TouchableOpacity
            style={styles.settings}
            activeOpacity={0.7}
            onPress={() => CALrouter.push("/settings")
            }>
      <Ionicons name="settings-outline" size={25} color="#FFFFFF"/>
    </TouchableOpacity>

      </View>

      <Text style={styles.title}> Nossos produtos </Text>

      <FlatList
        data={productsCAL}//productsCAL é o que coisa o array
        keyExtractor={(item) => item.idCAL}
        numColumns={1}
        renderItem={({ item }) => (
          <CALProductCard CALproduct={item} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0E",
    paddingTop: 50,
  },
    header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  logo: {
    justifyContent:"center",
    width: 100,
    height: 70,
  },
  settings: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#201B2E",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 16,
    color: "#a78bfa"
  },
  list: {
    paddingHorizontal: 50,
    padding: 10
  },
});