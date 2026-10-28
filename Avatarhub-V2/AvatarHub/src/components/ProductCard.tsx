import { Text, View,Image,StyleSheet,Pressable } from "react-native";
import { useRouter } from "expo-router";
import { CALProduct} from "@/app/data/products";

//Parde de fora
type CALProductCardProps={
    CALproduct: CALProduct//CAUProduct é um objeto?(Não tenho certeza)
}

export default function CALProductCard({CALproduct,}: CALProductCardProps) {
  const CALrouter = useRouter()

    return(
        <View>
            <Image //cada um vai ficar na linha, eu acho
                source={{ uri: CALproduct.imageCAL }} //imagem do products
                style={styles.image}
                resizeMode="cover"/>
            <Text style={styles.name}>
                {CALproduct.nameCAL}
            </Text> 

            <Text style={styles.price}>
                {CALproduct.priceCAL.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}
            </Text>


      
            <Pressable
                style={styles.button}
                onPress={() => CALrouter.push({
                    pathname: "/products/[id]",
                    params: {id: String(CALproduct.idCAL)},
                    })
                }>
  <Text style={styles.buttonText}>
    Ver detalhes
  </Text>
</Pressable>

        </View>
    )//fim do return

}//fin da função

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#141419",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elevation: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    color: "#f5f5f7",
  },
  price: {
    fontSize: 16,
    color: "#35D49A",
    marginTop: 6,
  },
  button: {
    backgroundColor: "#8B5CF6",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 6,
    marginBottom:10,
  },
  buttonText: {
    color: "#F5F5F7",
    fontWeight: "bold",
  },
});