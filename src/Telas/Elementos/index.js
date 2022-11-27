import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import itemElemento from './componentes/itemElemento';

import Texto from '../../componentes/Texto';

export default function Elementos({ topo, detalhes, elementosDetalhes }) {
    return (
        <>
            <FlatList
                data={elementosDetalhes.elementosLista}
                renderItem={itemElemento}
                keyExtractor={({ nomeElemento }) => nomeElemento}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Topo {...topo} />

                            <View style={estilos.elementos}>
                                <Detalhes {...detalhes} />
                                <Texto style={estilos.titulo}>{elementosDetalhes.titulo}</Texto>
                            </View>
                        </>
                    );
                }}
                ListFooterComponent={() =>
                    <>
                        <Texto style={estilos.obs}>* OBSERVAÇÃO: Todos conteúdos que estão inseridos nesse aplicativo foram retirados do Livro de Regras de Ordem Paranormal RPG para uso didático *</Texto>
                    </>
                }
            />
        </>
    );
}


const estilos = StyleSheet.create({
    elementos: {
        paddingHorizontal: 12,
    },
    titulo: {
        fontSize: 22,
        lineHeight: 46,
        fontWeight: 'bold',
        color: '#363636',
    },
    obs: {
        fontSize: 12,
        color: '#ECECEC',
        padding: 12,
        width: '100%',
        textAlign: 'center',
    },
});