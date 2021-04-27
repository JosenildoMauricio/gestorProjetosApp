import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';


function AlterarSenha({ navigation }) {
    return (

        <View style={styles.container}>

            <View>
                <Text style={{color: '#6C6C6C', marginBottom: 15, padding: 15}}>
                    Um link de recuperação será enviado para o e-mail de usuário cadastrado.
                </Text>
            </View>
            
            <TextInput
                placeholder="Email de usuário"
                textContentType="emailAddress"
                autoCapitalize="none"
                style={styles.textInput}
            />

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.botaoEnviar}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>ENVIAR</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoVoltar}
                onPress={() => navigation.navigate('Home')}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>VOLTAR</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>

    );
}

export default AlterarSenha;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoEnviar: {
        width: 150,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25,
        marginRight: 10
    },
    botaoVoltar: {
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
    }
});