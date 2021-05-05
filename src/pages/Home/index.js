import React, {useState, useContext, useEffect} from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Projeto from '../../components/Projeto'

import AuthContext from '../../contexts/auth'

function Home() {

    const { getListaProjetos, userId } = useContext(AuthContext);
    const [dados, setDados] = useState([]);

    useEffect(() => {
        async function getLista() {
            console.log('Home userId: ', userId);
            setDados([]);
            
            var dados = [];
            dados = await getListaProjetos(userId);
            dados.forEach((projeto) => {
                let list = {
                  id: projeto.id,
                  nome: projeto.nome,
                  descricao: projeto.descricao,
                  dataInicio: projeto.dataInicio,
                  dataEntrega: projeto.dataEntrega
                };
                
                setDados(oldArray => [...oldArray, list].reverse());
              })
        }

        getLista();
    }, [])


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList showsVerticalScrollIndicator={false}
                data={dados}
                keyExtractor={ item => item.id}
                renderItem={ ({ item }) => ( <Projeto data={item} /> )}
            />
        </View>
    );
}

export default Home;