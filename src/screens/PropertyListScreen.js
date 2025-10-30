import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

import Header from "../components/Header";
import PropertyItemList from "../components/PropertyItemList";

import casa from "../assets/img/casa.png";
import lote from "../assets/img/lote.png";
import sala_comercial from "../assets/img/sala_comercial.png";
import apartamento from "../assets/img/apartamento.png";
import {useNavigation} from "@react-navigation/native";

export default function PropertyListScreen() {

    const navigation = useNavigation();

    return <>
        <SafeAreaProvider>
            <SafeAreaView style={styles.safe}>
                <StatusBar barStyle="dark-content"/>
                <Header/>
                <View>
                    <Text style={styles.title}>3 Cores Imobiliária</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('PropertyAdd')
                    }}>
                        <Text style={styles.txtButton}>Cadastrar novo imóvel</Text>
                    </TouchableOpacity>
                    <Text style={styles.titleSecondary}>Nossos Imóveis:</Text>
                </View>
                <View style={styles.properties}>
                    <FlatList style={styles.propertiesList}
                              data={properties.list}
                              renderItem={({item}) => <PropertyItemList {...item} />}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}

const styles = StyleSheet.create({
    propertiesList: {
        overflow: 'scroll',
        height: 600
    },
    safe: {
        flex: 1,
        backgroundColor: "#EDC4B3",
        alignItems: 'center',
        overflow: 'scroll',
        height: 600,
    },
    title: {
        fontSize: 24,
        color: '#545947',
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center',
    },
    titleSecondary: {
        fontSize: 20,
        color: '#545947',
        padding: 10,
        textAlign: 'center',
    },
    txtButton: {
        marginVertical: 8,
        backgroundColor: '#545947',
        borderRadius: 5,
        color: '#ffffff',
        padding: 8,
        textAlign: 'center',
    }
});

const randomPrice = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

const properties = {
    title: 'Imóveis',
    list: [
        {
            image: casa,
            title: 'Casa',
            description: 'Ótima casa para comprar.',
            price: randomPrice(1, 50000),
        },
        {
            image: apartamento,
            title: 'Apartamento',
            description: 'No centro da cidade.',
            price: randomPrice(1, 450000),
        },
        {
            image: sala_comercial,
            title: 'Sala Comercial',
            description: 'Ótimo ponto de venda.',
            price: randomPrice(1, 350000),
        },
        {
            image: lote,
            title: 'Lote',
            description: 'Ótima localização.',
            price: randomPrice(1, 200000),
        },
    ]
}
