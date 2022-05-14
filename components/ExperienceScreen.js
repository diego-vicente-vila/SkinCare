import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';

const ExperienceScreen = ({ route, navigation }) => {
  let { experienceData, step } = route.params;
  let image = null;

  const takeImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Lo sentimos, pero es necesario obtener sus permisos para acceder a la cámara y así poder usar el servicio');
    }
    else {
      let imageResult = await ImagePicker.launchCameraAsync(
        {
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        }
      );
      if (!imageResult.cancelled && imageResult.uri) {

        image = imageResult.uri;
        navigation.navigate("Camara", {
          imageFile: image,
          patientIdentifier: Math.floor(Math.random() * 10) + 1
        });
      }
    }
  };

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
    paddingHorizontal: 130,
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