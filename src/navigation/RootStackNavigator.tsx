import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../pages/Home'

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
})


export default createAppContainer(AppNavigator)