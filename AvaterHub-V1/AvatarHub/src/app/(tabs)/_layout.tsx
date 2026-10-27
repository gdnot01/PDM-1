import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootStackLayout () {
    return(
           <Tabs screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#2563EB",
                tabBarInactiveTintColor: "#777777",
            }}>
            <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" color={color} size={size} />),
        }}/>
          <Tabs.Screen
        name="cart"
        options={{
          title: "Carrinho",
          tabBarIcon: ({ color, size }) => (<Ionicons name="cart-outline" color={color} size={size} />),
        }}/>
         <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />),
        }}/>
        </Tabs>
    )

}