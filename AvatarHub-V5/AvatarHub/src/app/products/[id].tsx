import { View, Text, Image, StyleSheet, ScrollView, Alert, TouchableOpacity } from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { productsCAL } from "../data/products";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function CALProductDetails() {
  const { id: idCAL } = useLocalSearchParams<{ id: string }>();
  const routerCAL = useRouter();

  const [coracaoCAL, setCoracaoCAL] = useState(false);

  function exibirCoracaoCAL() {
    setCoracaoCAL(!coracaoCAL);
  }

  const productCAL = productsCAL.find((item) => item.idCAL === idCAL);

  if (!productCAL) {
    return (
      <View style={styles.containerCAL}>
        <Text style={{ color: "#fff", margin: 20 }}>Produto não encontrado.</Text>
      </View>
    );
  }

  return (

    <View style={styles.containerCAL}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Botões do Topo */}
      <View style={styles.botaoCimaCAL}>
        <TouchableOpacity style={styles.botaoDetalhesCAL} onPress={() => routerCAL.back()}>
          <MaterialIcons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoDetalhesCAL} onPress={exibirCoracaoCAL}>
          {coracaoCAL ? (
            <MaterialIcons name="favorite" size={24} color="#cc1717" />
          ) : (
            <MaterialIcons name="favorite-border" size={24} color="#FFF" />
          )}
        </TouchableOpacity>
      </View>

      {/* Coisas no meio */}
      <ScrollView style={styles.containerCAL}>
        {/* Imagem */}
        <Image
          source={{ uri: productCAL.imageCAL }}
          style={styles.imageCAL}
          resizeMode="cover"
        />

        {/* Conteúdo */}
        <View style={styles.contentCAL}>
          <Text style={styles.nomeCAL}>{productCAL.nameCAL}</Text>

          <Text style={styles.textoPerfilCAL}>Criado por @JUSTIN⚡ </Text>

          {/* Descrição */}
          <View style={styles.linhaDivisoraCAL}>
            <Text style={styles.headingCAL}>Descrição</Text>

            <Text style={styles.descricaoCAL}>{productCAL.descriptionCAL}</Text>

            {/* Bloco de Propriedades / Atributos */}
            <Text style={styles.headingCAL}>Propriedades</Text>

            <View style={styles.containerAtributosCAL}>
              {productCAL.atributosCAL?.map((itemCAL) => (
                <View key={itemCAL.idCAL} style={styles.cardAtributoCAL}>
                  <Text style={styles.rotuloAtributoCAL}>{itemCAL.rotuloCAL}</Text>
                  <Text style={styles.valorAtributoCAL}>{itemCAL.valorCAL}</Text>
                  <Text style={styles.raridadeAtributoCAL}>{itemCAL.raridadeCAL} <Text style={styles.textoCAL}>possuem</Text></Text>
                </View>
              ))}
            </View>

          </View>
        </View>
      </ScrollView>

      {/* Aba de baixo */}
      <View style={styles.abaBaixoCAL}>
        <View>
          <Text style={styles.textoCAL}>Compre por:</Text>

          <View style={styles.precoContainerCAL}>

            <Text style={styles.precoCAL}>
              {productCAL.priceCAL.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </Text>
            <Text style={styles.textoPrecoCAL}>Termina em 4 Semanas</Text>
          </View>
        </View>

        <View style={styles.botaoCompraCAL}>

          <TouchableOpacity
            style={styles.botaoOfertaCAL}
            onPress={() => Alert.alert("AvatarHub", "Compra demonstrativa!")}
          >
            <Text style={styles.botaoTextoCAL}>Fazer Oferta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoCompreCAL}
            onPress={() => Alert.alert("AvatarHub", "Compra demonstrativa!")}
          >
            <Text style={styles.botaoTextoCAL}>Compre Agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Estrutura
  containerCAL: {
    flex: 1,
    backgroundColor: "#0B0912",
  },
  contentCAL: {
    padding: 20,
  },
  imageCAL: {
    width: "100%",
    height: 320,
  },

  // Botões do topo
  botaoCimaCAL: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 10,
    elevation: 10,
  },
  botaoDetalhesCAL: {
    backgroundColor: "#8B5CF6",
    borderRadius: 18,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  // Informações
  nomeCAL: {
    color: "#F5F5F7",
    fontSize: 24,
    fontWeight: "bold",
  },
  textoPerfilCAL: {
    fontSize: 13,
    color: "#F5F5F7",
    borderWidth: 1,
    borderColor: "#38274F",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  textoCAL: {
    color: "#F5F5F7",
    fontSize: 14,
  },

  // Descrição e propriedades
  linhaDivisoraCAL: {
    borderWidth: 1,
    borderColor: "#38274F",
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    backgroundColor: "#130F1E",
  },
  headingCAL: {
    color: "#F5F5F7",
    fontSize: 18,
    fontWeight: "bold",
  },
  headingAtributosCAL: {
    color: "#F5F5F7",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  descricaoCAL: {
    color: "#D1D1D6",
    fontSize: 15,
    marginTop: 8,
    lineHeight: 22,
    marginBottom: 10
  },

  // Cards de atributos
  containerAtributosCAL: {
    gap: 12,
    marginTop: 12,
  },
  cardAtributoCAL: {
    backgroundColor: "#8B5CF6",
    padding: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    gap: 6,
  },
  rotuloAtributoCAL: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  valorAtributoCAL: {
    backgroundColor: "#885214",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: "#FFB700",
    fontWeight: "bold",
    fontSize: 13,
  },
  raridadeAtributoCAL: {
    color: "#FFB700",
    fontWeight: "bold",
    fontSize: 13,
  },

  // Aba de baixo
  abaBaixoCAL: {
    backgroundColor: "#201A2D",
    borderTopWidth: 1,
    borderTopColor: "#38274F",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    gap: 15,
  },
  precoContainerCAL: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 10,
  },
  precoCAL: {
    fontSize: 22,
    color: "#35D49A",
    fontWeight: "bold",
  },
  textoPrecoCAL: {
    fontSize: 12,
    color: "#F5F5F7",
    borderWidth: 1,
    borderColor: "#3E3E4B",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  // Botões compra e oferta
  botaoCompraCAL: {
    flexDirection: "row",
    gap: 12,
  },
  botaoOfertaCAL: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#38274F",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoCompreCAL: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: "#8B5CF6",
    borderWidth: 1,
    borderColor: "#38274F",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoTextoCAL: {
    color: "#F5F5F7",
    fontSize: 15,
    fontWeight: "bold",
  },
});
