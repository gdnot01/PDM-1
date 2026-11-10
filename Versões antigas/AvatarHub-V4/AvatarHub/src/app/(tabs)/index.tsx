import {View, Text, FlatList, StyleSheet,Image,TouchableOpacity,TextInput } from "react-native";
import CALProductCard from "@/components/ProductCard";
import {productsCAL } from "../data/products";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

//Backgound e logo
export default function HomeaCAL() {

  const [buscaCAL, setBuscaCAL] = useState("");
  const CALrouter = useRouter();

  const produtosFiltradosCAL = productsCAL.filter((produto) => {
    const CALnome = String(produto.nameCAL ?? produto.nameCAL ?? "");
    return CALnome
      .toLowerCase()
      .includes(buscaCAL.toLowerCase());
  });

    return (
    <View style={styles.container}>
      {/* HEADER: LOGO E CONFIGURAÇÕES */}
      <View style={styles.header}>
        <View style={styles.brand}>
          <Image
            source={require("../../../assets/images/avatarhub-logo-solo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

           <View style={styles.brandText}>
            <Text style={styles.brandName}> Avatar<Text style={styles.brandAccent}>Hub</Text> </Text>
            <Text style={styles.brandSubtitle}> DIGITAL COLLECTIBLES </Text>
          </View>

        </View>

        <TouchableOpacity
          style={styles.settings}
          activeOpacity={0.7}
          onPress={() => CALrouter.push("/settings")}
        >
          <Ionicons name="settings-outline" size={24} color="#B58AFF"/>

        </TouchableOpacity>

        </View>

      {/* BARRA DE PESQUISA */}
      <View style={styles.searchBar}>
        <Ionicons
          name="search-outline"
          size={22}
          color="#BDA5E8"
        />

        <TextInput
          style={styles.input}
          placeholder="Buscar avatares..."
          placeholderTextColor="#A69BB8"
          value={buscaCAL}
          onChangeText={setBuscaCAL}
          autoCapitalize="none"
        />
         <TouchableOpacity
          style={styles.filterButton}
          activeOpacity={0.7}
          onPress={() => {
            // Adicione a abertura dos filtros aqui.
          }}
        >
          <Ionicons name="options-outline" size={23} color="#FFFFFF"/>
        </TouchableOpacity>
      </View>

        {/* TÍTULO DA SEÇÃO */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.title}>
            Nossos produtos
          </Text>
          <Text style={styles.subtitle}>
            Encontre seu próximo avatar digital
          </Text>
        </View>
        <Ionicons name="sparkles-outline" size={23} color="#A78BFA"/>
      </View>
      
 {/* LISTA DE PRODUTOS */}
       <FlatList
        data={produtosFiltradosCAL}
        keyExtractor={(item) => String(item.idCAL)}
        numColumns={1}
        renderItem={({ item }) => (
          <CALProductCard CALproduct={item} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <Text style={styles.empty}>
            Nenhum produto encontrado.
          </Text>
        }
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0912",
    paddingTop: 18,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginBottom: 22,
  },

  brand: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  logo: {
    width: 44,
    height: 44,
  },

  brandText: {
    marginLeft: 10,
  },

  brandName: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
  },

  brandAccent: {
    color: "#A78BFA",
  },

  brandSubtitle: {
    color: "#A69BB8",
    fontSize: 9,
    letterSpacing: 1.3,
    marginTop: 3,
  },

  settings: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#201B2E",
    borderWidth: 1,
    borderColor: "#38274F",
    justifyContent: "center",
    alignItems: "center",
  },

  searchBar: {
    height: 56,
    marginHorizontal: 16,
    paddingLeft: 14,
    paddingRight: 6,
    borderRadius: 17,
    backgroundColor: "#201A2D",
    borderWidth: 1,
    borderColor: "#38274F",
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
    marginLeft: 10,
  },

  filterButton: {
    height: 44,
    width: 44,
    borderRadius: 13,
    backgroundColor: "#8952F6",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 26,
    marginBottom: 14,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 12,
    color: "#A69BB8",
    marginTop: 5,
  },

  list: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  empty: {
    color: "#F5F5F7",
    textAlign: "center",
    marginTop: 30,
  },
});