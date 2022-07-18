import React, { useState } from "react";
import { 
    View, 
    Text, 
    Button, 
    Image, 
    StyleSheet, 
    ImageBackground, 
    ScrollView
} from 'react-native'

const Products = ({ navigation }) => {

    const imagenFondo = { uri: "https://reactjs.org/logo-og.png" };

    const [count, setCount] = useState(0);

    const sumarStars = () => {
        setCount(count + 1);
        alert('¡Producto añadido al carrito!')
    };

    const resetCarrito = () => {
        setCount(0);
    };
    
    return (
        <ScrollView style={stylesOne.scrollView}>
            <ImageBackground source={imagenFondo} resizeMode="cover" style={stylesImageBack.image}>
                <View style={stylesOne.container}>
                    <Text style={stylesOne.text}>+-----------------------+</Text>  
                    <Text style={stylesOne.text}>|  PRODUCTS REACT  |</Text>
                    <Text style={stylesOne.text}>+-----------------------+</Text>

                        <Text>-</Text>
                        <Text style={stylesTwo.text}>-PRODUCTO 1-</Text>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{uri: "https://reactjs.org/logo-og.png"}}/>
                        <Button 
                            title='AÑADIR AL CARRITO'
                            onPress={sumarStars}
                            >Añadir al carrito</Button>
                        
                        <Text>-</Text>
                        <Text style={stylesTwo.text}>-PRODUCTO 2-</Text>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{uri: "https://reactjs.org/logo-og.png"}}/>
                        <Button style
                            title='AÑADIR AL CARRITO'
                            onPress={sumarStars}
                            >Añadir al carrito</Button>
                        
                        <Text>-</Text>
                        <Text style={stylesTwo.text}>-PRODUCTO 3-</Text>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{uri: "https://reactjs.org/logo-og.png"}}/>
                        <Button 
                            title='AÑADIR AL CARRITO'
                            onPress={sumarStars}
                            >Añadir al carrito</Button>



                    <View style={stylesTwo.container}>
                        
                        
                        <View style={stylesThree.countContainer}>
                            <Text style={stylesThree.countText}>+--------------------------------+</Text>
                            <Text style={stylesThree.countText}>| CARRITO 🛒: {count} PRODUCTOS  |</Text>
                            <Text style={stylesThree.countText}>+--------------------------------+</Text>
                        </View>

                        <Button
                            title='RESETEAR CARRITO'
                            onPress={resetCarrito}
                            >Resetear carrito</Button>
                        
                        <Text>-</Text>

                        <Button
                            title='VOLVER A HOME'
                            onPress= { () => 
                                navigation.navigate('Home')}>Volver a home</Button>
                            
                    </View>

                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const stylesOne = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    text: {
        color: "white",
        fontSize: 32,
        lineHeight: 64,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },

    btndos: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },

    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    }
});

const stylesTwo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0ffff",
        alignItems: "center",
        justifyContent: "center",
    },
  
    text: {
        color: "black",
        fontSize: 22,
        lineHeight: 44,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "white"
    }
});

const stylesThree = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },

    countText: {
        color: "#FF00FF",
        fontSize: 30
    },
});

const stylesImageBack = StyleSheet.create({
    container: {
      flex: 1,
    },
    
    image: {
      flex: 1,
      justifyContent: "center"
    }
});


export default Products