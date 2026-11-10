import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootStackLayout () {
    return(
           <Tabs screenOptions={{
                headerShown: false,
                tabBarActiveTintColor:"#292930",
                tabBarInactiveTintColor:"#1D1D25",
                tabBarActiveBackgroundColor:"#292930",
                tabBarInactiveBackgroundColor:"#1D1D25",
            }}>
            <Tabs.Screen
        name="index" //INDEX DO TABS
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" color={"#8B5CF6"} size={size}/>),
        }}/>
          <Tabs.Screen
        name="cart"
        options={{
          title: "Carrinho",
          tabBarIcon: ({ color, size }) => (<Ionicons name="cart-outline" color={"#8B5CF6"} size={size} />),
        }}/>
         <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (<Ionicons name="person-outline" color={"#8B5CF6"} size={size} />),
        }}/>
        </Tabs>
    )

}