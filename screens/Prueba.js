import React, { useState } from "react";
import { 
  Alert, 
  Modal, 
  StyleSheet, 
  Text, 
  Pressable, 
  View,
  Image 
} from "react-native";

const Prueba = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
      <View style={styless.container}>
        <View style={styless.container}>          
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: "https://reactjs.org/logo-og.png" }}
              />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>OCULTAR PRODUCTO 1</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>VER INFO DEL PRODUCTO</Text>
          </Pressable>
        </View>

        <View style={styless.container}>          
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text>Hpla</Text>
                <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: "https://reactjs.org/logo-og.png" }}
              />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>OCULTAR EL PRODUCTO 2</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>VER INFO DEL PRODUCTO</Text>
          </Pressable>
        </View>

      </View>
    
  );
};

/*
            <View style={styles.container}>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Press Me"  
                    />  
                </View>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Press Me"  
                        color="#009933"  
                    />  
                </View>  
                <View style={styles.multiButtonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="A disabled button"  
                        disabled={true}  
                    />  
                    <Button  
                        onPress={this.onPressButton}  
                        title="OK!"  
                        color="#009933"  
                    />  
                </View>  
            </View>  
        );  
    }  
}  

*/
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const styless = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
  },  
  buttonContainer: {  
      margin: 20  
  },  
  multiButtonContainer: {  
      margin: 20,  
      flexDirection: 'row',  
      justifyContent: 'space-between'  
  }  
})  

export default Prueba;

/*
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    buttonContainer: {  
        margin: 20  
    },  
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    }  
})  
*/