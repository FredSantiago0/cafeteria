import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import CoffeeCard from './components/CoffeeCard';

export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handlerOrder = ()=>{
    if (name.trim() === ''){
      setMessage('Por favor, Informe seu nome!')
    }else{
      setMessage(`Olá ${name}, Seu pedido foi recebido!!`)
    }
  };
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}>

      <ScrollView>
        {/* Header */}
        <Header />
        {/* Header */}

        {/* Conteudo */}
        <View style={styles.content}>
          <View style={styles.greatingSection}>
            <Text style={styles.greatingTitle}>Bom dia!</Text>
            <Text style={styles.greatingSubtitle}>Quetal um cafe hoje?</Text>
          </View>

          <View style={styles.featureCard}>
            <Image source={require('./assets/coffee.jpg')} style={styles.imageStyle} />
            <Text style={styles.featureTitleCard}>Capucino Especial</Text>
            <Text style={styles.featureSubtitleCard}>Cremoso e delicioso</Text>
            <Text style={styles.featurePriceCard}>R$ 12,90</Text>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Nosso Cardapio</Text>

            <View style={styles.menuSection}>
              <CoffeeCard 
                name = 'Espresso'
                description='Puro e Forte'
                price='7,00'
              />
              <CoffeeCard 
                name = 'Cappucino'
                description='Puro e Forte'
                price='7,00'
              />
              <CoffeeCard 
                name = 'Espresso'
                description='Puro e Forte'
                price='7,00'
              />
              <CoffeeCard 
                name = 'Espresso'
                description='Puro e Forte'
                price='7,00'
              />
              <CoffeeCard 
                name = 'Espresso'
                description='Puro e Forte'
                price='7,00'
              />
            </View>

            <View style={styles.orderSection}>
              <Text style={styles.question}>QUal o seu nome?</Text>

              <TextInput
                style={styles.input}
                placeholder='Digite seu nome:'
                value={name}
                onChangeText = {setName}
              ></TextInput>

              <TouchableOpacity style={styles.button} onPress={handlerOrder}>
                <Text style={styles.buttonText}>Fazer meu pedido</Text>
              </TouchableOpacity>

              {message !== '' && (
                <Text style={styles.messageText}>{message}</Text>
              )}
            </View>
          </View>
        </View>
        {/* Conteudo */}

        {/* Footer */}
        <Footer/>
        {/* Footer */}

      </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
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
  },

  featureCard: {
    backgroundColor: "#ffffffff",
    borderRadius: 24,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32
  },

  imageStyle: {
    borderRadius: 16,
    width: "100%",
    height: 180,
    marginBottom: 16
  },

  featureTitleCard: {
    fontSize: 20,
    fontWeight: '800',
    color: "#2f2d2c"
  },

  featureSubtitleCard: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },

  featurePriceCard: {
    fontSize: 20,
    fontWeight: '800',
    color: "#c67c4e",
    marginTop: 12
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2b2c",
    marginBottom: 16
  },

  menuSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 32
  },

  menuCard: {
    width: "48%",
    padding: 16,
    backgroundColor: "#ffffffff",
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3,
    marginBottom: 16
  },

  orderSection: {
    backgroundColor: "#ffffffff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10
  },

  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },

  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#f0f0f0f0",
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16
  },

  button: {
    width: "100%",
    backgroundColor: "#c67c4e",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#c67c4e",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 4,

  },

  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffffff"
  },



  messageText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#c67c4b",
    textAlign: "center",
    marginTop: 20
  }
  


});