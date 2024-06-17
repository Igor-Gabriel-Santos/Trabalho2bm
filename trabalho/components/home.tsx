import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Sobre from './sobre';

export default function App() {
    const [page, setPage] = React.useState('home');
    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Sensor de localização</Text>
                    <Text style={styles.paragrafo}>aplicativo para mostrar sua </Text>
                    <Text style={styles.paragrafo}>localização do dispositivo</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Clique aqui</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (page === 'sobre') {
            return <Sobre />;
        }
    };
    
    return <View style={styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000E3F',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#ffff',
        marginBottom: 20,
    },
    paragrafo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff',
        marginBottom: 0,
        alignItems: 'center',
        
    },
    button: {
        backgroundColor: '#3657CC',
        padding: 10,
        borderRadius: 5,
        marginTop: 200,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },

});