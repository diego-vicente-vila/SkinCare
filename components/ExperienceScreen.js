import { StyleSheet, Text, View, TouchableOpacity, Image, BackHandler, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useCallback} from 'react';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as tensorflow from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';

const ExperienceScreen = ({ route, navigation }) => {
  let { experienceData, step } = route.params;
  const [model, setModel] = useState(null);
  let image = null;

  const takeImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Lo sentimos, pero es necesario obtener sus permisos para acceder a la cámara y así poder usar el servicio');
    }
    else {
      let [imageResult, modelLoaded] = await Promise.all([ImagePicker.launchCameraAsync(
        {
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        }
      ), OWNModelLoader()]);
      if (!imageResult.cancelled && modelLoaded != null && imageResult.uri) {
        image = imageResult.uri;
        navigation.navigate("Camara", {
          imageFile: image,
          modelReady: modelLoaded
        });
      }
    }
  };

  const OWNModelLoader = useCallback(async() => {
    console.log("Cargando modelo")
    await tensorflow.ready();
    const modelJson = require("./data/ia-model/own-model/model-json/model.json");
    const modelWeight1 = require("./data/ia-model/own-model/model-weights/group1-shard1of9.bin");
    const modelWeight2 = require("./data/ia-model/own-model/model-weights/group1-shard2of9.bin");
    const modelWeight3 = require("./data/ia-model/own-model/model-weights/group1-shard3of9.bin");
    const modelWeight4 = require("./data/ia-model/own-model/model-weights/group1-shard4of9.bin");
    const modelWeight5 = require("./data/ia-model/own-model/model-weights/group1-shard5of9.bin");
    const modelWeight6 = require("./data/ia-model/own-model/model-weights/group1-shard6of9.bin");
    const modelWeight7 = require("./data/ia-model/own-model/model-weights/group1-shard7of9.bin");
    const modelWeight8 = require("./data/ia-model/own-model/model-weights/group1-shard8of9.bin");
    const modelWeight9 = require("./data/ia-model/own-model/model-weights/group1-shard9of9.bin");
    const model = await tensorflow.loadLayersModel(bundleResourceIO(modelJson,
      [
        modelWeight1, modelWeight2, modelWeight3,
        modelWeight4, modelWeight5, modelWeight6,
        modelWeight7, modelWeight8, modelWeight9
      ]));
    console.log('Modelo cargado')

    return model;
  }, [model]);

  return (
    <View style={styles.principalContainer}>
      <View style={styles.experienceHeader}>
        {step != (experienceData.length - 1) && <TouchableOpacity onPress={takeImage}>
          <View style={styles.skipButton}>
            <Text style={{ color: 'white' }}>Omitir</Text>
            <Ionicons name="camera-outline" size={24} color="white" style={{ marginLeft: 5 }} />
          </View>
        </TouchableOpacity>}
      </View>
      <View style={styles.experienceCenterContainer}>
        <Image source={experienceData[step].illustration} style={{resizeMode:'contain',height: 300, width: 300}} />
        <View style={styles.centerContainerInfo}>
          <Text style={styles.experienceTitle}>{experienceData[step].title}</Text>
          <Text adjustsFontSizeToFit={true} style={styles.experienceDescription}>{experienceData[step].description}</Text>
          <Image source={experienceData[step].stepIcon} style={styles.stepIcon} />
        </View>
      </View>
      <View style={styles.experienceBottomContainer}>
        <TouchableOpacity onPress={() => {
          if (step === (experienceData.length - 1)) {
            takeImage();
          }
          else {
            //step = experienceData[step + 1].step;
            navigation.push("Experience", {
              experienceData: experienceData,
              step: (step+1)
            });
          }
        }}>
          <View style={step == (experienceData.length - 1) ? styles.readyButton : styles.nextButton}>
            <Text style={{ color: 'white' }}>{experienceData[step].nextButtonText}</Text>
            {step == (experienceData.length - 1) && <Ionicons name="camera-outline" size={24} color="white" style={{ marginLeft: 5 }} />}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ExperienceScreen;

const styles = StyleSheet.create({
  principalContainer: {
    flex: 1
  },
  experienceHeader: {
    flexBasis: '10%',
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    alignItems: 'center',
    width: '95%',
  },
  skipButton: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  experienceCenterContainer: {
    flexBasis: '73%',
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  centerContainerInfo: {
    display: 'flex',
    width: '90%',
    marginVertical: '5%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  experienceTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  experienceDescription: {
    fontSize: 18,
    textAlign: 'justify',
    marginTop: '3%'
  },
  stepIcon: {
    resizeMode:'contain',
    width: 150,
    marginTop: '5%'
  },
  experienceBottomContainer: {
    flexBasis: '15%',
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 120,
    borderRadius: 30,
  },
  readyButton: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    alignItems: 'center',
    paddingVertical: 17,
    paddingHorizontal: 115,
    borderRadius: 30,
  }
})