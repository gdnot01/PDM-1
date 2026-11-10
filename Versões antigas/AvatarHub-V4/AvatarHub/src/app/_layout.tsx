import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{  headerStyle:{
          backgroundColor:"#201B2E"},
          headerTintColor: "#F5F5F7"
        }}>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="auth/login" options={{ headerShown: false }}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      <Stack.Screen name="product/[id]" options={{headerShown: true}}/>
      <Stack.Screen name="settings" options={{headerShown: true, title: "Configurações"}}/> 
      <Stack.Screen name="cart" options={{headerShown: true, title: "Carrinho"}}/> 
      <Stack.Screen name="profile" options={{headerShown: true, title: "Perfil"}}/> 
    </Stack>
  );
}
