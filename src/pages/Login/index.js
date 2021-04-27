import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';



import AuthContext from '../../contexts/auth';

function Login({ navigation }) {

    const { signed, user, login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function handleSignin() {
        login(email, password);
    }

    return (
        <View style={styles.container}>
            
            <TextInput
                placeholder="Email"
                textContentType="emailAddress"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.textInput}
            />

            <TextInput
                placeholder="Senha"
                textContentType="password"
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                style={styles.textInput}
            />

            <TouchableOpacity style={styles.botao} 
                onPress={ handleSignin }>
                <View style={styles.btnArea}>
                    <Text style={styles.btnTexto}>LOGIN</Text>
                </View>
            </TouchableOpacity>

            <View style={{flexDirection: 'row'}}>
                
                <TouchableOpacity style={{marginTop: 15, marginRight: 25}}
                    onPress={() => navigation.navigate('Cadastro')}>
                    <View>
                        <Text style={{color: 'green'}}>Criar uma conta</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop: 15}}
                    onPress={() => navigation.navigate('RecuperarSenha')}>
                    <View>
                        <Text style={{color: 'blue'}}>Esqueceu a senha?</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>

    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        width: 320,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25
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
    }
});