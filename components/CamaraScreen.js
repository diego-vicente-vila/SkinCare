import { TouchableOpacity, StyleSheet, Text, Button, Image, View, BackHandler } from 'react-native';
import React, { useState ,useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Octicons } from '@expo/vector-icons';

const CamaraScreen = ({ route, navigation }) => {
    const { image : receivedImage } = route.params;
    const [image, setImage] = useState(receivedImage);
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    const backAction = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Home' },
                    { name: 'Camara', params: { image: image } }
                ],
            })
        );
    }

    const takeImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={[styles.imageBorderContainer]}>
                    <Octicons name="chevron-left" size={60} color="black" style={{ transform: [{ rotate: '45deg' }] }} />
                    <Octicons name="chevron-left" size={60} color="black" style={{ transform: [{ rotate: '135deg' }] }} />
                </View>
                {image && <Image source={{ uri: image }} style={styles.imageStyle} />}
                <View style={styles.imageBorderContainer}>
                    <Octicons name="chevron-left" size={60} color="black" style={{ transform: [{ rotate: '-405deg' }] }} />
                    <Octicons name="chevron-left" size={60} color="black" style={{ transform: [{ rotate: '-135deg' }] }} />
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={takeImage}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white' }}>Repetir foto</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={{ color: 'white' }}>Enviar foto al médico</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    Su foto será enviada a su médico de cabecera el cual le informará del resultado del análisis lo antes posible.
                    Ut minima et ad doloribus incidunt. Exercitationem facilis porro cupiditate magni perspiciatis sequi adipisci.
                    Error maxime amet ipsa et dolores maiores.
                </Text>
            </View>
        </View>
    )
}

export default CamaraScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flexBasis: '45%',
        width: '95%',
        height: '80%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: '5%',
    },
    imageBorderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageStyle: {
        display: 'flex',
        alignSelf: 'center',
        width: '90%',
        height: '95%',
        marginVertical: '-6%'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '18%',
    },
    button: {
        backgroundColor: '#2196F3',
        alignItems: 'center',
        paddingVertical: 15,
        width: 150,
        borderRadius: 10,
    },
    infoContainer: {
        flexBasis: '30%',
        width: '82%',
        marginTop: '8%',
        alignSelf: 'center',
    },
    infoText: {
        color: 'black',
        textAlign: 'justify',
        fontSize: 15
    },
})