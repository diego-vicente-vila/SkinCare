import { StyleSheet, Text, View, TouchableOpacity, Image, BackHandler } from 'react-native';
import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';


const ExperienceScreen = ({ route, navigation }) => {
  let { experienceData, step } = route.params;
  let imageToProcess = null;

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
    console.log(status);
    if (status !== 'granted') {
      alert('Lo sentimos, pero es necesario obtener sus permisos para acceder a la cámara y así poder usar el servicio');
    }
    else{
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.cancelled) {
        imageToProcess = result.uri;
        navigation.navigate("Camara", {
          image: imageToProcess
        });
      }
    }
  };

  return (
    <View style={styles.principalContainer}>
      <View style={styles.experienceHeader}>
        {step != 2 && <TouchableOpacity onPress={takeImage}>
          <View style={styles.skipButton}>
            <Text style={{ color: 'white' }}>Omitir</Text>
            <Ionicons name="camera-outline" size={24} color="white" style={{marginLeft: 5}}/>
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
            {step == (experienceData.length - 1) && <Ionicons name="camera-outline" size={24} color="white" style={{marginLeft: 5}}/>}
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