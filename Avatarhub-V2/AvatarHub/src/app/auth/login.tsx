import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const router = useRouter();

  const [emailCAL, setEmailCAL] = useState("");
  const [senhaCAL, setSenhaCAL] = useState("");
  const [erroCAL, setErroCAL] = useState("");

  const emailValidoCAL = "aluno@fundacao.com";
  const senhaValidaCAL = "123456";

  const fazerLoginCAL = () => {
    setErroCAL("");

    if (emailCAL.trim() === "" || senhaCAL.trim() === "") {
      setErroCAL("Por favor, preencha todos os campos.");
      return;
    }

    if (!emailCAL.includes("@") || !emailCAL.includes(".")) {
      setErroCAL("Digite um e-mail válido.");
      return;
    }

    if (emailCAL === emailValidoCAL && senhaCAL === senhaValidaCAL) {
      router.replace("/(tabs)");
    } else {
      setErroCAL("E-mail ou senha incorretos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AvatarHub</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={emailCAL}
          onChangeText={setEmailCAL}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry={true}
          value={senhaCAL}
          onChangeText={setSenhaCAL}
        />
      </View>

      
      <Text style={styles.errorText}>{erroCAL}</Text>

      <TouchableOpacity style={styles.button} onPress={fazerLoginCAL}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0E",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#a78bfa",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#f5f5f7",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#f5f5f7",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    height: 55,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#333",
    fontSize: 16,
  },
  errorText: {
    color: "#ff4d4d",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    minHeight: 40, 
    marginBottom: 5, 
  },
  button: {
    backgroundColor: "#8b5cf6",
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});