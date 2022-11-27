import iconeOrdem from '../../assets/iconeOrdem.png';
import simboloConhecimento from '../../assets/elementos/simboloConhecimento.png';
import simboloEnergia from '../../assets/elementos/simboloEnergia.png';
import simboloMedo from '../../assets/elementos/simboloMedo.png';
import simboloMorte from '../../assets/elementos/simboloMorte.png';
import simboloSangue from '../../assets/elementos/simboloSangue.png';

const elementos = {
    topo: {
        titulo: 'Todos os elementos de'
    },
    detalhes: {
        titulo: 'Elementos do Outro Lado',
        iconeOrdem: iconeOrdem,
        nomeOrdem: 'Símbolo do Outro Lado',
        descricao: 'Os elementos que fazem parte do outro lado, mas por alguma razão tem representação desse lado...',
        quantidadeElementos: 'São 5 elementos...'
    },
    elementosDetalhes: {
        titulo: 'Elementos',
        elementosLista: [
            {
                nomeElemento: 'Conhecimento',
                imagemElemento: simboloConhecimento,
                descricaoElemento: 'O Conhecimento é a entidade da consciência. Descobrir, decifrar, entender, aprender. Ter a própria percepção do Outro Lado e suas entidades agrada o elemento de Conhecimento.',
            },
            {
                nomeElemento: 'Energia',
                imagemElemento: simboloEnergia,
                descricaoElemento: 'Energia é a entidade do caos. Tudo que não pode ser controlado, o intangível, a anarquia. A mudança constante, o frio e o calor. Tudo que envolve o inesperado e a transformação agrada a entidade de Energia.',
            },
            {
                nomeElemento: 'Medo',
                imagemElemento: simboloMedo,
                descricaoElemento: 'O Medo é o elemento mais misterioso do Outro Lado e não pode ser descrito como as outras entidades. Todas as manifestações do Outro Lado dentro da Realidade são invocadas através do Medo.',
            },
            {
                nomeElemento: 'Morte',
                imagemElemento: simboloMorte,
                descricaoElemento: 'A Morte é a entidade da espiral do tempo. Ela busca os momentos vivenciados, distorcendo a percepção egóica da existência de cada indivíduo para seu agrado.',
            },
            {
                nomeElemento: 'Sangue',
                imagemElemento: simboloSangue,
                descricaoElemento: 'A entidade dos sentimentos: fome, dor, amor, ódio, paixão, obsessão. Sangue busca a intensidade e tudo que envolve sentir uma emoção extrema agrada essa entidade.',
            },
        
        ]
    },
}

export default elementos;