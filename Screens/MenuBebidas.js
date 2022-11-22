import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Image, } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

export default function MenuBebidas({}) {
    const navigation = useNavigation();

return(
    <View>
        <ImageBackground
        style={styles.ImageBackground}
        source={require("../assets/ima/fondo.jpg")}>
            
        
      <SafeAreaView style={styles.Container}>
        <ScrollView style={styles.scrollView}>

          <View
            style={styles.card}
            cardElevation={3}
            maxCardElevation={3}
            radius={5}
            backgroundColor={"white"}
          >
            <View style={styles.text}>
              <View style={styles.View}>
                <Image
                  style={styles.imagen}
                  source={require("../assets/ima/aguilanegra.jpeg")}
                ></Image>

                <Text style={styles.title}> {"\nAGUILA NEGRA\n"}
                {` \n 330 ml
                 \n$5.000`} </Text>
            
           {""}</View>
            <TouchableOpacity
              onPress={() => navigation.navigate("")}
              style={{
                backgroundColor: "orange",
                padding: 5,
                width: "40%",
                borderRadius: 5,
                //marginRight: 5,
                marginLeft: 145,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  color: "white",
                }}
              >
                AÑADIR AL CARRITO
              </Text>
            </TouchableOpacity> 
            </View>
          </View>

          <View
            style={styles.card}
            cardElevation={3}
            maxCardElevation={3}
            radius={5}
            backgroundColor={"white"}
          >
            <View style={styles.text}>
              <View style={styles.View}>
                <Image
                  style={styles.imagen}
                  source={require("../assets/ima/aguilalight.png")}
                ></Image>

                <Text style={styles.title}> {"\nAGUILA LIGHT\n"}
                {`\n 330 ml 
                \n$6.000`} </Text>
            
           {""}</View>
            <TouchableOpacity
              onPress={() => navigation.navigate("")}
              style={{
                backgroundColor: "orange",
                padding: 5,
                width: "40%",
                borderRadius: 5,
                //marginRight: 5,
                marginLeft: 145,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  color: "white",
                }}
              >
                AÑADIR AL CARRITO
              </Text>
            </TouchableOpacity> 
            </View>
          </View>

          <View
            style={styles.card}
            cardElevation={3}
            maxCardElevation={3}
            radius={5}
            backgroundColor={"white"}
          >
            <View style={styles.text}>
              <View style={styles.View}>
                <Image
                  style={styles.imagen}
                  source={require("../assets/ima/corona.jpeg")}
                ></Image>

                <Text style={styles.title}> {"\nCORONA\n"}
                {`\n330 ml
                 \n$10.000`} </Text>
            
           {""}</View>
            <TouchableOpacity
              onPress={() => navigation.navigate("")}
              style={{
                backgroundColor: "orange",
                padding: 5,
                width: "40%",
                borderRadius: 5,
                //marginRight: 5,
                marginLeft: 145,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  color: "white",
                }}
              >
                AÑADIR AL CARRITO
              </Text>
            </TouchableOpacity> 
            </View>
          </View>

          <View
            style={styles.card}
            cardElevation={3}
            maxCardElevation={3}
            radius={5}
            backgroundColor={"white"}
          >
            <View style={styles.text}>
              <View style={styles.View}>
                <Image
                  style={styles.imagen}
                  source={require("../assets/ima/cocacola3l.webp")}
                ></Image>

                <Text style={styles.title}> {"\nCOCA-COLA\n"}
                {""}
                {` 3 Lt
                 \n$9.000`} </Text>
            
           {""}</View>
            <TouchableOpacity
              onPress={() => navigation.navigate("")}
              style={{
                backgroundColor: "orange",
                padding: 5,
                width: "40%",
                borderRadius: 5,
                //marginRight: 5,
                marginLeft: 145,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  color: "white",
                }}
              >
                AÑADIR AL CARRITO
              </Text>
            </TouchableOpacity> 
             
            </View>
          
          </View>
        </ScrollView>
      </SafeAreaView>

        </ImageBackground>
    </View>
 )
}
const styles = StyleSheet.create({
    ImageBackground: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
      },
      title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        //position: "relative",
      },
      tittles: {
        textAlign: "center",
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
      },
      negrita: {
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 5
      },
      item: {
        marginVertical: 2,
        overflow: "hidden",
        width: "95%",
      },
      image: {
        marginLeft: 18,
        height: 190,
        width: "100%",
      },
      container: {
        flex: 1,
        width: "100%",
      },
      Container: {
        flex: 1,
      },
      card: {
        height: 210,
        width: "90%",
        marginTop: 20,
        marginLeft: 18,
        marginBottom: 20,
      },
      text: {
        padding: 10,
      },
      imagen: {
        height: 150,
        width: 130,
        resizeMode: "stretch",
        marginLeft: 5,
      },
      View: {
        marginTop: 3,
        marginBottom: 3,
        flexDirection: "row",
        //textAlign: "center",
      },
      view: {
        margin: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "8%",
      },
    })


