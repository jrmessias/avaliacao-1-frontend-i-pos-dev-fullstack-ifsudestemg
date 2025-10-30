import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import Header from "../components/Header";
import {useNavigation} from "@react-navigation/native";

export default function PropertyDetailScreen({route}) {

    const {propertyImage, propertyTitle, propertyDescription, propertyPrice} = route.params;


    return <>
        <SafeAreaProvider>
            <SafeAreaView style={styles.safe}>
                <StatusBar barStyle="dark-content"/>
                <Header/>
                <View>
                    <Text style={styles.title}>Detalhes do imóvel</Text>
                </View>
                <View>
                    <Image source={propertyImage} style={styles.propertyImage}/>
                    <View style={styles.propertyData}>
                        <Text style={styles.propertyDataTitle}>{propertyTitle}</Text>
                        <Text style={styles.propertyDataDescription}>{propertyDescription}</Text>
                        <Text style={styles.propertyDataPrice}>{propertyPrice}</Text>
                    </View>
                </View>
                <View style={styles.spacer}></View>
                <TouchableOpacity>
                    <Text style={styles.txtButton}>Excluir imóvel</Text>
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
        height: 700,
    },
    title: {
        fontSize: 24,
        color: '#545947',
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center',
    },
    propertyData: {
        width: '100%',
    },
    propertyImage: {
        maxWidth: 300,
        maxHeight: 300,
        aspectRatio: 1,
        alignItems: 'center',
        alignSelf: 'center',
    },
    propertyDataTitle: {
        fontSize: 28,
        color: '#545947',
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'left',
    },
    propertyDataDescription: {
        fontSize: 20,
        color: '#545947',
        padding: 8,
        textAlign: 'left',
    },
    propertyDataPrice: {
        fontSize: 32,
        color: '#545947',
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center',
    },
    spacer: {
        marginVertical: 8,
    },
    txtButton: {
        marginVertical: 8,
        backgroundColor: '#AC3131',
        borderRadius: 5,
        color: '#ffffff',
        paddingVertical: 16,
        paddingHorizontal: 64,
        textAlign: 'center',
        fontSize: 24,
    }
});
