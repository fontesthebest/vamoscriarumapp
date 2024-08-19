import { useCallback, useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
export interface FornecedorProps { nome:string , endereco:string , contato:string , produtos:string};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 40,
        marginTop: 20,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
      },
    texts:{
        color:'black',
    }
})
export default function Fornecedor({nome,endereco,contato,produtos}:FornecedorProps) {
    const imageTable: { [key: string]: string } = {
        'beleza': 'https://stoaindustria.com/wp-content/uploads/2023/06/produtos-de-beleza-essenciais-para-o-inverno-1.jpg',
        'eletrodomesticos': 'https://img.freepik.com/fotos-premium/colecao-de-misturadores-e-eletrodomesticos-em-fundo-branco_914383-13400.jpg?w=740',
        'moda': 'https://img.freepik.com/fotos-premium/exposicao-de-moda-feminina-de-produtos-naturais-com-fundo-laranja_724677-536.jpg?w=740',
        'tecnologia': 'https://img.freepik.com/fotos-gratis/arranjo-de-colecao-estacionario-moderno_23-2149309643.jpg?t=st=1723468907~exp=1723472507~hmac=8b0b2163c62b367b7ae85a3aaceb11fe3b2ad721d8f6da98bbd48c1be231ac90&w=996',
      };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.texts}>Nome do Fornecedor: {nome}.</Text>
                <Text style={styles.texts}>Endereço: {endereco}.</Text>
                <Text style={styles.texts}>Telefone para contato: {contato}.</Text>
            </View>
            <Image
            source={{
                uri: imageTable[produtos],
            }}
            style={styles.image}
            />
        </View>
    )
}