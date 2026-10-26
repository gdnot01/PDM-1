import { Stack } from "expo-router";
import { Button } from "react-native";

//screenOptions={{ headerShown: false }} = muda a tela de header, se for false, não mostra o header, se for true, mostra o header.Padrão é true, então não precisa coloca

//Junção de telas
export default function RootStackLayout() {
    return (
        <Stack screenOptions={{ 
            headerShown: true,
            headerStyle: {
                backgroundColor: "#29d612", //muda a cor do header //muda a cor do texto do header
            },
            headerTintColor: "#ff00b3", //muda a cor do texto do header
            headerTitleAlign: "center", //muda a posição do texto do header

        }}> {/*Mudança de telas, Lugar de mudança global*/}

            <Stack.Screen name="index" options={{
                title: "Home", //muda o nome do header
                headerRight: () => <Button title="Ir Sobre" onPress={() => {}} /> /*raramente usado*/
                }} />
        <Stack.Screen name="/auth/login" options={{ // a rota ficou assim: auth/login, pq a pasta auth está dentro da pasta app, então a rota ficou assim: auth/login
                title: "Login",
            }} />
        </Stack>
    );
}