import { StyleSheet, Text, View, BackHandler } from 'react-native';
import React, { useState,useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import experienceData from './data/app-data/experienceData';

const CamaraScreen = ({ navigation }) => {
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
                    { name: 'Camara'}
                ],
            })
        );
    }
    return (
        <View>
            <Text>CamaraScreen</Text>
        </View>
    )
}

export default CamaraScreen;

const styles = StyleSheet.create({})