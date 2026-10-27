import { View, Text,StyleSheet } from 'react-native';
import { useRouter } from "expo-router";

export default function Login() {
    const CALrouter = useRouter();

    //Usar replace para não permitir voltar para a tela anterior,COISA DE LOGIN 

    return (
        <View style={styles.container}>
            <Text>Login</Text>
          <Text onPress = {()=> CALrouter.back()}> Voltar</Text>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});