import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from "react-native";

type PropsCard = {
    imagem:string,
    nome:string
}

export default function Card({imagem, nome}:PropsCard){
    return(
        <View style={styles.container}>
            <Image
                source={{uri:imagem}}
                style={styles.imagem}
            />
            <Text style={styles.texto}>{nome}</Text>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Saber mais</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        width: 250,
        height:350,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        alignItems: 'center',
    },
    imagem:{
        width: 200,
        height: 200,
    },
    texto:{
        fontSize: 15,
    },
    botao:{
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: '#4400ff',
        borderRadius: 8,
        justifyContent: 'center',
        alignContent: 'center',
    },
    textoBotao:{
        fontSize: 18,
        color:'#fff',
        fontWeight: 'bold'
    },
})