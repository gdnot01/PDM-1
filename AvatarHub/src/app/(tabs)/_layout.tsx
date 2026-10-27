import { Tabs } from "expo-router";

export default function RootStackLayout () {
    return(
        <Tabs> 
            <Tabs.Screen name="contatos"/>
            <Tabs.Screen name="index"/>
        </Tabs>
    )

}