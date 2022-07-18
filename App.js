/*
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const simpleAlert = () => {
    alert('Bienvenido '+ ' ' + email)
  }
 
  const showPass = () => {
    console.log(password);
  }
 
  const checkTextInput = () => {
    //Check for the Name TextInput
    if (email=="" && !password=="") {
      alert('Please Enter Email');
      return;
    }
    //Check for the Email TextInput
    if (password=="" && !email=="") {
      alert('Please Enter Password');
      return;
    }
 
    if (password=="" && email=="") {
      alert('Please Enter Email and Password');
      return;
    }
 
    if (!email=="") {
      alert('Bienvenido '+ ' ' + email);
      return;
    }
 
    alert('Success');
  };
 
  return (
     
        <View style={styles.container}>
          <Text style={stylesTwo.text}>+--------------------+</Text>  
          <Text style={stylesTwo.text}>| LOGIN REACT JS |</Text>
          <Text style={stylesTwo.text}>+--------------------+</Text>
          <Image
            style={{ width: 100, height: 100 }}
            source={{uri: "https://reactjs.org/logo-og.png"}}/>
          <Text>+------------+</Text>  
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="       Email/Usuario"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
   
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="        Contraseña"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
   
          <TouchableOpacity style={styles.loginBtn}
            onPress={(checkTextInput)}>
            <Text style={styles.loginText}>INICIAR SESIÓN</Text>
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.loginBtn}
            onPress={showPass}>
            <Text style={styles.loginText}>VER CONTRASEÑA POR CONSOLA</Text>
          </TouchableOpacity>
        </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#00ced1",
  },
});
 
const stylesTwo = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
 
*/

import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import MainStack from './navigation/MainStack'

import Login from './screens/Login'
 
 
function App() {
  return (
    <SafeAreaView style = {{ flex: 1}}>
 
        <MainStack />
 
    </SafeAreaView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    flex: 1,
    justifyContent: 'center',
  }
})
 
export default App;
