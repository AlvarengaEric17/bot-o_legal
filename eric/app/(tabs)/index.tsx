import { StyleSheet, View, Text } from 'react-native';

import Button from "../../components/Button"

export default function HomeScreen() {
  const Clicar = () => {
    alert("Apertei no Botão!")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Olá pessoal </Text>
      <Button title="Clique aqui" onPress={Clicar} />

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    padding: 20,
  }
})