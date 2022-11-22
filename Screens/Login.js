import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, ScrollView, View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from "react-native";
import Firebase from "../database/Firebase";

export default function Login({}) {
    const navigation = useNavigation();
    const [state, setState] = useState({
      usuario: '',
      contrasena: ''
    })

    const handleChangeText = (usuario, value) => {
      setState({ ...state, [usuario]: value })
    }

    const SaveLogin = async () => {
      if (state.usuario === '') {
        alert('Por favor ingrese un usuario')
      }else {
        Firebase.db.collection('users').add({
          usuario: state.usuario,
          contrasena: state.contrasena
        })
        alert('Guardado')
      }
    }

return (
    <View>
        <ImageBackground
        style={styles.ImageBackground}
        source={require("../assets/ima/fondo.jpg")}> 

        <ScrollView>
            
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 2,
            marginTop: 20,
          }}
        >
          <Image
            style={{
              margin: 2,
              resizeMode: "center",
              alignSelf: "center",
              height: 290,
              width: 250,
            }}
         source={require("../assets/ima/logo.jpg")}
         />
         </View>

        <TextInput 
        placeholder="Correo" 
        style={styles.textInput} 
        onChangeText={(value) => handleChangeText('usuario', value)}/> 
        
        <TextInput
          placeholder="Contraseña"
          style={styles.textInputone} 
          password={true}
          secureTextEntry={true}
          onChangeText={(value) => handleChangeText('contrasena', value)}
        />

<TouchableOpacity
          onPress={() => SaveLogin()}
          style={{
            backgroundColor: "#3361FF",
            padding: 10,
            marginTop: "10%",
            width: "40%",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "white",
            }}
          >
            {" "}
            Ingresar
          </Text>
        </TouchableOpacity> 

        <View style={styles.boton} >

        <TouchableOpacity
          onPress={() => navigation.navigate("Registrate")}
          style={{
            backgroundColor: "#3361FF", //#FF6200
            padding: 10,
            marginTop: "4%",
            width: 140,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "white",
            }}
          >
            {" "}
            Regístrate
          </Text>
        </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("olvido")}
        
        >
          <Text
            style={{
              fontSize: 20, 
              textAlign: "center",
              marginTop: "5%",
              color: "white",
              textDecorationLine: 'underline',
              fontStyle: 'italic',
            }}
          >
            {" "}
            Olvidé mi contraseña{" "}
          </Text>
        </TouchableOpacity> 

        </ScrollView>
    </ImageBackground>
    </View>
);
}
 const styles = StyleSheet.create({
    ImageBackground: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
      },
    
      textInput: {
        borderWidth: 1,
        padding: 10,
        width: "90%",
        height: 50,
        marginTop: "8%",
        marginLeft: "5%",
        marginRight: "50%",
        borderColor:  "white",
        backgroundColor: "transparent",
        color:"white"
      },
      
  textInputone: {
    borderWidth: 1,
    padding: 10,
    width: "90%",
    height: 50,
    marginTop: "2%",
    marginLeft: "5%",
    marginRight: "50%",
    borderColor:  "white",
    backgroundColor: "transparent",
    color:"white"
  },
  boton: {
    margin: 20,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
 })
