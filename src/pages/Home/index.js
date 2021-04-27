import React, {useContext} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import AuthContext from '../../contexts/auth'

function Home() {

    const { sined, user, login, logout } = useContext(AuthContext);

    function handleSignout() {
        logout();
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Text>{user?.nome}</Text>
            <Text>{user?.email}</Text>
            <Text></Text>
            <Button title="Logout" onPress={handleSignout} /> */}
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});