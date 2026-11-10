import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

//TELA OPICIONAL Nº3, TA FICANDO CHATO JÁ

export default function SettingsCAL() {
  const CALrouter = useRouter();

  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => CALrouter.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={25} color="#FFFFFF"/>
        </TouchableOpacity>

        <Text style={styles.headerTitle}> Configurações </Text>
      </View>

      {/* TÍTULO */}
      <View style={styles.intro}>
        <Text style={styles.title}> Personalize sua experiência </Text>
        <Text style={styles.subtitle}> Gerencie as preferências do AvatarHub. </Text>
      </View>

      {/* OPÇÕES */}
      <View style={styles.optionsCard}>

        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.7}
        >
          <Ionicons name="notifications-outline" size={23} color="#A78BFA"
          />
          <Text style={styles.optionText}> Notificações </Text>
          <Ionicons name="chevron-forward" size={20} color="#A69BB8"/>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.7}
        >
          <Ionicons name="moon-outline" size={23} color="#A78BFA"
          />
          <Text style={styles.optionText}> Aparência </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#A69BB8"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.7}
        >
          <Ionicons name="lock-closed-outline" size={23} color="#A78BFA"
          />
          <Text style={styles.optionText}> Privacidade </Text>
          <Ionicons name="chevron-forward" size={20} color="#A69BB8"/>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.7}
        >
          <Ionicons name="information-circle-outline" size={23} color="#A78BFA"/>
          <Text style={styles.optionText}> Sobre o aplicativo </Text>
          <Ionicons name="chevron-forward" size={20} color="#A69BB8"/>
        </TouchableOpacity>

      </View>

      {/* VERSÃO */}
      <Text style={styles.version}> AvatarHub • Versão 1.0.0 </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0912",
  },

  header: {
    height: 60,
    backgroundColor: "#201B2E",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    gap: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#38274F",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  intro: {
    margin: 20,
    marginTop: 30,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#A69BB8",
    fontSize: 13,
    marginTop: 7,
  },

  optionsCard: {
    backgroundColor: "#201B2E",
    marginHorizontal: 18,
    borderRadius: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#38274F",
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#38274F",
    gap: 13,
  },

  optionText: {
    color: "#FFFFFF",
    fontSize: 15,
    flex: 1,
  },

  version: {
    color: "#776B89",
    textAlign: "center",
    marginTop: 30,
    fontSize: 12,
  },
});
