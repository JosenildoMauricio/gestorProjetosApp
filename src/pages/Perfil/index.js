import React, {useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import AuthContext from '../../contexts/auth'


function Perfil() {

    const { user, getDadosUsuario, logout } = useContext(AuthContext);
    
    //const [nome, setNome] = useState('');
    //const [nome, setAvatar] = useState('');
    

    function handleSignout() {
        logout();
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

            <Text style={styles.texto}>{user}</Text>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.botaoCancelar} 
                    onPress={handleSignout}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Perfil;

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
        marginTop: 25
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
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
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