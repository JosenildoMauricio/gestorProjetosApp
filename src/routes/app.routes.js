import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import AlterarCadastro from '../pages/AlterarCadastro';
import AlterarSenha from '../pages/AlterarSenha';
import Perfil from '../pages/Perfil';

const Drawer = createDrawerNavigator();

function AppRoutes() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
            name="Home" 
            component={Home}
            options={
                {
                    headerShown: true
                }
            }
            />

            <Drawer.Screen 
            name="Perfil" 
            component={Perfil}
            options={
                {
                    headerShown: true
                }
            }
            />

            <Drawer.Screen 
            name="AlterarCadastro" 
            component={AlterarCadastro}
            options={
                {
                    headerShown: true,
                    title: 'Alterar cadastro'
                }
            }
            />

            <Drawer.Screen 
            name="AlterarSenha" 
            component={AlterarSenha}
            options={
                {
                    headerShown: true,
                    title: 'Alterar Senha'
                }
            }
            />
        </Drawer.Navigator>
    );
}

export default AppRoutes;