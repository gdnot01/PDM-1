import { View, Text, StyleSheet ,TouchableOpacity, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

//TELA OPIOCIONAL, AINDA SOMENTE PARA PORTIFOLIO

export default function ProfileCAL() {
  const CALrouter = useRouter();

  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Perfil</Text>
        <Ionicons
          name="person-circle-outline"
          size={28}
          color="#A78BFA"
        />
      </View>

      {/* INFORMAÇÕES DO USUÁRIO */}
      <View style={styles.profileCard}>

        <View style={styles.avatar}>
          <Ionicons
            name="person"
            size={55}
            color="#A78BFA"
          />
        </View>

        <Text style={styles.name}>
          Usuário AvatarHub
        </Text>

        <Text style={styles.email}>
          aluno@fundacao.com
        </Text>

        <View style={styles.divider} />

        {/* INFORMAÇÕES DA CONTA */}
        <View style={styles.infoRow}>
          <Ionicons
            name="person-outline"
            size={22}
            color="#A78BFA"
          />
          <Text style={styles.infoText}>
            Minha conta
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#A69BB8"
          />
        </View>

        <View style={styles.infoRow}>
          <Ionicons
            name="bag-outline"
            size={22}
            color="#A78BFA"
          />
          <Text style={styles.infoText}>
            Meus produtos
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#A69BB8"
          />
        </View>

        <View style={styles.infoRow}>
          <Ionicons
            name="settings-outline"
            size={22}
            color="#A78BFA"
          />
          <Text style={styles.infoText}>
            Configurações
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#A69BB8"
          />
        </View>

      </View>

      {/* BOTÃO SAIR */}
      <TouchableOpacity
        style={styles.logoutButton}
        activeOpacity={0.7}
        onPress={() => CALrouter.replace("/auth/login")}
      >
        <Ionicons
          name="log-out-outline"
          size={22}
          color="#FF7070"
        />
        <Text style={styles.logoutText}>
          Sair da conta
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0912",
    paddingTop: 20,
    paddingHorizontal: 18,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  profileCard: {
    backgroundColor: "#201B2E",
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: "#38274F",
    alignItems: "center",
  },

  avatar: {
    width: 105,
    height: 105,
    borderRadius: 55,
    backgroundColor: "#302344",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#8952F6",
    marginBottom: 15,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  email: {
    color: "#A69BB8",
    fontSize: 14,
    marginTop: 6,
  },

  divider: {
    height: 1,
    backgroundColor: "#443653",
    width: "100%",
    marginVertical: 22,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: "#38274F",
    gap: 12,
  },

  infoText: {
    color: "#FFFFFF",
    fontSize: 15,
    flex: 1,
  },

  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#251820",
    borderWidth: 1,
    borderColor: "#61313B",
    padding: 16,
    borderRadius: 13,
    marginTop: 25,
    gap: 10,
  },

  logoutText: {
    color: "#FF7070",
    fontSize: 15,
    fontWeight: "bold",
  },
});
