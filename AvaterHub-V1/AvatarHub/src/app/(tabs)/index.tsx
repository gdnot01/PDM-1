import{ View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

export default function Index() {
    const CALrouter = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Index do Tabs</Text>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => CALrouter.push('')}//colocar Path
            > {/*quando pressionado, ATIVA A FUNÇÃO E MUDA DE TELA, não presisa de parametro no back*/}
                <Text>Ir</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6ec6e0",
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