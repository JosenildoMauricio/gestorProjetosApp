import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import RecuperarSenha from '../pages/RecuperarSenha';

const AuthStack = createStackNavigator();

function AuthRoutes() {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="Login" 
            component={Login}
            options={{headerShown: false}}
            />

            <AuthStack.Screen 
            name="Cadastro" 
            component={Cadastro}
            />
           
            <AuthStack.Screen 
            name="RecuperarSenha" 
            component={RecuperarSenha}
            options={{title: 'Recuperar Senha'}}
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;