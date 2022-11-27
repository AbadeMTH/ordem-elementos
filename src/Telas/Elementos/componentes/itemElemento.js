import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function itemElemento({ item: { nomeElemento, imagemElemento, descricaoElemento } }) {
    return (
        <>
            <View style={estilos.item}>
                <Image source={imagemElemento} style={estilos.imagem} />
                <View style={estilos.itemDetalhes}>
                    <Texto style={estilos.titulo}>{nomeElemento}</Texto>
                    <Texto style={estilos.descricao}>{descricaoElemento}</Texto>
                </View>
            </View>
        </>
    );
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: 'row',
        paddingVertical: 16,
        marginHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
    },
    imagem: {
        width: 124,
        height: 256,
        borderRadius: 10,
    },
    itemDetalhes:{
        marginLeft: 12,
        width: '60%',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 26,
    },
    descricao:{
        paddingVertical: 40,
    }
});