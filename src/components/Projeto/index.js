import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Projeto({ data }) {
 return (
   
    <View style={styles.card}>

      <View style={{flex: 1, width: 350}}>
        <Text style={styles.nome}>{data?.nome}</Text>
      </View>
    
      <View style={{flex: 2, width: 350, marginTop: 15}}>
        <Text style={styles.descricao}>{data?.descricao}</Text>
      </View>

      <View style={{flex: 1, width: 350, marginTop: 15, padding: 15}}>
        <Text style={styles.data}>Início: {data?.dataInicio}</Text>
        <Text style={styles.data}>Entrega: {data?.dataEntrega}</Text>
      </View>

      <View style={{flex: 1, marginTop: 15}}>
        <View style={styles.areaTarefa}>
          <TouchableOpacity style={styles.botaoTarefa}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>VER TAREFAS</Text>
            </View>
          </TouchableOpacity>
          </View>
      </View>    
    </View>
   
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    borderRadius: 15,
    height: 500,
    
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    elevation: 10,
    shadowRadius: 5,
    margin: 15,
    padding: 15,
    flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'
  },
  nome: {
    fontSize: 25,
    padding: 15,
    fontWeight: 'bold'
  },
  descricao: {
    fontSize: 18,
    padding: 15,
  },
  data: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  areaTarefa: {
    width: 350,
    height: 100,
    backgroundColor: '#338AFF',
    color: '#FFFFFF',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center', alignItems: 'center'
  },
  botaoTarefa: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: '#F8F9F9',
    color: '#FFFFFF',
    borderRadius: 15
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
    color: '#FFFFFF'
  },
});