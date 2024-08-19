/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CadastrarFonecedor from './screen/CadastroFornecedor';
import Fornecedor from './screen/Fornecedor';
import { Picker } from '@react-native-picker/picker';




type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
 
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const [fornecedor,setFonecedor] = useState<any[]>([])
  const [isActive, setIsActive] = useState(false);

  const viewFiltrar = () =>{
    isActive ? setIsActive(false) : setIsActive(true);
    return null;
  }
  const [categoria,setCategoria] = useState("")

  const filtrar = useCallback((isActive:boolean) => {
    return (fornecedor || []).map((item:any, index: number)=> {
      if (!isActive ) {
        return <Fornecedor nome={item.nome} endereco ={item.endereco} contato={item.contato} produtos={item.produtos} key={index}/>
      }
      if (isActive && item.produtos == categoria) {
        return <Fornecedor nome={item.nome} endereco ={item.endereco} contato={item.contato} produtos={item.produtos} key={index}/>;
      }
      return <></>
    })
    
  }, [categoria])

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView>
      <CadastrarFonecedor onCreate={(nome, endereco, contato, produtos ) => {
        setFonecedor([...fornecedor, {nome, endereco, contato, produtos} ])

      }}/>

      <Button title='Filtrar' onPress={viewFiltrar}/>
      <View style={isActive ? styles.activeFiltro : styles.inactiveFiltro}>
            <Text>Selecione a Categoria para filtrar:</Text>
            <Picker   
                selectedValue={categoria}
                onValueChange={(itemValue, itemIndex) => {
                    setCategoria(itemValue)
                    if (itemValue == "tudo") {
                      setIsActive(false)
                    }
                  }
                }>
                <Picker.Item label="Selecione uma Categoria" value="tudo" />
                <Picker.Item label="Beleza" value="beleza" />
                <Picker.Item label="Eletrodomestico" value="eletrodomesticos" />
                <Picker.Item label="Moda" value="moda" />
                <Picker.Item label="Tecnologia" value="tecnologia" />
            </Picker>
      </View>
      {filtrar(isActive)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backgroundStyle: {
    backgroundColor: Colors.lighter,
    padding: 24,
    flexGrow: 1,
  },
  inactiveFiltro: {
    display:'none',
  },
  activeFiltro: {
    display:'flex'
  },
});

export default App;
