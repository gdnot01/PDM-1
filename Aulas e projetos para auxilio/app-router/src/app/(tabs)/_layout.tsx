import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign'; //vai romarno ci

//sempre tem header,ele é a parte de baixo
export default function RootStackLayout () {
    return(
        <Tabs screenOptions={{
            tabBarActiveBackgroundColor: "green", //cor do menu ativo
            tabBarActiveTintColor: "red", //cor do icone ativo

            tabBarInactiveBackgroundColor:"gray", //cor do menu inativo
            tabBarInactiveTintColor: "black",//cor do icone inativo

            tabBarStyle:{
                height: 65,
            },
            tabBarLabelStyle:{
                fontSize:18
            },
        }}> 
            <Tabs.Screen name="contatos"
            options={{
                tabBarIcon:(({})=>(<AntDesign name="home" size={24} color="black" />)) //era para estar funcionando os icones,mas o coisa não quer reconheçer
            }}
            />
            <Tabs.Screen name="index"/>
        </Tabs>
    )

}