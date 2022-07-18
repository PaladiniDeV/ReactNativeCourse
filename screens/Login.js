import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
 
const Login = ({ navigation }) => {
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
 
};
 
  return (
      <ScrollView style={styles.scrollView}>
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
            onPress= { () =>
                {navigation.navigate('Profile', {
                    nombre: (email)
                });}}>
            <Text style={styles.loginText}>INICIAR SESION</Text>
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.loginBtn}
            onPress={showPass}>
            <Text style={styles.loginText}>VER CONTRASEÑA POR CONSOLA</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={stylesOne.buttonFacebookStyle}
            activeOpacity={0.5}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
              }}
              style={stylesOne.buttonImageIconStyle}
            />
            <View style={stylesOne.buttonIconSeparatorStyle} />
            <Text style={stylesOne.buttonTextStyle}>
              Login Using Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesOne.buttonGPlusStyle}
            activeOpacity={0.5}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
              }}
              style={stylesOne.buttonImageIconStyle}
            />
            <View style={stylesOne.buttonIconSeparatorStyle} />
            <Text style={stylesOne.buttonTextStyle}>
              Login Using Google Plus
            </Text>
          </TouchableOpacity>
            
        </View>
      </ScrollView>
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

  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 20,
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

const stylesOne = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});

export default Login

 