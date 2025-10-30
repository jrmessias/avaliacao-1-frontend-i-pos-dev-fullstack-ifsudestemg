import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import Header from "../components/Header";
import {useNavigation} from "@react-navigation/native";

export default function PropertyAddScreen() {

    return <>
        <SafeAreaProvider>
            <SafeAreaView style={styles.safe}>
                <StatusBar barStyle="dark-content"/>
                <Header/>
                <View>
                    <Text style={styles.title}>Cadastrar imóvel</Text>
                </View>
                <View>
                    <Text style={styles.labelInput}>Título:</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.labelInput}>Descrição:</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.labelInput}>Valor:</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <View style={styles.spacer}></View>
                <TouchableOpacity>
                    <Text style={styles.txtButton}>Cadastrar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#EDC4B3",
        alignItems: 'center',
        overflow: 'scroll',
    },
    title: {
        fontSize: 24,
        color: '#545947',
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center',
    },
    labelInput: {
        fontSize: 24,
        color: '#545947',
        padding: 8,
        textAlign: 'center',
    },
    input: {
        fontSize: 24,
        color: '#545947',
        padding: 8,
        textAlign: 'center',
        borderColor: '#545947',
        borderWidth: 1,
        width: 300,
    },
    spacer:{
        marginVertical: 8,
    },
    txtButton: {
        marginVertical: 8,
        backgroundColor: '#545947',
        borderRadius: 5,
        color: '#ffffff',
        paddingVertical: 16,
        paddingHorizontal: 64,
        textAlign: 'center',
        fontSize: 24,
    }
});
