import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({style, children}){

    let estilo = estilos.texto;

    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito;
    }

    return (
        <>
            <Text style={[style, estilo]}>{children}</Text>
        </>
    );
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'SignikaRegular',
        fontWeight: 'normal',
    },
    textoNegrito: {
        fontFamily: 'SignikaBold',
        fontWeight: 'normal',
    },
});