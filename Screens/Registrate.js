import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView,
  Icon,
  ButtonRegistro
} from "react-native"; 
//import Firebase from "../database/Firebase";

export default function Registrate({}) {
    const navigation = useNavigation();
     {/*const [state, setState] = useState({
      nombre: '',
      direccion:'',
      telefono:'',
      usuario: '',
      contrasena: '',
      confirmar:''
    })

    const handleChangeText = (usuario, value) => {
      setState({ ...state, [usuario]: value })
    }

   const SaveRegister = () => {
      if (state.usuario === '') {
        alert('Por favor ingrese un usuario')
      }else {
        Firebase.db.collection('users').add({
          nombre: state.nombre,
          direccion: state.direccion,
          telefono: state.telefono,
          usuario: state.usuario,
          contrasena: state.contrasena,
          confirmar: state.confirmar
        })
        alert('Guardado')
      }
    }*/}

return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require("../assets/ima/fondo.jpg")}
    >
      <ScrollView style={styles.scrollView}>
        <TextInput
          placeholder="Nombre"
          style={styles.textInput}
          //onChangeText={setNombre}
          //value={nombre}
         // onChangeText={(value) => handleChangeText('nombre', value)}
        />
        <TextInput
          placeholder="Dirección"
          style={styles.textInput}
          //onChangeText={setDireccion}
          //value={direccion}
          //onChangeText={(value) => handleChangeText('direccion', value)}
        />
        <TextInput
          placeholder="Teléfono"
          style={styles.textInput}
          //onChangeText={setTelefono}
          //value={telefono}
          //onChangeText={(value) => handleChangeText('telefono', value)}
        />
        <TextInput
          placeholder="Correo"
          style={styles.textInput}
          //onChangeText={setUsuario}
          //value={usuario}
          //onChangeText={(value) => handleChangeText('usuario', value)}
        />
        <TextInput
          placeholder="Crear contraseña"
          secureTextEntry
          style={styles.textInputone}
          //onChangeText={setContrasena}
          //value={contrasena}
          //onChangeText={(value) => handleChangeText('contrasena', value)}
        />
        <TextInput
          placeholder="Confirmar contraseña"
          secureTextEntry
          style={styles.textInputone}
          //onChangeText={setConfirmar}
          //value={confirmar}
          //onChangeText={(value) => handleChangeText('confirmar', value)}
        />
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "red",
          }}
        >
          {/*{error}*/}
        </Text>
        <TouchableOpacity
          onPress={() => SaveRegister()}
          style={{
            backgroundColor: "#3361FF", 
            padding: 10,
            marginTop: "2%",
            width: "40%",
            alignSelf: "center",
            borderRadius: 10,
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
            Regístrarse
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    ImageBackground: {
      justifyContent: "center",
      flex: 1,
      width: null,
      height: "100%",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "white",
      padding: 10,
      width: "90%",
      height: 50,
      marginTop: 16,
      marginLeft: 18,
      marginRight: "50%",
      borderColor: "white",
      color:"white",
      fontSize: 15,
    },
    textInputone: {
      borderWidth: 1,
      borderColor: "white",
      padding: 10,
      width: "90%",
      height: 50,
      marginTop: 16,
      marginLeft: 18,
      marginRight: "50%",
      color:"white",
      fontSize: 15,
    },
    scrollView: {
      marginTop: "5%",
    },
  });