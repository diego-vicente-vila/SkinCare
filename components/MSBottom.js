import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global-css';

const ServiceCard = ({ item }) => {
    return (
        <TouchableOpacity style={styles.servicesCards}>
            <View style = {styles.cardsContainer}>
                <Image source={item.backgroundIcon} style={styles.iconsCards}/>
                <Text style={styles.cardInnerText}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const renderItem = ({ item }) => (<ServiceCard item={item}/>);

const MSBottom = () => {
    const servicesCards = [
        {
            title: 'Solicitar Cita',
            backgroundIcon: require('../assets/imgs/sc_icon.png'),
            key: '1'
        },      
        {
            title: 'Tus citas médicas',
            backgroundIcon: require('../assets/imgs/ei_calendar.png'),
            key: '2'
        },
        {
            title: 'Calendario',
            backgroundIcon: require('../assets/imgs/ei_calendar.png'),
            key: '3'
        },
        {
            title: 'Contacta con tu médico',
            backgroundIcon: require('../assets/imgs/d_icon.png'),
            key: '4'
        }
    ];
    return (
        <View style={styles.bottomContainer}>
            <Text style={globalStyles.containerHeaderText}>Servicios populares</Text>
            <View style={styles.servicesCardsContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={servicesCards}
                    scrollEnabled={false}
                    numColumns={2}
                    renderItem={renderItem}
                    columnWrapperStyle = {{flexWrap: 'nowrap' ,justifyContent: 'space-around'}}
                />
            </View>
        </View>
    )
}

export default MSBottom;

const styles = StyleSheet.create({
    bottomContainer: {
        flex: 1,
        alignSelf: 'center',
        width: '95%',
    },
    servicesCardsContainer: {
        width: '100%'
    },
    servicesCards: {
        backgroundColor: '#2196F3',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
        width: '45%',
        height: 120,
        marginTop: 15,
    },
    cardsContainer: {
        height: '100%',
        width: '100%',
        marginTop: '12.5%',
        marginLeft: '20%'
    },
    iconsCards: {
        height: 40,
        width: 50,
        marginBottom: '3%'
    },
    cardInnerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowRadius: 5
    },
})