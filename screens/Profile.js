import React from 'react'
import {
    View, 
    Text, 
    Button, 
    Image, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput,
    ScrollView
} from 'react-native'

const Profile = ({ navigation, route }) => {
 
    const { nombre } = route.params

    const saveAlert = () => {
        alert('¡Datos guardados!')
    }
 
    return (
        <ScrollView style={stylesOne.scrollView}>
            <View style={stylesOne.container}>
                <Text style={stylesTwo.text}>| PERFIL USUARIO |</Text>

                <Image
                style={{ width: 100, height: 100 }}
                source={{uri: "https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/1366_2000.jpeg"}}/>
                
                <Text style={stylesThree.text}>Bienvenido { nombre }</Text>

                <Text style={stylesTwo.textInput}>EDAD:</Text>
                <TextInput style={stylesTwo.input}></TextInput>
                <Text style={stylesTwo.textInput}>FECHA DE NACIMIENTO:</Text>
                <TextInput style={stylesTwo.input}></TextInput>
                <Text style={stylesTwo.textInput}>NACIONALIDAD:</Text>
                <TextInput style={stylesTwo.input}></TextInput>
                <Text style={stylesTwo.textInput}>TELÉFONO:</Text>
                <TextInput style={stylesTwo.input}></TextInput>
                <Text style={stylesTwo.textInput}>EMAIL:</Text>
                <TextInput style={stylesTwo.input}></TextInput>
                <Text style={stylesTwo.textInput}>DIRECCIÓN:</Text>
                <TextInput style={stylesTwo.input}></TextInput>
                <Text style={stylesTwo.textInput}>CÓDIGO POSTAL:</Text>
                <TextInput style={stylesTwo.input}></TextInput>
            

                <Button style={stylesOne.btndos}
                    title='GUARDAR DATOS'
                    onPress ={saveAlert}>Ir a Home</Button>
                    
                <TouchableOpacity style={stylesOne.loginBtn}
                    onPress= { () =>
                        navigation.navigate('Home')}>
                    <Text style={stylesOne.loginText}>IR A HOME</Text>
                </TouchableOpacity>
    

            </View>
        </ScrollView>
    )
}

const stylesOne = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000",
      alignItems: "center",
      justifyContent: "center",
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

    btnSave: {
        width: "30%",
        borderRadius: 15,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#00ced1",
    },

    btndos: {
        backgroundColor: "#00ced1"
    },

    textDos: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"
    },

    loginText: {
        color: "black",
        fontSize: 18,
        lineHeight: 54,
        fontWeight: "bold",
        textAlign: "center",
    },

    scrollView: {
        backgroundColor: 'black',
        marginHorizontal: 20,
    }
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
    },

    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    }, 
    
    textInput: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    }
});

const stylesThree = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 32,
      lineHeight: 64,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
});
 
 
export default Profile
