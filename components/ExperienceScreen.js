import { StyleSheet, Text, View, TouchableOpacity, Image, BackHandler, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import OWNModelLoader from './data/ia-model/own-model/own-model-loader';

const ExperienceScreen = ({ route, navigation }) => {
  let { experienceData, step } = route.params;
  const [loadingModel, setloadingModel] = useState(false);
  let image = null;

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const backAction = () => {
    if (step > 0) {
      step = experienceData[step - 1].step;
    }
  }

  const takeImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Lo sentimos, pero es necesario obtener sus permisos para acceder a la cámara y así poder usar el servicio');
    }
    else {
      setloadingModel(true);
      let [imageResult, modelLoaded] = await Promise.all([ImagePicker.launchCameraAsync(
        {
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        }
      ), OWNModelLoader()()]);
      setloadingModel(false);
      if (!imageResult.cancelled && modelLoaded != null && imageResult.uri) {
        image = imageResult.uri;
        navigation.navigate("Camara", {
          imageFile: image,
          modelReady: modelLoaded
        });
      }
      else if(imageResult.cancelled){
        setloadingModel(false);
      }
    }
  };

  return (
    <View style={styles.principalContainer}>
      <View style={styles.experienceHeader}>
        {step != 2 && <TouchableOpacity onPress={takeImage}>
          <View style={styles.skipButton}>
            <Text style={{ color: 'white' }}>Omitir</Text>
            <Ionicons name="camera-outline" size={24} color="white" style={{ marginLeft: 5 }} />
          </View>
        </TouchableOpacity>}
      </View>
      <View style={styles.experienceCenterContainer}>
        <View>
          <Image />
        </View>
        <View>
          <Text style={styles.experienceCenterContainerText}>{experienceData[step].experienceText}</Text>
        </View>
        {loadingModel && <ActivityIndicator size="large" color="#2196F3" />}
      </View>
      <View style={styles.experienceBottomContainer}>
        <TouchableOpacity onPress={() => {
          if (step === (experienceData.length - 1)) {
            takeImage();
          }
          else {
            step = experienceData[step + 1].step;
            navigation.push("Experience", {
              experienceData: experienceData,
              step: step
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
    backgroundColor: 'rgba(0, 0, 255, 0.25)'
  },
  experienceCenterContainerText: {
    textAlign: 'justify'
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