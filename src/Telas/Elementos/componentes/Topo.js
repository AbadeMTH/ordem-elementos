import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import Texto from '../../../componentes/Texto';

import imagemTopo from '../../../../assets/imagemTopo.png';

const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
    return(
        <>
            <Image source={imagemTopo} style={estilos.imagem}/>
            <Texto style={estilos.texto}>{titulo}</Texto>
        </>
    );
}

const estilos = StyleSheet.create({
    imagem: {
        width: '100%',
        height: 541 / 775 * width,
        fontWeight: 'bold',
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 32,
        position: 'absolute',
        color: 'white',
        width: '100%',
        textAlign: 'center',
        textShadowColor:'#B22222',
        textShadowOffset:{width: 0, height: 0},
        textShadowRadius:20,
    },
});