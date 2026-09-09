import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Cafe do Codigo</Text>
          <Text style={styles.headerSubtitle}>Seu cafe, uma linha por vez</Text>
        </View>

        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={20} color="#2f2d2c" ></Ionicons>
        </View>
      </View>
      {/* Header */}

      {/* Conteudo */}
      <View style={styles.content}>
        <View style={styles.greatingSection}>
          <Text style={styles.greatingTitle}>Bom dia!</Text>
          <Text style={styles.greatingSubtitle}>Quetal um cafe hoje?</Text>
        </View>

        <View>
          <View>
            <Image source={require('./assets/coffee.jpg')}/>
            <Text>Capucino Especial</Text>
            <Text>Cremoso e delicioso</Text>
            <Text>R$ 12,90</Text>
          </View>
        </View>
      </View>
      {/* Conteudo */}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },

  header: {
    width: '100%',
    padding: 60,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 23,
    fontWeight: "800",
    color: "#2f2d2c"
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4,
  },

  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    paddingHorizontal: 24,
  },

  greatingSection: {
    marginTop: 10,
    marginBottom: 24,
  },

  greatingTitle: {
      fontSize: 32,
      fontWeight: '800',
      color: "#2f2d2c"
  },

  greatingSubtitle: {
      fontSize: 16,
      color: "#9b9b9b",
      marginTop: 8,
  }

});