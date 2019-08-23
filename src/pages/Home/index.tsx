import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { inject, observer } from 'mobx-react'
import HomeStore from '../../stores/home'
import HocTest from './HocTest'

interface IProps {
    home: HomeStore
};
@inject('home')
@observer
@HocTest
class HomeScreen extends React.Component<IProps> {
    render() {
        const { str } = this.props.home
        return (
            <View style={styles.wrap}>
                <Text style={styles.font}>
                    this is test View --- {str}
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

// export default inject('home')(HomeScreen)
export default HomeScreen