import React, { useState } from "react";
import { 
  View, 
  Text, 
  Button, 
  ImageBackground, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native'
 
const Home = ({ navigation }) => {

  const imagenFondo = { uri: "https://reactjs.org/logo-og.png" };

  const [count, setCount] = useState(0);

  const sumarStars = () => {
    setCount(count + 1);
    if (count>=5){
      setCount(5)
    }
  };

  const restarStars = () => {
    setCount(count - 1);
    if (count<=0){
      setCount(0)
    }
  };

  const alertStars = () => {
    alert('¡Gracias por su valoración!')
    setCount(0)
  }

  const alertTxtIn = () => {
    alert('¡Gracias por contactar con nosotros!')
  }

  return (
          <ScrollView style={styles.scrollView}>
            <ImageBackground source={imagenFondo} resizeMode="cover" style={stylesImageBack.image}>
                <Text style={stylesTwo.text}>REACT NATIVE HOME</Text>
               
                <View style={styles.container}>
                
                <View style={styles.countContainer}>
                    <Text style={stylesText.textTwo}>VALORA NUESTRO SERVICIO</Text>
                    <Text style={styles.countText}>ESTRELLAS: {count} ★</Text>
                </View>
                <TouchableOpacity onPress={sumarStars}>
                    <View style={styles.button}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={restarStars}>
                    <View style={styles.button}>
                        <Text>-</Text>
                    </View>
                </TouchableOpacity>
                <Button title='VALORAR' style={stylesBtnStars.loginBtn}
                    onPress={alertStars}/>
                </View>
                <Text>-</Text>
                <View>
                  <Text style={stylesText.textTwo}>INFORMACIÓN QUE QUIERAS SABER O DUDAS QUE TENGAS</Text>
                  <Text>-</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="ESCRIBIR AQUÍ..."
                    placeholderTextColor="white"
                  />
                  <Text>-</Text>
                  <Button title="ENVIAR"  style={stylesBtnStars.btnUno}
                    onPress={alertTxtIn}/> 
                </View>

                <Text>-</Text>

                <View>
                  <Text style={stylesText.textOne}>INSTAGRAM:</Text>
                  <Text style={stylesText.textTwo}>@react_native_js</Text>
                  <Text style={stylesText.textOne}>FACEBOOK:</Text>
                  <Text style={stylesText.textTwo}>@react_native_js</Text> 
                  <Text style={stylesText.textOne}>GMAIL:</Text>
                  <Text style={stylesText.textTwo}>reactjs@gmail.com</Text>
                  <Text style={stylesText.textOne}>LINKEDLN:</Text>
                  <Text style={stylesText.textTwo}>@react_native_js</Text>
                  <Text style={stylesText.textOne}>CONTACTO:</Text>
                  <Text style={stylesText.textTwo}>911 665 763</Text>
                </View>

                <Button  title='IR A PERFIL' style={stylesBtnStars.btnDos}
                    onPress = { () => 
                      navigation.navigate('Profile', {
                        nombre: ''
                      })}>Picame</Button>
                
                <Text>-</Text>
                
                <Button  title='IR A TIENDA' style={stylesBtnStars.btnDos}
                    onPress = { () => 
                        navigation.navigate('Products')}>Picame</Button>
                
                <Text>-</Text>

                <Button  title='LOG OUT' 
                    onPress = { () => 
                        navigation.navigate('Prueba')}>Picame</Button>
            </ImageBackground>
          </ScrollView>   

    )
}

const stylesImageBack = StyleSheet.create({
    container: {
      flex: 1,
    },
    
    image: {
      flex: 1,
      justifyContent: "center"
    }
});

const stylesTwo = StyleSheet.create({
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
});

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },

    scrollView: {
      backgroundColor: 'black',
      marginHorizontal: 20,
    },
    
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginLeft: 420,
      marginRight: 420
    },
    
    countContainer: {
      alignItems: "center",
      padding: 10
    },

    countText: {
      color: "#FF00FF",
      fontSize: 30
    },
  
    
    textInput: {
      height: 30,
      flex: 1,
      padding: 30,
      marginLeft: 30,
      marginRight: 30
    },
});
  
const stylesText = StyleSheet.create({
    textOne: {
      color: "white",
      fontSize: 20,
      lineHeight: 34,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },

    textTwo: {
      color: "white",
      fontSize: 20,
      lineHeight: 34,
      fontWeight: "bold",
      fontWeight: "normal",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
});

const stylesBtnStars = StyleSheet.create({
    btnUno: {
      fontSize: 14,
      fontWeight: "bold",
      padding: 100,
      marginLeft: 420,
      marginRight: 420
    },

    btnDos: {
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#ff0000"
    },

    loginBtn: {
      width: "70%",
      borderRadius: 25,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#00ced1",
  },
})
export default Home



