import { Stack } from "expo-router";

export default function RootStackLayout() {
    return (
        <Stack> {/*Mudança de telas, Lugar de mudança global*/}
            <Stack.Screen name="index"/>
            
        </Stack>
            );
}