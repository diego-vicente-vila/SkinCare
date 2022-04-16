import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../styles/global-css';
import experienceData from './data/app-data/experienceData';

const MSCenter = ({navigation}) => {
  const [experience, setExperienceData] = useState(experienceData);
  return (
    <View style={styles.msCenterContainer}>
      <View style={styles.headerText}>
        <Text style={styles.exploreText}>Explorar</Text>
        <Text style={globalStyles.containerHeaderText}>Tu servicio médico más cerca que nunca</Text>
      </View>
      <View style={styles.principalServiceContainer}>
        <ImageBackground source={require('../../assets/imgs/skin_background_4.jpg')} resizeMode="cover" style={styles.backGroundImage}>
          <View style={styles.backGroundContainer}>
            <View>
              <Text style={styles.titleService}>Prevención de melanomas</Text>
              <Text style={styles.mainTextService}>Si te preocupa una mancha, contacta con tu médico para acceder al nuevo servicio de prevención de melanomas en piel</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Experience", {
                experienceData: experience,
                step: 0
              })}>
                <View style={styles.leftButton}>
                  <Text style={{ color: 'white' }}>Pruébala ahora</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rightButton}>
                <Image source={require('../../assets/imgs/eva_question-mark-circle-outline.png')} style={globalStyles.iconsImg} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

export default MSCenter;

const styles = StyleSheet.create({
  msCenterContainer: {
    display: 'flex',
  },
  headerText: {
    display: 'flex',
    alignSelf: 'center',
    width: '95%',
  },
  exploreText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  principalServiceContainer: {
    display: 'flex',
    width: '95%',
    height: '70%',
    alignSelf: 'center',
    marginTop: '5.5%'
  },
  backGroundImage: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden'
  },
  backGroundContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  titleService: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 5
  },
  mainTextService: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'justify',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 5
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '15%',
    flexWrap: 'nowrap'
  },
  leftButton: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  rightButton: {
    alignSelf: 'center'
  }
})