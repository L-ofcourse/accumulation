import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.wrap}>
                <Text style={styles.font}>
                    this is test View
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    font: {
        fontSize: 30,
        color: 'red'
    }
})