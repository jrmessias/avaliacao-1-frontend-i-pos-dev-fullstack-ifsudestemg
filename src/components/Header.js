import {Image, ImageBackground, StyleSheet, View} from 'react-native';

import logo from '../assets/img/banner.png';

export default function Header() {
    return (
        <ImageBackground
            source={logo}
            resizeMode="cover"
            style={styles.headerBg}
            imageStyle={styles.headerBgImage}
        >
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    headerBg: {
        width: "100%",
        height: 200,
        justifyContent: "flex-end"
    },
    headerBgImage: {
        opacity: 0.8,
    },
});
