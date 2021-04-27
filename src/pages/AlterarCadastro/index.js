import React, {useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import AuthContext from '../../contexts/auth';

function AlterarCadastro({ navigation }) {

    const { getDadosUsuario, alterarCadastro } = useContext(AuthContext);

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        async function getDados() {
            const storageEmail = await AsyncStorage.getItem('@RNAuth:user_email');
            
            var dados = await getDadosUsuario(storageEmail);
            
            setId(dados.id);
            setNome(dados.nome);
            setContato(dados.contato);
            setEmail(dados.email);
            setPassword(dados.senha);
            setAvatar(dados.avatar);

        }

        getDados();
    }, [])

    function handleAlterarCadastro() {
        alterarCadastro(id, nome, contato, email, password, avatar);
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity>
                <View>
                    <Image
                        source={require('../../../assets/img/imgCadastro.png')}
                        style={styles.img}
                    />
                </View>
            </TouchableOpacity>   

            <TextInput
                placeholder="Nome"
                autoCapitalize="words"
                value={nome}
                onChangeText={(text) => setNome(text)}
                style={styles.textInput}
            />

            <TextInput
                placeholder="Contato"
                value={contato}
                onChangeText={(text) => setContato(text)}
                style={styles.textInput}
            />

            <TextInput
                placeholder="Email"
                textContentType="emailAddress"
                editable={false}
                autoCapitalize="none"
                value={email}
                style={styles.textInput}
            />

            {/* <TextInput
                placeholder="Senha"
                textContentType="password"
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                style={styles.textInput}
            /> */}

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.botaoSalvar} 
                    onPress={ handleAlterarCadastro }>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>Salvar</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoCancelar} 
                    onPress={() => navigation.navigate('Home')}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>Voltar</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default AlterarCadastro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoSalvar: {
        width: 150,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25,
        marginRight: 10
    },
    botaoCancelar: {
        width: 150,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25,
        marginLeft: 10
    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dd7b22'
    },
    textInput: {
        width: 320,
        height: 50,
        borderWidth: 1,
        borderColor: '#dd7b22',
        borderRadius: 25,
        fontSize: 20,
        padding: 10,
        marginBottom: 15
    },
    cadastreSe: {
        marginTop: 15,
        marginRight: 10
    },
    cadastreSeView: {
        alignContent: 'flex-end'
    },
    img: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#F1E3E0',
        borderRadius: 50,
        marginBottom: 25
    }
});