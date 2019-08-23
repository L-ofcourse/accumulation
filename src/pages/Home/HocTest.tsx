import React from 'react'
import { View, Text } from 'react-native';

const HocTest = (Target: any): any => {
    return class extends React.Component {
        render() {
            return (
                <View>
                    <Text>is HOC</Text>
                    <Target {...this.props}/>
                </View>
            )
        }
    }
}

export default HocTest