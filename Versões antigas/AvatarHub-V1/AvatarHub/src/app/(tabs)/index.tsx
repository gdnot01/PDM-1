import {View, Text, FlatList, StyleSheet,} from "react-native";
import CALProductCard from "@/components/ProductCard";
import {productsCAL } from "../data/products";

//Backgound e logo
export default function Home() {
    return (
    <View style={styles.container}>
      <Text style={styles.title}> AvatarHub </Text>

      <Text style={styles.subtitle}> Nossos produtos </Text>

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
  title: {
    fontSize: 28,
    fontWeight: "condensedBold",
    marginHorizontal: 115 ,
    color: "#a78bfa"
  },
  subtitle: {
    fontSize: 18,
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 10,
    backgroundColor:"#8b5cf6",
    color:"#f5f5f7"
  },
  list: {
    paddingHorizontal: 50,
    padding: 10
  },
});