import { StyleSheet, Text, View, ScrollView , Image, Linking} from 'react-native'
import React from 'react'

const InfoScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleImageContainer}>
          <Text style={styles.title}>
            INFORMACIÓN Y PREVENCIÓN GENERAL DEL CÁNCER TIPO MELANOMA
          </Text>
          <Image source={require('../assets/imgs/doctor_skin_check.jpg')} style={styles.postMainImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textContainerTitles}>
            ¿Qué es el cáncer de piel tipo melanoma?
          </Text>
          <Text style={styles.textContainerText}>
            El melanoma es un tipo de cáncer de piel que se origina cuando los melanocitos (las células que dan a la piel su color bronceado o marrón) comienzan a crecer fuera de control.
          </Text>
          <Text style={styles.textContainerText}>
            El melanoma es un cáncer que se origina en los melanocitos. A este cáncer se le conoce también como melanoma maligno y melanoma cutáneo. La mayoría de las células del melanoma continúan produciendo melanina de modo que los tumores tipo melanoma usualmente son de color café o negro. Sin embargo, algunos melanomas no producen melanina y pueden lucir de color rosado, pálido o incluso blanco.
          </Text>
          <Text style={styles.textContainerText}>
            El melanoma es mucho menos frecuente comparado con otros tipos de cáncer de piel. Pero este es más peligroso porque crece más rápido y es mucho más probable que se propague a otras partes del cuerpo si no se descubre y se trata a tiempo. Sin embargo, hay que destacar su carácter prevenible y curable.
          </Text>
          <Text style={styles.textContainerTitles}>
            Factores de riesgo para el cáncer de piel tipo melanoma
          </Text>
          <Text style={styles.textContainerText}>
            La exposición excesiva al sol y los factores genéticos son las causas principales del melanoma.
          </Text>
          <Text style={styles.textContainerText}>
            La exposición a los rayos ultravioleta (UV) es el factor de riesgo principal para la mayoría de los melanomas. La luz solar es la fuente principal de la radiación ultravioleta. Las lámparas solares y las camas bronceadoras también son fuentes de radiación ultravioleta.
          </Text>
          <Text style={styles.textContainerText}>
            Aunque los rayos UV representan sólo una pequeña porción de los rayos del sol, son los principales causantes de daño solar en la piel. Los rayos UV dañan el ADN dentro de las células de la piel. Los cánceres de piel pueden comenzar cuando este daño afecta el ADN de los genes que controlan el crecimiento de las células de la piel.
          </Text>
          <Text style={styles.textContainerText}>
            Tienen más riesgo de padecer la enfermedad: personas de ojos claros, piel blanca y cabello rubio o rojizo, aquellos con antecedentes de frecuentes quemaduras solares en la infancia y/o adolescencia, antecedentes familiares de melanoma u otros cánceres de piel, personas con un sistema inmunitario debilitado o personas de mayor edad
          </Text>
          <Text style={styles.textContainerTitles}>
            Signos y síntomas del cáncer de piel tipo melanoma
          </Text>
          <Text style={styles.textContainerText}>
            Cualquier lunar, llaga, protuberancia, imperfección, marca o cambio inusual en el aspecto o la sensación de un área de la piel podría ser una señal de melanoma u otro tipo de cáncer de piel o una advertencia de que puede producirse. 
          </Text>
          <Text style={styles.textContainerText}>
            La señal más importante para el melanoma es algún lunar nuevo en la piel o uno existente que haya cambiado en tamaño, forma o color.
          </Text>
          <Text style={styles.textContainerText}>
            Muchos médicos recomiendan a sus pacientes que se examinen la piel, preferiblemente una vez al mes. Lo mejor es hacer el autoexamen de la piel en una habitación donde haya mucha luz y frente a un espejo de cuerpo entero.
          </Text>
          <Text style={styles.textContainerText}>
            La regla ABCDE es un método para identificar las señales habituales del melanoma. Permanezca alerta y notifique a su médico si observa lunares que tengan cualquiera de las siguientes características:
          </Text>
          <Text style={styles.textContainerText}>
            <Text style={{fontWeight:'bold'}}>A de Asimetría:</Text> la mitad del lunar o marca de nacimiento no corresponde a la otra mitad.
          </Text>
          <Text style={styles.textContainerText}>
            <Text style={{fontWeight:'bold'}}>B de Borde:</Text> los bordes son irregulares, desiguales, dentados o poco definidos.
          </Text>
          <Text style={styles.textContainerText}>
            <Text style={{fontWeight:'bold'}}>C de Color:</Text> el color no es uniforme y pudiera incluir sombras diferentes de color marrón o negras, con manchas rosadas, rojas, azules o blancas.
          </Text>
          <Text style={styles.textContainerText}>
            <Text style={{fontWeight:'bold'}}>D de Diámetro:</Text> el lunar mide más de 6 milímetros de ancho (alrededor de ¼ de pulgada o aproximadamente del tamaño del borrador de un lápiz), aunque los melanomas algunas veces pueden ser más pequeños que esto.
          </Text>
          <Text style={styles.textContainerText}>
            <Text style={{fontWeight:'bold'}}>E de Evolución:</Text> : el tamaño, la forma o el color del lunar están cambiando.
          </Text>
          <Text style={styles.textContainerText}>
            Algunos melanomas no presentan estas características. Resulta importante que informe a su médico sobre cualquier cambio en su piel o nuevo lunar, o crecimientos que observe como algo distinto al resto de sus lunares.
          </Text>
          <Text style={styles.textContainerTitles}>
            Prevención del cáncer de piel de tipo melanoma
          </Text>
          <Text style={styles.textContainerText}>
            No existe una manera infalible de prevenir el melanoma. Algunos factores de riesgo, tales como su edad, la raza, y el antecedente familiar no se pueden controlar. Sin embargo, hay medidas que usted puede tomar que podrían reducir su riesgo de padecer melanoma y otros cánceres de piel.
          </Text>
          <Text style={styles.textContainerText}>
            Limite su exposición a los rayos ultravioleta (UV). La forma más importante de reducir el riesgo de melanoma es protegerse de la exposición a los rayos UV. Lleve a cabo las medidas de protección contra el sol al estar al aire libre.
          </Text>
          <Text style={styles.textContainerText}>
            Evite las camas bronceadoras y las lámparas de sol. Muchas personas creen que los rayos UV de las camas bronceadoras no son perjudiciales, pero esto no es cierto. Las lámparas bronceadoras emiten rayos UV que pueden causar daños a la piel a largo plazo, y contribuir al cáncer de piel.
          </Text>
          <Text style={styles.textContainerText}>
            Preste atención a lunares anormales. Examinar su piel regularmente puede ayudar a identificar cualquier lunar u otro crecimiento nuevo o anormal. Si usted encuentra un lunar nuevo, inusual, o nota un cambio en un lunar, esto debe ser examinado por un médico con experiencia en el reconocimiento de cánceres de piel.
          </Text>
          <Text style={styles.textContainerText}>
            Evite debilitar el sistema inmunitario. Algunas personas necesitan tomar medicamentos para suprimir sus sistemas inmunitarios. 
          </Text>
          <Text style={styles.textContainerTitles}>
            Referencias
          </Text>
          <Text style={styles.textContainerText}>
            Toda la información pertenece y ha sido obtenida de las siguientes referencias:
          </Text>
          <Text style={styles.textContainerHyperlinks} onPress={() => Linking.openURL('https://www.cancer.org/es/cancer/cancer-de-piel-tipo-melanoma.html')}>
            Cáncer de piel tipo melanoma. (s. f.). American Cancer Society. 
          </Text>
          <Text style={[styles.textContainerHyperlinks, {marginBottom: '10%'}]} onPress={() => Linking.openURL('https://www.cun.es/enfermedades-tratamientos/enfermedades/melanoma')}>
            Melanoma y Cáncer de Piel: información, síntomas, pronostico. CUN. (s. f.) Clínica Universidad de Navarra.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleImageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '5%'
  },
  title: {
    fontSize: 17,
    fontWeight:'bold',
    textAlign: 'center'
  },
  postMainImage: {
    height: 200,
    width: 320,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: '3%'
  },
  textContainer: {
    flex: 1,
    alignSelf: 'center',
    width: '90%',
  },
  textContainerTitles: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16
  },
  textContainerText: {
    textAlign: 'justify',
    fontSize: 13.5,
    width: '95%',
    marginVertical: '2%'
  },
  textContainerHyperlinks: {
    textAlign: 'justify',
    fontSize: 12,
    width: '95%',
    color: 'blue',
    marginBottom: '1%'
  },
})