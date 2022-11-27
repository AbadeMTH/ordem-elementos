import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({titulo, iconeOrdem, nomeOrdem, descricao, quantidadeElementos}){
    return(
        <>
            <Texto style={estilos.titulo}>{titulo}</Texto>

            <View style={estilos.linhaOrdem}>
                <Image source={iconeOrdem} style={estilos.imagem}/>
                <Texto style={estilos.nomeOrdem}>{nomeOrdem}</Texto>
            </View>

            <Texto style={estilos.descricao}>{descricao}</Texto>

            <Texto style={estilos.quantidadeElementos}>{quantidadeElementos}</Texto>
        </>
    );
}

const estilos = StyleSheet.create({
    titulo: {
        marginTop: 8,
        fontSize: 32,
        lineHeight: 46,
        fontWeight: 'bold',
        color: '#363636',
    },
    linhaOrdem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
    },
    imagem: {
        height: 44,
        width: 44,
        borderRadius: 10,
    },
    nomeOrdem: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 7,
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        color: '#ACACAC',
    },
    quantidadeElementos: {
        fontSize: 26,
        lineHeight: 46,
        fontWeight: 'bold',
        color: 'black',
        textShadowColor:'#B22222',
        textShadowOffset:{width: 0, height: 0},
        textShadowRadius:7,
    },
});