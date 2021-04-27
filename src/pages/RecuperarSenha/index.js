import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';


function RecuperarSenha({ navigation }) {
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

            <TouchableOpacity style={styles.botao}>
                <View style={styles.btnArea}>
                    <Text style={styles.btnTexto}>ENVIAR</Text>
                </View>
            </TouchableOpacity>

        </View>

    );
}

export default RecuperarSenha;

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