import { StyleSheet, Text, View, TouchableOpacity, Image, BackHandler } from 'react-native'
import React, {useEffect} from 'react'

const ExperienceScreen = ({ route, navigation }) => {
  let { experienceData, step } = route.params;
  console.log(step);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  
  const backAction = () => {
    if (step > 0){
      step = experienceData[step-1].step;
    }
  }

  return (
    <View style={styles.principalContainer}>
      <View style={styles.experienceHeader}>
        {step != 2 && <TouchableOpacity onPress={() => navigation.navigate("Camara")}>
          <View style={styles.skipButton}>
            <Text style={{ color: 'white' }}>Omitir</Text>
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
          if (step == 2) {
            console.log("Hola")
            navigation.navigate("Camara");
          }
          else {
            step = experienceData[step+1].step;
            navigation.push("Experience", {
              experienceData: experienceData,
              step: step
            });
          }
        }}>
          <View style={styles.nextButton}>
            <Text style={{ color: 'white' }}>{experienceData[step].nextButtonText}</Text>
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
    backgroundColor: '#2196F3',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
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
})