import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

import jwt_decode from "jwt-decode";

const AuthContext = createContext({ signed: true, user: '' });

import qs from 'qs';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@RNAuth:user');
            const storageToken = await AsyncStorage.getItem('@RNAuth:token');
            setLoading(false);
            if (storageUser && storageToken) {
                api.defaults.headers.Authorization = `Bearer ${storageToken}`;
                setUser(storageUser);
                setLoading(false);
            }
        }

        loadStorageData();
    }, [])

    async function login(email, password) {
        
        var options = {
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMDAw'
            }
        };

        const data = qs.stringify({
            username: `${email}`,
            password: `${password}`,
            grant_type: 'password'
          });

        await api.post('/oauth/token', data, options)
            .then(async (response) => {
                
                

                setUser(response.data.nome);

                api.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;
                await AsyncStorage.setItem('@RNAuth:user', response.data.nome);
                await AsyncStorage.setItem('@RNAuth:token', response.data.access_token);
               
                var decoded = jwt_decode(response.data.access_token);
                
                await AsyncStorage.setItem('@RNAuth:user_email', decoded.user_name);

            })
            .catch((error) => { 
                if(error.message === 'Request failed with status code 400') {
                    alert('Erro ao realizar login! Usuário e/ou senha inválidos.');
                } else {
                    alert('Erro ao realizar login! Tente novamente mais tarde.');
                }
            }); 
    }

    async function cadastrar(nome, contato, email, password, avatar) {

        var options = {
            headers: { 
                'Content-Type': 'application/json'
            }
        };

        const data = {
            nome: `${nome}`,
            email: `${email}`,
            contato: `${contato}`,
            senha: `${password}`,
            avatar: '',
            ativo: true
          };

        await api.post('/pessoas', JSON.stringify(data), options)
            .then(async (response) => {
                alert('Usuário cadastrado com sucesso.');
            })
            .catch((error) => { 
                if(error.message === 'Request failed with status code 400') {
                    alert('Erro ao realizar Cadastro.');
                } else {
                    alert('Erro ao realizar Cadastro! Tente novamente mais tarde.');
                }
            }); 
    }

    async function alterarCadastro(id, nome, contato, email, password, avatar) {

        var options = {
            headers: { 
                'Content-Type': 'application/json'
            }
        };

        const data = {
            id: `${id}`,
            nome: `${nome}`,
            email: `${email}`,
            contato: `${contato}`,
            senha: `${password}`,
            avatar: '',
            ativo: true
          };

        await api.put(`/pessoas/${id}`, JSON.stringify(data), options)
            .then(async (response) => {
                alert('Cadastro alterado com sucesso.');
                setUser(data.nome);
            })
            .catch((error) => { 
                if(error.message === 'Request failed with status code 400') {
                    alert('Erro ao alterar Cadastro.');
                } else {
                    alert('Erro ao alterar Cadastro! Tente novamente mais tarde.');
                }
            }); 
    }

    async function getDadosUsuario(email) {

        var options = {
            headers: { 
                'Content-Type': 'application/json'
            }
        };

        var dados;

        await api.get(`/pessoas/buscar-por-email/${email}`)
            .then(async (response) => {
                dados = response.data;
                setUser(dados.nome);
                console.log(JSON.stringify(response));
            })
            .catch((error) => { 
                console.log(JSON.stringify(error));
                if(error.message === 'Request failed with status code 400') {
                    alert('Erro ao buscar dados do usuário.');
                } else {
                    alert('Erro ao buscar dados do usuário! Tente novamente mais tarde.');
                }
            }); 
            return dados;
    }

    function logout() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, login, logout, loading, 
            cadastrar, getDadosUsuario, getDadosUsuario, alterarCadastro}}>
            {children}
        </AuthContext.Provider>
    );
};
    
export default AuthContext;

