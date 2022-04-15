import { StyleSheet, Text, StatusBar, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global-css';

const MSHeader = () => {
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity>
            <Image source={require("../../assets/imgs/side-bar.png")} style={[globalStyles.iconsImg, {marginLeft: 15}]}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require("../../assets/imgs/profile.png")} style={[globalStyles.iconsImg, {marginRight: 15}]}/>
        </TouchableOpacity>
    </View>
  )
}

export default MSHeader;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})