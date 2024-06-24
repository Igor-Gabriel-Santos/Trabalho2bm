import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Home from './home';


export default function App() {
const [page, setPage] = React.useState('sobre');
const renderPage = () => {
    if (page === 'sobre') {
        return (
            <View style={styles.container}>
                <View style={styles.quadrado}></View>
                <Text style={styles.title}>Localização</Text>
                <Text style={styles.paragrafo}>Latitude 0.00 </Text>
                    <Text style={styles.paragrafo}>longitude 0.00</Text>
                    <Image source={require('../assets/images/imagess.png')} style={{ width: 300, height: 200, borderRadius: 10, marginTop: 40,  }} />
                <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                    <Text style={styles.buttonText}>Obter localização</Text>
                </TouchableOpacity>
                <View style={styles.quadrado2}></View>
            </View>
        );
    } else if (page === 'home') {
        return <Home/>;
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
    quadrado: {
        width: 900, 
        height: 90,
        backgroundColor: '#3657CC',
        marginTop: -400
    },
    quadrado2: {
        width: 900, 
        height: 90,
        backgroundColor: '#3657CC',
        marginTop: 170,
        marginBottom: -400,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#ffff',
        marginBottom: 20,
        marginTop: 20,
    },
    paragrafo: {
        fontSize: 23,
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