import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function PropertyItemList({image, title, description, price}) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.property} onPress={() => {
            navigation.navigate('PropertyDetail', {
                propertyImage: image,
                propertyTitle: title,
                propertyDescription: description,
                propertyPrice: price
            })
        }}>
            <Image source={image} style={styles.propertyImage}/>
            <View style={styles.propertyData}>
                <Text style={styles.propertyDataTitle}>{title}</Text>
                <Text style={styles.propertyDataDescription}>{description}</Text>
                <Text style={styles.propertyDataPrice}>{price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    property: {
        flexDirection: "row",
        backgroundColor: '#A5DDD6',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginVertical: 4,
    },
    propertyImage: {
        width: 100,
        height: 100,
        marginRight: 24,
        borderRadius: 16,
    },
    propertyData: {
        justifyContent: 'flex-start',
        width: '50%'
    },
    propertyDataTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#545947',
        marginVertical: 4,
    },
    propertyDataDescription: {
        fontSize: 16,
        color: '#545947',
        marginVertical: 4,
    },
    propertyDataPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#545947',
        marginVertical: 4,
    }
});
