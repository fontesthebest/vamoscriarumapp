import { useCallback, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
export interface CadastrarFornecedorProps { onCreate: (nome: string, endereco : string, contato: string, produtos : string) => void };

const styles = StyleSheet.create({
    cadastro:{
        margin: 10,
    }
})

export default function CadastrarFonecedor({onCreate}:CadastrarFornecedorProps) {
    const [nome,setNome] = useState("");
    const [endereco,setEndereco] = useState("");
    const [contato,setContato] = useState("");
    const [categoria,setCategoria] = useState("")
    
    const validar = useCallback(()=>{if (!nome || !endereco || !contato || !categoria) {
        return false
    }
        return true
    }, [nome,endereco,contato,categoria])

    const criar = useCallback(()=>{onCreate(nome,endereco,contato,categoria);},[nome,endereco,contato,categoria])
    return (
        <View style={styles.cadastro}>
            <Text>Insira o nome do Fornecedor:</Text>
            <TextInput
            placeholder="Exemplo: IguinhoShowLTDA"
            onChangeText={setNome}
            value={nome}
             />
             <Text>Insira o Endereço:</Text>
             <TextInput
            placeholder="Exemplo: Rua Dondoca n°415 Rio de Janeiro"
            onChangeText={setEndereco}
            value={endereco}
             />
             <Text>Insira o Contato:</Text>
             <TextInput
            placeholder="Exemplo: 22 99460-3030"
            keyboardType="numeric"
            onChangeText={setContato}
            value={contato}
             />
             <Text>Insira a categoria de produtos fornecidos:</Text>
             <Picker   
                selectedValue={categoria}
                onValueChange={(itemValue, itemIndex) => 
                    setCategoria(itemValue)
                }>
                <Picker.Item label="Selecione uma categoria" value="" />
                <Picker.Item label="Beleza" value="beleza" />
                <Picker.Item label="Eletrodomestico" value="eletrodomesticos" />
                <Picker.Item label="Moda" value="moda" />
                <Picker.Item label="Tecnologia" value="tecnologia" />
            </Picker>
            <Button title="Criar" disabled={!validar()} onPress={criar}/>
        </View>
    )
}