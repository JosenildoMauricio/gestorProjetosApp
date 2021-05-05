import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

import jwt_decode from "jwt-decode";

const AuthContext = createContext({ signed: true, user: '' });

import qs from 'qs';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@RNAuth:user');
            const storageUserId = await AsyncStorage.getItem('@RNAuth:userId');
            const storageToken = await AsyncStorage.getItem('@RNAuth:token');
            setLoading(false);
            if (storageUser && storageToken) {
                api.defaults.headers.Authorization = `Bearer ${storageToken}`;
                setUser(storageUser);
                setUserId(storageUserId);
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
                setUserId(response.data.id);

                console.log('Login userId: ', response.data.id);
                

                api.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;
                await AsyncStorage.setItem('@RNAuth:user', response.data.nome);
                await AsyncStorage.setItem('@RNAuth:token', response.data.access_token);
                await AsyncStorage.setItem('@RNAuth:userId', JSON.stringify(response.data.id));
                
                //var decoded = jwt_decode(response.data.access_token);
                
                //await AsyncStorage.setItem('@RNAuth:user_email', decoded.user_name);

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

    async function getListaProjetos(userId) {

        var options = {
            headers: { 
                'Content-Type': 'application/json'
            }
        };

        var listaProjetos = [];
        console.log('buscar projetos do userId: ', userId);
        await api.get(`/projetos/por-id-pessoa/${userId}`)
            .then(async (response) => {
                listaProjetos = response.data;
            })
            .catch((error) => { 
                console.log(JSON.stringify(error));
                if(error.message === 'Request failed with status code 400') {
                    alert('Erro ao buscar a lista de projetos.');
                } else {
                    alert('Erro ao buscar a lista de projetos! Tente novamente mais tarde.');
                }
            }); 
            return listaProjetos;
    }

    async function getListaTarefas(idProjeto) {

        var options = {
            headers: { 
                'Content-Type': 'application/json'
            }
        };

        var listaTarefas;

        await api.get(`/por-id-projeto/${idProjeto}`)
            .then(async (response) => {
                listaTarefas = response.data;
            })
            .catch((error) => { 
                console.log(JSON.stringify(error));
                if(error.message === 'Request failed with status code 400') {
                    alert('Erro ao buscar a lista de tarefas.');
                } else {
                    alert('Erro ao buscar a lista de tarefas! Tente novamente mais tarde.');
                }
            }); 
            return listaTarefas;
    }

    function logout() {
        AsyncStorage.clear().then(() => {
            setUser(null);
            setUserId(null);
        });
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, userId, login, logout, loading, 
            cadastrar, getDadosUsuario, alterarCadastro, getListaProjetos, getListaTarefas}}>
            {children}
        </AuthContext.Provider>
    );
};
    
export default AuthContext;

