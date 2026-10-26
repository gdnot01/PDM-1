import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";


export default function Home() {
    //PUSH - Navegação para outra tela, PODE VOLTAR
    //BACK - Voltar para a tela anterior
    //REPLACE - Substituir a tela atual por outra, NÃO PODE VOLTAR

    const CALrouter = useRouter();
    function navegar (){ //função para navegar para a tela sobre
        CALrouter.push('(tabs)')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ola, Expo router!</Text>

            <TouchableOpacity 
            style={styles.button} 
            onPress={navegar}> {/*quando pressionado, ATIVA A FUNÇÃO E MUDA DE TELA*/}
                <Text>Ir para Tabs</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
    },

    button: {
        backgroundColor: "#537580",
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },


});