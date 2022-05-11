import { TouchableOpacity, StyleSheet, Text, Image, View, BackHandler } from 'react-native';
import React, { useState, useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as tensorflow from '@tensorflow/tfjs';
import { decodeJpeg } from '@tensorflow/tfjs-react-native';
import { Octicons } from '@expo/vector-icons';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import { decode } from 'base64-arraybuffer';
import firebase from './data/firebase';

const CamaraScreen = ({ route, navigation }) => {
    let { imageFile, modelReady } = route.params;
    const [image, setImage] = useState(imageFile);
    const [imageData, setImageData] = useState(null);
    const [modelPredictionResult, setModelResult] = useState(null);

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
                    { name: 'Camara', params: { imageF: imageFile, modelR: modelReady } }
                ],
            })
        );
    }

    const processImage = async () => {
        let imagePreprocessed = await preprocessImage();
        if (imagePreprocessed) {
            let modelPredictionResult = await modelReady.predict(imagePreprocessed).data();
            let modelPredictionResultRounded = Math.round(modelPredictionResult * 100) / 100;
            setModelResult(modelPredictionResultRounded);
            const dataToStore = {
                customMetadata : {
                    patientId: Math.floor(Math.random() * 10) + 1,
                    date: new Date().toISOString()
                }
            }
            await uploadDataToCloud(dataToStore);
        }
    }

    const uploadDataToCloud = async (dataToStore) => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", image, true);
            xhr.send(null);
        });
        const ref = firebase.cloudStorage.ref().child(dataToStore.customMetadata.patientId + '-' + dataToStore.customMetadata.date);
        await Promise.all([firebase.db.collection('patient-mela-analysis').add(dataToStore.customMetadata) , ref.put(blob, dataToStore)]);
        blob.close();
        alert("Datos subidos a Firebase")
    }

    const preprocessImage = async () => {
        let base64ImageData = await resizeImage();
        if (base64ImageData) {
            return await imageToTensor(base64ImageData);
        } else {
            alert("Ha ocurrido un error, intentalo de nuevo")
        }
    }

    const imageToTensor = async (rawImageData) => {
        let imageArrayBuffer = decode(rawImageData);
        const imageArray = new Uint8Array(imageArrayBuffer);
        const imageTensor = decodeJpeg(imageArray);
        const imageTensorED = tensorflow.expandDims(imageTensor);
        setImageData(imageTensorED);
        console.log(imageTensorED);
        return imageTensorED;
    }

    const resizeImage = async () => {
        const manipResult = await manipulateAsync(
            image,
            [
                { resize: { height: 256, width: 256 } },
            ],
            { base64: true, compress: 1, format: SaveFormat.JPEG }
        );
        return manipResult.base64;
    };

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
                {modelPredictionResult && <Text style={styles.resultText}>{modelPredictionResult}</Text>}
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
                <TouchableOpacity onPress={processImage}>
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
    resultText: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowRadius: 5,
    }
})